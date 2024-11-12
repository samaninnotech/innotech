import Image from "next/image";
import styled from "styled-components";

export const GridItem = styled.div`
  animation: move-up 1s ease-out;
`;

export const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease;
  width: 100%;
  text-align: center;
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const SocialNetworks = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60px;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  background: var(--innotech-color);
`;

export const SocialNetworksInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  svg {
    color: var(--white-color);
    font-size: 18px;
  }
`;

export const InfoContainer = styled.div`
  .name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .position {
    font-size: 16px;
    color: var(--text-gray-color);
  }
`;

export const Name = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Position = styled.div`
  font-size: 16px;
  color: var(--text-gray-color);
`;

export const GridItemWithHover = styled(GridItem)`
  &:hover ${SocialNetworks} {
    opacity: 1;
    visibility: visible;
  }
`;
