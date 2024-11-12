"use client";

import { FC } from "react";
import {
  BackgroundImage,
  CalendarIcon,
  Date,
  InnerContainer,
  PublishedDate,
  Section,
  TextContainer,
  Title,
} from "./BlogHeader.styled";

type BlogHeaderProps = {
  title: string;
  subtitle?: string;
  imgSrc: string;
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
      <InnerContainer>
        <BackgroundImage
          src={imgSrc}
          alt="blog-background"
          width={1000}
          height={1000}
        />
      </InnerContainer>
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
