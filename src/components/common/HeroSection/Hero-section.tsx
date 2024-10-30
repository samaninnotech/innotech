"use client";
import { sanityUrlFor } from "@/sanity/sanity-client";
import {
  HeroColumn,
  HeroImageColumn,
  HeroLink,
  HeroTextColumn,
  HeroVideoColumn,
  customLinkToHref,
  isHeroImageColumn,
  isHeroTextColumn,
  isHeroVideoColumn,
} from "@/sanity/types";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { Button, GenericLink, PopupForm } from "..";
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
  VideoContainer,
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
  height?: string;
};
const HeroSectionComponent: FC<HeroSectionProps> = ({
  id,
  leftColumn,
  rightColumn,
  backgroundColor,
  backgroundImage,
  height,
}) => {
  const leftTextColor = isHeroTextColumn(leftColumn)
    ? leftColumn.text_color
    : undefined;
  const rightTextColor = isHeroTextColumn(rightColumn)
    ? rightColumn.text_color
    : undefined;
  const leftTextAlign = isHeroTextColumn(leftColumn)
    ? leftColumn.text_alignment
    : "left";
  const rightTextAlign = isHeroTextColumn(rightColumn)
    ? rightColumn.text_alignment
    : "left";
  if (!rightColumn) {
    return (
      <Element id={id || ""} $background={backgroundColor} $height={height}>
        <OnlyTextContainer>
          {leftColumn && (
            <HeroColumnComponent
              column={leftColumn}
              textColor={leftTextColor}
              textAlign={leftTextAlign}
            ></HeroColumnComponent>
          )}
        </OnlyTextContainer>
      </Element>
    );
  } else {
    return (
      <Element id={id || ""} $background={backgroundColor} $height={height}>
        <InnerContainer1 $bgImg={backgroundImage}>
          <InnerContainer2>
            {leftColumn && (
              <HeroColumnComponent
                column={leftColumn}
                textColor={leftTextColor}
                textAlign={leftTextAlign}
              ></HeroColumnComponent>
            )}
            {rightColumn && (
              <HeroColumnComponent
                column={rightColumn}
                textColor={rightTextColor}
                textAlign={rightTextAlign}
              ></HeroColumnComponent>
            )}
          </InnerContainer2>
        </InnerContainer1>
      </Element>
    );
  }
};

/* Colonna generica, ritorna una TextColumn o una ImageColumn in base al tipo */
type HeroColumnProps = {
  column: HeroColumn;
  textColor?: string;
  textAlign?: string;
};
const HeroColumnComponent: FC<HeroColumnProps> = ({
  column,
  textColor,
  textAlign,
}) => {
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
  } else if (isHeroVideoColumn(column)) {
    return (
      <HeroVideoColumnComponent video={column.video}></HeroVideoColumnComponent>
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
      {links && links.length > 0 && (
        <HeroLinksContainer>
          {links.map((l, index) => {
            const key = l._key || `link-${index}`;
            return <HeroLinkComponent key={key} heroLink={l} />;
          })}
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
      <Image src={image} alt="image" width={400} height={400} />
    </InnerContainerRight>
  );
};

/* Colonna Video */
type HeroVideoColumnProps = Omit<HeroVideoColumn, "_key" | "column_type">;
const HeroVideoColumnComponent: FC<HeroVideoColumnProps> = ({ video }) => {
  return (
    <VideoContainer>
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
  );
};

/* Link */
type HeroLinkProps = { heroLink: Omit<HeroLink, "_key"> };
const HeroLinkComponent: FC<HeroLinkProps> = ({ heroLink }) => {
  const { link, type, button_color, button_text_color } = heroLink;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  if (link.linkType === "POPUP_FORM") {
    return (
      <>
        <Button
          onClick={togglePopup}
          label={link.label}
          margin={"0"}
          bgColor={button_color}
          textColor={button_text_color}
        />
        {isPopupOpen && (
          <PopupForm
            onClose={togglePopup}
            header={link.popupForm.header}
            firstNameLabel={link.popupForm.firstNameLabel}
            lastNameLabel={link.popupForm.lastNameLabel}
            companyLabel={link.popupForm.companyLabel}
            phoneLabel={link.popupForm.phoneLabel}
            emailLabel={link.popupForm.emailLabel}
            agreementLabel={link.popupForm.agreementLabel}
            submitText={link.popupForm.submitText}
            notificationText={link.popupForm.notificationText}
            thumbnail={link.popupForm.thumbnail}
            brochure={link.popupForm.brochure}
            senderEmail={link.popupForm.senderEmail}
            senderPassword={link.popupForm.senderPassword}
          />
        )}
      </>
    );
  }

  const href = customLinkToHref(link);
  if (type === "Button") {
    return (
      <Button
        href={href}
        label={link.label}
        margin={"0"}
        bgColor={button_color}
        textColor={button_text_color}
      />
    );
  }

  return <GenericLink href={href}>{link.label}</GenericLink>;
};

export default HeroSectionComponent;
