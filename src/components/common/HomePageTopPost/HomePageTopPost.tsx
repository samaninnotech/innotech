"use client";
import { PortableText } from "@portabletext/react";
import React from "react";
import components from "../BlockContent/components";
import {
  ColumnContainer,
  Heading,
  RowContainer,
  Separator,
  Spacer,
} from "./HomePageTopPost.styled";

interface HomePageTopPostProps {
  backgroundImage: string;
  heading: any;
}

export const HomePageTopPost: React.FC<HomePageTopPostProps> = ({
  backgroundImage,
  heading,
}) => {
  return (
    <RowContainer backgroundImage={backgroundImage}>
      <ColumnContainer>
        <div>
          <Spacer />
          <Heading>
            <PortableText value={heading} components={components} />
          </Heading>
        </div>
      </ColumnContainer>
      <Separator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
        </svg>
      </Separator>
    </RowContainer>
  );
};

export default HomePageTopPost;
