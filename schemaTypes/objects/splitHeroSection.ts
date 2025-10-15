import { defineType, defineField } from "sanity";

export const splitHeroSection = defineType({
    name: "splitHeroSection",
    title: "Split Hero Section",
    type: "object",
    fields: [
        defineField({
            name: "label",
            type: "string",
            title: "Label",
            description: "Small label above the heading (e.g., 'Solar Energy')",
        }),
        defineField({
            name: "heading",
            type: "string",
            title: "Heading",
            description: "Use ~word~ to highlight; \\n for line break.",
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
            rows: 4,
        }),
        defineField({
            name: "showCta",
            type: "boolean",
            title: "Show Call-to-Action Button?",
            initialValue: true,
        }),
        defineField({
            name: "ctaLabel",
            type: "string",
            title: "CTA Label",
            hidden: ({ parent }) => !parent?.showCta,
        }),
        defineField({
            name: "ctaHref",
            type: "string",
            title: "CTA Link",
            hidden: ({ parent }) => !parent?.showCta,
        }),

        defineField({
            name: "sharedImage",
            title: "Image (Shared)",
            type: "reference",
            to: [{ type: "sharedImage" }],
            validation: (r) => r.required(),
            description: "Select an image from the Shared Image library.",
        }),

        defineField({
            name: "imageHeight",
            type: "number",
            title: "Image Height (px)",
            description: "Leave empty to use the default (520px).",
        }),


        defineField({
            name: "disableShadow",
            type: "boolean",
            title: "Disable Image Shadow?",
            description: "Turn off the drop shadow on the image",
            initialValue: false,
        }),

        defineField({
            name: "reverse",
            type: "boolean",
            title: "Reverse Layout?",
            description: "Image on left, text on right",
            initialValue: false,
        }),
        defineField({
            name: "bgColor",
            type: "string",
            title: "Background Color Class",
            description: "Tailwind class like 'bg-white' or 'bg-gray-50'",
            initialValue: "bg-white",
        }),
    ],
    preview: {
        select: { title: "heading", media: "sharedImage.image" },
        prepare({ title, media }) {
            return { title: title || "Split Hero Section", media };
        },
    },
});
