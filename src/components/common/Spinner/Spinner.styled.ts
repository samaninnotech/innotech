import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 100000; /* Ensure it's on top of other content */
`;

export const SpinnerStyled = styled.div`
  width: 80px; /* Spinner size */
  height: 80px; /* Ensure the spinner is circular */
  border: 8px solid transparent; /* Outer border */
  border-top-color: #3498db; /* Spinner color */
  border-radius: 50%; /* Make it circular */
  animation: ${spin} 1s linear infinite; /* Apply spinning animation */
`;

export const SpinnerContainedContainer = styled(SpinnerContainer)`
  width: 100%;
  height: 100%;
  position: initial; /* Reset position for contained usage */
  background: none; /* No background for contained version */
`;
