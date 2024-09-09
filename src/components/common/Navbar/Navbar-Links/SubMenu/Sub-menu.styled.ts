"use client";
import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

type SubmenuInnerContainerProps = {
  flexAlignment: string;
};
export const SubmenuBlockContainer = styled.div<SubmenuInnerContainerProps>`
  justify-content: flex-start;
  width: 100%;
  z-index: 2;

  ${mediaRules.lg} {
    display: flex;
    position: relative;
    width: 100%;
    margin-bottom: 0;
    padding: 0px 1rem;
  }
`;

export const SubmenuParentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
`;

type SubMenuProps = {
  $showSubMenu?: boolean;
};

export const SubMenuLink = styled(Link)`
  color: white;
  font-size: 1em;
  font-weight: bold;
  width: fit-content;
  margin: 1rem 0px;
  margin-right: 5rem;
  padding: 3rem 0;
  ${mediaRules.lg} {
    color: gray;
    padding: 0 1rem;
  }
`;

export const Element = styled.div<SubMenuProps>`
  width: fit-content;
  display: "${(props) => (props.$showSubMenu ? "flex" : "none")}";
  border-bottom: solid 1px var(--light-gray-1);
  color: black;
  flex-direction: column;
  height: 100%;
  ${mediaRules.lg} {
    position: absolute;
    top: 100%;
    flex-direction: column;
    left: 400px;
    border: solid 1px rgba(0, 0, 0, 0.24);
    border-top: 0;
    background-color: white;
    max-height: 600px; /* Set a maximum height, adjust as needed */
    overflow-y: auto;
    height: auto;
  }
`;
