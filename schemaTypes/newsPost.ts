// sanity/schematypes/newsPost.ts
import { defineType, defineField } from "sanity";

export default defineType({
    name: "newsPost",
    title: "Page Post",
    type: "document",
    fields: [
        defineField({ name: "title", type: "string", validation: r => r.required() }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: r => r.required(),
        }),
        defineField({ name: "excerpt", type: "text", rows: 3 }),
        defineField({ name: "mainImage", type: "image", options: { hotspot: true } }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: r => r.required(),
        }),

        // 🔹 Rich, flexible article body
        defineField({
            name: "body",
            title: "Body",
            type: "array",
            of: [
                { type: "block" }, // text blocks

                // Image block with alt/caption
                {
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: "alt",
                            type: "string",
                            title: "Alt text",
                            description: "Describe the image for accessibility",
                        }),
                        defineField({
                            name: "caption",
                            type: "string",
                            title: "Caption",
                        }),
                        defineField({
                            name: "fullWidth",
                            type: "boolean",
                            title: "Full width",
                            description: "Stretch image to full article width",
                        }),
                    ],
                },

                // Custom full-width callout block
                defineField({
                    name: "callout",
                    type: "object",
                    title: "Callout",
                    fields: [
                        { name: "text", type: "text", rows: 3 },
                        { name: "backgroundColor", type: "string" },
                    ],
                }),

                // Side-by-side images
                defineField({
                    name: "imageGallery",
                    type: "object",
                    title: "Image Gallery",
                    fields: [
                        {
                            name: "images",
                            type: "array",
                            of: [{ type: "image", options: { hotspot: true } }],
                        },
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: { title: "title", media: "mainImage", subtitle: "publishedAt" },
    },
    orderings: [
        {
            title: "Published, New → Old",
            name: "publishedDesc",
            by: [{ field: "publishedAt", direction: "desc" }],
        },
    ],
});
