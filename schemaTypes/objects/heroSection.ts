import { defineType, defineField } from "sanity";

export const heroSection = defineType({
    name: "heroSection",
    type: "object",
    title: "Hero Section",
    fields: [
        defineField({
            name: "title",
            type: "string",
            description: "Use \\n to split into two lines",
            validation: (r) => r.required(),
        }),
        defineField({
            name: "subtitle",
            type: "text",
            description: "Add a short supporting subtitle",
        }),
        defineField({
            name: "primaryCtaLabel",
            type: "string",
            description: "Add text for the button.",
        }),
        defineField({
            name: "primaryCtaHref",
            type: "string",
            description: "Choose a page such as 'deep-sea' or section such as 'projects#ContactForm'",
        }),

        defineField({
            name: "backgroundShared",
            title: "Background (Shared Image)",
            type: "reference",
            to: [{ type: "sharedImage" }],
            validation: (r) => r.required(),
            description: "Select an image from the Shared Image library.",
        }),
    ],
});
