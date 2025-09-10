import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import siteSettings from './schemas/siteSettings'

export default defineConfig({
  name: 'default',
  title: 'TH Website CMS',

  // 👇 Apna projectId yahan daalo (ya .env file se read karo)
  projectId: process.env.SANITY_PROJECT_ID || 'your_project_id',
  dataset: process.env.SANITY_DATASET || 'production',

  plugins: [deskTool()],

  schema: {
    types: [siteSettings],
  },
})
