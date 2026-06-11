import type { StructureResolver } from "sanity/structure"

const singletonTypes = ["homepage", "aboutPage", "contactPage", "howItWorksPage", "siteSettings", "navigation"]

const singletonItems = [
  { type: "homepage", title: "Homepage" },
  { type: "aboutPage", title: "About Page" },
  { type: "contactPage", title: "Contact Page" },
  { type: "howItWorksPage", title: "How It Works" },
  { type: "siteSettings", title: "Site Settings" },
  { type: "navigation", title: "Navigation" },
]

const documentTypeItems = [
  { type: "service", title: "Services" },
  { type: "testimonial", title: "Testimonials" },
  { type: "teamMember", title: "Team Members" },
  { type: "faqCategory", title: "FAQ Categories" },
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...singletonItems.map((item) =>
        S.listItem()
          .title(item.title)
          .child(
            S.document()
              .schemaType(item.type)
              .documentId(item.type)
          )
      ),
      S.divider(),
      ...documentTypeItems.map((item) =>
        S.documentTypeListItem(item.type).title(item.title)
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !singletonTypes.includes(listItem.getId() as string) &&
          !documentTypeItems.some((doc) => doc.type === listItem.getId())
      ),
    ])
