import type { Lead } from "./leadSchema"

const EMAIL_COLORS = {
  background: "#fafaf9",
  surface: "#ffffff",
  border: "#e7e5e4",
  text: "#1c1917",
  textMuted: "#78716c",
  accent: "#a8834f",
}

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")

const studioSubmissionUrl = (siteUrl: string, submissionId: string) =>
  `${siteUrl}/studio/structure/formSubmission;${submissionId}`

function leadRows(lead: Lead) {
  return [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Service", lead.service],
    ["Submitted from", lead.sourcePage],
    ["Message", lead.message],
  ].filter((row): row is [string, string] => Boolean(row[1]))
}

export function leadNotificationSubject(lead: Lead) {
  return `New enquiry: ${lead.name}${lead.service ? ` — ${lead.service}` : ""}`
}

export function leadNotificationText(lead: Lead) {
  return leadRows(lead)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n")
}

export function leadNotificationHtml(lead: Lead, siteUrl: string, submissionId: string) {
  const rows = leadRows(lead)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;color:${EMAIL_COLORS.textMuted};font-size:13px;vertical-align:top;white-space:nowrap">${label}</td>
          <td style="padding:10px 16px;color:${EMAIL_COLORS.text};font-size:15px;white-space:pre-wrap">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("")

  return `
    <div style="font-family:Inter,Arial,sans-serif;background:${EMAIL_COLORS.background};padding:32px">
      <table style="max-width:600px;margin:0 auto;background:${EMAIL_COLORS.surface};border:1px solid ${EMAIL_COLORS.border};border-collapse:collapse;width:100%">
        <tr><td colspan="2" style="padding:24px 16px;border-bottom:1px solid ${EMAIL_COLORS.border}">
          <div style="color:${EMAIL_COLORS.accent};font-size:12px;letter-spacing:.1em;text-transform:uppercase;font-weight:600">New website enquiry</div>
          <div style="color:${EMAIL_COLORS.text};font-size:22px;margin-top:6px">${escapeHtml(lead.name)}</div>
        </td></tr>
        ${rows}
        <tr><td colspan="2" style="padding:24px 16px;border-top:1px solid ${EMAIL_COLORS.border}">
          <a href="${studioSubmissionUrl(siteUrl, submissionId)}" style="color:${EMAIL_COLORS.accent};font-size:14px">Open in Form Submissions →</a>
        </td></tr>
      </table>
    </div>`
}
