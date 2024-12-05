import { DraftBanner, Footer, PageTopBar } from "@/components/common";
import ScrollToTop from "@/components/common/ScrollToTop";
import { isSupportedLocale } from "@/i18n/settings";
import { iubendaSiteId } from "@/iubenda/settings";
import { getIubendaConfig } from "@/iubenda/utils";
import StyledComponentsRegistry from "@/lib/registry";
import {
  getFooterConfig,
  getHomepageId,
  getNavbarConfig,
  getpageTopBarConfig,
} from "@/sanity/queries";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import Script from "next/script";
import { FC, PropsWithChildren } from "react";
import "../globals.css";
import { getDictionary } from "./dictionaries";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<
  PropsWithChildren<{ params: { locale: string } }>
> = async ({ params: { locale }, children }) => {
  const { navbar_config, side_navbar_config } = await getNavbarConfig(locale);
  const pageTopBarData = await getpageTopBarConfig(locale);
  const footerData = await getFooterConfig(locale);
  const { homepage } = await getHomepageId();
  // Generating JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@id": homepage,
    "@type": "Organization",
    name: "Innotech",
    legalName: "Innotech SRL",
    url: "https://innotech.software/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "E33 v.le Del Lavoro",
      addressLocality: "San Martino Buon Albergo",
      addressRegion: "Verona, Italia",
      postalCode: "6802",
    },
    logo: "https://innotech.software/wp-content/uploads/2021/01/Logo_Innotech_Negative_RGB-800x166.png",
    foundingDate: "2021",
    contactPoint: {
      "@type": "contactPoint",
      contactType: "customer support",
      telephone: "+39 045 445 00 55",
      email: "info@innotech.email",
    },
  };

  const dictionary = isSupportedLocale(locale)
    ? await getDictionary(locale)
    : {};
  const { isEnabled: draftEnabled } = draftMode();
  const iubendaConfig = JSON.stringify(getIubendaConfig(locale));

  return (
    <html lang={locale}>
      <head>
        {/* Add JSON-LD to page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Iubenda */}
        <Script src={`https://cs.iubenda.com/sync/${iubendaSiteId}.js`} />
        <Script src="https://cdn.iubenda.com/cs/iubenda_cs.js" />
        <Script id="load_iubenda_config" type="text/javascript">
          var _iub = _iub || []; _iub.csConfiguration = {iubendaConfig}
        </Script>
      </head>
      <body className={"flex flex-col " + inter.className}>
        <StyledComponentsRegistry>
          <Providers
            locale={locale}
            messages={dictionary}
            navbarItems={{
              mainConfig: navbar_config || [],
              sideConfig: side_navbar_config || [],
            }}
          >
            {pageTopBarData && (
              <PageTopBar
                contactLink={pageTopBarData.contactLink}
                contactText={pageTopBarData.contactText}
                phoneContact={pageTopBarData.phoneContact}
                phoneContactLink={pageTopBarData.phoneContactLink}
              />
            )}
            {children}

            {/* Check if footerData is available before rendering Footer */}
            {footerData && (
              <Footer
                logoSrc={footerData.logo}
                address={footerData.address}
                phone={footerData.phone}
                email={footerData.email}
                services={footerData.services}
                quickLinks={footerData.quickLinks}
                aboutLinks={footerData.aboutLinks}
                socialLinks={footerData.socialLinks}
                copyrightText={footerData.copyrightText}
              />
            )}
            <ScrollToTop />
            {draftEnabled && <DraftBanner></DraftBanner>}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
