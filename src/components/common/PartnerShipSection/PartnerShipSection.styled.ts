import styled from 'styled-components';

// Container for the entire section
export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  transition: opacity 0.5s ease;
  display: flex;
  justify-content: center;
`;

// Inner container to control responsiveness
export const InnerContainer = styled.div`
   @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (max-width: 1199px) and (min-width: 991px) {
    width: 940px;
  }

  @media (max-width: 990px) and (min-width: 769px) {
    width: 720px;
  }

  @media (max-width: 768px) {
    width: 100%; /* Shrink to the size of the window */
  }
  padding: 0;
`;

// Header with the section title
export const Header = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  justify-content: center; /* Center the header content */

  h4 {
    font-size: 24px;
    color: #333;
    text-align: center; /* Center text in header */
  }

  mark {
    background: none;
    color: #005a87;
    font-weight: bold;
  }
`;

// Container for the card items
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Default to 2 columns for small screens */
  grid-column-gap: 5px; /* Adjust the gap as needed */
  grid-row-gap: 5px; /* Adjust the gap as needed */
  width: 100%;
 @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr); /* Adjust for very small screens */
  }
  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 990px) {
    justify-content: center;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

// Card styling
export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  margin: 10px;
  flex: 1 1 300px; /* Flexible basis for cards */
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%; /* Full width on small screens */
  }
`;

// Icon container styling
export const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;

  svg {
    width: 100%;
    height: 100%;
    color: #005a87; // Match the icon color as needed
  }
`;

// Heading styling
export const Heading = styled.h4`
  font-size: 18px;
  margin: 10px 0;
  color: #333;
`;

// Text content styling
export const TextContent = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
`;
