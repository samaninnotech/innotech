import React from "react";
import {
  EventContainer,
  EventContent,
  EventDate,
  EventDateDay,
  EventDateMonth,
  EventDateYear,
  EventDescription,
  EventImage,
  EventTitle,
} from "./Event.styled";

type EventDateType = {
  start_date?: string;
  start_time?: string;
  end_date?: string;
  end_time?: string;
  date_type: "single" | "multiple" | "range";
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

interface EventProps {
  title: string;
  slug: string;
  publish_date: string;
  event_date: EventDateType;
  cover: string;
  description: string;
  author: string;
}

// Function to extract day, month, and year from a date string
const extractDateParts = (dateString: string) => {
  const date = new Date(dateString);
  return {
    day: date.getUTCDate(),
    month: date.toLocaleString("default", { month: "long" }),
    year: date.getUTCFullYear(),
  };
};

const Event: React.FC<EventProps> = ({
  title,
  description,
  cover,
  event_date,
  slug,
}) => {
  let displayDate = { day: 0, month: "", year: 0 };
  if (event_date.date_type === "single" && event_date.single_date?.date) {
    displayDate = extractDateParts(event_date.single_date.date);
  }

  // Handle multiple dates (show the first date)
  if (event_date.date_type === "multiple" && event_date.dates?.length) {
    displayDate = extractDateParts(event_date.dates[0].date);
  }

  // Handle range dates (use the start date for display)
  if (event_date.date_type === "range" && event_date.start_date) {
    displayDate = extractDateParts(event_date.start_date);
  }

  return (
    <EventContainer href={"/events/" + slug}>
      <EventImage imageUrl={cover}>
        <EventDate>
          <EventDateDay>{displayDate.day}</EventDateDay>
          <EventDateMonth>{displayDate.month}</EventDateMonth>
          <EventDateYear>{displayDate.year}</EventDateYear>
        </EventDate>
      </EventImage>
      <EventContent>
        <EventTitle>{title}</EventTitle>
        <EventDescription>{description}</EventDescription>
        Ulteriori informazioni »
      </EventContent>
    </EventContainer>
  );
};

export default Event;
