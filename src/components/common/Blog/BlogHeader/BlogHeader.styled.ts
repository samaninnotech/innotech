import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import styled from "styled-components";

export const Section = styled.section`
  width: 85%;
  position: relative;
  top: 120px;
  padding-top: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  height: 80vh;
`;

export const BackgroundImage = styled(Image)`
  border-radius: 5px; /* 5px corner radius */
  width: 80vw; /* Optional: Adjust image width */
  height: auto;
  z-index: -1;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--white-color);
  margin-top: 7rem;
  padding: 1rem;
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  text-align: center;
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

export const PublishedDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CalendarIcon = styled(FaCalendarAlt)`
  margin-right: 0.5rem;
  color: var(--blog-text-color);
  font-size: 1.25rem;
`;
export const Date = styled.span`
  color: var(--blog-text-color);
  font-size: 1rem;
`;
