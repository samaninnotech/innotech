import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import styled from "styled-components";

export const Section = styled.section`
  width: 85%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  height: 95vh;
  margin-bottom: 2rem;
`;

export const BackgroundImage = styled(Image)`
  border-radius: 5px;
  width: 80vw;
  height: auto;
  z-index: -1;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--white-color);
  padding: 1rem;
  width: 85%;
  margin: auto;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  text-align: left;
  color: var(--white-color);

  ${mediaRules.lg} {
    font-size: 2.25rem;
    line-height: 1.2;
  }
`;

export const Tag = styled(Link)`
  color: var(--white-color);
  background-color: var(--accent-color-darker);
  font-weight: 800;
  padding: 0.5rem;
  margin: 0 0.25rem;
`;

export const EventDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CalendarIcon = styled(FaCalendarAlt)`
  margin-right: 0.5rem;
  color: var(--event-text-color);
  font-size: 1.25rem;
`;

export const Date = styled.span`
  color: var(--event-text-color);
  font-size: 1rem;
  margin: 1rem 0;
`;

export const MultipleEventDate = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: left;
  margin: 1rem 1.2rem;
  svg {
    width: 15px;
  }
`;
