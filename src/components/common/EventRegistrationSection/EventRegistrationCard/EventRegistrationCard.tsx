import { sanityUrlFor } from "@/sanity/sanity-client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import React, { useEffect, useState } from "react";
import EventPopupForm from "../../EventPopupForm";
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
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
              {buttonLink.linkType === "EVENT_POPUP_FORM" ? (
                <ButtonWrapper isCertification={isCertificationEvent}>
                  <ButtonLink onClick={togglePopup} href="#">
                    <ButtonText>{buttonLink.label}</ButtonText>
                  </ButtonLink>
                </ButtonWrapper>
              ) : (
                <ButtonWrapper isCertification={isCertificationEvent}>
                  <ButtonLink href={customLinkToHref(buttonLink)}>
                    <ButtonText>{buttonLink.label}</ButtonText>
                  </ButtonLink>
                </ButtonWrapper>
              )}
            </>
          )}
        </ButtonsWrapper>
        {/* Render Popup if the link type is EVENT_POPUP_FORM */}
        {isPopupOpen && buttonLink?.linkType === "EVENT_POPUP_FORM" && (
          <EventPopupForm
            onClose={togglePopup}
            header={buttonLink.eventPopupForm.header}
            firstNameLabel={buttonLink.eventPopupForm.firstNameLabel}
            lastNameLabel={buttonLink.eventPopupForm.lastNameLabel}
            companyLabel={buttonLink.eventPopupForm.companyLabel}
            roleLabel={buttonLink.eventPopupForm.roleLabel}
            invitedByLabel={buttonLink.eventPopupForm.invitedByLabel}
            phoneLabel={buttonLink.eventPopupForm.phoneLabel}
            emailLabel={buttonLink.eventPopupForm.emailLabel}
            agreementLabel={buttonLink.eventPopupForm.agreementLabel}
            submitText={buttonLink.eventPopupForm.submitText}
            senderEmail={buttonLink.eventPopupForm.senderEmail}
            senderPassword={buttonLink.eventPopupForm.senderPassword}
            notificationText={buttonLink.eventPopupForm.notificationText}
            receiverEmail={buttonLink.eventPopupForm.receiverEmail}
          />
        )}
      </InnerContainer>
    </CardContainer>
  );
};

export default EventRegistrationCard;
