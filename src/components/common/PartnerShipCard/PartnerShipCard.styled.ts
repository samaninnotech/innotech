import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
  margin: 10px;
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconContainer = styled.div`
  margin-right: 20px;
  svg {
    color: var(--innotech-color);
  }
`;

export const Icon = styled(Image)``;
export const Heading = styled.h4`
  font-size: 24px;
  font-weight: 600;
  color: var(--innotech-color);
  text-align: left;
`;

export const TextContent = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
  text-align: left;
`;
