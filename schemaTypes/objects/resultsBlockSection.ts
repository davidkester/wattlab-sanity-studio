import { defineType, defineField } from "sanity";

export default defineType({
    name: "resultsBlockSection",
    title: "Results Block",
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
        }),
        defineField({
            name: "description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Illustration",
            options: { hotspot: true },
        }),
        defineField({
            name: "stats",
            type: "array",
            title: "Stats",
            of: [
                defineField({
                    name: "stat",
                    type: "object",
                    title: "Stat",
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
                            },
                        }),
                        defineField({ name: "value", type: "string", title: "Value" }),
                        defineField({ name: "title", type: "string", title: "Title" }),
                        defineField({ name: "blurb", type: "text", rows: 3, title: "Blurb" }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: { title: "heading", media: "image" },
        prepare({ title, media }) {
            return { title: title || "Results Block", media };
        },
    },
});
