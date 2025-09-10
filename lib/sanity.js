import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2025-01-01',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
