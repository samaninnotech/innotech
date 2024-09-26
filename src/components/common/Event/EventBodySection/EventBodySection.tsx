"use client";
import { Event } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import { FC, useCallback, useEffect, useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";
import { IoLogoTwitter } from "react-icons/io";
import {
  BubbleContainer,
  ButtonWrapper,
  IconsInner,
  InnerContainer1,
  Section,
  ShareBubble,
  ShareButton,
  ShareText,
  Text,
} from "./EventBodySection.styled";

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
      <BubbleContainer>
        <ButtonWrapper>
          <ShareText>Share this event</ShareText>
          <ShareButton
            onClick={toggleBubble}
            className="share-button-container"
          >
            <GoShareAndroid />
          </ShareButton>
        </ButtonWrapper>
        <ShareBubble className={showBubble ? "show" : ""}>
          <IconsInner>
            <button
              onClick={() =>
                openInNewTab(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                )
              }
            >
              <BiLogoFacebook />
            </button>
          </IconsInner>
          <IconsInner>
            <button
              onClick={() =>
                openInNewTab(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(event.title)}`,
                )
              }
            >
              <IoLogoTwitter />
            </button>
          </IconsInner>
          <IconsInner>
            <button
              onClick={() =>
                openInNewTab(
                  `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(event.title)}`,
                )
              }
            >
              <FaLinkedinIn />
            </button>
          </IconsInner>
        </ShareBubble>
      </BubbleContainer>
    </Section>
  );
};

export default EventBodySectionComponent;
