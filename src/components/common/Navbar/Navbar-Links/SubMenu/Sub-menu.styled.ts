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
  margin: 1rem 0;

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
  $left?: number;
};

export const SubMenuLink = styled(Link)`
  color: white;
  font-size: 1em;
  font-weight: 300;
  width: fit-content;
  margin-right: 5rem;
  display: inline-block; /* Ensure the element wraps around the text */
  position: relative; /* Required for the pseudo-element to position correctly */

  ${mediaRules.lg} {
    color: gray;
    padding: 0 1rem;
    margin-bottom: 1rem;
    &:hover {
      text-decoration: none;
      color: var(--input-border-color);
    }

    &:before {
      content: "";
      position: absolute;
      bottom: -4px;
      width: 0;
      height: 1px;
      background-color: var(--input-border-color);
      transform: scaleX(0);
      transform-origin: left;
      transition:
        transform 0.5s ease-in-out,
        width 0.5s ease-in-out;

      ${mediaRules.lg} {
        transition: transform 0.5s ease-in-out;
      }
    }

    &:hover:before {
      transform: scaleX(0.8);
      width: 90%;
    }
  }
`;

export const Element = styled.div<SubMenuProps>`
  width: fit-content;
  display: ${(props) => (props.$showSubMenu ? "flex" : "none")};
  color: black;
  flex-direction: column;
  height: auto;

  ${mediaRules.lg} {
    position: absolute;
    top: 80px;
    left: ${(props) => props.$left}px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
    border-top: 0;
    background-color: white;
    max-height: 600px;
    overflow-y: auto;
    height: auto;
  }
`;
