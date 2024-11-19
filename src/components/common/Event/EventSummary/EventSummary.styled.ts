import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 50px 0;
  text-align: center;
  width: 100%;
`;

export const InnerContainer = styled.section`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  ${mediaRules.xsm} {
    max-width: 576px;
  }

  ${mediaRules.sm} {
    max-width: 720px;
    flex-direction: row;
  }

  ${mediaRules.md} {
    max-width: 940px;
  }

  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;

export const EventSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #e5e5e5;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem 3rem;
  padding-right: 10rem;
  text-align: left;
  ${mediaRules.xsm} {
    max-width: 576px;
  }

  ${mediaRules.sm} {
    max-width: 720px;
    flex-direction: row;
  }

  ${mediaRules.md} {
    max-width: 940px;
  }

  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;

// Column style (flexible)
export const Column = styled.div`
  // flex: 1;
  margin-right: 20px;
`;

// Column Title (Label)
export const ColumnTitle = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: black;
`;

export const SubTitle = styled.div`
  font-weight: bold;
  font-size: 0.8rem;
  color: black;
  margin-bottom: 1rem;
`;
// Column Content (Data)
export const ColumnContent = styled.div`
  font-size: 0.8rem;
  color: black;
  font-weight: 300;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const CalendarButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #21759b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.7rem;
  transition: background-color 0.3s;
`;
