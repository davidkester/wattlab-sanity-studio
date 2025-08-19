// ./schemas/seoType.ts

import {defineField} from 'sanity'

export const captionType = defineField({
  name: 'captionType',
  title: 'Caption HELLO!',
  type: 'object',
  fields: [
    defineField({name: 'caption', type: 'string', title: 'Caption'}),
    defineField({
      name: 'altText', 
      type: 'string', 
      title: 'Alternative text',
      description: 'Describe what’s in the image for screen readers & SEO.',
      validation: (Rule) => Rule.required().min(5),
    }),
  ]
})