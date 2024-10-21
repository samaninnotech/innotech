import Link from "@/i18n/Link";
import Image from "next/image";
import styled from "styled-components";
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  box-shadow: var(--wp--preset--shadow--natural);
`;

export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled(Image)`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-right: 5px;
`;

export const PlusSign = styled.span`
  font-size: 1.5rem;
  color: #555;
  margin-right: 5px;
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  margin-top: 10px;
  color: #333;
`;

export const ButtonWrapper = styled.div<{ isCertification: boolean }>`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonLink = styled(Link)<{ isCertification: boolean }>`
  display: inline-block;
  padding: 1rem 2rem;
  text-align: center;
  color: white;
  border-radius: 5px;
  background: linear-gradient(90deg, #47689c 20%, #c4a22a 50%);
  transition: background-position 1s;

  ${({ isCertification }) =>
    isCertification
      ? `
          width: auto;
        `
      : `
          width: 100%;
        `}

  &:hover {
    background: linear-gradient(90deg, #c4a22a 20%, #47689c 50%);
    text-decoration: none !important;
  }
`;

export const ButtonText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
