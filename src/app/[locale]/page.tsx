// "use client";

// import ConsultationSection from '@/components/common/ConsultationSection/ConsultationSection';
// import EventsSection from '@/components/common/EventsSection/EventsSection';
// import Footer from '@/components/common/Footer';
// import HomePageTopPost from '@/components/common/HomePageTopPost/HomePageTopPost';
// import LatestBlogPosts from '@/components/common/LatestBlogPosts'; // Import the LatestBlogPosts component
// import PageTopBar from '@/components/common/PageTopBar';
// import PartnerShipSection from '@/components/common/PartnerShipSection/PartnerShipSection';
// import SolutionsSection from '@/components/common/SolutionsSection/SolutionsSection';
// import React from 'react';
// import RootLayout from './layout';

// const HomePage: React.FC = () => {
//   return (
//     <RootLayout params={{ locale: '' }}>
//       <PageTopBar
//         contactLink="/contatti"
//         contactText="Contattaci per trovare una soluzione adatta ai tuoi clienti"
//         infoLink="tel:+39%20045%204450055"
//         infoText="+39 045 4450055"
//       />
//       <HomePageTopPost
//         backgroundImage="https://innotech.software/wp-content/uploads/2021/01/slider1.jpg"
//       />
//       <main>
//         <ConsultationSection consultationSwiperSlides={[]} /> 
//         <SolutionsSection /> 
//         <PartnerShipSection />
//         <LatestBlogPosts posts={[]} /> {/* Include the LatestBlogPosts component here */}
//         <EventsSection events={[]} />
//         <Footer/>
//       </main>
//     </RootLayout>
//   );
// };

// export default HomePage;
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

