import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  transition: opacity 0.5s ease;
  display: flex;
  justify-content: center;
`;

export const InnerContainer1 = styled.div`
  width: 100%;
  ${mediaRules.xsm} {
    max-width: 570px;
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

export const InnerContainer2 = styled.div`
  padding: 0 15px;
  width: 100%;
`;

export const InnerContainer3 = styled.div``;

export const Header = styled.h3`
  font-size: 2.5rem;
  color: var(--text-black-color);
  margin-bottom: 3rem;
  line-height: 1.5;
  width: 60%;
  text-align: center;
  width: 100%;
`;

export const Paragraph = styled.div`
  flex: 0 0 55%;
  text-align: left;
  margin-bottom: 20px;
  color: #696969;
`;

export const RightBox = styled.div`
  flex: 0 0 25%;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 20px;

  ${mediaRules.sm} {
    flex-direction: column;
    align-items: center;
  }
  ${mediaRules.md} {
    justify-content: center;
  }
  ${mediaRules.lg} {
    justify-content: space-around;
  }
`;

export const ManagersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 5px;
  max-width: 1200px;
  width: 60%;

  ${mediaRules.sm} {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
  ${mediaRules.md} {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
  ${mediaRules.lg} {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
`;

export const EmployeesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 5px;
  width: 60%;

  ${mediaRules.sm} {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
  ${mediaRules.md} {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
  ${mediaRules.lg} {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
`;

export const Spacer = styled.div`
  height: 124px;
`;
