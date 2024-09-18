import { SlugMapping } from "@/components/common/Navbar";
import PageBaseLayout from "@/components/common/PageBaseLayout";
import PageRenderer from "@/components/common/PageRenderer";
import { fallbackLocale, locales } from "@/i18n/settings";
import {
  getAllSlugsConfig,
  getPageLocalizedSlugs,
  getPageMetadataBySlug,
} from "@/sanity/queries";
import { Metadata } from "next/types";
import { FC } from "react";

export type PageWithSlugParams = { locale: string; slug: string };

export const dynamicParams = true;

//Type needed for generating canonical and alternate links
type Alternates = {
  canonical: string;
  alternateLanguages: string[];
};

//Generating Metadata
export async function generateMetadata({
  params,
}: {
  params: PageWithSlugParams;
}): Promise<Metadata> {
  const page = await getPageMetadataBySlug(params.locale, params.slug);
  //Initializing the alternates variable
  const alternates: Alternates = { canonical: "", alternateLanguages: [] };
  //Initializing canonical and excluding Italian language
  alternates.canonical =
    params.locale !== fallbackLocale
      ? `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${params.locale}/${params.slug}`
      : `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${params.slug}`;

  //Generating languages for alternate links
  const languages: Record<string, string> = {};

  //Getting the current page url
  const currentURL =
    params.locale !== fallbackLocale
      ? `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${params.locale}/${params.slug}`
      : `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${params.slug}`;

  if (params.slug) {
    const slugTranslations = await getPageLocalizedSlugs(
      params.slug,
      params.locale,
    );
    if (slugTranslations) {
      locales.forEach((l) => {
        const slugName = `slug_${l}`;

        // Initializing alternate languages and excluding Italian language
        if (l !== params.locale) {
          const alternateLanguage =
            l !== fallbackLocale
              ? `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${l}/${slugTranslations[slugName]}`
              : `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${slugTranslations[slugName]}`;
          languages[l] = alternateLanguage;
        }
      });
    }
  }
  return {
    title: page?.metaTitle + " | BAU4x",
    description: page?.metaDescription,
    openGraph: {
      title: page?.ogTitle,
      description: page?.ogDescription,
      url: currentURL,
      siteName: "Bau4x",
      type: "website",
    },
    metadataBase: new URL("https://bau4x.com"),
    alternates: {
      canonical: alternates.canonical,
      languages: languages,
    },
  };
}

export async function generateStaticParams() {
  const localizedSlugs = await getAllSlugsConfig();
  const params: PageWithSlugParams[] = [];

  for (const pageSlugs of localizedSlugs) {
    for (const locale of locales) {
      const slugName = `slug_${locale}`;

      params.push({
        locale,
        slug: pageSlugs[slugName] || pageSlugs.slug_default,
      });
    }
  }

  return params;
}

const PageWithSlug: FC<{ params: PageWithSlugParams }> = async ({
  params: { locale, slug },
}) => {
  const slugMapping: SlugMapping = {};
  if (slug) {
    const slugTranslations = await getPageLocalizedSlugs(slug, locale);
    if (slugTranslations) {
      locales.map((l) => {
        const slugName = `slug_${l}`;
        slugMapping[l] = slugTranslations[slugName];
      });
    }
  }
  return (
    <PageBaseLayout slugMapping={slugMapping}>
      <PageRenderer slug={slug} locale={locale}></PageRenderer>
    </PageBaseLayout>
  );
};

export default PageWithSlug;
