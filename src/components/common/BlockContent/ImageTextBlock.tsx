"use client";
import { sanityUrlFor } from "@/sanity/sanity-client";
import { PortableText } from "@portabletext/react";
import React from "react";
import { ImageColumn, ImageTextContainer, TextColumn } from "./styles";

type ImageTextBlockProps = {
  imageColumn: any;
  textColumn: any;
  imagePosition: "left" | "right";
};

const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  imageColumn,
  textColumn,
  imagePosition,
}) => {
  return (
    <ImageTextContainer imagePosition={imagePosition}>
      <ImageColumn>
        <img src={sanityUrlFor(imageColumn).url()} alt="Content" />
      </ImageColumn>
      <TextColumn imagePosition={imagePosition}>
        <PortableText value={textColumn} />
      </TextColumn>
    </ImageTextContainer>
  );
};

export default ImageTextBlock;
