import { defineType, defineField } from "sanity";

export default defineType({
    name: "cardsSection",
    title: "Cards Section",
    type: "object",
    fields: [
        defineField({ name: "label", type: "string", title: "Label" }),
        defineField({ name: "heading", type: "string", title: "Heading" }),
        defineField({
            name: "cards",
            title: "Cards",
            type: "array",
            of: [
                defineField({
                    name: "card",
                    type: "object",
                    fields: [
                        defineField({
                            name: "iconName",
                            type: "string",
                            title: "Icon name",
                            description: "Must match an icon name in your frontend (e.g., 'wrench', 'circuit-board')."
                        }),
                        defineField({ name: "title", type: "string", title: "Card title" }),
                        defineField({ name: "description", type: "text", title: "Card description" }),
                    ],
                }),
            ],
        }),
        defineField({ name: "buttonText", type: "string", title: "Button text" }),
        defineField({ name: "buttonHref", type: "string", title: "Button link" }),
    ],
});
