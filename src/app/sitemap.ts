import { fallbackLocale, locales } from "@/i18n/settings";
import { getAllChildSlugsConfig, getAllSlugsConfig } from "@/sanity/queries";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const localizedSlugs = await getAllSlugsConfig();
  const localizedChildSlugs = await getAllChildSlugsConfig();
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Omit fallback locale from urls
    const localePrefix = locale !== fallbackLocale ? `/${locale}` : "";

    // Routes for Homepage
    routes.push({
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}${localePrefix}`,
      priority: 1,
      lastModified: new Date().toISOString(),
    });

    // Making rhe routes based on the data coming from Sanity
    const slugName = `slug_${locale}`;
    const parentSlug = `parent_slug_${locale}`;

    localizedSlugs.forEach((pageSlugs) => {
      const lastModifiedDate = new Date(pageSlugs._updatedAt).toISOString();
      const finalValue = `${localePrefix}/${pageSlugs[slugName] || pageSlugs.slug_default}`;
      routes.push({
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}${finalValue}`,
        priority: 1,
        lastModified: lastModifiedDate,
      });
    });

    localizedChildSlugs.forEach((pageSlugs) => {
      const lastModifiedDate = new Date(pageSlugs._updatedAt).toISOString();
      const finalValue = `${localePrefix}/${pageSlugs[parentSlug] || pageSlugs.slug_default}/${pageSlugs[slugName]}`;
      routes.push({
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}${finalValue}`,
        priority: 1,
        lastModified: lastModifiedDate,
      });
    });
  }
  return [...routes];
}
