"use client";
import { EventDateType, formatDate } from "@/lib/middlewares/eventDateParser";
import React from "react";
import {
  ButtonWrapper,
  CalendarButton,
  Column,
  ColumnContent,
  ColumnTitle,
  EventSummaryContainer,
  InnerContainer,
  SectionWrapper,
  SubTitle,
} from "./EventSummary.styled";

interface EventSummaryProps {
  detailsLabel: string;
  locationLabel: string;
  organizatorLabel: string;
  startLabel: string;
  endLabel: string;
  title: string;
  description: string;
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
  title,
  description,
  location,
  organizer,
  eventDate,
}) => {
  if (!eventDate || (!eventDate.date && !eventDate.dates)) {
    return <div>Invalid Event Date</div>;
  }

  const constructDateTime = (date: string, time?: string) => {
    const formatTime = (time: string) => time.replace(":", "");
    const formattedTime = formatTime(time || "0000");

    const hours = parseInt(formattedTime.substring(0, 2), 10);
    const minutes = parseInt(formattedTime.substring(2), 10);

    const dateObj = new Date(date);
    dateObj.setHours(hours);
    dateObj.setMinutes(minutes);

    dateObj.setMinutes(dateObj.getMinutes() - 5);

    const adjustedHours = String(dateObj.getHours()).padStart(2, "0");
    const adjustedMinutes = String(dateObj.getMinutes()).padStart(2, "0");

    return `${date.replace(/-/g, "")}T${adjustedHours}${adjustedMinutes}`;
  };

  const googleCalendarUrls = eventDate.dates
    ? eventDate.dates.map((event) => {
        const startDateTime = constructDateTime(event.date, event.start_time);
        const endDateTime = constructDateTime(event.date, event.end_time);
        const timeZone = "Europe/Rome";

        return `https://www.google.com/calendar/event?action=TEMPLATE&dates=${startDateTime}/${endDateTime}&location=${encodeURIComponent(
          location,
        )}&details=${encodeURIComponent(description)}&text=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&ctz=${timeZone}`;
      })
    : [
        `https://www.google.com/calendar/event?action=TEMPLATE&dates=${constructDateTime(
          eventDate.date!,
          eventDate.start_time,
        )}/${constructDateTime(
          eventDate.end_date || eventDate.date!,
          eventDate.end_time,
        )}&location=${encodeURIComponent(
          location,
        )}&details=${encodeURIComponent(description)}&text=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&ctz=Europe/Rome`,
      ];

  const downloadICalendar = (
    events: Array<{
      date: string;
      start_time: string;
      end_time: string;
      end_date?: string;
      title: string;
      description: string;
      location: string;
      organizer: string;
    }>,
  ) => {
    const _zp = (s: number) => ("0" + s).slice(-2);

    const _isofix = (date: string | Date, time?: string) => {
      const dateObj = new Date(date);
      if (time) {
        const [hours, minutes] = time.split(":").map(Number);
        dateObj.setHours(hours, minutes, 0, 0);
      }
      return `${dateObj.getUTCFullYear()}${_zp(dateObj.getUTCMonth() + 1)}${_zp(dateObj.getUTCDate())}T${_zp(dateObj.getUTCHours())}${_zp(dateObj.getUTCMinutes())}00Z`;
    };

    const now = new Date();

    const eventsBlocks = events.map((event, index) => {
      const {
        date,
        start_time,
        end_time,
        end_date,
        title,
        description,
        location,
        organizer,
      } = event;

      return [
        "BEGIN:VEVENT",
        `UID:event-${index}-${now.getTime()}@yourorganization.com`,
        `DTSTAMP:${_isofix(now)}`,
        `DTSTART:${_isofix(date, start_time)}`,
        `DTEND:${_isofix(end_date || date, end_time)}`,
        `SUMMARY:${title}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${location}`,
        `ORGANIZER;CN=${organizer}:MAILTO:no-reply@yourorganization.com`,
        "END:VEVENT",
      ].join("\r\n");
    });

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Your Organization//NONSGML v1.0//EN",
      "METHOD:REQUEST",
      ...eventsBlocks,
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "events.ics";
    link.click();
  };

  return (
    <SectionWrapper>
      <InnerContainer>
        <ButtonWrapper>
          {googleCalendarUrls.map((url, index) => (
            <CalendarButton
              key={index}
              onClick={() => window.open(url, "_blank")}
            >
              + GOOGLE CALENDAR{" "}
              {eventDate.dates && googleCalendarUrls.length > 1
                ? index + 1
                : ""}
            </CalendarButton>
          ))}
          <CalendarButton
            onClick={() => {
              const events = eventDate.dates
                ? eventDate.dates.map((event) => ({
                    date: event.date,
                    start_time: event.start_time!,
                    end_time: event.end_time!,
                    title,
                    description,
                    location,
                    organizer,
                  }))
                : [
                    {
                      date: eventDate.date!,
                      start_time: eventDate.start_time!,
                      end_time: eventDate.end_time!,
                      end_date: eventDate.end_date,
                      title,
                      description,
                      location,
                      organizer,
                    },
                  ];
              downloadICalendar(events);
            }}
          >
            + EXPORT ICAL
          </CalendarButton>
        </ButtonWrapper>
      </InnerContainer>

      <EventSummaryContainer>
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

        <Column>
          <ColumnTitle>{locationLabel}</ColumnTitle>
          <ColumnContent>{location}</ColumnContent>
        </Column>

        <Column>
          <ColumnTitle>{organizatorLabel}</ColumnTitle>
          <ColumnContent>{organizer}</ColumnContent>
        </Column>
      </EventSummaryContainer>
    </SectionWrapper>
  );
};

export default EventSummary;
