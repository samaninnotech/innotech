// YouTube
// - https://youtu.be/Iqe2sFm15Ac
// - https://www.youtube.com/watch?v=Iqe2sFm15Ac
// Vimeo
// - https://vimeo.com/101939684

import { IframeBlock } from "./styles";

export enum Platform {
  YouTube = "YouTube",
  Vimeo = "Vimeo",
}

type MatchersDictionary<T extends string | symbol | number> = {
  [K in T]: RegExp[];
};

const Matchers: MatchersDictionary<Platform> = {
  [Platform.YouTube]: [
    /https:\/\/youtu\.be\/([\w\d]+)/i,
    /https:\/\/www\.youtube\.com\/watch\?v=([\w\d]+)/i,
  ],
  [Platform.Vimeo]: [/https:\/\/vimeo\.com\/([\d]+)/i],
};

type VideoEmbedInfo = {
  platform: Platform;
  videoId: string;
};

type VideoEmbedIframeOptions = {
  autoplay?: boolean;
  fullscreen?: boolean;
};

export const getVideoEmbedInfo = (
  url: string | null,
): VideoEmbedInfo | undefined => {
  if (!url) {
    return undefined;
  }

  for (const [platform, exps] of Object.entries(Matchers)) {
    for (const re of exps) {
      const m = re.exec(url);
      if (!m || !m.length) {
        continue;
      }

      return {
        platform: platform as Platform,
        videoId: m[1],
      };
    }
  }

  return undefined;
};

export const getVideoEmbedIframe = (
  { platform, videoId }: VideoEmbedInfo,
  options?: VideoEmbedIframeOptions,
) => {
  const allowValue: string[] = [];

  if (options?.autoplay) {
    allowValue.push("autoplay");
  }
  if (options?.fullscreen) {
    allowValue.push("fullscreen");
  }

  switch (platform) {
    case Platform.YouTube:
      return (
        <IframeBlock
          src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`}
          frameBorder="0"
          allow={allowValue ? allowValue.join("; ") : undefined}
          allowFullScreen
        />
      );

    case Platform.Vimeo:
      return (
        <IframeBlock
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
          frameBorder="0"
          allow={allowValue ? allowValue.join("; ") : undefined}
          allowFullScreen
        />
      );

    default:
      return undefined;
  }
};

export const getVideoEmbedPreviewUrl = ({
  platform,
  videoId,
}: VideoEmbedInfo) => {
  switch (platform) {
    case Platform.YouTube:
      return `https://img.youtube.com/vi/${videoId}/default.jpg`;

    case Platform.Vimeo:
      return `https://vumbnail.com/{videoId}.jpg`;

    default:
      return undefined;
  }
};
