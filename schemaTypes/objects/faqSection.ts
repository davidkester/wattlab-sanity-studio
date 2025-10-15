import { defineType, defineField } from "sanity";

export const faqSection = defineType({
    name: "faqSection",
    title: "FAQ Section",
    type: "object",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            initialValue: "Frequently Asked Questions",
        }),
        defineField({
            name: "subtitle",
            type: "string",
            title: "Subtitle",
        }),
        defineField({
            name: "categories",
            type: "array",
            title: "Categories",
            of: [
                defineField({
                    name: "faqCategory",
                    type: "object",
                    title: "FAQ Category",
                    fields: [
                        defineField({
                            name: "heading",
                            type: "string",
                            title: "Category Heading",
                            description: "Write words like ~example~ to highlight text in primaryColor",
                            validation: (r) => r.required(),
                        }),
                        defineField({
                            name: "items",
                            type: "array",
                            title: "Questions",
                            of: [
                                defineField({
                                    name: "faqItem",
                                    type: "object",
                                    title: "FAQ Item",
                                    fields: [
                                        defineField({
                                            name: "question",
                                            type: "string",
                                            title: "Question",
                                            validation: (r) => r.required(),
                                        }),
                                        defineField({
                                            name: "answer",
                                            type: "text",
                                            title: "Answer",
                                            rows: 4,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "bgColor",
            type: "string",
            title: "Background color class",
            initialValue: "bg-white",
        }),
    ],
});
