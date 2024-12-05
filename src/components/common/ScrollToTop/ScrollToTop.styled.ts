import styled, { css, keyframes } from "styled-components";

// Define the exit animation for the arrow to move up and disappear
const exitAnimation = keyframes`
  0% {
    transform: translateY(0); /* Start at the normal position */
    opacity: 1; /* Fully visible */
  }
  100% {
    transform: translateY(-100%); /* Move up and disappear */
    opacity: 0; /* Fade out */
  }
`;

// Define the entrance animation for the new arrow to come from the bottom
const enterAnimation = keyframes`
  0% {
    transform: translateY(100%); /* Start from below the button */
    opacity: 0; /* Start hidden */
  }
  100% {
    transform: translateY(0); /* Move to its normal position */
    opacity: 1; /* Fully visible */
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  background-color: var(--innotech-color);
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 30px;
  font-weight: 200;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:focus {
    outline: none;
  }
`;

export const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.span<{ isExiting: boolean }>`
  position: absolute;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  ${(props) =>
    props.isExiting
      ? css`
          animation: ${exitAnimation} 0.3s forwards;
        `
      : css`
          animation: ${enterAnimation} 0.3s forwards;
        `}
`;
