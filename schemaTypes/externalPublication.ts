import { defineType, defineField } from 'sanity'

export const externalPublication = defineType({
  name: 'externalPublication',
  title: 'External Publication',
  type: 'document',
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the external article or publication',
    }),
    defineField({
      name: 'source',
      title: 'Source / Publisher',
      type: 'string',
      description: 'E.g., Website name or publication (e.g., "Wired", "NOS", etc.)',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Link to the external article',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'visible',
      title: 'Visible on Website',
      type: 'boolean',
      initialValue: true, // Default to visible
      description: 'Toggle to show or hide this document on the site',
    }),
    defineField({
      name: 'sharedImages',
      title: 'Related Images',
      type: 'array',
      of: [
        defineField({
          type: 'reference',
          to: [{ type: 'sharedImage' }],
        }),
      ],
    }),
  ],
})
