"use client";
import Link from "@/i18n/Link";
import styled from "styled-components";

type ElementProps = {
  $margin?: string;
  $bgColor?: string;
  $textColor?: string;
};

export const Element = styled(Link)<ElementProps>`
  background: ${({ $bgColor }) => $bgColor || "var(--accent-color)"};
  color: ${({ $textColor }) => $textColor || "var(--accent-contrast-color)"};
  font-size: 1em;
  font-weight: bold;
  margin: ${(props) => props.$margin || "1em"};
  padding: 0.8rem 1.5rem;
  border-radius: 0.26rem;
  border-bottom-color: var(--light-gray-1);
  border-bottom-radius: 0.25rem;
  width: fit-content;
  &:hover {
    background-color: ${({ $textColor }) =>
      $textColor || "var(--accent-contrast-color)"};
    color: ${({ $bgColor }) => $bgColor || "var(--accent-color)"};
    text-decoration: none;
  }
  transition-duration: 300ms;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
