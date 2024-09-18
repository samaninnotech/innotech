"use client";

import { BlogCategory } from "@/sanity/types";
import { FC } from "react";
import {
  BackgroundImage,
  CalendarIcon,
  Date,
  PublishedDate,
  Section,
  TextContainer,
  Title,
} from "./BlogHeader.styled";

type BlogHeaderProps = {
  title: string;
  subtitle?: string;
  imgSrc: string;
  categories?: BlogCategory[];
  publishedOn?: string;
};

const BlogHeaderComponent: FC<BlogHeaderProps> = ({
  title,
  subtitle,
  imgSrc,
  publishedOn,
}) => (
  <>
    <Section>
      <BackgroundImage
        src={imgSrc}
        fill
        alt="blog-background"
        style={{
          objectFit: "cover",
        }}
      />
    </Section>
    <TextContainer className="container">
      <Title>{title}</Title>
      {subtitle && <p>{subtitle}</p>}
      {!!publishedOn && (
        <PublishedDate>
          <CalendarIcon className="calendar-icon" />
          <Date>{publishedOn}</Date>
        </PublishedDate>
      )}
    </TextContainer>
  </>
);

export default BlogHeaderComponent;
