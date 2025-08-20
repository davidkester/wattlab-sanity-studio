import { defineType, defineField } from "sanity";

export default defineType({
    name: "splitHeroSection",
    title: "Split Hero Section",
    type: "object",
    fields: [
        defineField({
            name: "label",
            type: "string",
            title: "Label",
            description: "Small label shown above the heading (e.g., 'Solar Energy')",
        }),
        defineField({
            name: "heading",
            type: "string",
            title: "Heading",
            description: "Highlight a word with the primary color by writing it like: ~example~",
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
            name: "image",
            type: "image",
            title: "Image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alt Text",
                    description: "For screen readers & SEO",
                },
            ],
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
        select: { title: "heading", media: "image" },
        prepare({ title, media }) {
            return {
                title: title || "Split Hero Section",
                media,
            };
        },
    },
});
