import { SlugMapping } from "@/components/common/Navbar";
import PageBaseLayout from "@/components/common/PageBaseLayout";
import PageBuilder from "@/components/common/PageBuilder";
import { locales } from "@/i18n/settings";
import { getEventsMainPage } from "@/sanity/queries";
import { FC } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const Events: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const slugMapping: SlugMapping = {};
  for (const l of locales) {
    slugMapping[l] = "events";
  }

  const eventsPageData = await getEventsMainPage(locale);
  return (
    <PageBaseLayout slugMapping={slugMapping}>
      <PageBuilder
        sections={eventsPageData.pageBuilder || []}
        locale={locale}
      ></PageBuilder>
    </PageBaseLayout>
  );
};

export default Events;
