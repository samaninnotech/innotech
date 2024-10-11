// src/components/EventHeaderComponent.tsx

"use client";
import useTranslation from "@/i18n/useTranslation";
import { formatDate } from "@/lib/middlewares/eventDateParser";
import { FC } from "react";
import {
  BackgroundImage,
  CalendarIcon,
  EventDate,
  MultipleEventDate,
  Section,
  Date as StyledDate,
  TextContainer,
  Title,
} from "./EventHeader.styled";

type EventDateType = {
  date_type?: "single" | "multiple" | "range";
  date?: string;
  start_time?: string;
  end_time?: string;
  start_date?: string;
  end_date?: string;
  single_date?: {
    date: string;
    start_time?: string;
    end_time?: string;
  };
  dates?: {
    date: string;
    start_time?: string;
    end_time?: string;
  }[];
};

type EventHeaderProps = {
  title: string;
  subtitle?: string;
  imgSrc: string;
  eventDate?: EventDateType | null;
};

const EventHeaderComponent: FC<EventHeaderProps> = ({
  title,
  subtitle,
  imgSrc,
  eventDate,
}) => {
  const { locale: currentLocale } = useTranslation();

  const renderEventDate = () => {
    if (!eventDate) return null;

    if (eventDate.date_type === "single" && eventDate.single_date) {
      const { date, start_time, end_time } = eventDate.single_date;
      return (
        <>
          <CalendarIcon className="calendar-icon" />
          <StyledDate>
            {formatDate(date, start_time, end_time, currentLocale)}
          </StyledDate>
        </>
      );
    }

    if (
      eventDate.date_type === "range" &&
      eventDate.start_date &&
      eventDate.end_date
    ) {
      return (
        <>
          <CalendarIcon className="calendar-icon" />
          <StyledDate>
            {formatDate(
              eventDate.start_date,
              undefined,
              undefined,
              currentLocale,
            )}{" "}
            to&nbsp;
            {formatDate(
              eventDate.end_date,
              undefined,
              undefined,
              currentLocale,
            )}
            {eventDate.start_time &&
              eventDate.end_time &&
              ` h. ${eventDate.start_time} - ${eventDate.end_time}`}
          </StyledDate>
        </>
      );
    }

    if (eventDate.dates) {
      return (
        <>
          <CalendarIcon className="calendar-icon" />
          <MultipleEventDate>
            {eventDate.dates.map(({ date, start_time, end_time }) => (
              <div key={date} style={{ marginTop: "5px" }}>
                {formatDate(date, start_time, end_time, currentLocale)}
              </div>
            ))}
          </MultipleEventDate>
        </>
      );
    }

    return null;
  };

  return (
    <>
      <TextContainer className="container">
        <Title>{title}</Title>
        {subtitle && <p>{subtitle}</p>}
        {renderEventDate() && <EventDate>{renderEventDate()}</EventDate>}
      </TextContainer>
      <Section>
        <BackgroundImage
          src={imgSrc}
          fill
          alt="event-background"
          style={{
            objectFit: "cover",
          }}
        />
      </Section>
    </>
  );
};

export default EventHeaderComponent;
