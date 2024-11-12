import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

type JobOfferContainerProps = {
  isEven: boolean;
};

export const JobOfferContainer = styled.div<JobOfferContainerProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${({ isEven }) => (isEven ? "#e3e3e3" : "transparent")};
  box-shadow: var(--wp--preset--shadow--natural);
  flex-direction: column;
  ${mediaRules.sm} {
    flex-direction: row;
    align-items: center;
  }
`;

export const JobInfo = styled.div`
  flex: 1;
  padding: 2rem;
  padding-left: 0;
  ${mediaRules.sm} {
    padding: 2rem;
  }
`;

export const JobTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 5px;
  color: var(--text-black-color);
`;

export const JobType = styled.span`
  font-size: 1rem;
  color: #777;
`;

export const JobDescription = styled.div`
  flex: 2;
  font-size: 1rem;
  color: var(--text-gray-color);
  line-height: 1.74;
  padding: 1rem;
  padding-left: 0;
  ${mediaRules.sm} {
    padding: 1rem;
  }
`;

export const JobButton = styled.div`
  flex: 1;
  text-align: right;
  padding-right: 2rem;
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: var(--input-border-color);
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #cec8c8;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--input-border-color);
    text-decoration: none;
    color: var(--white-color);
  }
`;

export const ButtonText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
