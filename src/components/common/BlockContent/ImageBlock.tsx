import { sanityUrlFor } from "@/sanity/sanity-client";
import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";
import { ImageBlock } from "./styles";

export enum ImageSize {
  FullWidth = "fullWidth",
  OriginalSize = "originalSize",
  Fixed = "fixed",
}

export enum ImageAlignment {
  Left = "left",
  Center = "center",
  Right = "right",
}

export type ImageBlockProps = {
  alt?: string;
  image: { asset: { _ref: string } };
  caption?: string;
  size?: ImageSize;
  alignment?: ImageAlignment;
  fixedWidth?: number;
  fixedHeight?: number;
};

const ImageBlockComponent: FunctionComponent<ImageBlockProps> = ({
  alt,
  image,
  caption,
  size,
  alignment,
  fixedWidth,
  fixedHeight,
}) => {
  let imageElement: ReactNode = null;
  const { width, height } = getImageSize(image.asset._ref);
  let imgRatio = width / height;

  if (image && size === ImageSize.Fixed && (fixedWidth || fixedHeight)) {
    let url = "";
    let imgWidth = 0,
      imgHeight = 0;
    if (fixedWidth && !fixedHeight) {
      imgWidth = fixedWidth;
      imgHeight = fixedWidth / imgRatio;
    } else if (!fixedWidth && fixedHeight) {
      imgHeight = fixedHeight;
      imgWidth = fixedHeight * imgRatio;
    } else if (fixedWidth && fixedHeight) {
      imgWidth = fixedWidth;
      imgHeight = fixedHeight;
      imgRatio = fixedWidth / fixedHeight;
    }

    imgWidth = Math.round(imgWidth);
    imgHeight = Math.round(imgHeight);
    url = sanityUrlFor(image).width(imgWidth).height(imgHeight).url();

    imageElement = (
      <Image
        alt={alt || "Image"}
        src={url}
        width={imgWidth}
        height={imgHeight}
        quality={100}
      />
    );
  } else if (image && size === ImageSize.FullWidth) {
    imageElement = (
      <Image
        alt={alt || "Image"}
        src={sanityUrlFor(image).url()}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
      />
    );
  } else if (image) {
    const { width, height } = getImageSize(image.asset._ref);
    imageElement = (
      <Image
        alt={alt || "Image"}
        src={sanityUrlFor(image).url()}
        width={width}
        height={height}
        quality={100}
      />
    );
  }

  return (
    <ImageBlock $ratio={imgRatio} $alignment={alignment} $size={size}>
      <figure>{!!imageElement && imageElement}</figure>
      {caption && <figcaption>{caption}</figcaption>}
    </ImageBlock>
  );
};

const getImageSize = (imageId: string): { width: number; height: number } => {
  const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;
  const matchRes = imageId.match(pattern);
  if (matchRes) {
    const [width, height] = matchRes[2].split("x").map((v) => parseInt(v, 10));
    return { width, height };
  }

  return { width: 0, height: 0 };
};

export default ImageBlockComponent;
