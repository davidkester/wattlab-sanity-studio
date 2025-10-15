import { defineType, defineField } from "sanity";


export const pageType = defineType({
    name: "page",
    type: "document",
    title: "Page",
    fields: [
        defineField({ name: "title", type: "string", validation: r => r.required() }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: r => r.required(),
        }),
        defineField({
            name: "sections",
            type: "array",
            of: [
                { type: "heroSection" },
                { type: "splitHeroSection" },
                { type: "vacancySection" },
                { type: "vacanciesListSection" },
                { type: "cardsSection" },
                { type: "faqSection"},
                { type: "newsSection" },
                { type: "videoHeroSection" },
                { type: "resultsBlockSection"},
                { type: "stepsTimelineSection"},
                { type: "regulationImpactBlockSection"}
            ]
        }),
    ],
});
