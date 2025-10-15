import { defineType, defineField } from "sanity";

export const vacancySection = defineType({
    name: "vacancySection",
    title: "Page Section (single)",
    type: "object",
    fields: [
        defineField({
            name: "job",
            title: "Page",
            type: "reference",
            to: [{ type: "jobPost" }], // <-- must match the jobPost name above
            validation: r => r.required(),
        }),
        defineField({ name: "bgColor", type: "string", initialValue: "bg-white" }),
        defineField({ name: "showApply", type: "boolean", initialValue: true }),
        defineField({ name: "overrideTitle", type: "string" }),
    ],
});
