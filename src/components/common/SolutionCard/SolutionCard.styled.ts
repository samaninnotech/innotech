import styled, { keyframes } from "styled-components";

// Keyframes for drawing the icon
const draw = keyframes`
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const Card = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: none;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  font-size: 2px !important;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 1.74;
  box-sizing: border-box;
  border: 1px solid rgba(128, 128, 128, 0.3);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: none;

    & > div svg {
      animation: ${draw} 5s forwards;
    }
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 60px;
  margin: 20px 0;
  position: relative;
  svg {
    width: 100%;
    height: 100%;
    stroke: #005a87;
    fill: none;
    stroke-width: 1.7;
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }
`;

export const Heading = styled.h4`
  font-size: 24px;
  margin: 10px 0;
  font-weight: 500;
  color: var(--text-black-color);
`;

export const TextContent = styled.p`
  font-size: 15px;
  line-height: 1.74;
  margin-bottom: 15px;
  color: var(--text-gray-color);
  font-weight: 400;
`;

export const LearnMoreLink = styled.a`
  display: inline-block;
  color: #005a87; // Blue color as per the icon stroke color
  font-size: 15px;
  text-decoration: none;
  position: relative;
  margin-bottom: 10px;
  margin-top: auto; // This pushes the link to the bottom

  .arrow-icon {
    margin-left: 5px;
    transition: transform 0.3s ease;
  }

  &:hover .arrow-icon {
    transform: translateX(5px);
  }
`;
