// Footer.styled.ts
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #f8f9fa; /* Light background color for the footer */
  padding: 40px 0;
  border-top: 1px solid #e9ecef;
  width: 100%;
    margin-top: 500px;

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
`;

export const FooterColumn = styled.div`
  flex: 1;
  padding: 0 15px;

  &.logo-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &.links-column, &.social-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.a`
  display: block;
  margin-bottom: 20px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const FooterHeading = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 10px;

    a {
      color: #007bff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const FooterText = styled.p`
  font-size: 0.9em;
  color: #6c757d;
  text-align: center;
  margin: 20px 0;
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
