import { FunctionComponent } from "react";
import { VideoBlock } from "./styles";
import { getVideoEmbedIframe, getVideoEmbedInfo } from "./videoHelpers";

type VideoBlockProps = {
  videoUrl: string;
};

const VideoBlockComponent: FunctionComponent<VideoBlockProps> = ({
  videoUrl,
}) => {
  const info = getVideoEmbedInfo(videoUrl);
  if (!info) {
    return null;
  }

  return (
    <VideoBlock>{getVideoEmbedIframe(info, { fullscreen: true })}</VideoBlock>
  );
};

export default VideoBlockComponent;
