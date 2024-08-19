import React from 'react';
import { EventContainer, EventContent, EventDate, EventDateDay, EventDateMonth, EventDateYear, EventDescription, EventImage, EventLink, EventTitle } from './Event.styled';

// Define the Event component
interface EventProps {
  title: string;
  description: string;
  imageUrl: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  url: string;
}

const Event: React.FC<EventProps> = ({ title, description, imageUrl, date, url }) => (
  <EventContainer>
    <EventImage imageUrl={imageUrl}>
      <EventDate>
        <EventDateDay>{date.day}</EventDateDay>
        <EventDateMonth>{date.month} </EventDateMonth>
        <EventDateYear>{date.year}</EventDateYear>
      </EventDate>
    </EventImage>
    <EventContent>
      <EventTitle><EventLink href={url} rel="bookmark">{title}</EventLink></EventTitle>
      <EventDescription>{description}</EventDescription>
      <EventLink href={url} rel="bookmark">Ulteriori informazioni »</EventLink>
    </EventContent>
  </EventContainer>
);

export default Event;
