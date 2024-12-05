"use client";
import useTranslation from "@/i18n/useTranslation";
import { FC, useEffect, useState } from "react";
import Loading from "../../Loading";
import { CalendarIcon } from "../BlogHeader/BlogHeader.styled";
import {
  Header,
  ImageContainer,
  LearnMoreLink,
  LoadMoreButton,
  PostDate,
  PostDescription,
  PostImage,
  PostTileStyled,
  PostTitle,
  PublishedDate,
  SectionWrapper,
  TilesContainer,
} from "./PostsList.styled";

export type PostsListProps = { posts: PostListItem[]; postsCount: number };
const PostsListComponent: FC<PostsListProps> = ({ posts, postsCount }) => {
  const [loadedPosts, setLoadedPosts] = useState<PostListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [morePostsExists, setMorePostsExists] = useState(true);

  useEffect(() => {
    const initialPosts = posts.length > 6 ? posts.slice(0, 6) : posts;
    setLoadedPosts(initialPosts);
    setMorePostsExists(posts.length > 6);
  }, [posts]);

  // Function to load more posts
  const loadMorePosts = () => {
    setIsLoading(true);

    // Load more posts only if they exist
    const newLoadedPosts = posts.slice(0, loadedPosts.length + 2); // Load 2 more posts
    setLoadedPosts(newLoadedPosts);

    // Check if more posts exist
    setMorePostsExists(posts.length > newLoadedPosts.length);

    setIsLoading(false);
  };

  return (
    <SectionWrapper>
      <Loading show={isLoading} />
      <Header>Innotech Blog</Header>
      <TilesContainer>
        {!!loadedPosts?.length &&
          loadedPosts.map((p) => <PostTile key={p.slug} post={p}></PostTile>)}
      </TilesContainer>
      {morePostsExists && !isLoading && (
        <LoadMoreButton onClick={loadMorePosts}>Load More</LoadMoreButton>
      )}
    </SectionWrapper>
  );
};

export type PostListItem = {
  title: string;
  imgSrc: string;
  publishedOn: string;
  slug: string;
  description: string;
  author: string;
};

export type PostTileProps = {
  post: PostListItem;
};
export const PostTile: FC<PostTileProps> = ({
  post: { title, imgSrc, publishedOn, slug, description },
}) => {
  const { locale: currentLocale } = useTranslation();
  return (
    <PostTileStyled href={"/blog/" + slug}>
      <ImageContainer>
        <PostImage
          src={imgSrc}
          width={400}
          height={200}
          quality={100}
          sizes="(max-width: 768px) 600px, 350px"
          alt={title}
        ></PostImage>
      </ImageContainer>
      <PublishedDate>
        <CalendarIcon className="calendar-icon" />
        <PostDate>
          {new Date(publishedOn).toLocaleString(currentLocale, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </PostDate>
      </PublishedDate>
      <PostTitle>{title}</PostTitle>
      <PostDescription>{description}</PostDescription>
      <LearnMoreLink>
        Scopri la soluzione
        <span className="arrow-icon">→</span>
      </LearnMoreLink>
    </PostTileStyled>
  );
};

export default PostsListComponent;
