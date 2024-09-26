"use client";

import { FC } from "react";
import {
    BackgroundImage,
    CalendarIcon,
    Date,
    EventDate,
    Section,
    TextContainer,
    Title,
} from "./EventHeader.styled";

type EventHeaderProps = {
  title: string;
  subtitle?: string;
  imgSrc: string;
  eventDate?: string;
};

const EventHeaderComponent: FC<EventHeaderProps> = ({
  title,
  subtitle,
  imgSrc,
  eventDate,
}) => (
  <>
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
    <TextContainer className="container">
      <Title>{title}</Title>
      {subtitle && <p>{subtitle}</p>}
      {!!eventDate && (
        <EventDate>
          <CalendarIcon className="calendar-icon" />
          <Date>{eventDate}</Date>
        </EventDate>
      )}
    </TextContainer>
  </>
);

export default EventHeaderComponent;
