import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: ({req, token, user}) => {
                return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Verify account</a>`
            }
        }
    },
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: 'role',
            required: true,
            defaultValue: "user",
            admin: {
                condition: () => false
            },
            type: "select",
            options: [
                {label: "Admin", value: "admin"},
                {label: "User", value: "user"},
            ]
        }
    ]

}