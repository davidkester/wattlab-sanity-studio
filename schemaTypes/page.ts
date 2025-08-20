import { defineType, defineField } from "sanity";
import videoHeroSection from "./objects/videoHeroSection";

export default defineType({
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
                { type: "resultsBlockSection"}
            ],
            // optional rule to limit heroes:
            // validation: r => r.custom(arr => (arr?.filter(s=>s._type==="heroSection").length ?? 0) <= 1 || "Max 1 hero per page"),
        }),
    ],
});
