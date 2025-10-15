import { defineType, defineField } from "sanity";

export const vacanciesListSection = defineType({
    name: "vacanciesListSection",
    title: "Vacancies List",
    type: "object",
    fields: [
        defineField({ name: "title", type: "string", initialValue: "Ready to join our team?" }),
        defineField({ name: "subtitle", type: "string", initialValue: "Open positions" }),
        defineField({ name: "perPage", type: "number", initialValue: 5, validation: r => r.min(1).max(20) }),
        defineField({
            name: "bgColor",
            title: "Background color class",
            type: "string",
            description: "Tailwind class for the section background (e.g. bg-white, bg-black)",
            initialValue: "bg-white",
        }),
    ],
});
