import styled from "styled-components";

export const SpinnerStyled = styled.div`
  width: 80px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--accent-gradient-background);
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;

  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: yellow;
  z-index: 100;
  background: #000000b0;
  backdrop-filter: blur(2px);

  ${SpinnerStyled} {
    z-index: 101;
  }
`;

export const SpinnerContainedContainer = styled(SpinnerContainer)`
  width: 100%;
  height: 100%;
  position: initial;
  background: none;
`;
