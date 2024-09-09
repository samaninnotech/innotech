"use client";
import { sanityUrlFor } from "@/sanity/sanity-client";
import React from "react";
import {
  BannerContainer,
  BannerImage,
  BannerWrapper,
} from "./PageTopBanner.styled";

type PageTopBannerProps = {
  imageUrl: string;
  altText?: string;
};

const PageTopBanner: React.FC<PageTopBannerProps> = ({
  imageUrl,
  altText = "Banner Image",
}) => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <BannerImage
          src={sanityUrlFor(imageUrl).url()}
          alt={altText}
          width={1000}
          height={1000}
        />
      </BannerWrapper>
    </BannerContainer>
  );
};

export default PageTopBanner;
