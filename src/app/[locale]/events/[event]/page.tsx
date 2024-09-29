import EventBodySection from "@/components/common/Event/EventBodySection/EventBodySection";
import EventHeader from "@/components/common/Event/EventHeader";
import { SlugMapping } from "@/components/common/Navbar";
import PageBaseLayout from "@/components/common/PageBaseLayout";
import PageBuilder from "@/components/common/PageBuilder";
import { locales } from "@/i18n/settings";
import { getAllEventsSlugs, getEventBySlug } from "@/sanity/queries";
import { sanityUrlFor } from "@/sanity/sanity-client";
import { notFound } from "next/navigation";
import { FC } from "react";

// Assuming Section is defined somewhere in your types
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

  const formattedDates = () => {
    const eventDate = detail.event_date; // Access eventDate directly

    if (!eventDate) return "Date not available"; // Handle null case

    // Define formatting options
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    // Handle range dates
    if (
      eventDate.date_type === "range" &&
      eventDate.start_date &&
      eventDate.end_date
    ) {
      const startDateFormatted = new Date(
        eventDate.start_date,
      ).toLocaleDateString(locale, options);
      const endDateFormatted = new Date(eventDate.end_date).toLocaleDateString(
        locale,
        options,
      );

      return eventDate.start_time && eventDate.end_time
        ? `${startDateFormatted} ${eventDate.start_time} - ${endDateFormatted} ${eventDate.end_time}`
        : `${startDateFormatted} - ${endDateFormatted}`;
    }

    // Handle single date
    if (eventDate.date_type === "single" && eventDate.single_date) {
      const singleDateFormatted = new Date(
        eventDate.single_date.date,
      ).toLocaleDateString(locale, options);

      return eventDate.single_date.start_time && eventDate.single_date.end_time
        ? `${singleDateFormatted} ${eventDate.single_date.start_time} - ${eventDate.single_date.end_time}`
        : `${singleDateFormatted}`;
    }

    // Handle multiple dates
    if (eventDate.date_type === "multiple" && eventDate.dates) {
      return eventDate.dates
        .map(({ date, start_time, end_time }) => {
          const formattedDate = new Date(date).toLocaleDateString(
            locale,
            options,
          );
          return start_time && end_time
            ? `${formattedDate} ${start_time} - ${end_time}`
            : formattedDate;
        })
        .join(", "); // Join multiple dates with commas
    }

    // Fallback if no dates are found
    return "Date not available";
  };

  const slugMapping: SlugMapping = {};
  locales.map((l) => {
    const slugName = `slug_${l}`;
    slugMapping[l] = "events/" + detail[slugName];
  });

  return (
    <PageBaseLayout slugMapping={slugMapping}>
      <EventHeader
        title={detail.title}
        imgSrc={sanityUrlFor(detail.cover).url()}
        eventDate={formattedDates()} // Show the formatted event dates
      />
      <EventBodySection event={detail} />
      <PageBuilder sections={detail.pageBuilder} locale={locale} />
    </PageBaseLayout>
  );
};

export default Event;
