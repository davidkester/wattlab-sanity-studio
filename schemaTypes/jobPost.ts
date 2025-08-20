import { defineType, defineField } from "sanity";

export default defineType({
    name: "jobPost",          // <-- MUST match the reference name
    title: "Page",
    type: "document",
    fields: [
        defineField({ name: "title", type: "string", validation: r => r.required() }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: r => r.required(),
        }),
        defineField({ name: "department", type: "string" }),
        defineField({ name: "location", type: "string" }),
        defineField({
            name: "employmentType",
            type: "string",
            options: { list: ["Full-time","Part-time","Internship","Contract","Temporary","Freelance"] },
        }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        defineField({
            name: "body",
            type: "array",
            of: [{ type: "block" }, { type: "image", fields: [{ name: "alt", type: "string" }] }],
        }),
        defineField({ name: "responsibilities", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "requirements", type: "array", of: [{ type: "string" }] }),
        defineField({
            name: "salary",
            type: "object",
            fields: [
                { name: "currency", type: "string", initialValue: "EUR" },
                { name: "min", type: "number" },
                { name: "max", type: "number" },
            ],
        }),
        defineField({ name: "applyUrl", type: "url" }),
        defineField({ name: "applyEmail", type: "string" }),
        defineField({ name: "contactName", type: "string" }),
        defineField({ name: "mainImage", type: "image", options: { hotspot: true } }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: r => r.required(),
        }),
        defineField({ name: "closingDate", type: "date" }),
    ],
});
