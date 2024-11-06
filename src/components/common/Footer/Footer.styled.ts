// Footer.styled.ts
import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  width: 100%;
  padding: 2rem 1rem 0 1rem;
`;

export const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  ${mediaRules.xsm} {
    max-width: 572px;
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
  a {
  }
`;

export const FooterInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  max-width: 576px;
  justify-content: flex-start;
  flex-direction: column;

  ${mediaRules.sm} {
    max-width: 720px;
  }
  ${mediaRules.md} {
    max-width: 940px;
  }
  ${mediaRules.lg} {
    max-width: 1200px;
    flex-direction: row;
  }
`;
export const CopyRightRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 60px;
  max-width: 576px;
  justify-content: flex-start;
  flex-direction: column-reverse;

  ${mediaRules.sm} {
    max-width: 720px;
    flex-direction: row;
  }
  ${mediaRules.md} {
    max-width: 940px;
    flex-direction: row;
  }
  ${mediaRules.lg} {
    max-width: 1200px;
    flex-direction: row;
  }
`;
export const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  max-width: 576px;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 0 0 0;
  flex: 1;
  ${mediaRules.sm} {
    max-width: 720px;
    flex-direction: row;
  }
  ${mediaRules.md} {
    max-width: 940px;
    flex-direction: row;
  }
  ${mediaRules.lg} {
    max-width: 1200px;
    flex-direction: row;
  }
`;
export const FooterColumn = styled.div`
  &:first-child {
    flex: 0 0 30%;
    max-width: 40%;
  }

  &:not(:first-child) {
    flex: 1;
    max-width: calc(60% / 1.5);
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const FooterLogo = styled(Link)`
  display: block;
  margin-bottom: 20px;
  padding-top: 20px;
`;

export const FooterHeading = styled.h2`
  font-size: 1em;
  margin-bottom: 10px;
  color: var(--text-black-color);
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  color: var(--text-gray-color);

  li {
    margin-bottom: 20px;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9em;
  color: var(--text-gray-color);
  margin-top: 20px;
  margin-bottom: 0 !important;
  width: 100%;
  ${mediaRules.sm} {
    width: 50%;
  }
  ${mediaRules.md} {
    width: 50%;
  }
  ${mediaRules.md} {
    width: 55%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;

  ${mediaRules.sm} {
    width: 50%;
    justify-content: flex-end;
    align-items: flex-end;
  }

  ${mediaRules.md} {
    justify-content: flex-end;
    align-items: flex-end;
    width: 50%;
  }

  a {
    position: relative;
    color: #495057;
    margin: 0 10px;
    font-size: 1.2em;
    width: 50px;
    height: 50px;
    border: 2px solid var(--light-gray);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      border-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      color: white;
      border-color: var(--innotech-color);
      background-color: var(--innotech-color);
    }
  }
`;

export const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  color: var(--text-gray-color);

  li {
    margin-bottom: 20px;
  }
`;

export const Bubble = styled.div`
  position: absolute;
  top: -3rem;
  transform: translateX(-50%);
  background-color: var(--innotech-color);
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  z-index: 10;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  color: white;
  font-size: 0.7em;
  &:after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid var(--innotech-color);
  }

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
