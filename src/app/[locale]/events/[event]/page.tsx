import EventBodySection from "@/components/common/Event/EventBodySection/EventBodySection";
import EventHeader from "@/components/common/Event/EventHeader";
import { SlugMapping } from "@/components/common/Navbar";
import PageBaseLayout from "@/components/common/PageBaseLayout";
import PageBuilder from "@/components/common/PageBuilder"; // Import PageBuilder
import { locales } from "@/i18n/settings";
import { getAllEventsSlugs, getEventBySlug } from "@/sanity/queries"; // Ensure you import the correct queries
import { sanityUrlFor } from "@/sanity/sanity-client";
import { notFound } from "next/navigation";
import { FC } from "react";

// Assuming Section is defined somewhere in your types
type PageWithSlugParams = { locale: string; slug: string };

export async function generateStaticParams() {
  const localizedEventSlugs = await getAllEventsSlugs(); // Use event slugs query

  const params: PageWithSlugParams[] = [];

  for (const eventSlugs of localizedEventSlugs) {
    for (const locale of locales) {
      const slugName = `slug_${locale}`;

      params.push({
        locale,
        slug: eventSlugs[slugName] || eventSlugs.slug_default, // Use event slugs here
      });
    }
  }

  return params;
}

const Event: FC<{ params: { locale: string; event: string } }> = async ({
  params: { locale, event },
}) => {
  const detail = await getEventBySlug(locale, event); // Use the event query
  if (!detail) {
    return notFound();
  }

  // Handling multiple event dates
  const formattedDates = detail.event_date.map(({ date }: { date: string }) =>
    new Date(date).toLocaleString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  ).join(' - '); // If event has multiple dates, separate them by ' - '

  const slugMapping: SlugMapping = {};
  locales.map((l) => {
    const slugName = `slug_${l}`;
    slugMapping[l] = "events/" + detail[slugName]; // Adjust to "events" slug path
  });

  return (
    <PageBaseLayout slugMapping={slugMapping}>
      <EventHeader
        title={detail.title}
        imgSrc={sanityUrlFor(detail.cover).url()}
        eventDate={formattedDates} // Show the formatted event dates
      />
      <EventBodySection event={detail} /> {/* Adjust for the event body */}
      <PageBuilder 
        sections={detail.pageBuilder} // Double type assertion
        locale={locale} 
      />
    </PageBaseLayout>
  );
};

export default Event;
