"use client";

import useTranslation from "@/i18n/useTranslation";
import { useParams } from "next/navigation";
import { FC, useState } from "react";
import Spinner from "../../Spinner";
import { CalendarIcon } from "../BlogHeader/BlogHeader.styled";
import {
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
  TagBadge,
  TagBadgeContainer,
  TilesContainer,
} from "./PostsList.styled";

export type PostsListProps = { posts: PostListItem[]; postsCount: number };
const PostsListComponent: FC<PostsListProps> = ({ posts, postsCount }) => {
  const [loadedPosts, setLoadedPosts] = useState<PostListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [morePostsExists, setMorePostsExists] = useState(
    posts.length < postsCount,
  );
  const { locale: currentLocale } = useTranslation();
  const { categorySlug } = useParams();

  const loadMorePosts = async () => {
    setIsLoading(true);
    const maxPublishDate = (
      loadedPosts.length
        ? loadedPosts[loadedPosts.length - 1]
        : posts[posts.length - 1]
    ).publishedOn;

    const queryParams = new URLSearchParams({
      locale: currentLocale,
      setLength: "12",
      maxPublishDate: maxPublishDate,
    });

    if (categorySlug) {
      queryParams.append("categorySlug", categorySlug as string);
    }

    const url = `/api/blog/posts?${queryParams.toString()}`;

    const result: PostListItem[] = await (await fetch(url)).json();
    setLoadedPosts((prevLoadedPosts) => {
      const newLoadedPosts = [...prevLoadedPosts, ...result];
      setMorePostsExists(posts.length + newLoadedPosts.length < postsCount);
      setIsLoading(false);
      return newLoadedPosts;
    });
  };

  return (
    <SectionWrapper>
      <Spinner show={isLoading} />
      <TilesContainer>
        {!!posts?.length &&
          posts.map((p) => <PostTile key={p.slug} post={p}></PostTile>)}
        {!!loadedPosts.length &&
          loadedPosts.map((p) => <PostTile key={p.slug} post={p}></PostTile>)}
      </TilesContainer>
      {morePostsExists && (
        <LoadMoreButton onClick={loadMorePosts}>Carica Altri</LoadMoreButton>
      )}
    </SectionWrapper>
  );
};

export type PostListItem = {
  title: string;
  imgSrc: string;
  publishedOn: string;
  categories: string[];
  slug: string;
  description: string;
  author: string;
};

export type PostTileProps = {
  post: PostListItem;
};
export const PostTile: FC<PostTileProps> = ({
  post: { title, imgSrc, publishedOn, slug, categories, description, author },
}) => {
  const { locale: currentLocale } = useTranslation();
  return (
    <PostTileStyled href={"/blog/" + slug}>
      {!!categories.length && (
        <TagBadgeContainer>
          {categories.map((c) => (
            <TagBadge key={c}>{c}</TagBadge>
          ))}
        </TagBadgeContainer>
      )}
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
