import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const JobOffersContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  ${mediaRules.xsm} {
    max-width: 520px;
    margin: 0 auto;
  }
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

export const Header = styled.h2`
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  margin: auto;
  margin-bottom: 4rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--black-color);
  ${mediaRules.lg} {
    max-width: 768px;
  }
`;
