import { CustomLink, customLinkToHref } from "@/sanity/types";
import {
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import ImageBlock, { ImageBlockProps } from "./ImageBlock";
import Link from "./Link";
import TweetBlock from "./TweetBlock";
import VideoBlock from "./VideoBlock";
import { BlockQuote, Normal, Subtitle, Title, UnorderedList } from "./styles";

type VideoEmbed = {
  videoUrl: string;
};

type TweetEmbed = {
  tweetUrl: string;
};

const components: Partial<PortableTextReactComponents> = {
  list: ({ children }) => (
    <UnorderedList>
      <ul>{children}</ul>
    </UnorderedList>
  ),
  listItem: ({ children }) => <li>{children}</li>,
  block: {
    title: ({ children }) => <Title>{children}</Title>,
    subtitle: ({ children }) => <Subtitle>{children}</Subtitle>,
    normal: ({ children }) => <Normal>{children}</Normal>,
    blockquote: ({ children }) => <BlockQuote >{children}</BlockQuote>
    ,
  },
  types: {
    blockImage: ({
      value,
    }: PortableTextTypeComponentProps<ImageBlockProps>) => (
      <ImageBlock {...value} />
    ),
    blockVideoEmbed: ({
      value: { videoUrl },
    }: PortableTextTypeComponentProps<VideoEmbed>) => {
      return <VideoBlock videoUrl={videoUrl} />;
    },
    blockTweet: ({
      value: { tweetUrl },
    }: PortableTextTypeComponentProps<TweetEmbed>) => {
      return <TweetBlock tweetUrl={tweetUrl} />;
    },
  },
  marks: {
    em: ({ children }: PortableTextMarkComponentProps) => (
      <em style={{ fontStyle: "italic" }}>{children}</em>
    ),
    color: ({ children, value }) => (
      <span style={{ color: value.color }}>{children}</span>
    ),
    link: ({
      value,
      children,
    }: PortableTextMarkComponentProps<CustomLink & { _type: string }>) => {
      if (!value) {
        return null;
      }
      const href = customLinkToHref(value);
      return (
        <Link href={href} linkType={value.linkType}>
          {children}
        </Link>
      );
    },
  },
};

export default components;
