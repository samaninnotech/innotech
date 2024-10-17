// YoutubeSection.tsx
"use client";
import Link from "@/i18n/Link";
import { sanityUrlFor } from "@/sanity/sanity-client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import React from "react";
import components from "../BlockContent/components";
import {
  LargeHeader,
  Logo,
  SectionContainer,
  SmallHeader,
} from "./YoutubeSection.styled";

type YoutubeSectionProps = {
  smallHeader: string;
  largeHeader: any;
  youtubeLogo: string;
  youtubeLink: CustomLink;
};
const YoutubeSection: React.FC<YoutubeSectionProps> = ({
  smallHeader,
  largeHeader,
  youtubeLogo,
  youtubeLink,
}) => {
  const href = customLinkToHref(youtubeLink);
  return (
    <SectionContainer>
      {smallHeader && <SmallHeader>{smallHeader}</SmallHeader>}
      {largeHeader && (
        <LargeHeader>
          <PortableText value={largeHeader} components={components} />
        </LargeHeader>
      )}
      <Link href={href}>
        {youtubeLogo && (
          <Logo
            src={sanityUrlFor(youtubeLogo).url()}
            alt="YouTube Logo"
            width={150}
            height={150}
          />
        )}
      </Link>
    </SectionContainer>
  );
};

export default YoutubeSection;
