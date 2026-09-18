import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId, studioBasePath } from "../env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: { studioUrl: studioBasePath },
})
