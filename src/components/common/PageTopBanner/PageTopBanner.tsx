"use client";
import Link from "@/i18n/Link";
import { sanityUrlFor } from "@/sanity/sanity-client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import React from "react";
import {
  BannerContainer,
  BannerHeader,
  BannerImage,
  BannerText,
  BannerWrapper,
} from "./PageTopBanner.styled";

type PageTopBannerProps = {
  imageUrl: string;
  bottomOfImage: string;
  firstLink?: CustomLink;
  secondLink?: CustomLink;
  pageName: string;
};

const PageTopBanner: React.FC<PageTopBannerProps> = ({
  imageUrl,
  bottomOfImage,
  firstLink,
  secondLink,
  pageName,
}) => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <BannerImage
          src={sanityUrlFor(imageUrl).url()}
          alt={"banner"}
          width={1000}
          height={1000}
          $bottomOfImage={bottomOfImage}
        />
        {pageName && <BannerHeader>{pageName}</BannerHeader>}
        {firstLink && secondLink && (
          <BannerText>
            <Link href={"/"}>{firstLink.label}</Link>&nbsp; /&nbsp;&nbsp;
            <Link href={customLinkToHref(secondLink)}>{secondLink.label}</Link>
            &nbsp; /&nbsp;&nbsp;
            {pageName}
          </BannerText>
        )}
      </BannerWrapper>
    </BannerContainer>
  );
};

export default PageTopBanner;
