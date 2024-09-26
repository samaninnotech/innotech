"use client";

import useTranslation from "@/i18n/useTranslation";
import { FC, useState } from "react";
import Spinner from "../../Spinner";
import {
  CalendarIcon,
  ContentContainer,
  EventDate,
  EventDescription,
  EventImage,
  EventTileStyled,
  EventTitle,
  ImageContainer,
  LearnMoreLink,
  LoadMoreButton,
  MonthHeading,
  SectionWrapper,
  TilesContainer,
} from "./EventsList.styled";

// Utility function to group events by month
const groupEventsByMonth = (events: EventListItem[]) => {
  const groupedEvents: { [key: string]: EventListItem[] } = {};

  events.forEach((event) => {
    // Check if eventDate is present and valid
    const dateStr = event.eventDate?.date || "Invalid date"; // Fallback if date is missing
    const date = new Date(dateStr);
    const month = !isNaN(date.getTime())
      ? date.toLocaleString('en-US', { month: 'long', year: 'numeric' })
      : "Unknown Date"; // Group by "Unknown Date" if no valid date

    // Add event to the corresponding month group
    if (!groupedEvents[month]) {
      groupedEvents[month] = [];
    }
    groupedEvents[month].push(event);
  });

  return groupedEvents;
};

export type EventsListProps = { events: EventListItem[]; eventsCount: number };
export const EventsListComponent: FC<EventsListProps> = ({ events, eventsCount }) => {
  const [loadedEvents, setLoadedEvents] = useState<EventListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moreEventsExist, setMoreEventsExist] = useState(events.length < eventsCount);
  const { locale: currentLocale } = useTranslation();

  // Combine initial events and loaded events
  const allEvents = [...events, ...loadedEvents];

  // Group all events by month
  const groupedEvents = groupEventsByMonth(allEvents);

  const loadMoreEvents = async () => {
    setIsLoading(true);
    const maxEventDate = (loadedEvents.length ? loadedEvents[loadedEvents.length - 1] : events[events.length - 1]).eventDate?.date || "Invalid date";

    const queryParams = new URLSearchParams({
      locale: currentLocale,
      setLength: "12",
      maxEventDate: maxEventDate,
    });

    const url = `/api/events?${queryParams.toString()}`;
    const result: EventListItem[] = await (await fetch(url)).json();

    setLoadedEvents((prevLoadedEvents) => {
      const newLoadedEvents = [...prevLoadedEvents, ...result];
      setMoreEventsExist(events.length + newLoadedEvents.length < eventsCount);
      setIsLoading(false);
      return newLoadedEvents;
    });
  };

  return (
    <SectionWrapper>
      <Spinner show={isLoading} />
      <TilesContainer>
        {Object.entries(groupedEvents).map(([month, monthEvents]) => (
          <div key={month}>
            <MonthHeading>{month}</MonthHeading>
            {monthEvents.map((e) => (
              <EventTile key={e.slug} event={e} />
            ))}
          </div>
        ))}
      </TilesContainer>
      {moreEventsExist && (
        <LoadMoreButton onClick={loadMoreEvents}>Carica Altri</LoadMoreButton>
      )}
    </SectionWrapper>
  );
};

export type EventListItem = {
  title: string;
  imgSrc: string;
  publishedOn: string;
  eventDate: {
    date: string; // Date of the event
    start_time?: string; // Optional start time
    end_time?: string;   // Optional end time
  };
  slug: string;
  description: string;
  author: string;
};

export type EventTileProps = {
  event: EventListItem;
};

export const EventTile: FC<EventTileProps> = ({
  event: { title, imgSrc, eventDate, slug, description },
}) => {
  const { locale: currentLocale } = useTranslation();
  const dateStr = eventDate?.date || "Date not available";
  const date = new Date(dateStr);

  return (
    <EventTileStyled href={"/events/" + slug}>
      <EventTitle>{title}</EventTitle>
      <EventDate>
        <CalendarIcon className="calendar-icon" />
        <time>
          {!isNaN(date.getTime()) ? date.toLocaleString(currentLocale, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }) : "Invalid date"}
        </time>
        {eventDate?.start_time && (
          <span> | Start: {eventDate.start_time}</span>
        )}
        {eventDate?.end_time && (
          <span> | End: {eventDate.end_time}</span>
        )}
      </EventDate>
      <ContentContainer>
        <ImageContainer>
          <EventImage
            src={imgSrc}
            width={210}
            height={105}
            quality={100}
            sizes="(max-width: 768px) 600px, 350px"
            alt={title}
          />
        </ImageContainer>
        <EventDescription>{description}</EventDescription>
      </ContentContainer>
      <LearnMoreLink>Scopri di più</LearnMoreLink>
    </EventTileStyled>
  );
};

export default EventsListComponent;
