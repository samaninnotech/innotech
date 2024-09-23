import Link from "@/i18n/Link";
import Image from "next/image";
import styled from "styled-components";

// New wrapper for better alignment
export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  gap: 20px; /* Adjust spacing between big post and small posts */
`;

export const LatestBlogPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  a {
    &:hover {
      text-decoration: none;
    }
  }
  @media (min-width: 576px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 990px) {
    max-width: 940px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

// Styles for the larger blog post
export const BigPostContainer = styled.div`
  flex: 1.5;
  padding: 20px 10px;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const BlogPostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const BlogPostInfo = styled.div`
  padding: 10px 0;
`;

export const BlogPostMeta = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  position: absolute;
  margin-top: -60px;
  color: white;
  padding-left: 25px;
  font-size: 0.9rem;
`;

export const BlogPostAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const BlogPostDate = styled.div`
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: inline-block;
    width: 18px; /* Adjust width as needed */
    height: 18px; /* Adjust height as needed */
    background-image: url("https://img.icons8.com/material-outlined/24/ffffff/calendar.png"); /* Use white icon */
    background-size: cover;
    margin-right: 5px; /* Space between icon and text */
  }
`;

export const UserIcon = styled.div`
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px; /* Space between icon and author name */
  background-color: #ccc; /* Fallback color if no image is available */

  img {
    width: 100%;
    height: auto;
  }
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

// Styles for smaller posts
export const SmallPostsContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid gray;
  /* Add a border for all but the last child */
  & > :not(:last-child) {
    border-bottom: 1px solid gray;
  }
  & (:last-child) {
    padding-bottom: 0px;
  }
`;

export const SmallPostContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 20px 25px;
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
  &::before {
    content: url("https://img.icons8.com/material-outlined/24/000000/calendar.png");
    transform: scale(0.5);
  }
`;

export const SmallPostUser = styled.div`
  position: absolute;
  bottom: 22px;
  left: 35px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 2px 5px;
  font-size: 0.4em;
  border-radius: 3px;
`;
