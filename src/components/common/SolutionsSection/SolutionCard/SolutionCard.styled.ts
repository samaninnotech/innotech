import Link from "@/i18n/Link";
import Image from "next/image";
import styled from "styled-components";

export const Card = styled(Link)`
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: none;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  font-size: 2px !important;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 1.74;
  box-sizing: border-box;
  border: 1px solid rgba(128, 128, 128, 0.3);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: none;
    text-decoration: none;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 60px;
  margin: 20px 0;
  position: relative;
`;

export const Icon = styled(Image)``;
export const Heading = styled.h4`
  font-size: 24px;
  margin: 10px 0;
  font-weight: 500;
  color: var(--text-black-color);
`;

export const TextContent = styled.p`
  font-size: 15px;
  line-height: 1.74;
  margin-bottom: 15px;
  color: var(--text-gray-color);
  font-weight: 400;
`;

export const LearnMoreLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #005a87;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  margin-bottom: 10px;
  margin-top: auto;

  svg {
    margin-left: 5px;
    transition: transform 0.3s ease;
  }
`;
