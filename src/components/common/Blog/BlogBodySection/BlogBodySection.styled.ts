"use client";
import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const InnerContainer1 = styled.div`
  margin: 1.25rem auto 0 auto;
  width: 65%;
  line-height: 1.8;
  text-align: justify;
  color: var(--blog-text-color);
  display: flex;
  justify-content: center;
  max-width: 640px;

  ${mediaRules.md} {
    max-width: 768px;
  }

  ${mediaRules.lg} {
    max-width: 1024px;
  }

  ${mediaRules.xl} {
    max-width: 1280px;
  }

  ${mediaRules.xl2} {
    max-width: 1536px;
  }
`;

export const Section = styled.div`
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  margin-bottom: 2rem;
  text-align: justify;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: var(--innotech-color);
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  padding: 0.5rem;
  border-radius: 5rem;
  width: 3.5rem;
  height: 3.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e3a5f;
  }
`;

export const ShareText = styled.span`
  margin-right: 0.5rem;
  font-size: 1rem;
`;

export const BubbleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 2rem;
  align-items: center;
  width: 65%;
`;

export const ShareBubble = styled.div`
  position: absolute;
  top: -4rem;
  left: 5.3rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  z-index: 10;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    bottom: -0.5rem; /
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid white; 
  }

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const IconsInner = styled.div`
  margin: 0.5rem;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: gray;
    transition: color 0.3s ease;

    &:hover {
      color: var(--innotech-color);
    }
  }
`;
