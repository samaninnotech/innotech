import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  position: relative;
  display: flex;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  flex-direction: column;
  margin: 0 auto;
  ${mediaRules.xsm} {
    max-width: 520px;
  }
  ${mediaRules.sm} {
    max-width: 720px;
  }
  ${mediaRules.md} {
    max-width: 940px;
  }
  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;

export const BackgroundImage = styled(Image)`
  border-radius: 5px;
  width: inherit;
  height: auto;
  z-index: 2;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--text-black-color);
  padding: 1rem;
  width: 85%;
  margin: auto;
  flex-wrap: wrap;
  max-width: 1150px;
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  text-align: left;
  color: var(--text-gray-color);
  ${mediaRules.sm} {
    font-size: 2rem;
    line-height: 1.2;
  }
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
