import { defineType, defineField } from "sanity";

export default defineType({
    name: "heroSection",
    type: "object",
    title: "Hero Section",
    fields: [
        defineField({
            name: "title",
            type: "string",
            description: "Add a short and catchy title.",
            validation: r => r.required() }),
        defineField({
            name: "subtitle",
            type: "text",
            description: "Add a short supporting subtitle",
        }),
        defineField({
            name: "primaryCtaLabel",
            type: "string",
            description: "Add a text for the button.",
        }),
        defineField({
            name: "primaryCtaHref",
            type: "string",
            description: "Choose a page such as 'deep-sea' or section such as 'projects#ContactForm'",
        }),
        defineField({
            name: "backgroundImage",
            type: "image",
            description: "Add a supporting image",
            options: { hotspot: true } }),
    ],
});
