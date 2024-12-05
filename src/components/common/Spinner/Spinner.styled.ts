import styled, { keyframes } from "styled-components";

// Keyframes for the square animation (changing height and margin)
const grow = keyframes`
  0%, 25%, 75%, 100% {
    height: 8px; /* Default small height */
    margin-top: 6px; /* Center the smaller height */
    margin-bottom: 6px;
  }
  50% {
    height: 20px; /* Growing height */
    margin-top: 0px; /* No margin when fully grown */
    margin-bottom: 0px;
  }
`;

export const SpinnerContainer = styled.div`
  position: relative;
  // top: -100px; /* Adjust vertical position */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust for exact centering */
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it appears above other content */
`;

export const SquaresContainer = styled.div`
  display: flex;
  gap: 2px; /* Minimal space between squares */
`;

export const Square = styled.div<{ delay: number }>`
  width: 8px; /* Fixed width */
  height: 8px; /* Initial height */
  background-color: black; /* Always black */
  animation: ${grow} 1.5s linear infinite;
  animation-delay: ${(props) => props.delay}s;
`;

// Container used if spinner is inside another container
export const SpinnerContainedContainer = styled(SpinnerContainer)`
  background: none; /* Remove background if not needed */
`;
