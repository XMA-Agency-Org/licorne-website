import type { StructureBuilder, StructureResolver } from "sanity/structure"

export const singletonTypes = ["homepage", "aboutPage", "navigation", "formSettings"]

export const systemCreatedTypes = ["formSubmission"]

export const FORM_SETTINGS_DOCUMENT_ID = "settings.formSettings"

const singletonItems = [
  { type: "homepage", title: "Homepage" },
  { type: "aboutPage", title: "About Page" },
  { type: "navigation", title: "Navigation & Menus" },
]

const documentTypeItems = [
  { type: "service", title: "Service Pages" },
  { type: "testimonial", title: "Testimonials" },
  { type: "teamMember", title: "Team Members" },
]

const newestSubmissionsFirst = [{ field: "submittedAt", direction: "desc" as const }]

const singletonItem = (S: StructureBuilder, type: string, title: string, documentId = type) =>
  S.listItem()
    .title(title)
    .child(S.document().schemaType(type).documentId(documentId))

const formSubmissionsItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Form Submissions")
    .child(
      S.list()
        .title("Form Submissions")
        .items([
          S.listItem()
            .title("New leads")
            .child(
              S.documentList()
                .title("New leads")
                .schemaType("formSubmission")
                .filter('_type == "formSubmission" && status == "new"')
                .defaultOrdering(newestSubmissionsFirst)
            ),
          S.listItem()
            .title("All submissions")
            .child(
              S.documentList()
                .title("All submissions")
                .schemaType("formSubmission")
                .filter('_type == "formSubmission"')
                .defaultOrdering(newestSubmissionsFirst)
            ),
          S.divider(),
          singletonItem(S, "formSettings", "Form Settings", FORM_SETTINGS_DOCUMENT_ID),
        ])
    )

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      formSubmissionsItem(S),
      S.divider(),
      ...singletonItems.map((item) => singletonItem(S, item.type, item.title)),
      S.divider(),
      ...documentTypeItems.map((item) =>
        S.documentTypeListItem(item.type).title(item.title)
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !singletonTypes.includes(listItem.getId() as string) &&
          !systemCreatedTypes.includes(listItem.getId() as string) &&
          !documentTypeItems.some((doc) => doc.type === listItem.getId())
      ),
    ])
