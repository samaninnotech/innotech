"use client";
import { sanityUrlFor } from "@/sanity/sanity-client";
import React, { useState } from "react";
import {
  CentralImage,
  LeftBottomImage,
  LeftTopImage,
  PlayButton,
  RightBottomImage,
  RightTopImage,
  VideoContainer,
  VideoOverlay,
  Wrapper,
} from "./VideoSection.styled";

type VideoSectionProps = {
  centralImage: string;
  leftTopImage: string;
  leftBottomImage: string;
  rightTopImage: string;
  rightBottomImage: string;
  videoLink: string;
};
const VideoSection: React.FC<VideoSectionProps> = ({
  centralImage,
  leftTopImage,
  leftBottomImage,
  rightBottomImage,
  rightTopImage,
  videoLink,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseClick = () => {
    setIsVideoOpen(false);
  };

  return (
    <Wrapper>
      <CentralImage
        src={sanityUrlFor(centralImage).url()}
        alt="Center"
        width={500}
        height={250}
      />
      <LeftTopImage
        src={sanityUrlFor(leftTopImage).url()}
        alt="LeftTop"
        width={150}
        height={150}
      />
      <RightTopImage
        src={sanityUrlFor(rightTopImage).url()}
        alt="RightTop"
        width={150}
        height={150}
      />
      <LeftBottomImage
        src={sanityUrlFor(leftBottomImage).url()}
        alt="LeftBottom"
        width={150}
        height={150}
      />
      <RightBottomImage
        src={sanityUrlFor(rightBottomImage).url()}
        alt="RightBottom"
        width={150}
        height={150}
      />
      <PlayButton onClick={handlePlayClick}>
        <div className="pulse"></div>
        <div className="pulse"></div>
        <div className="play-icon">▶</div>
      </PlayButton>
      {isVideoOpen && (
        <VideoOverlay onClick={handleCloseClick}>
          <VideoContainer>
            <iframe
              width="100%"
              height="100%"
              src={videoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        </VideoOverlay>
      )}
    </Wrapper>
  );
};

export default VideoSection;
