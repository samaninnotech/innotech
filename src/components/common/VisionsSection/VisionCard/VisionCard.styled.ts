import Image from "next/image";
import styled from "styled-components";

export const Title = styled.h4`
  font-size: 22px;
  font-weight: 600;
  color: var(--text-black-color);
  margin-bottom: 10px;
`;

export const CardWrapper = styled.div`
  flex: 1 1 30%;
  max-width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--white-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    ${Title} {
      color: var(--innotech-color);
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 330px;
  overflow: hidden;
`;
export const VisionImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ContentWrapper = styled.div`
  padding: 20px;
`;

export const Text = styled.p`
  font-size: 15px;
  color: var(--text-gray-color);
  line-height: 1.5;
`;
