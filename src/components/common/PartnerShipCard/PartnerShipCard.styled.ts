// PartnerShipCard.styled.ts
import styled from 'styled-components';

// Styles for the PartnerShipCard
export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
  margin: 10px;
  flex: 1 1 300px; // Flex-grow, flex-shrink, flex-basis
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
  margin-right: 15px;

  svg {
    width: 100%;
    height: 100%;
    color: #005a87; // Match the icon color as needed
  }
`;

export const Heading = styled.h4`
  font-size: 18px;
  margin: 10px 0;
  color: #333;
`;

export const TextContent = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
  text-align: left;
`;
