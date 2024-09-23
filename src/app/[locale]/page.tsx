import PageBaseLayout from "@/components/common/PageBaseLayout";
import PageRenderer from "@/components/common/PageRenderer";
import { getHomepageId } from "@/sanity/queries";
import { FC } from "react";

export const dynamicParams = false;

export type PageWithSlugParams = { locale: string };

//Generating Metadata
// export async function generateMetadata({
//   params,
// }: {
//   params: PageWithSlugParams;
// }): Promise<Metadata> {
//   const page = await homepageMetadataFromSettings(params.locale);
//   //Generating languages for alternate links
//   const languages: Record<string, string> = {};
//   //Getting the current page url
//   const currentURL =
//     params.locale !== fallbackLocale
//       ? `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${params.locale}`
//       : `${process.env.NEXT_PUBLIC_FRONTEND_URL}`;
//   //Filtering languages for making alternate languages
//   locales
//     .filter((l) => l !== params.locale)
//     .forEach((l) => {
//       if (l === fallbackLocale) {
//         languages[fallbackLocale] = `${process.env.NEXT_PUBLIC_FRONTEND_URL}`;
//       } else {
//         languages[l] = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${l}`;
//       }
//     });
//   return {
//     title: page?.metaTitle + " | BAU4x",
//     description: page?.metaDescription,
//     openGraph: {
//       title: page?.ogTitle,
//       description: page?.ogDescription,
//       url: currentURL,
//       siteName: "Bau4x",
//       type: "website",
//     },
//     metadataBase: new URL("https://bau4x.com"),
//     alternates: {
//       canonical:
//         params.locale !== fallbackLocale
//           ? `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${params.locale}`
//           : `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
//       languages: languages,
//     },
//   };
// }

// export async function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

const Home: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const { homepage } = await getHomepageId();
  return (
    <PageBaseLayout slugMapping={{}}>
      <PageRenderer pageId={homepage} locale={locale}></PageRenderer>
    </PageBaseLayout>
  );
};

export default Home;
