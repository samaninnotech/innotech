"use client";
import Link from "@/i18n/Link";
import useTranslation from "@/i18n/useTranslation";
import { formatDate } from "@/lib/middlewares/eventDateParser";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import { FC } from "react";
import {
  BackgroundImage,
  EventDate,
  InnerContainer,
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
  all_events_label: CustomLink;
  title: string;
  subtitle?: string;
  imgSrc: string;
  eventDate?: EventDateType | null;
};

const EventHeaderComponent: FC<EventHeaderProps> = ({
  all_events_label,
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
        <Link href={customLinkToHref(all_events_label)}>
          {"« "}
          {all_events_label.label}
        </Link>
        <Title>{title}</Title>
        {subtitle && <p>{subtitle}</p>}
        {renderEventDate() && <EventDate>{renderEventDate()}</EventDate>}
      </TextContainer>
      <Section>
        <InnerContainer>
          <BackgroundImage
            src={imgSrc}
            alt="event-background"
            width={1000}
            height={1000}
          />
        </InnerContainer>
      </Section>
    </>
  );
};

export default EventHeaderComponent;
