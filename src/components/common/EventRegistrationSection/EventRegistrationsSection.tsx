"use client";
import { EventRegistrationCardType } from "@/sanity/types";
import React from "react";
import EventRegistrationCard from "../EventRegistrationCard/EventRegistrationCard";
import {
  EventRegistrationsContainer,
  Header,
} from "./EventRegistrationsSection.styled";

type EventRegistrationsSectionProps = {
  header: string;
  eventRegistrationCards: EventRegistrationCardType[];
};

const EventRegistrationsSection: React.FC<EventRegistrationsSectionProps> = ({
  header,
  eventRegistrationCards,
}) => {
  return (
    <EventRegistrationsContainer>
      <Header>{header}</Header>
      {eventRegistrationCards.map((event, index) => (
        <EventRegistrationCard
          key={index}
          title={event.title}
          images={event.images}
          buttonLink={event.buttonLink}
          type={event.type}
        />
      ))}
    </EventRegistrationsContainer>
  );
};

export default EventRegistrationsSection;
