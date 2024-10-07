import { mediaRules } from "@/themes/media-breakpoints";
import styled, { keyframes } from "styled-components";

type RowContainerProps = {
  backgroundImage: string;
};

const moveUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const RowContainer = styled.div<RowContainerProps>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 120vh;
  padding: 0px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  overflow: visible !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: -150px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 1.74;
  color: white;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Adjust overlay color and opacity */
    z-index: 1;
  }
`;

export const ColumnContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 15px;
  z-index: 2;
  box-sizing: inherit;
  h2 {
    font-size: 30px;
    line-height: 1.2;
    margin: 1rem !important;
  }
  ${mediaRules.lg} {
    h2 {
      font-size: 70px;
      line-height: 1.2;
      margin: 1rem !important;
    }
  }
`;

export const Spacer = styled.div`
  height: 20px; /* Adjust spacer height as needed */
`;

export const Heading = styled.div<{ align: string }>`
  text-align: ${({ align }) => align};
  animation: ${moveUp} 1s ease-out;
  z-index: 2; /* Ensure content is above the overlay */
`;

export const Separator = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 2; /* Ensure separator is above the overlay */

  svg {
    display: block;
    width: 100%;
    height: 80px;
    fill: #f8f8f8;
  }
`;
