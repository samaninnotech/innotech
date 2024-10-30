import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";
export const TabItemsSectionContainer = styled.section`
  background-color: #fff; /* Optional: Light background for the entire section */
  width: 100%;
`;
export const Header = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  margin: auto;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--black-color);

  ${mediaRules.lg} {
    max-width: 768px;
  }
`;

export const TabsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 20px;
  ${mediaRules.xsm} {
    max-width: 520px;
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

export const TabsHeader = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin: auto;
  margin-bottom: 20px;
  width: 100%;
  padding-bottom: 10px;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: nowrap;
  ${mediaRules.sm} {
    flex-direction: row;
  }
`;

export const TabContentWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TabContentContainer = styled.div`
  padding: 15px;
  border-radius: 5px;
  width: 100%;
  max-width: 1000px;
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 1.5s ease,
    transform 1.5s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContentHeading = styled.h5`
  color: #3b5772;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const ContentText = styled.div`
  padding-left: 40px;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;
