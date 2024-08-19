// Info-section.styled.js

"use client";
import Link from "@/i18n/Link";
import styled from "styled-components";

export const MainSectionContainer = styled.div`
  width: 100%;
  p {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

export const SectionLinksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 1em;
`;

export const SectionLink = styled(Link)`
  font-size: 1rem;

  &:before {
    content: "> ";
    font-weight: 600;
  }

  &:hover {
    text-decoration: underline;
  }
`;
