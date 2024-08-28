import React, { useState } from 'react';
import { BackgroundImage, CentralImage, PlayButton, VideoContainer, VideoOverlay, Wrapper } from './VideoSection.styled';

const imageData = {
  centralImage: {
    src: "https://mitech.thememove.com/wp-content/uploads/2019/03/home-processing-video-intro-slider-slide-01-image-01.jpg",
    alt: "Central Image",
  },
  backgroundImages: [
    {
      src: "https://mitech.thememove.com/wp-content/uploads/2019/03/home-processing-video-intro-slider-slide-01-image-02.jpg",
      style: { top: '5%', left: '15%' },
    },
    {
      src: "https://mitech.thememove.com/wp-content/uploads/2019/03/home-processing-video-intro-slider-slide-01-image-03.jpg",
      style: { top: '70%', left: '20%' },
    },
    {
      src: "https://mitech.thememove.com/wp-content/uploads/2019/03/home-processing-video-intro-slider-slide-01-image-04.jpg",
      style: { top: '60%', left: '70%' },
    },
    {
      src: "https://mitech.thememove.com/wp-content/uploads/2019/03/home-processing-video-intro-slider-slide-01-image-05.jpg",
      style: { top: '5%', left: '65%' },
    },
  ],
};

const VideoSection: React.FC = () => {
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
        src={imageData.centralImage.src}
        alt={imageData.centralImage.alt}
      />
      {imageData.backgroundImages.map((image, index) => (
        <BackgroundImage
          key={index}
          src={image.src}
          style={image.style}
        />
      ))}
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
              src="https://www.youtube.com/embed/9dXFK9ZjY_A"
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
