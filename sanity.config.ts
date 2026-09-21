"use client"

import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { apiVersion, dataset, projectId, studioBasePath } from "./sanity/env"
import { schemaTypes } from "./sanity/schemas"
import { singletonTypes, structure, systemCreatedTypes } from "./sanity/structure"

const typesWithoutCreateButton = new Set([...singletonTypes, ...systemCreatedTypes])

export default defineConfig({
  name: "licorne",
  title: "Licorne CMS",
  basePath: studioBasePath,
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter((template) => !typesWithoutCreateButton.has(template.schemaType)),
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
})
