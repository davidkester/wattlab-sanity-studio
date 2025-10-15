import { defineType, defineField } from "sanity";

export const stepsTimelineSection = defineType({
    name: "stepsTimelineSection",
    title: "Steps Timeline",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            type: "string",
            title: "Heading",
            description: "Use \\n for a new line and ~word~ to highlight.",
        }),
        defineField({
            name: "steps",
            type: "array",
            title: "Steps (left to right)",
            of: [
                defineField({
                    name: "step",
                    type: "object",
                    title: "Step",
                    fields: [
                        defineField({
                            name: "iconName",
                            type: "string",
                            title: "Icon name (Lucide)",
                            description:
                                "E.g. 'Ship', 'BarChart3', 'PlugZap', or aliases like 'bar-chart', 'analytics'.",
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
                    preview: {
                        select: { title: "title", subtitle: "iconName" },
                        prepare: ({ title, subtitle }) => ({
                            title: title || "Untitled step",
                            subtitle: subtitle ? `Icon: ${subtitle}` : "No icon",
                        }),
                    },
                }),
            ],
            validation: (Rule) => Rule.min(1),
        }),
        defineField({
            name: "activeIndex",
            type: "number",
            title: "Active index",
            description: "Zero-based index of the highlighted step. Leave empty for default (1).",
        }),
        defineField({
            name: "accentLast",
            type: "boolean",
            title: "Accent last step",
            description: "If true, the last step uses the accent color.",
            initialValue: true,
        }),
    ],
    preview: {
        select: { title: "heading" },
        prepare({ title }) {
            return { title: title || "Steps Timeline" };
        },
    },
});
