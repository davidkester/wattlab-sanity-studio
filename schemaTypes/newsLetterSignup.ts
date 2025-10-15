// /sanity/schemas/newsletterSignup.ts
export default {
    name: "newsletterSignup",
    title: "Newsletter Signup",
    type: "document",
    fields: [
        { name: "email", title: "Email", type: "string", validation: (R: any) => R.required().email() },
        { name: "createdAt", title: "Created At", type: "datetime", initialValue: () => new Date().toISOString() },
    ],
};
