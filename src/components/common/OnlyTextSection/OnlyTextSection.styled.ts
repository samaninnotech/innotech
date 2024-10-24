import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

type ElementProps = { $height?: string };

export const OnlyText = styled.div<ElementProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;
  margin: auto;
  margin-bottom: 2rem;
  height: ${({ $height }) => $height || "auto"} !important;
  ${mediaRules.lg} {
    max-width: 1170px;
  }
  h2 {
    text-align: center;
  }
`;
