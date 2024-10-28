import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  max-height: 450px;
  position: relative;
  overflow: hidden;
`;

export const BannerImage = styled(Image)<{ $bottomOfImage: string }>`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: top;
  position: relative;
  ${mediaRules.md} {
    bottom: ${({ $bottomOfImage }) =>
      `${$bottomOfImage ? parseInt($bottomOfImage) - 20 : 200}`}px;
  }
  ${mediaRules.lg} {
    bottom: ${({ $bottomOfImage }) => $bottomOfImage || "200"};
  }
`;

export const BannerHeader = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-black-color);
  z-index: 2;
  width: 100%;
  ${mediaRules.xsm} {
    font-size: 2rem;
    top: 20%;
  }
  ${mediaRules.sm} {
    font-size: 2rem;
    top: 20%;
  }
  ${mediaRules.md} {
    font-size: 3rem;
    top: 20%;
  }
  ${mediaRules.lg} {
    font-size: 4rem;
    top: 30%;
  }
`;
export const BannerText = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: var(--text-black-color);
  font-size: 1.5rem;
  text-align: center;
  z-index: 1;
  padding: 0 20px;
  ${mediaRules.md} {
    top: 35%;
  }
  ${mediaRules.lg} {
    top: 50%;
  }
`;
