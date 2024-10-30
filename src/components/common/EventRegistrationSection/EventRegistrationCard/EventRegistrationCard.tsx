import { sanityUrlFor } from "@/sanity/sanity-client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import React, { useEffect, useState } from "react";
import PopupForm from "../../PopupForm";
import {
  ButtonLink,
  ButtonText,
  ButtonWrapper,
  ButtonsWrapper,
  CardContainer,
  InnerContainer,
  LeftSection,
  Logo,
  LogosContainer,
  PlusSign,
  Subtitle,
  Title,
} from "./EventRegistrationCard.styled";

type EventRegistrationCardProps = {
  title: string;
  subtitle: string;
  images: string[];
  buttonLink: CustomLink | null;
  type: string;
};

const EventRegistrationCard: React.FC<EventRegistrationCardProps> = ({
  title,
  subtitle,
  images,
  buttonLink,
  type,
}) => {
  const isCertificationEvent = type === "certification";
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [isPopupOpen]);

  return (
    <CardContainer>
      <InnerContainer>
        <LeftSection>
          {isCertificationEvent && (
            <LogosContainer>
              {images.map((image, index) => (
                <React.Fragment key={index}>
                  <Logo
                    src={sanityUrlFor(image).url()}
                    alt={`Logo ${index + 1}`}
                    width={200}
                    height={200}
                  />
                  {index < images.length - 1 && <PlusSign>+</PlusSign>}
                </React.Fragment>
              ))}
            </LogosContainer>
          )}
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </LeftSection>
        <ButtonsWrapper isCertification={isCertificationEvent}>
          {buttonLink && buttonLink.label && (
            <>
              {buttonLink.linkType === "POPUP_FORM" ? (
                <ButtonWrapper isCertification={isCertificationEvent}>
                  <ButtonLink
                    onClick={togglePopup}
                    href="#" // Placeholder href since we are using it as a button
                  >
                    <ButtonText>{buttonLink.label}</ButtonText>
                  </ButtonLink>
                </ButtonWrapper>
              ) : (
                <ButtonWrapper isCertification={isCertificationEvent}>
                  <ButtonLink
                    href={customLinkToHref(buttonLink)} // Use href when not a popup
                  >
                    <ButtonText>{buttonLink.label}</ButtonText>
                  </ButtonLink>
                </ButtonWrapper>
              )}
            </>
          )}
        </ButtonsWrapper>
        {/* Render Popup if the link type is POPUP_FORM */}
        {isPopupOpen && buttonLink?.linkType === "POPUP_FORM" && (
          <PopupForm
            onClose={togglePopup}
            header={buttonLink.popupForm.header}
            firstNameLabel={buttonLink.popupForm.firstNameLabel}
            lastNameLabel={buttonLink.popupForm.lastNameLabel}
            companyLabel={buttonLink.popupForm.companyLabel}
            roleLabel={buttonLink.popupForm.roleLabel}
            invitedByLabel={buttonLink.popupForm.invitedByLabel}
            phoneLabel={buttonLink.popupForm.phoneLabel}
            emailLabel={buttonLink.popupForm.emailLabel}
            agreementLabel={buttonLink.popupForm.agreementLabel}
            submitText={buttonLink.popupForm.submitText}
            thumbnail={buttonLink.popupForm.thumbnail}
            brochure={buttonLink.popupForm.brochure}
            senderEmail={buttonLink.popupForm.senderEmail}
            senderPassword={buttonLink.popupForm.senderPassword}
            notificationText={""}
          />
        )}
      </InnerContainer>
    </CardContainer>
  );
};

export default EventRegistrationCard;
