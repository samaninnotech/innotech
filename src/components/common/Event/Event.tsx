import { formatDate } from "@/lib/middlewares/eventDateParser";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  DateWrapper,
  EventContainer,
  EventContent,
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
  };
};

const Event: React.FC<EventProps> = ({
  title,
  description,
  cover,
  event_date,
  slug,
}) => {
  return (
    <EventContainer href={"/events/" + slug}>
      <EventImage imageUrl={cover} />
      <EventContent>
        <EventTitle>{title}</EventTitle>

        {/* Display event dates after title */}
        <div>
          {event_date.date_type === "range" &&
            event_date.start_date &&
            event_date.end_date && (
              <DateWrapper>
                <FontAwesomeIcon icon={faClock} />
                <time>
                  {formatDate(event_date.start_date)} to{" "}
                  {formatDate(
                    event_date.end_date,
                    event_date.start_time,
                    event_date.end_time,
                  )}
                </time>
              </DateWrapper>
            )}

          {event_date.date_type === "multiple" && event_date.dates?.length && (
            <DateWrapper>
              {event_date.dates.map((dateItem, index) => (
                <div key={index}>
                  <FontAwesomeIcon icon={faClock} />
                  <time>
                    {formatDate(
                      dateItem.date,
                      dateItem.start_time,
                      dateItem.end_time,
                    )}
                  </time>
                </div>
              ))}
            </DateWrapper>
          )}

          {event_date.date_type === "single" &&
            event_date.single_date?.date && (
              <DateWrapper>
                <FontAwesomeIcon icon={faClock} />
                <time>
                  {formatDate(
                    event_date.single_date.date,
                    event_date.single_date.start_time,
                    event_date.single_date.end_time,
                  )}
                </time>
              </DateWrapper>
            )}
        </div>
      </EventContent>
    </EventContainer>
  );
};

export default Event;
