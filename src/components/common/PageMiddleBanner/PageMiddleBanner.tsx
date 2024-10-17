"use client";
import { sanityUrlFor } from "@/sanity/sanity-client";
import { PortableText } from "@portabletext/react";
import React from "react";
import components from "../BlockContent/components";
import {
  BannerContainer,
  BannerImage,
  BannerWrapper,
  Description,
  InnerContainer,
  LargeHeader,
  SectionContainer,
} from "./PageMiddleBanner.styled";

type PageMiddleBannerProps = {
  largeHeader: any;
  imageUrl: string;
  description: any;
};

const PageTopBanner: React.FC<PageMiddleBannerProps> = ({
  largeHeader,
  imageUrl,
  description,
}) => {
  return (
    <SectionContainer>
      <InnerContainer>
        <LargeHeader>
          <PortableText value={largeHeader} components={components} />
        </LargeHeader>
        <BannerContainer>
          <BannerWrapper>
            <BannerImage
              src={sanityUrlFor(imageUrl).url()}
              alt={"banner"}
              width={1000}
              height={1000}
            />
          </BannerWrapper>
        </BannerContainer>
        <Description>
          <PortableText value={description} components={components} />
        </Description>
      </InnerContainer>
    </SectionContainer>
  );
};

export default PageTopBanner;
