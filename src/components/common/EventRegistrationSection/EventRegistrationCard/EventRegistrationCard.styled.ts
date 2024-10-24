import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  box-shadow: var(--wp--preset--shadow--natural);
  width: 100%;
`;
export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #eeeeee;

  flex-direction: column;
  margin: 0 auto;
  ${mediaRules.sm} {
    max-width: 720px;
    flex-direction: row;
  }
  ${mediaRules.md} {
    max-width: 940px;
    flex-direction: row;
  }
  ${mediaRules.lg} {
    max-width: 1170px;
    flex-direction: row;
  }
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  flex: 1;
`;

export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mediaRules.sm} {
    justify-content: flex-start;
  }
  ${mediaRules.md} {
    justify-content: flex-start;
  }
  ${mediaRules.lg} {
    justify-content: flex-start;
  }
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
  margin: 10px 0;
  color: #333;
  font-weight: 600;
`;

export const Subtitle = styled.div`
  font-size: 0.9rem;
  margin: 10px 0;
  color: var(--text-light-color);
  font-weight: 600;
`;
export const ButtonsWrapper = styled.div<{ isCertification: boolean }>`
  margin-top: 1rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  flex: 1;
  ${mediaRules.sm} {
    margin-bottom: 0rem;
  }
  ${mediaRules.md} {
    margin-bottom: 0rem;
  }
  ${mediaRules.lg} {
    margin-bottom: 0rem;
  }
`;

export const ButtonWrapper = styled.div<{ isCertification: boolean }>`
  background: ${({ isCertification }) =>
    isCertification
      ? "var(--innotech-color)"
      : "linear-gradient(90deg, #47689c 20%, #c4a22a 50%)"};
  ${({ isCertification }) =>
    isCertification
      ? `width: auto;` // Adjust width if certification
      : `width: 100%;`}
  &:hover {
    background: ${({ isCertification }) =>
      isCertification
        ? "var(--innotech-color)"
        : "linear-gradient(90deg, #c4a22a 20%, #47689c 50%)"}; /* Darker red on hover for certification */
    text-decoration: none !important;
  }
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  text-align: center;
  color: white; /* Ensure the text is white */
  border-radius: 5px;

  transition: background-position 1s;
`;

export const ButtonText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
