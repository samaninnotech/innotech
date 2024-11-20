"use client";
import { Event } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import { FC, useCallback, useEffect, useState } from "react";
import { InnerContainer1, Section, Text } from "./EventBodySection.styled";

import { fallbackLocale } from "@/i18n/settings";
import useTranslation from "@/i18n/useTranslation";
import components from "../../BlockContent/components";

type EventBodySectionProps = {
  event: Event;
};

const EventBodySectionComponent: FC<EventBodySectionProps> = ({ event }) => {
  const { locale: currentLocale } = useTranslation();
  const [showBubble, setShowBubble] = useState(false);

  const shareUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}${currentLocale !== fallbackLocale ? "/" + currentLocale : ""}/events/${event.slug}`;

  const openInNewTab = useCallback((url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  }, []);

  const toggleBubble = () => setShowBubble((prev) => !prev);

  // Close bubble if clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest(".share-button-container")) {
      setShowBubble(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Section>
      <InnerContainer1>
        <Text>
          <PortableText value={event.body} components={components} />
        </Text>
      </InnerContainer1>
    </Section>
  );
};

export default EventBodySectionComponent;
