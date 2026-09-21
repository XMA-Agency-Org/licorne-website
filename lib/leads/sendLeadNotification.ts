import "server-only"
import { Resend } from "resend"
import { writeClient } from "@/sanity/lib/writeClient"
import type { Lead } from "./leadSchema"
import {
  leadNotificationHtml,
  leadNotificationSubject,
  leadNotificationText,
} from "./leadNotificationEmail"
import { siteUrl } from "@/lib/siteUrl"
import { FORM_SETTINGS_DOCUMENT_ID } from "@/sanity/structure"

const DEFAULT_SENDER = "Licorne Website <onboarding@resend.dev>"

async function notificationRecipients() {
  const recipientsFromStudio = await writeClient.fetch<string[] | null>(
    `*[_id == $formSettingsId][0].notificationRecipients`,
    { formSettingsId: FORM_SETTINGS_DOCUMENT_ID }
  )
  if (recipientsFromStudio?.length) return recipientsFromStudio

  return (process.env.LEAD_NOTIFICATION_EMAIL ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean)
}

export async function sendLeadNotification(lead: Lead, submissionId: string) {
  const apiKey = process.env.RESEND_API_KEY
  const recipients = await notificationRecipients()
  if (!apiKey || !recipients.length) {
    console.warn("Lead notification skipped: RESEND_API_KEY or recipients missing")
    return false
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? DEFAULT_SENDER,
    to: recipients,
    replyTo: lead.email,
    subject: leadNotificationSubject(lead),
    text: leadNotificationText(lead),
    html: leadNotificationHtml(lead, siteUrl, submissionId),
  })

  if (error) {
    console.error("Lead notification failed", error)
    return false
  }
  return true
}
