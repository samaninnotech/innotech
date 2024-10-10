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
  Header,
  LatestBlogPostsContainer,
  PostsWrapper,
  SmallPostContainer,
  SmallPostDate,
  SmallPostImage,
  SmallPostInfo,
  SmallPostsContainer,
  SmallPostTitle,
  SmallPostUser,
  UserIconContainer,
} from "./Blog-last-update.styled";

import { formatDate } from "@/lib/middlewares/eventDateParser";
import { faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BlogLastUpdateProps = {
  header: string;
  posts: Post[];
};

const BlogLastUpdate: FC<BlogLastUpdateProps> = ({ header, posts }) => {
  return (
    <LatestBlogPostsContainer>
      <Header>{header}</Header>
      {posts.length > 0 && (
        <PostsWrapper>
          <BigPostContainer>
            <Link href={`/blog/${posts[0].slug}`}>
              <BlogPostImage
                src={sanityUrlFor(posts[0].cover).url()}
                alt={posts[0].title}
                width={500}
                height={300}
              />
              <BlogPostInfo>
                <BlogPostMeta>
                  <BlogPostAuthor>
                    <UserIconContainer>
                      <FontAwesomeIcon icon={faUser} color="white" />
                    </UserIconContainer>
                    {posts[0].author}
                  </BlogPostAuthor>
                  <BlogPostDate>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      style={{ marginRight: "5px" }}
                    />
                    {formatDate(posts[0].publish_date)}
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
            {posts.slice(1, 4).map((post) => (
              <div key={post.slug}>
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
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          style={{ marginRight: "5px" }}
                        />
                        {formatDate(post.publish_date)}
                      </SmallPostDate>
                      <SmallPostTitle>{post.title}</SmallPostTitle>
                    </SmallPostInfo>
                    <SmallPostUser>
                      <UserIconContainer>
                        <FontAwesomeIcon
                          icon={faUser}
                          color="white"
                          style={{ fontSize: "10px" }}
                        />
                      </UserIconContainer>
                      {post.author}
                    </SmallPostUser>
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
