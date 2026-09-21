"use client"

import { useActionState } from "react"
import { usePathname } from "next/navigation"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { cva } from "class-variance-authority"
import { Button } from "@/components/ui/button"
import { FieldError, Input, Label, Select, Textarea } from "@/components/ui/form-field"
import { submitLead } from "@/lib/leads/submitLead"
import {
  HONEYPOT_FIELD_NAME,
  initialLeadFormState,
  type LeadFieldName,
} from "@/lib/leads/leadSchema"
import { useSiteNavigation } from "@/components/layout/NavigationProvider"
import { leadServiceOptions } from "./leadServiceOptions"

type LeadFormLayout = "compact" | "contact"

const formLayoutVariants = cva("", {
  variants: {
    layout: {
      compact: "space-y-5",
      contact: "space-y-6",
    },
  },
})

const nameAndPhoneRowVariants = cva("", {
  variants: {
    layout: {
      compact: "grid gap-5 sm:grid-cols-2",
      contact: "space-y-6",
    },
  },
})

const messageRowsByLayout: Record<LeadFormLayout, number> = { compact: 3, contact: 5 }

type LeadFormProps = {
  submitLabel: string
  layout?: LeadFormLayout
}

function LeadFormSuccess() {
  return (
    <div role="status" className="flex flex-col items-center gap-4 py-12 text-center">
      <CheckCircle2 className="h-12 w-12 text-primary" />
      <h4 className="text-2xl text-secondary">Thank you, we&apos;ve got your message</h4>
      <p className="max-w-sm text-text-secondary">
        One of our advisors will get back to you within one business day.
      </p>
    </div>
  )
}

function HoneypotField() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0">
      <label>
        Leave this field empty
        <input type="text" name={HONEYPOT_FIELD_NAME} tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  )
}

export function LeadForm({ submitLabel, layout = "compact" }: LeadFormProps) {
  const pathname = usePathname()
  const serviceOptions = leadServiceOptions(useSiteNavigation())
  const [state, formAction, isPending] = useActionState(submitLead, initialLeadFormState)

  if (state.status === "success") return <LeadFormSuccess />

  const fieldErrors = state.status === "error" ? (state.fieldErrors ?? {}) : {}
  const submittedValues = state.status === "error" ? (state.submittedValues ?? {}) : {}
  const errorFor = (field: LeadFieldName) => fieldErrors[field]
  const fieldId = (field: LeadFieldName) => `lead-${layout}-${field}`

  return (
    <form action={formAction} className={formLayoutVariants({ layout })} noValidate>
      <input type="hidden" name="sourcePage" value={pathname} />
      <HoneypotField />

      <div className={nameAndPhoneRowVariants({ layout })}>
        <div>
          <Label htmlFor={fieldId("name")}>Full name</Label>
          <Input
            id={fieldId("name")}
            name="name"
            defaultValue={submittedValues.name}
            autoComplete="name"
            placeholder="Your full name"
            required
            invalid={Boolean(errorFor("name"))}
          />
          <FieldError message={errorFor("name")} />
        </div>
        <div>
          <Label htmlFor={fieldId("phone")}>Phone number</Label>
          <Input
            id={fieldId("phone")}
            type="tel"
            name="phone"
            defaultValue={submittedValues.phone}
            autoComplete="tel"
            placeholder="+971"
            required
            invalid={Boolean(errorFor("phone"))}
          />
          <FieldError message={errorFor("phone")} />
        </div>
      </div>

      <div>
        <Label htmlFor={fieldId("email")}>Email address</Label>
        <Input
          id={fieldId("email")}
          type="email"
          name="email"
          defaultValue={submittedValues.email}
          autoComplete="email"
          placeholder="you@company.com"
          required
          invalid={Boolean(errorFor("email"))}
        />
        <FieldError message={errorFor("email")} />
      </div>

      <div>
        <Label htmlFor={fieldId("service")}>Service of interest</Label>
        <Select id={fieldId("service")} name="service" defaultValue={submittedValues.service ?? serviceOptions[0]}>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor={fieldId("message")}>Message (optional)</Label>
        <Textarea
          id={fieldId("message")}
          name="message"
          defaultValue={submittedValues.message}
          rows={messageRowsByLayout[layout]}
          placeholder="Tell us about your business needs"
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-danger-text">
          {state.message}
        </p>
      )}

      <Button type="submit" width="full" disabled={isPending} className="group">
        {isPending ? "Sending…" : submitLabel}
        {!isPending && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
      </Button>
    </form>
  )
}
