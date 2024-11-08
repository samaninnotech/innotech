"use client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import React from "react";
import {
  GridWrapper,
  HeaderContainer,
  SectionHeader,
  VideoContainer,
  VideoGridContainer,
} from "./VideoGridSection.styled";

interface VideoGridSectionProps {
  header: string;
  numberOfColumns: number;
  videoItems: CustomLink[];
}

const VideoGridSection: React.FC<VideoGridSectionProps> = ({
  header,
  numberOfColumns,
  videoItems,
}) => {
  return (
    <VideoGridContainer>
      <HeaderContainer>
        <SectionHeader>{header}</SectionHeader>
      </HeaderContainer>
      <GridWrapper numberOfColumns={numberOfColumns}>
        {videoItems.map((video) => (
          <VideoContainer key={video.label}>
            <iframe
              width="100%"
              height="100%"
              src={customLinkToHref(video)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        ))}
      </GridWrapper>
    </VideoGridContainer>
  );
};

export default VideoGridSection;
