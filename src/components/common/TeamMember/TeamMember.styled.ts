import styled from 'styled-components';

// Container for each team member grid item
export const GridItem = styled.div`
  animation: move-up 1s ease-out; /* Define the animation */
`;

// Container for the team member details
export const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease;
  width: 100%;
  text-align: center;
  margin: 1rem 1rem;
`;

// Container for the photo and social networks
export const PhotoContainer = styled.div`
  position: relative;
`;

// The image styling
export const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

// Social networks container
export const SocialNetworks = styled.div`
  position: absolute;
  bottom: 20px; /* Position it at the bottom of the image */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%; /* Adjust width as needed */
  height: 60px; /* Adjust height as needed */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  background: #25567a; /* Color for the rectangle box */
`;

// Inner container for social networks
export const SocialNetworksInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  svg{
    color: #fff;
     font-size: 18px;
  }
`;

// Info container for name and position
export const InfoContainer = styled.div`
  .name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .position {
    font-size: 16px;
    color: #666;
  }
`;

// Styling for the name
export const Name = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

// Styling for the position
export const Position = styled.div`
  font-size: 16px;
  color: #666;
`;

// Adding hover effect to show the social networks container
export const GridItemWithHover = styled(GridItem)`
  &:hover ${SocialNetworks} {
    opacity: 1;
    visibility: visible;
  }
`;
