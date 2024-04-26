import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import build from "next/dist/build";
import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";

export default buildConfig({
    serverURL: process.env.NEX_PUBLIC_SERVER_URL || '',
    collections: [],
    routes: {
        admin: '/sell'
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "- DigitalHippo",
            favicon: '/favicon.ico',
            ogImage: 'thimbnail.jpg',
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,
    }),
    typescript:{
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
})