"use client";

import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const DraftBannerContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 5rem;
  z-index: 50;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-width: 4px 0;
  border-color: #991b1b;
  border-style: solid;
  width: 100%;
  background-color: #ef4444;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaRules.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DraftText = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  line-height: 2rem;
  color: var(--white-color) fff;
  text-align: center;

  ${mediaRules.lg} {
    font-size: 1.5rem;
    margin-bottom: 0;
    text-align: left;
  }
`;

export const DisableButton = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: var(--white-color) fff;
  text-transform: uppercase;
  background-color: #991b1b;

  &:hover {
    background-color: #dc2626;
  }
`;
