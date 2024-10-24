"use client";
// EventsSection.tsx
import { Event as EventType } from "@/sanity/types";
import { FC } from "react";
import Event from "..";
import {
  EventList,
  EventsSectionContainer,
  EventsWrapper,
  Header,
} from "./EventsLastUpdatesSection.styled";

type EventSectionProps = {
  header: string;
  events: EventType[];
  sectionBackgroundColor: string;
  eventBackgroundColor: string;
  eventTextColor: string;
  eventOverlayColor: string;
  overlayTextColor: string;
};
const EventsLastUpdatesSection: FC<EventSectionProps> = ({
  header,
  events,
  sectionBackgroundColor,
  eventBackgroundColor,
  eventOverlayColor,
  overlayTextColor,
  eventTextColor,
}) => {
  return (
    <EventsSectionContainer $backgroundColor={sectionBackgroundColor}>
      <EventsWrapper>
        <Header>{header}</Header>
        <EventList>
          {events.map((event, index) => (
            <Event
              key={index}
              title={event.title}
              description={event.description}
              cover={event.cover}
              event_date={event.event_date}
              slug={event.slug}
              publish_date={""}
              author={""}
              backgroundColor={eventBackgroundColor}
              overlayColor={eventOverlayColor}
              overlayTextColor={overlayTextColor}
              eventTextColor={eventTextColor}
            />
          ))}
        </EventList>
      </EventsWrapper>
    </EventsSectionContainer>
  );
};

export default EventsLastUpdatesSection;
