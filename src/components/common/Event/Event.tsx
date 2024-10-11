import { formatDate } from "@/lib/middlewares/eventDateParser";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  DateWrapper,
  EventContainer,
  EventContent,
  EventDate,
  EventDateDay,
  EventDateMonth,
  EventDateYear,
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
  backgroundColor: string;
  eventTextColor: string;
  overlayColor: string;
  overlayTextColor: string;
}

const Event: React.FC<EventProps> = ({
  title,
  cover,
  event_date,
  slug,
  backgroundColor,
  eventTextColor,
  overlayColor,
  overlayTextColor,
}) => {
  const renderEventDateOverlay = () => {
    if (event_date.date_type === "single" && event_date.single_date?.date) {
      const formattedDate = new Date(event_date.single_date.date);
      return (
        <EventDate
          $backgroundColor={overlayColor}
          $overlayTextColor={overlayTextColor}
        >
          <EventDateDay>{formattedDate.getDate()}</EventDateDay>
          <EventDateMonth>
            {formattedDate.toLocaleString("default", { month: "long" })}
          </EventDateMonth>
          <EventDateYear>{formattedDate.getFullYear()}</EventDateYear>
        </EventDate>
      );
    } else if (
      event_date.date_type === "multiple" &&
      event_date.dates?.length
    ) {
      return (
        <EventDate
          $backgroundColor={overlayColor}
          $overlayTextColor={overlayTextColor}
        >
          {event_date.dates.map((dateItem, index) => {
            const formattedDate = new Date(dateItem.date);
            return (
              <div key={index}>
                <EventDateDay>{formattedDate.getDate()}</EventDateDay>
                <EventDateMonth>
                  {formattedDate.toLocaleString("default", { month: "long" })}
                </EventDateMonth>
                <EventDateYear>{formattedDate.getFullYear()}</EventDateYear>
              </div>
            );
          })}
        </EventDate>
      );
    } else if (
      event_date.date_type === "range" &&
      event_date.start_date &&
      event_date.end_date
    ) {
      const startFormattedDate = new Date(event_date.start_date);
      const endFormattedDate = new Date(event_date.end_date);
      return (
        <EventDate
          $backgroundColor={overlayColor}
          $overlayTextColor={overlayTextColor}
        >
          <EventDateDay>
            {startFormattedDate.getDate()} - {endFormattedDate.getDate()}
          </EventDateDay>
          <EventDateMonth>
            {startFormattedDate.toLocaleString("default", { month: "long" })}
          </EventDateMonth>
          <EventDateYear>{startFormattedDate.getFullYear()}</EventDateYear>
        </EventDate>
      );
    }
    return null;
  };

  return (
    <EventContainer
      href={"/events/" + slug}
      $backgroundColor={backgroundColor}
      $eventTextColor={eventTextColor}
    >
      <EventImage imageUrl={cover}>{renderEventDateOverlay()}</EventImage>
      <EventContent>
        <EventTitle>{title}</EventTitle>

        {/* Display event dates below the title */}
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
                <div key={index} style={{ marginTop: "5px" }}>
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
