"use client"

import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { apiVersion, dataset, projectId, studioBasePath } from "./sanity/env"
import { schemaTypes } from "./sanity/schemas"
import { structure } from "./sanity/structure"

export default defineConfig({
  name: "licorne",
  title: "Licorne CMS",
  basePath: studioBasePath,
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
})
