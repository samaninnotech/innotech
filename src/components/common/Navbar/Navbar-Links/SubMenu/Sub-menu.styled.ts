"use client";
import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

type SubmenuInnerContainerProps = {
  flexAlignment: string;
};
export const SubmenuBlockContainer = styled.div<SubmenuInnerContainerProps>`
  display: flex;
  justify-content: ${(props) => props.flexAlignment};
  position: relative;
  width: 100%;
  padding: 0.75rem 0.5rem;
  z-index: 2;
  margin-bottom: 1.25rem;

  ${mediaRules.lg} {
    display: flex;
    padding: 1.25rem;
    position: relative;
    width: 50%;
    margin-bottom: 0;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    &:nth-child(even) {
      padding-right: 4em;
      &:after {
        right: 0;
        background-color: var(--submenu-bg-color);
      }
    }

    &:nth-child(odd) {
      padding-left: 4em;
      &:after {
        left: 0;
        background-color: var(--light-gray-1);
      }
    }
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

export const Element = styled.div<SubMenuProps>`
  width: 30%;
  display: "${(props) => (props.$showSubMenu ? "flex" : "none")}";
  background-color: white;
  border-bottom: solid 1px var(--light-gray-1);
  color: black;
  ${mediaRules.lg} {
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: row;
    overflow-y: visible;
    border: solid 1px rgba(0, 0, 0, 0.24);
    border-top: 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0 5px 6px;
  }
`;
