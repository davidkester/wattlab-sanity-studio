import {defineField, defineType} from 'sanity'

export const pressReleaseType = defineType({
  name: 'press-release',
  title: 'Press Release',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        documentInternationalization: { exclude: true },
      },
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        documentInternationalization: { exclude: true },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'visible',
      title: 'Visible on Website',
      type: 'boolean',
      initialValue: true, // Default to visible
      description: 'Toggle to show or hide this document on the site',
    }),
    defineField({
      name: 'intro',
      type: 'text',
      options: {
        documentInternationalization: { exclude: true },
      },
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      options: {
        documentInternationalization: { exclude: true },
      },
    }),
    defineField({
      name: 'files',
      type: 'array',
      of: [{type: 'file'}],
      options: {
        documentInternationalization: { exclude: true },
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'reference',
      to: [{ type: 'sharedImage' }],
    }),
    defineField({
      name: 'sharedImages',
      title: 'Shared Images',
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