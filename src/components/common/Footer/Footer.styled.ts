// Footer.styled.ts
import { mediaRules } from '@/themes/media-breakpoints';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #f8f9fa; /* Light background color for the footer */
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
  flex-direction: column;

  ${mediaRules.sm}{
    max-width: 720px; 
  }
  ${mediaRules.md}{
    max-width: 940px; 
    flex-direction: row;
  }
  ${mediaRules.lg}{
    flex-direction: row;
    max-width: 1200px; 
  }
`;

export const FooterColumn = styled.div`
 &:first-child {
    flex: 0 0 30%; /* First child takes 40% of the width */
    max-width: 40%; /* Ensures the first child does not exceed 40% */
  }

  &:not(:first-child) {
    flex: 1; /* Remaining children share the remaining 60% equally */
    max-width: calc(60% / 1.5); /* Adjusts the max-width to divide the remaining space equally */
  }  
  padding: 0 15px;

  &.logo-column {
    display: flex;
    flex-direction: column;
    // align-items: center;
  }

  &.links-column, &.social-column {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
  }
`;

export const FooterLogo = styled.a`
  display: block;
  margin-bottom: 20px;
  // text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const FooterHeading = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const FooterList = styled.div`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
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
  // text-align: center;
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
