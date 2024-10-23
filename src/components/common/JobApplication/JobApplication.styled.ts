import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  ${mediaRules.xsm} {
    max-width: 576px;
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
export const ButtonsContainer = styled.div`
  display: flex;
  flex: 0 0 100%;
  text-align: left;
  margin-bottom: 20px;
  color: var(--text-black-color);
  flex-direction: column;
  ${mediaRules.sm} {
    flex: 0 0 60%;
    flex-direction: row;
  }
  ${mediaRules.md} {
    flex: 0 0 60%;
    flex-direction: row;
  }
  ${mediaRules.lg} {
    flex: 0 0 55%;
    flex-direction: row;
  }
`;

export const LeftBox = styled.div`
  flex: 0 0 25%;

  ${mediaRules.sm} {
    display: none;
  }
  ${mediaRules.xsm} {
    display: none;
  }
`;
