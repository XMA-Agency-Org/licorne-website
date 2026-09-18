import type { StructureResolver } from "sanity/structure"

const singletonTypes = ["homepage", "aboutPage", "navigation"]

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
