export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Website Logo',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'heroImage',
      title: 'Hero Section Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'aboutImage',
      title: 'About Section Image',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
