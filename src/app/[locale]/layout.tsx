import { DraftBanner } from "@/components/common";
import { isSupportedLocale } from "@/i18n/settings";
import { getHomepageId, getNavbarConfig } from "@/sanity/queries";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { FC, PropsWithChildren } from "react";
import { getDictionary } from "./dictionaries";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<
  PropsWithChildren<{ params: { locale: string } }>
> = async ({ params: { locale }, children }) => {
  const { navbar_config, side_navbar_config } = await getNavbarConfig(locale);
  const { homepage } = await getHomepageId();

  //Generating jsonLd
  const jsonLd = {
    "@context": "https://schema.org",
    "@id": homepage,
    "@type": "Organization",
    name: "BAU4X",
    legalName: "BAU4X SA",
    url: "https://bau4x.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via ai Ronchi 41",
      addressLocality: "Monte Ceneri",
      addressRegion: "Svizzera",
      postalCode: "6802",
    },
    logo: "https://bau4x.com/frontend/images/bau4x-logo.svg",
    foundingDate: "2021",
    contactPoint: {
      "@type": "contactPoint",
      contactType: "customer support",
      telephone: "+41 91 210 89 77",
      email: "info@bau4x.com",
    },
  };
  const dictionary = isSupportedLocale(locale)
    ? await getDictionary(locale)
    : {};
  const { isEnabled: draftEnabled } = draftMode();

  return (
    <html lang={locale}>
      <head>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={"flex flex-col " + inter.className}>
        <Providers
          locale={locale}
          messages={dictionary}
          navbarItems={{
            mainConfig: navbar_config || [],
            sideConfig: side_navbar_config || [],
          }}
        >
          {children}
          {draftEnabled && <DraftBanner></DraftBanner>}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
