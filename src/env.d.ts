/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly BUILDER_API_PUBLIC_KEY: string;
    readonly BUILDER_PAGES_MODEL: string;
    readonly BUILDER_BLOGPOST_MODEL: string;
    readonly BUILDER_NEWS_MODEL: string;
}
