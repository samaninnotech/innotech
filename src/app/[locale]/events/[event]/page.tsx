import EventBodySection from "@/components/common/Event/EventBodySection/EventBodySection";
import EventHeaderComponent from "@/components/common/Event/EventHeader";
import { SlugMapping } from "@/components/common/Navbar";
import PageBaseLayout from "@/components/common/PageBaseLayout";
import PageBuilder from "@/components/common/PageBuilder";
import { locales } from "@/i18n/settings";
import { getAllEventsSlugs, getEventBySlug } from "@/sanity/queries";
import { sanityUrlFor } from "@/sanity/sanity-client";
import { notFound } from "next/navigation";
import { FC } from "react";

type PageWithSlugParams = { locale: string; slug: string };

export async function generateStaticParams() {
  const localizedEventSlugs = await getAllEventsSlugs();

  const params: PageWithSlugParams[] = [];

  for (const eventSlugs of localizedEventSlugs) {
    for (const locale of locales) {
      const slugName = `slug_${locale}`;

      params.push({
        locale,
        slug: eventSlugs[slugName] || eventSlugs.slug_default,
      });
    }
  }

  return params;
}

const Event: FC<{ params: { locale: string; event: string } }> = async ({
  params: { locale, event },
}) => {
  const detail = await getEventBySlug(locale, event);
  if (!detail) {
    return notFound();
  }

  const slugMapping: SlugMapping = {};
  locales.map((l) => {
    const slugName = `slug_${l}`;
    slugMapping[l] = "events/" + detail[slugName];
  });

  return (
    <PageBaseLayout slugMapping={slugMapping}>
      <EventHeaderComponent
        title={detail.title}
        subtitle={detail.subtitle}
        imgSrc={sanityUrlFor(detail.cover).url()}
        eventDate={detail.event_date}
      />
      <EventBodySection event={detail} />
      <PageBuilder sections={detail.pageBuilder} locale={locale} />
    </PageBaseLayout>
  );
};

export default Event;
