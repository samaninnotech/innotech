// VideoSection.styled.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background: transparent;
  margin: 0 auto;

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 500px;
  }
`;

export const CentralImage = styled.img`
  position: absolute;
  width: 30%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  z-index: 10;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 120px;
  height: 130px;
  border-radius: 5px;
  z-index: 5;
  animation: moveUpDown 4s infinite ease-in-out;

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

  @media (min-width: 768px) {
    width: 20%;
  }

  @media (min-width: 1024px) {
    width: 15%;
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: #25567a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;

  .play-icon {
    font-size: 24px;
    color: #fff;
    z-index: 3;
    position: relative;
  }

  .pulse {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.5px solid #25567a;
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
`;

export const VideoContainer = styled.div`
  width: 80%;
  height: 80%;
  max-width: 800px;
  max-height: 450px;
  background: #000;

  @media (min-width: 768px) {
    width: 90%;
    height: 90%;
  }

  @media (min-width: 1024px) {
    width: 80%;
    height: 80%;
  }
`;
