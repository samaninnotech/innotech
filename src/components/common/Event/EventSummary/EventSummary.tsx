"use client";
import { formatDate } from "@/lib/middlewares/eventDateParser";
import React from "react";
import {
  Column,
  ColumnContent,
  ColumnTitle,
  EventSummaryContainer,
  SectionWrapper,
  SubTitle,
} from "./EventSummary.styled";

type EventDateType = {
  date?: string;
  start_time?: string;
  end_time?: string;
  end_date?: string;
  dates?: {
    date: string;
    start_time?: string;
    end_time?: string;
  }[];
};

interface EventSummaryProps {
  detailsLabel: string;
  locationLabel: string;
  organizatorLabel: string;
  startLabel: string;
  endLabel: string;
  location: string;
  organizer: string;
  eventDate: EventDateType;
}

const EventSummary: React.FC<EventSummaryProps> = ({
  detailsLabel,
  locationLabel,
  organizatorLabel,
  startLabel,
  endLabel,
  location,
  organizer,
  eventDate,
}) => {
  if (!eventDate || (!eventDate.date && !eventDate.dates)) {
    return <div>Invalid Event Date</div>;
  }

  return (
    <SectionWrapper>
      <EventSummaryContainer>
        {/* First Column: Event Details */}
        <Column>
          <ColumnTitle>{detailsLabel}</ColumnTitle>
          {eventDate.dates ? (
            eventDate.dates.map((event, index) => (
              <div key={index}>
                <SubTitle>
                  {startLabel}:{" "}
                  <ColumnContent>
                    {formatDate(event.date)} h.{event.start_time}
                  </ColumnContent>
                </SubTitle>
                <SubTitle>
                  {endLabel}:{" "}
                  <ColumnContent>
                    {formatDate(event.date)} h.{event.end_time}
                  </ColumnContent>
                </SubTitle>
              </div>
            ))
          ) : (
            <>
              <SubTitle>
                {startLabel}:{" "}
                <ColumnContent>
                  {formatDate(eventDate.date!)} h.{eventDate.start_time}
                </ColumnContent>
              </SubTitle>
              <SubTitle>
                {endLabel}:{" "}
                <ColumnContent>
                  {formatDate(eventDate.end_date || eventDate.date!)}{" "}
                  {eventDate.end_time && `h.${eventDate.end_time}`}{" "}
                </ColumnContent>
              </SubTitle>
            </>
          )}
        </Column>

        {/* Second Column: Location */}
        <Column>
          <ColumnTitle>{locationLabel}</ColumnTitle>
          <ColumnContent>{location}</ColumnContent>
        </Column>

        {/* Third Column: Organizer */}
        <Column>
          <ColumnTitle>{organizatorLabel}</ColumnTitle>
          <ColumnContent>{organizer}</ColumnContent>
        </Column>
      </EventSummaryContainer>
    </SectionWrapper>
  );
};

export default EventSummary;
