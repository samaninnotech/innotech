import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--background-gray-color);
  top: -230px;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 10px;
  width: 100%;
  max-width: 100%;

  ${mediaRules.sm} {
    max-width: 720px;
  }
  ${mediaRules.md} {
    max-width: 940px;
  }
  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    display: block;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    text-align: center;
  }

  ${mediaRules.md} {
    .swiper-pagination {
      display: none;
    }
  }
`;

export const Spacer = styled.div`
  height: 60px;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  bottom: -30px;
`;
