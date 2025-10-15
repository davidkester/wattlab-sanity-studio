import { defineType, defineField } from "sanity";

export const newsSection = defineType({
    name: "newsSection",
    title: "Page News Section",
    type: "object",
    fields: [
        defineField({ name: "title", type: "string", initialValue: "Latest news" }),
        defineField({ name: "bgColor", type: "string", initialValue: "bg-white" }),
        defineField({ name: "limit", type: "number", initialValue: 3, validation: r => r.min(1).max(12) }),
    ],
    preview: { select: { title: "title" }, prepare: ({ title }) => ({ title: title || "Page Section" }) }
});