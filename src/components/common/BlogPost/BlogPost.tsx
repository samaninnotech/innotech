import React from 'react';
import {
  BlogPostContainer,
  BlogPostDate,
  BlogPostDescription,
  BlogPostImage,
  BlogPostInfo,
  BlogPostMeta,
  BlogPostReadMore,
  BlogPostTitle,
  BlogPostUser,
} from './BlogPost.styled';

interface BlogPostProps {
  image: string;
  user: string;
  date: string;
  title: string;
  description?: string;
  readMore?: boolean;
  url?: string; 
}

const BlogPost: React.FC<BlogPostProps> = ({ image, user, date, title, description, readMore, url }) => {
  return (
    <BlogPostContainer>
      <BlogPostImage src={image} alt={title} />
      <BlogPostInfo>
        <BlogPostMeta>
          <BlogPostUser>{user}</BlogPostUser>
          <BlogPostDate>{date}</BlogPostDate>
        </BlogPostMeta>
        <BlogPostTitle>{title}</BlogPostTitle>
        {description && <BlogPostDescription>{description}</BlogPostDescription>}
        {readMore && url && (
          <BlogPostReadMore href={url}>
            Read more <span>&rarr;</span>
          </BlogPostReadMore>
        )}
      </BlogPostInfo>
    </BlogPostContainer>
  );
};

export default BlogPost;
