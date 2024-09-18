"use client";
import { PortableText } from "@portabletext/react";
import components from "../BlockContent/components";
import { OnlyText } from "./OnlyTextSection.styled";

type OnlyTextSectionProps = {
  text: any;
  height?: string;
};
const OnlyTextSection: React.FC<OnlyTextSectionProps> = ({ text, height }) => {
  return (
    <OnlyText $height={height}>
      <PortableText value={text} components={components} />
    </OnlyText>
  );
};

export default OnlyTextSection;
