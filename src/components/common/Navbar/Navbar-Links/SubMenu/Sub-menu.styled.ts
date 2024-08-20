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
  padding: 0px 1rem;

  ${mediaRules.lg} {
    display: flex;
    position: relative;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const SubmenuParentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  flex-direction: column;
  width: 100%;
`;

type SubMenuProps = {
  $showSubMenu?: boolean;
};

export const SubMenuLink = styled(Link)`
  color: gray;
  font-size: 1em;
  font-weight: bold;
  padding: 0 1rem;
  width: fit-content;
  margin: 1rem 0px;
  margin-right: 5rem;
`;

export const Element = styled.div<SubMenuProps>`
  width: fit-content;
  display: "${(props) => (props.$showSubMenu ? "flex" : "none")}";
  background-color: white;
  border-bottom: solid 1px var(--light-gray-1);
  color: black;
  max-height: 400px; /* Set a maximum height, adjust as needed */
  overflow-y: auto;
  ${mediaRules.lg} {
    position: absolute;
    top: 100%;
    left: 450px;
    flex-direction: row;
    border: solid 1px rgba(0, 0, 0, 0.24);
    border-top: 0;
  }
`;
