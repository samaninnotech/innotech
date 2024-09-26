import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import styled from "styled-components";

export const LoadMoreButton = styled.button`
  background: var(--accent-gradient-background);
  padding: 0.5rem 1.5rem;
  margin: 0.5rem auto;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const EventTitle = styled.h3`
  margin: 0.25rem;
  padding: 0 1rem;
`;

export const EventDescription = styled.p`
  margin-top: 0.25rem;
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: var(--text-light-color);
  padding: 0 1rem;
  text-align: left;
`;

export const EventDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  svg {
    width: 15px;
  }
`;

export const EventImage = styled(Image)`
  object-fit: "cover";
  object-position: "top";
  width: "100%";
  border-radius: 0.25rem;
`;

export const ImageContainer = styled.picture`
  position: relative;
  display: block;
  margin-bottom: 1rem;
  ${mediaRules.md} {
  }
`;

export const EventTileStyled = styled(Link)`
  flex: 1 1 30%;
  max-width: 770px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    text-decoration: none;
  }
`;

export const LearnMoreLink = styled.p``;

export const SectionWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background-color: #f8f8f8;
  margin: 0 auto;
  top: 120px;
  padding-top: 120px;
  padding-bottom: 80px;
`;

export const TilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 40px;
  margin: 0 auto;
  align-content: center;
  justify-content: flex-start;
  ${mediaRules.md} {
    max-width: 910px;
    gap: 20px;
  }
  ${mediaRules.lg} {
    max-width: 1200px;
    gap: 40px;
  }
`;
export const CalendarIcon = styled(FaCalendarAlt)`
  margin-right: 0.5rem;
  color: var(--blog-text-color);
  font-size: 1.25rem;
`;

export const MonthHeading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color: var(--accent-color);

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 2px solid #ddd;
    margin: 0 1rem;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start; /* Align items to the start */
  width: 100%; /* Full width of the parent */
  padding: 1rem; /* Optional padding */

  /* Ensure the image and description are responsive */
  ${ImageContainer} {
    flex: 0 0 auto; /* Don't allow the image to grow */
    margin-right: 1rem; /* Space between image and description */
  }

  ${EventDescription} {
    flex: 1; /* Allow the description to fill the remaining space */
    overflow: hidden; /* Prevent overflow */
  }
`;
