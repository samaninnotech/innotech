import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  ${mediaRules.md} {
    flex-direction: row;
  }
  gap: 20px;
`;

export const LatestBlogPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 2rem auto;
  a {
    &:hover {
      text-decoration: none;
    }
  }
  padding: 0 1rem;
  ${mediaRules.xsm} {
    max-width: 576px;
    padding: 0 1rem;
  }

  ${mediaRules.sm} {
    max-width: 720px;
    padding: 0;
  }

  ${mediaRules.md} {
    max-width: 940px;
  }

  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;
export const Header = styled.h1`
  font-weight: 700;
  color: var(--text-black-color);
`;
export const BigPostContainer = styled.div`
  flex: 1.5;
  position: relative;
`;

export const BlogPostImage = styled(Image)`
  width: 100%;
  border-radius: 5px;
`;

export const BlogPostInfo = styled.div`
  padding: 10px 0;
`;

export const BlogPostMeta = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  margin-top: -105px;
  color: white;
  padding-left: 25px;
  font-size: 0.9rem;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  height: 20%;
  border-bottom-left-radius: 10px; /* Add radius to the bottom left */
  border-bottom-right-radius: 10px; /* Add radius to the bottom right */
`;

export const UserIconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 5px;
`;

export const BlogPostAuthor = styled.div`
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
  
    &:hover {
    color:#25567a;  
`;

export const BlogPostDescription = styled.p`
  margin: 10px 0;
`;

export const BlogPostReadMore = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  span {
    margin-left: 5px;
  }
  &:hover {
    text-decoration: none;
  }
`;

export const SmallPostsContainer = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid var(--light-gray);

  & > :not(:last-child) {
    border-bottom: 1px solid var(--light-gray);
  }

  & > :first-child {
    padding-top: 0px;
  }

  & > * {
    padding: 20px 25px;
  }
`;

export const SmallPostContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  height: 100%;
`;

export const SmallPostImage = styled(Image)`
  max-width: 50%;
  margin-right: 30px;
  border-radius: 5px;
`;

export const SmallPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SmallPostTitle = styled.h3`
  font-size: 1.3em;
  margin: 0;
`;

export const SmallPostDate = styled.p`
  font-size: 0.9em;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const SmallPostUser = styled.div`
  position: absolute;
  bottom: 2px;
  left: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 2px 5px;
  font-size: 0.8em;
  border-radius: 3px;
`;
