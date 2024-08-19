import styled from 'styled-components';

export const LatestBlogPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 720px;
  }

  @media (min-width: 990px) {
    max-width: 940px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const BigPostContainer = styled.div`
  flex: 2;
  margin-right: 10px;
  padding: 10px;
  border-right: 1px solid #ccc;

  img {
    width: 100%;
    height: auto;
      border-radius: 5px;

  }

  h3 {
    font-size: 1em;
  }

  p {
    font-size: 0.8em;
  }
`;

export const SmallPostsContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const SmallPostContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ccc;
  height: 100%;
`;

export const SmallPostImage = styled.img`
  width: 100px; /* Adjust the width of the image */
  height: auto;
  margin-right: 10px;
  border-radius: 5px;
`;

export const SmallPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SmallPostTitle = styled.h3`
  font-size: 0.8em;
  margin: 0;
`;

export const SmallPostDate = styled.p`
  font-size: 0.5em;
  margin: 0;
  display: flex;
  align-items: center;

  &::before {
    content: url('https://img.icons8.com/material-outlined/24/000000/calendar.png'); /* Original size */
    transform: scale(0.5); /* Scale icon to 50% of its original size */
  }
`;

export const SmallPostUser = styled.div`
  position: absolute;
  bottom: 22px;
  left: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 2px 5px;
  font-size: 0.4em;
  border-radius: 3px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
`;
