import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

type EventContainerProps = {
  $backgroundColor: string;
  $eventTextColor: string;
};
export const EventContainer = styled(Link)<EventContainerProps>`
  display: flex;
  align-items: stretch;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  min-height: 120px;
  color: ${({ $eventTextColor }) => $eventTextColor || "var(--innotech-color)"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || ""};
  &:hover {
    text-decoration: none;
  }
`;

export const EventImage = styled.div<{ imageUrl: string }>`
  width: 200px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-right: 15px;
  position: relative;
`;

type OverlayProps = {
  $backgroundColor: string;
  $overlayTextColor: string;
};

export const EventDate = styled.div<OverlayProps>`
  position: absolute;
  background-color: ${({ $backgroundColor }) => $backgroundColor || ""};
  color: ${({ $overlayTextColor }) => $overlayTextColor || ""};
  padding: 5px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  font-size: 1em;
  height: 100%;
  width: 40%;
  box-shadow: inset 2px 0 14px -2px #22486a;
  bottom: 0;
  left: 0;
  text-align: center;
  justify-content: center;
  opacity: 0.8;
  transition: width 0.3s ease;

  span {
    display: block;
  }

  ${EventContainer}:hover & {
    width: 100%;
  }
`;

export const EventDateDay = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

export const EventDateMonth = styled.span`
  font-size: 0.8em;
`;
export const EventDateYear = styled.span`
  font-size: 0.8em;
`;

export const EventContent = styled.div`
  flex: 1;
  padding-top: 10px;
`;

export const EventTitle = styled.h2`
  font-size: 0.8em;
  margin: 0;
  ${mediaRules.xsm} {
    font-size: 1em;
  }
  ${mediaRules.sm} {
    font-size: 1.2em;
  }
`;

export const EventDescription = styled.p`
  font-size: 0.9em;
`;

export const EventLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const EventTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const EventClockIcon = styled.div`
  margin-right: 8px;
  color: #555;
  font-size: 1.2rem;
`;

export const DateWrapper = styled.div`
  margin-top: 1rem;
  font-size: 0.6em;

  svg {
    margin-right: 5px;
  }
  ${mediaRules.xsm} {
    font-size: 0.8em;
  }
  ${mediaRules.sm} {
    font-size: 1em;
  }
`;
