import { BlogPostType } from '@/sanity/types';
import { FC, useEffect, useState } from 'react';
import BlogPost from '../BlogPost';
import {
  BigPostContainer,
  Divider,
  LatestBlogPostsContainer,
  SmallPostContainer,
  SmallPostDate,
  SmallPostImage,
  SmallPostInfo,
  SmallPostsContainer,
  SmallPostTitle,
  SmallPostUser,
} from './LatestBlogPosts.styled'; // Adjust the import path as necessary

type LatestBlogPostsProps = {
  posts: BlogPostType[];
}

const LatestBlogPosts: FC<LatestBlogPostsProps> = ({ posts }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    // Fetch blog posts from an API or server-side function
    const fetchPosts = async () => {
      // Replace with your actual data fetching logic
      const fetchedPosts = [
        {
          title: "InnoTech Kick Off 2024",
          url: "https://innotech.software/2024/03/27/innotech-kick-off-2024/",
          image: "https://innotech.software/wp-content/uploads/2024/03/Kick-Off-InnoTech-26-03-2024-540x330.jpg",
          author: "Sabrina Codognola",
          date: "27 Marzo 2024",
          excerpt: "In un contesto lavorativo sempre più dinamico e competitivo, fermarsi un momento per condividere i risultati raggiunti, raccontare le sfide affrontate e …",
          _key: ''
        },
        {
          title: "Cara InnoTech, buon compleanno!",
          url: "https://innotech.software/2023/11/29/cara-innotech-buon-compleanno/",
          image: "https://innotech.software/wp-content/uploads/2023/11/blog-NTH-1170x570-px-2-480x312.jpg",
          author: "Sabrina Codognola",
          date: "29 Novembre 2023",
          excerpt: "...",
          _key: ''
        },
        {
          title: "Crescono i Consulenti SAP certificati sui prodotti InnoTech",
          url: "https://innotech.software/2023/11/20/crescono-i-consulenti-sap-certificati-sui-prodotti-innotech/",
          image: "https://innotech.software/wp-content/uploads/2023/11/BLOG-NTH-per-LinkedIn-1280-x-720-px-16-480x312.jpg",
          author: "Sabrina Codognola",
          date: "20 Novembre 2023",
          excerpt: "...",
          _key: ''
        }
      ];
      setBlogPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <LatestBlogPostsContainer>
      {blogPosts.length > 0 && (
        <>
          <BigPostContainer>
            <BlogPost
              key={0}
              title={blogPosts[0].title}
              image={blogPosts[0].image}
              user={blogPosts[0].author}
              date={blogPosts[0].date}
              description={blogPosts[0].excerpt}
              readMore={true}
              url={blogPosts[0].url}
            />
          </BigPostContainer>
          <SmallPostsContainer>
            {blogPosts.slice(1).map((post, index) => (
              <SmallPostContainer key={index + 1}>
                <SmallPostImage src={post.image} alt={post.title} />
                <SmallPostInfo>
                  <SmallPostDate>{post.date}</SmallPostDate>
                  <SmallPostTitle>{post.title}</SmallPostTitle>
                </SmallPostInfo>
                <SmallPostUser>{post.author}</SmallPostUser>
                {index < blogPosts.length - 2 && <Divider />}
              </SmallPostContainer>
            ))}
          </SmallPostsContainer>
        </>
      )}
    </LatestBlogPostsContainer>
  );
};

export default LatestBlogPosts;
