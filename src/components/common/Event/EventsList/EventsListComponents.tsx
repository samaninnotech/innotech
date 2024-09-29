"use client";

import useTranslation from "@/i18n/useTranslation";
import { FC, useState } from "react";
import Spinner from "../../Spinner";
import {
  ContentContainer,
  EventDate,
  EventDateWrapper,
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
  ToggleButton,
} from "./EventsList.styled";

// Utility function to group events by month
const groupEventsByMonth = (events: EventListItem[]) => {
  const groupedEvents: { [key: string]: EventListItem[] } = {};

  events.forEach((event) => {
    let dateStr: string | undefined;

    // Check if event has multiple dates, and if so, pick the first one
    if (event.eventDate?.dates && event.eventDate.dates.length > 0) {
      dateStr = event.eventDate.dates[0].date;
    } else {
      // Fallback to single date or range start date
      dateStr = event.eventDate?.date;
    }

    // Ensure dateStr is defined before creating a Date object
    if (dateStr) {
      const eventDate = new Date(dateStr);
      const month = !isNaN(eventDate.getTime())
        ? eventDate.toLocaleString("en-US", { month: "long", year: "numeric" })
        : "Unknown Date"; // Group by "Unknown Date" if no valid date

      if (!groupedEvents[month]) {
        groupedEvents[month] = [];
      }
      groupedEvents[month].push(event);
    }
  });

  return groupedEvents;
};

export type EventsListProps = { events: EventListItem[]; eventsCount: number };
const EventsListComponent: FC<EventsListProps> = ({ events, eventsCount }) => {
  const [loadedEvents, setLoadedEvents] = useState<EventListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPastEvents, setShowPastEvents] = useState(false); // New state for toggling events
  const { locale: currentLocale } = useTranslation();

  const allEvents = [...events, ...loadedEvents];
  const upcomingEvents = allEvents.filter((event) => {
    const dateStr = event.eventDate?.dates?.[0]?.date || event.eventDate?.date;
    if (!dateStr) return false;
    const startDate = new Date(dateStr);
    return startDate >= new Date(); // Filter for upcoming events
  });

  // Determine if there are any past events
  const pastEventsExist = allEvents.some((event) => {
    const dateStr = event.eventDate?.dates?.[0]?.date || event.eventDate?.date;
    if (!dateStr) return false;
    const startDate = new Date(dateStr);
    return startDate < new Date(); // Check for past events
  });

  const groupedEvents = groupEventsByMonth(
    showPastEvents ? allEvents : upcomingEvents,
  );

  // Check if there are any events loaded to conditionally render the button
  const moreEventsExist = events.length + loadedEvents.length < eventsCount;

  const loadMoreEvents = async () => {
    setIsLoading(true);

    const lastLoadedEvent = loadedEvents.length
      ? loadedEvents[loadedEvents.length - 1]
      : events[events.length - 1];
    const maxEventDate = lastLoadedEvent?.eventDate?.date || "Invalid date";

    const queryParams = new URLSearchParams({
      locale: currentLocale,
      setLength: "12",
      maxEventDate: maxEventDate,
    });

    try {
      const url = `/api/events?${queryParams.toString()}`;
      const result: EventListItem[] = await (await fetch(url)).json();

      setLoadedEvents((prevLoadedEvents) => {
        const newLoadedEvents = [...prevLoadedEvents, ...result];
        return newLoadedEvents;
      });
    } catch (error) {
      console.error("Failed to load more events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper>
      <Spinner show={isLoading} />

      {/* Button to toggle showing past events, only shown if past events exist */}
      {pastEventsExist && (
        <ToggleButton onClick={() => setShowPastEvents(!showPastEvents)}>
          {showPastEvents ? "Show Upcoming Events >>" : "<< Show Past Events"}
        </ToggleButton>
      )}

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

      {moreEventsExist && loadedEvents.length > 0 && (
        <LoadMoreButton onClick={loadMoreEvents}>Carica Altri</LoadMoreButton>
      )}
      {/* Button to toggle showing past events, only shown if past events exist */}
      {pastEventsExist && (
        <ToggleButton onClick={() => setShowPastEvents(!showPastEvents)}>
          {showPastEvents ? "Show Upcoming Events >>" : "<< Show Past Events"}
        </ToggleButton>
      )}
    </SectionWrapper>
  );
};

type EventDate =
  | {
      date_type: "single";
      single_date: {
        date: string;
        start_time?: string;
        end_time?: string;
      };
    }
  | {
      date_type: "multiple";
      dates: {
        date: string;
        start_time?: string;
        end_time?: string;
      }[];
    }
  | {
      date_type: "range";
      start_date: string;
      end_date: string;
      start_time?: string;
      end_time?: string;
    };

type EventListItem = {
  title: string;
  publishedOn: string;
  eventDate: {
    date?: string; // Optional for multiple events
    start_time?: string;
    end_time?: string;
    end_date?: string; // Optional for range events
    dates?: {
      // Optional for multiple events
      date: string;
      start_time?: string;
      end_time?: string;
    }[];
  } | null;
  imgSrc: string;
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

  // Helper function to format the date in the desired format
  const formatDate = (
    dateStr: string,
    startTime?: string,
    endTime?: string,
  ) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "Invalid Date"; // Ensure valid date

    const day = date.getDate().toString(); // Day without leading zero
    const monthName = date.toLocaleString(currentLocale, { month: "long" });
    const timeRange =
      startTime && endTime ? `h. ${startTime} - ${endTime}` : "";

    return `${day} ${monthName} ${timeRange}`.trim();
  };

  return (
    <EventTileStyled href={"/events/" + slug}>
      <EventTitle>{title}</EventTitle>
      <EventDateWrapper>
        {/* Check for single date or range */}
        <EventDate>
          {eventDate?.date && (
            <div>
              {eventDate.end_date ? (
                <time>
                  {/* Display the period format */}
                  {formatDate(
                    eventDate.date,
                    eventDate.start_time,
                    eventDate.end_time,
                  )}{" "}
                  -{" "}
                  {formatDate(
                    eventDate.end_date,
                    eventDate.start_time,
                    eventDate.end_time,
                  )}
                </time>
              ) : (
                <time>
                  {/* Display single date */}
                  {formatDate(
                    eventDate.date,
                    eventDate.start_time,
                    eventDate.end_time,
                  )}
                </time>
              )}
            </div>
          )}

          {/* Handle multiple dates */}
          {eventDate?.dates &&
            eventDate.dates.map((dateItem, index) => (
              <div key={index}>
                <time>
                  {formatDate(
                    dateItem.date,
                    dateItem.start_time,
                    dateItem.end_time,
                  )}
                </time>
              </div>
            ))}
        </EventDate>
      </EventDateWrapper>

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
