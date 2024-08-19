import styled from 'styled-components';

export const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
`;

export const BlogPostImage = styled.img`
  width: 100%;
  height: auto;
`;

export const BlogPostInfo = styled.div`
  padding: 10px;
`;

export const BlogPostMeta = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  margin-top: -40px;
`;

export const BlogPostUser = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const BlogPostDate = styled.div`
  display: flex;
  align-items: center;
`;

export const BlogPostTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.5rem;
`;

export const BlogPostDescription = styled.p`
  margin: 10px 0;
`;

export const BlogPostReadMore = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  span {
    margin-left: 5px;
  }
`;
