"use server"

import { randomUUID } from "node:crypto"
import { writeClient } from "@/sanity/lib/writeClient"
import { HONEYPOT_FIELD_NAME, leadSchema, type Lead, type LeadFieldName, type LeadFormState } from "./leadSchema"
import { sendLeadNotification } from "./sendLeadNotification"

const privateSubmissionId = () => `formSubmission.${randomUUID()}`

const textValue = (value: FormDataEntryValue | null) => (typeof value === "string" ? value : "")

const optionalText = (value: FormDataEntryValue | null) =>
  typeof value === "string" && value.trim() ? value : undefined

export async function submitLead(_previous: LeadFormState, formData: FormData): Promise<LeadFormState> {
  if (optionalText(formData.get(HONEYPOT_FIELD_NAME))) return { status: "success" }

  const submittedValues = {
    name: textValue(formData.get("name")),
    email: textValue(formData.get("email")),
    phone: textValue(formData.get("phone")),
    service: optionalText(formData.get("service")),
    message: optionalText(formData.get("message")),
    sourcePage: optionalText(formData.get("sourcePage")),
  }
  const parsed = leadSchema.safeParse(submittedValues)

  if (!parsed.success) {
    const fieldErrors: Partial<Record<LeadFieldName, string>> = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as LeadFieldName
      fieldErrors[field] ??= issue.message
    }
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
      submittedValues,
    }
  }

  const lead = parsed.data
  let submissionId: string
  try {
    const submission = await writeClient.create({
      _id: privateSubmissionId(),
      _type: "formSubmission",
      ...lead,
      status: "new",
      submittedAt: new Date().toISOString(),
      emailNotified: false,
    })
    submissionId = submission._id
  } catch (error) {
    console.error("Lead submission failed", error)
    return {
      status: "error",
      message: "Something went wrong sending your message. Please call or WhatsApp us instead.",
      submittedValues,
    }
  }

  await notifyTeamWithoutBlockingLead(lead, submissionId)
  return { status: "success" }
}

async function notifyTeamWithoutBlockingLead(lead: Lead, submissionId: string) {
  try {
    const emailNotified = await sendLeadNotification(lead, submissionId)
    if (emailNotified) await writeClient.patch(submissionId).set({ emailNotified }).commit()
  } catch (error) {
    console.error("Lead notification failed", error)
  }
}
