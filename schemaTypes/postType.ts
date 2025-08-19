import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
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
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        documentInternationalization: { exclude: true },
      },
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        documentInternationalization: { exclude: true },
      },
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type of Post',
      type: 'string',
      initialValue: 'post',
      options: {
        list: [
          {title: "Blog Post", value: "post"},
          {title: "Press Release", value: "press-release"},
        ]
      },
      validation: (Rule) => Rule.required(),
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
      name: 'mainImage',
      title: 'Main Image',
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
    defineField({
      name: 'files',
      type: 'array',
      of: [{type: 'file'}],
      options: {
        documentInternationalization: { exclude: true },
      },
    })
  ],
})