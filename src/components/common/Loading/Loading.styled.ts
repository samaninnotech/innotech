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
  background: rgba(0, 0, 0, 0.5);
  z-index: 100000;
`;

export const SpinnerStyled = styled.div`
  width: 80px;
  height: 80px;
  border: 8px solid transparent;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const SpinnerContainedContainer = styled(SpinnerContainer)`
  width: 100%;
  height: 100%;
  position: initial;
  background: none;
`;
