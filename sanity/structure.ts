import { BlockquoteIcon } from "@sanity/icons/Blockquote";
import { CaseIcon } from "@sanity/icons/Case";
import { CheckmarkCircleIcon } from "@sanity/icons/CheckmarkCircle";
import { CogIcon } from "@sanity/icons/Cog";
import { CommentIcon } from "@sanity/icons/Comment";
import { EnvelopeIcon } from "@sanity/icons/Envelope";
import { HomeIcon } from "@sanity/icons/Home";
import { InboxIcon } from "@sanity/icons/Inbox";
import { InfoOutlineIcon } from "@sanity/icons/InfoOutline";
import { MenuIcon } from "@sanity/icons/Menu";
import { UsersIcon } from "@sanity/icons/Users";
import type { ComponentType } from "react";
import type { StructureBuilder, StructureResolver } from "sanity/structure";
import { SERVICE_CATEGORIES } from "./schemas/shared/serviceCategories";

export const singletonTypes = ["homepage", "aboutPage", "navigation", "formSettings"];

export const systemCreatedTypes = ["formSubmission"];

export const FORM_SETTINGS_DOCUMENT_ID = "settings.formSettings";

const structuredTypes = new Set([...singletonTypes, ...systemCreatedTypes, "service", "testimonial", "teamMember"]);

const newestSubmissionsFirst = [{ field: "submittedAt", direction: "desc" as const }];

const byOrderThenTitle = [
  { field: "order", direction: "asc" as const },
  { field: "title", direction: "asc" as const },
];

const singletonItem = (
  S: StructureBuilder,
  type: string,
  title: string,
  icon: ComponentType,
  documentId = type,
) =>
  S.listItem()
    .id(type)
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(type).documentId(documentId).title(title));

const submissionsByStatus = (S: StructureBuilder, title: string, icon: ComponentType, status?: string) =>
  S.listItem()
    .id(`submissions-${status ?? "all"}`)
    .title(title)
    .icon(icon)
    .child(
      S.documentList()
        .title(title)
        .schemaType("formSubmission")
        .filter(status ? '_type == "formSubmission" && status == $status' : '_type == "formSubmission"')
        .params(status ? { status } : {})
        .defaultOrdering(newestSubmissionsFirst),
    );

const formSubmissionsItem = (S: StructureBuilder) =>
  S.listItem()
    .id("formSubmissions")
    .title("Leads & Form Submissions")
    .icon(InboxIcon)
    .child(
      S.list()
        .title("Leads & Form Submissions")
        .items([
          submissionsByStatus(S, "New leads", EnvelopeIcon, "new"),
          submissionsByStatus(S, "Contacted", CommentIcon, "contacted"),
          submissionsByStatus(S, "Closed", CheckmarkCircleIcon, "closed"),
          S.divider(),
          submissionsByStatus(S, "All submissions", InboxIcon),
          S.divider(),
          singletonItem(S, "formSettings", "Email Notification Settings", CogIcon, FORM_SETTINGS_DOCUMENT_ID),
        ]),
    );

const servicePagesItem = (S: StructureBuilder) =>
  S.listItem()
    .id("servicePages")
    .title("Service Pages")
    .icon(CaseIcon)
    .child(
      S.list()
        .title("Service Pages")
        .items([
          S.documentTypeListItem("service").title("All service pages"),
          S.divider(),
          ...SERVICE_CATEGORIES.map((category) =>
            S.listItem()
              .id(`service-${category.value}`)
              .title(category.title)
              .icon(CaseIcon)
              .child(
                S.documentTypeList("service")
                  .title(category.title)
                  .filter('_type == "service" && category == $category')
                  .params({ category: category.value })
                  .defaultOrdering(byOrderThenTitle)
                  .initialValueTemplates([
                    S.initialValueTemplateItem("service-by-category", { category: category.value }),
                  ]),
              ),
          ),
        ]),
    );

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Licorne Website")
    .items([
      formSubmissionsItem(S),
      S.divider(),
      singletonItem(S, "homepage", "Homepage", HomeIcon),
      singletonItem(S, "aboutPage", "About Page", InfoOutlineIcon),
      servicePagesItem(S),
      S.divider(),
      S.documentTypeListItem("testimonial").title("Testimonials").icon(BlockquoteIcon),
      S.documentTypeListItem("teamMember").title("Team Members").icon(UsersIcon),
      S.divider(),
      singletonItem(S, "navigation", "Navigation & Menus", MenuIcon),
      ...S.documentTypeListItems().filter((listItem) => !structuredTypes.has(listItem.getId() ?? "")),
    ]);
