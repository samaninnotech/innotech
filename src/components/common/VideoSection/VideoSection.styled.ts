import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background: transparent;

  ${mediaRules.xsm} {
    height: 300px;
  }
  ${mediaRules.sm} {
    height: 400px;
  }
  ${mediaRules.md} {
    height: 500px;
    margin-bottom: 2rem;
  }
  ${mediaRules.lg} {
    height: 700px;
  }
`;

export const CentralImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  z-index: 10;
  width: 60%;
  height: 35%;
  ${mediaRules.xsm} {
    width: 40%;
    height: 55%;
  }
  ${mediaRules.sm} {
    width: 40%;
    height: 60%;
  }
  ${mediaRules.md} {
    width: 40%;
    height: 60%;
  }
  ${mediaRules.lg} {
    width: 40%;
    height: 50%;
  }
`;

export const LeftTopImage = styled(Image)`
  position: absolute;
  border-radius: 5px;
  z-index: 5;
  animation: moveUpDown 4s infinite ease-in-out;
  top: 5%;
  left: 15%;
  width: 20%;
  height: 15%;
  display: none;
  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  ${mediaRules.xsm} {
    width: 20%;
    height: 15%;
  }
  ${mediaRules.sm} {
    width: 20%;
    height: 40%;
  }
  ${mediaRules.md} {
    width: 20%;
    height: 30%;
    display: block;
  }
  ${mediaRules.lg} {
    width: 20%;
    height: 30%;
    display: block;
  }
`;
export const LeftBottomImage = styled(Image)`
  position: absolute;
  border-radius: 5px;
  z-index: 5;
  animation: moveUpDown 4s infinite ease-in-out;
  top: 70%;
  left: 15%;
  width: 20%;
  height: 15%;
  display: none;

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  ${mediaRules.xsm} {
    width: 20%;
    height: 15%;
  }
  ${mediaRules.sm} {
    width: 20%;
    height: 40%;
  }
  ${mediaRules.md} {
    width: 20%;
    height: 30%;
    display: block;
  }
  ${mediaRules.lg} {
    width: 20%;
    height: 30%;
    display: block;
  }
`;
export const RightTopImage = styled(Image)`
  position: absolute;
  border-radius: 5px;
  z-index: 5;
  animation: moveUpDown 4s infinite ease-in-out;
  top: 5%;
  left: 65%;
  width: 20%;
  height: 15%;
  display: none;

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  ${mediaRules.xsm} {
    width: 20%;
    height: 15%;
  }
  ${mediaRules.sm} {
    width: 20%;
    height: 40%;
  }
  ${mediaRules.md} {
    width: 20%;
    height: 30%;
    display: block;
  }
  ${mediaRules.lg} {
    width: 20%;
    height: 30%;
    display: block;
  }
`;
export const RightBottomImage = styled(Image)`
  position: absolute;
  border-radius: 5px;
  z-index: 5;
  animation: moveUpDown 4s infinite ease-in-out;
  top: 70%;
  left: 65%;
  width: 20%;
  height: 15%;
  display: none;

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  ${mediaRules.xsm} {
    width: 20%;
    height: 15%;
  }
  ${mediaRules.sm} {
    width: 20%;
    height: 40%;
  }
  ${mediaRules.md} {
    width: 20%;
    height: 30%;
    display: block;
  }
  ${mediaRules.lg} {
    width: 20%;
    height: 30%;
    display: block;
  }
`;
export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: var(--innotech-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;

  .play-icon {
    font-size: 24px;
    color: var(--white-color);
    z-index: 3;
    position: relative;
  }

  .pulse {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.5px solid var(--innotech-color);
    border-radius: 50%;
    animation: pulseEffect 3s infinite;
    z-index: 1;

    &:nth-child(2) {
      animation-delay: 1.5s;
    }
  }

  @keyframes pulseEffect {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }
`;

export const VideoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 80%;
  max-width: 800px;
  max-height: 450px;
  background: var(--black-color);

  ${mediaRules.sm} {
    width: 90%;
    height: 90%;
  }

  ${mediaRules.lg} {
    width: 100%;
    height: 80%;
  }
`;
