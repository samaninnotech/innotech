"use client";
import Link from "@/i18n/Link";
import { sanityUrlFor } from "@/sanity/sanity-client";
import { Post } from "@/sanity/types";
import { FC } from "react";
import {
  BigPostContainer,
  BlogPostAuthor,
  BlogPostDate,
  BlogPostDescription,
  BlogPostImage,
  BlogPostInfo,
  BlogPostMeta,
  BlogPostReadMore,
  BlogPostTitle,
  LatestBlogPostsContainer,
  PostsWrapper,
  SmallPostContainer,
  SmallPostDate,
  SmallPostImage,
  SmallPostInfo,
  SmallPostsContainer,
  SmallPostTitle,
  SmallPostUser,
  UserIcon,
} from "./Blog-last-update.styled";

type BlogLastUpdateProps = {
  posts: Post[];
};

const BlogLastUpdate: FC<BlogLastUpdateProps> = ({ posts }) => {
  return (
    <LatestBlogPostsContainer>
      {posts.length > 0 && (
        <PostsWrapper>
          <BigPostContainer>
            <Link href={`/blog/${posts[0].slug}`}>
              <BlogPostImage
                src={sanityUrlFor(posts[0].cover).url()}
                alt={posts[0].title}
              />
              <BlogPostInfo>
                <BlogPostMeta>
                  <BlogPostAuthor>
                    <UserIcon>
                      <img src="./user.png" alt="User" />
                    </UserIcon>
                    {posts[0].author}
                  </BlogPostAuthor>
                  <BlogPostDate>
                    {new Date(posts[0].publish_date).toLocaleString("default", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </BlogPostDate>
                </BlogPostMeta>

                <BlogPostTitle>{posts[0].title}</BlogPostTitle>
                <BlogPostDescription>
                  {posts[0].description}
                </BlogPostDescription>
              </BlogPostInfo>
            </Link>
            <BlogPostReadMore href={`/blog/${posts[0].slug}`}>
              Read more <span>&rarr;</span>
            </BlogPostReadMore>
          </BigPostContainer>

          <SmallPostsContainer>
            {posts.slice(1, 4).map((post, index) => (
              <div key={post.slug}>
                {" "}
                {/* Wrap the content in a div to separate the link */}
                <Link href={`/blog/${post.slug}`}>
                  <SmallPostContainer>
                    <SmallPostImage
                      src={sanityUrlFor(post.cover).url()}
                      alt={post.title}
                      width={300}
                      height={150}
                      quality={100}
                    />
                    <SmallPostInfo>
                      <SmallPostDate>
                        {new Date(post.publish_date).toLocaleString("default", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </SmallPostDate>
                      <SmallPostTitle>{post.title}</SmallPostTitle>
                    </SmallPostInfo>
                    <SmallPostUser>{post.author}</SmallPostUser>
                  </SmallPostContainer>
                </Link>
              </div>
            ))}
          </SmallPostsContainer>
        </PostsWrapper>
      )}
    </LatestBlogPostsContainer>
  );
};

export default BlogLastUpdate;
