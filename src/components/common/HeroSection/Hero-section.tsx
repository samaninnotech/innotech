import { sanityUrlFor } from "@/sanity/sanity-client";
import {
  HeroColumn,
  HeroImageColumn,
  HeroLink,
  HeroLinkType,
  HeroTextColumn,
  customLinkToHref,
  isHeroImageColumn,
  isHeroTextColumn,
} from "@/sanity/types";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { FC } from "react";

import { Button, GenericLink } from "..";
import components from "../BlockContent/components";
import {
  Element,
  HeroLinksContainer,
  HeroParagraph,
  HeroSubtitle,
  HeroTitle,
  InnerContainer1,
  InnerContainer2,
  InnerContainerLeft,
  InnerContainerRight,
  OnlyTextContainer,
} from "./Hero-section.styled";

const heroComponents: Partial<PortableTextReactComponents> = {
  ...components,
  block: {
    title: ({ children }) => <HeroTitle>{children}</HeroTitle>,
    subtitle: ({ children }) => <HeroSubtitle>| {children}</HeroSubtitle>,
    normal: ({ children }) => <HeroParagraph>{children}</HeroParagraph>,
  },
};

type HeroSectionProps = {
  id?: string;
  leftColumn: HeroColumn;
  rightColumn: HeroColumn;
  backgroundColor?: string;
  backgroundImage?: string;
};
const HeroSectionComponent: FC<HeroSectionProps> = ({
  id,
  leftColumn,
  rightColumn,
  backgroundColor,
  backgroundImage
}) => {
  const leftTextColor = isHeroTextColumn(leftColumn) ? leftColumn.text_color : undefined;
  const rightTextColor = isHeroTextColumn(rightColumn) ? rightColumn.text_color : undefined;
  const leftTextAlign = isHeroTextColumn(leftColumn) ? leftColumn.text_alignment : "left";
  const rightTextAlign = isHeroTextColumn(rightColumn) ? rightColumn.text_alignment : "left";
  if (!rightColumn) {
    return (
      <Element id={id || ""} $background={backgroundColor}>
        <OnlyTextContainer>
          {leftColumn && (
            <HeroColumnComponent column={leftColumn} textColor={leftTextColor} textAlign={leftTextAlign}></HeroColumnComponent>
          )}
        </OnlyTextContainer>
      </Element>
    );
  } else {
    const revertOnMobile =
      isHeroTextColumn(rightColumn) && isHeroImageColumn(leftColumn);
    return (
      <Element id={id || ""} $background={backgroundColor}>
        <InnerContainer1 $bgImg = {backgroundImage}>
          <InnerContainer2 $revertOnMobile={revertOnMobile}>
            {leftColumn && (
              <HeroColumnComponent column={leftColumn} textColor={leftTextColor} textAlign={leftTextAlign}></HeroColumnComponent>
            )}
            {rightColumn && (
              <HeroColumnComponent column={rightColumn} textColor={rightTextColor} textAlign={rightTextAlign}></HeroColumnComponent>
            )}
          </InnerContainer2>
        </InnerContainer1>
      </Element>
    );
  }
};

/* Colonna generica, ritorna una TextColumn o una ImageColumn in base al tipo */
type HeroColumnProps = { column: HeroColumn, textColor?: string, textAlign?: string };
const HeroColumnComponent: FC<HeroColumnProps> = ({ column, textColor, textAlign }) => {
  if (isHeroTextColumn(column)) {
    return (
      <HeroTextColumnComponent
        rich_text={column.rich_text}
        links={column.links}
        text_color={textColor}
        text_alignment={textAlign}
      ></HeroTextColumnComponent>
    );
  } else if (isHeroImageColumn(column)) {
    return (
      <HeroImageColumnComponent
        image={sanityUrlFor(column.image).url()}
      ></HeroImageColumnComponent>
    );
  } else {
    return null;
  }
};

/* Colonna Text */
type HeroTextColumnProps = Omit<HeroTextColumn, "_key" | "column_type">;
const HeroTextColumnComponent: FC<HeroTextColumnProps> = ({
  rich_text,
  links,
  text_color,
  text_alignment,
}) => {
  return (
    <InnerContainerLeft $textColor={text_color} $textAlign={text_alignment}>
      <PortableText components={heroComponents} value={rich_text} />
      {links?.length && (
        <HeroLinksContainer>
          {links.map((l) => (
            <HeroLinkComponent key={l._key} heroLink={l}></HeroLinkComponent>
          ))}
        </HeroLinksContainer>
      )}
    </InnerContainerLeft>
  );
};

/* Colonna Image */
type HeroImageColumnProps = Omit<HeroImageColumn, "_key" | "column_type">;
const HeroImageColumnComponent: FC<HeroImageColumnProps> = ({ image }) => {
  return (
    <InnerContainerRight>
      <Image src={image} alt="image" width={600} height={500} />
    </InnerContainerRight>
  );
};

/* Link */
type HeroLinkProps = { heroLink: Omit<HeroLink, "_key"> };
const HeroLinkComponent: FC<HeroLinkProps> = ({ heroLink }) => {
  const { link, type, button_color, button_text_color } = heroLink;
  const href = customLinkToHref(link);

  if (!link.label || !href) {
    return null;
  }

  if (type === HeroLinkType.Button) {
    return <Button href={href} label={link.label} margin={"0"} bgColor={button_color}
    textColor={button_text_color}></Button>;
  } else {
    return <GenericLink href={href}>{link.label}</GenericLink>;
  }
};

export default HeroSectionComponent;
