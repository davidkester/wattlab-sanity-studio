import { defineType, defineField } from "sanity";

export const regulationImpactBlockSection = defineType({
    name: "regulationImpactBlockSection",
    title: "Regulation Impact Block",
    type: "object",
    fields: [
        defineField({
            name: "label",
            type: "string",
            title: "Label",
        }),
        defineField({
            name: "heading",
            type: "string",
            title: "Heading",
            description: "Use \\n for a new line and ~word~ to highlight (primary color).",
        }),
        defineField({
            name: "items",
            type: "array",
            title: "Items",
            of: [
                defineField({
                    name: "item",
                    type: "object",
                    title: "Item",
                    fields: [
                        defineField({
                            name: "trend",
                            type: "string",
                            title: "Trend",
                            options: {
                                list: [
                                    { title: "Up", value: "up" },
                                    { title: "Down", value: "down" },
                                ],
                                layout: "radio",
                                direction: "horizontal",
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "title",
                            type: "string",
                            title: "Title",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "blurb",
                            type: "text",
                            rows: 3,
                            title: "Blurb",
                            description: "Supports \\n and ~highlight~.",
                        }),
                    ],
                }),
            ],
            validation: (Rule) => Rule.min(1),
        }),
    ],
    preview: {
        select: { title: "heading" },
        prepare({ title }) {
            return { title: title ? `Regulation Impact: ${title}` : "Regulation Impact Block" };
        },
    },
});
