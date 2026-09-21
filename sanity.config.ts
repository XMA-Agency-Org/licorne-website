"use client"

import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { apiVersion, dataset, projectId, studioBasePath } from "./sanity/env"
import { schemaTypes } from "./sanity/schemas"
import { singletonTypes, structure, systemCreatedTypes } from "./sanity/structure"

const typesWithoutCreateButton = new Set([...singletonTypes, ...systemCreatedTypes])

const singletonTypeNames = new Set(singletonTypes)

const actionsAllowedOnSingletons = new Set(["publish", "discardChanges", "restore"])

const serviceByCategoryTemplate = {
  id: "service-by-category",
  title: "Service page in this category",
  schemaType: "service",
  parameters: [{ name: "category", type: "string" }],
  value: (parameters: { category: string }) => ({ category: parameters.category }),
}

export default defineConfig({
  name: "licorne",
  title: "Licorne CMS",
  basePath: studioBasePath,
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) => [
      ...templates.filter((template) => !typesWithoutCreateButton.has(template.schemaType)),
      serviceByCategoryTemplate,
    ],
  },
  document: {
    actions: (actions, { schemaType }) =>
      singletonTypeNames.has(schemaType)
        ? actions.filter(({ action }) => action && actionsAllowedOnSingletons.has(action))
        : actions,
    newDocumentOptions: (options, { creationContext }) =>
      creationContext.type === "global"
        ? options.filter((option) => option.templateId !== serviceByCategoryTemplate.id)
        : options,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
})
