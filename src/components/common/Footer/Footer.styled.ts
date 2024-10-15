// Footer.styled.ts
import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #f8f9fa;
  padding: 40px 0;
  border-top: 1px solid #e9ecef;
  width: 100%;
  margin-top: 100px;
`;

export const FooterContainer = styled.div`
  width: 100%;
`;

export const FooterInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  max-width: 576px;

  ${mediaRules.sm} {
    max-width: 720px;
  }
  ${mediaRules.md} {
    max-width: 940px;
    flex-direction: row;
  }
  ${mediaRules.lg} {
    flex-direction: row;
    max-width: 1200px;
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
  padding: 0 15px;
`;

export const FooterLogo = styled(Link)`
  display: block;
  margin-bottom: 20px;
`;

export const FooterHeading = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  li {
    margin-bottom: 20px;

    a {
      color: black;
      text-decoration: none;
    }
  }
`;

export const FooterText = styled.p`
  font-size: 0.9em;
  color: #6c757d;
  margin: 20px 0;
  width: 100%;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: #495057;
    margin: 0 10px;
    font-size: 1.5em;

    &:hover {
      color: #007bff;
    }
  }
`;

// New container for services (without links)
export const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  li {
    margin-bottom: 20px;
    color: black;
  }
`;
