import { CustomLink, customLinkToHref } from "@/sanity/types";
import {
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import ImageBlock, { ImageBlockProps } from "./ImageBlock";
import ImageTextBlock from "./ImageTextBlock";
import Link from "./Link";
import TweetBlock from "./TweetBlock";
import VideoBlock from "./VideoBlock";
import {
  BlockQuote,
  BlockQuoteContainer,
  Normal,
  Subtitle,
  Title,
  UnorderedList,
} from "./styles";

type VideoEmbed = {
  videoUrl: string;
};

type TweetEmbed = {
  tweetUrl: string;
};

type ImageTextBlockProps = {
  imageColumn: any; // Replace `any` with your image type
  textColumn: any; // Replace `any` with your text type
  imagePosition: "left" | "right";
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
    blockquote: ({ children }) => (
      <BlockQuoteContainer>
        <BlockQuote>{children}</BlockQuote>
      </BlockQuoteContainer>
    ),
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
    imageText: ({
      value,
    }: PortableTextTypeComponentProps<ImageTextBlockProps>) => {
      return <ImageTextBlock {...value} />;
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
