import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const OnlyText = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  margin: auto;
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 900;

  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;
