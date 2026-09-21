import { z } from "zod"

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.email("Please enter a valid email address").trim().max(200),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(40),
  service: z.string().trim().max(120).optional(),
  message: z.string().trim().max(3000).optional(),
  sourcePage: z.string().trim().max(200).optional(),
})

export type Lead = z.infer<typeof leadSchema>

export type LeadFieldName = keyof Lead

export type LeadFormState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error"
      message: string
      fieldErrors?: Partial<Record<LeadFieldName, string>>
      submittedValues?: Partial<Record<LeadFieldName, string>>
    }

export const initialLeadFormState: LeadFormState = { status: "idle" }

export const HONEYPOT_FIELD_NAME = "company_website"
