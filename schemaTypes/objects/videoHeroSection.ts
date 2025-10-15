import { defineType, defineField } from "sanity";

export const videoHeroSection = defineType({
    name: "videoHeroSection",
    title: "Video Hero",
    type: "object",
    fields: [
        // ---- Video files you UPLOAD in Studio ----
        defineField({
            name: "mp4Src",
            title: "MP4 video",
            type: "file",
            options: { accept: "video/mp4" },
            description: "Main source. Best compatibility (Safari, iOS, Android, Chrome, Firefox).",
        }),
        defineField({
            name: "webmSrc",
            title: "WebM video (optional)",
            type: "file",
            options: { accept: "video/webm" },
            description: "Smaller file, great in Chrome/Firefox. Not supported by Safari.",
        }),

        // ---- Poster image you UPLOAD in Studio ----
        defineField({
            name: "poster",
            title: "Poster image",
            type: "image",
            options: { hotspot: true },
        }),

        // ---- Overlay content / options ----
        defineField({ name: "showOverlay", type: "boolean", title: "Show overlay?", initialValue: true }),
        defineField({ name: "label", type: "string", title: "Label" }),
        defineField({ name: "heading", type: "string", title: "Heading" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA label" }),
        defineField({ name: "ctaHref", type: "string", title: "CTA href" }),

        // ---- Visual tweaks ----
        defineField({ name: "heightClass", type: "string", initialValue: "h-[800px]" }),
        defineField({ name: "roundedClass", type: "string", initialValue: "rounded-3xl" }),
        defineField({ name: "addGradient", type: "boolean", initialValue: true }),
        defineField({ name: "bgColor", type: "string", initialValue: "bg-white" }),

        // Optional anchor id (nice for #links)
        defineField({ name: "anchorId", type: "string", title: "Anchor id (optional)" }),
    ],
    preview: {
        select: { title: "heading", media: "poster" },
        prepare({ title, media }) {
            return { title: title || "Video Hero", media };
        },
    },
});
