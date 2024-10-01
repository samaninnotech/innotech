"use client";
// EventsSection.tsx
import { Event as EventType } from "@/sanity/types";
import { FC } from "react";
import Event from "../Event";
import {
  EventList,
  EventsSectionContainer,
} from "./EventsLastUpdatesSection.styled";

type EventSectionProps = {
  events: EventType[];
};
// Define the EventsSection component
const EventsLastUpdatesSection: FC<EventSectionProps> = ({ events }) => (
  <EventsSectionContainer>
    <h3>Events</h3>
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
        />
      ))}
    </EventList>
  </EventsSectionContainer>
);

export default EventsLastUpdatesSection;
