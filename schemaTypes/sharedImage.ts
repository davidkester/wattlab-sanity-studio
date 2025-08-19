import {defineField, defineType} from 'sanity'


export const sharedImage = defineType({
  name: 'sharedImage',
  type: 'document',
  title: 'Shared Image',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Image Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    defineField({
      name: 'captionType',
      title: 'Caption & Alternative text',
      type: 'internationalizedArrayCaptionType',
    })
  ],
})
