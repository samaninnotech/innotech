"use client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import JobPopupForm from "../JobPopupForm";
import { ButtonsContainer, Container, LeftBox } from "./JobApplication.styled";

type JobApplicationProps = {
  candidate_label: CustomLink;
  candidate_button_color: string;
  candidate_button_text_color: string;
  return_label: CustomLink;
  return_button_color: string;
  return_button_text_color: string;
};

const JobApplication: React.FC<JobApplicationProps> = ({
  candidate_label,
  candidate_button_color,
  candidate_button_text_color,
  return_label,
  return_button_color,
  return_button_text_color,
}) => {
  const [isCandidatePopupOpen, setCandidatePopupOpen] = useState(false);

  const toggleCandidatePopup = () => {
    setCandidatePopupOpen(!isCandidatePopupOpen);
  };

  useEffect(() => {
    // Prevent body scroll when the popup is open
    document.body.style.overflow = isCandidatePopupOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [isCandidatePopupOpen]);

  return (
    <Container>
      <LeftBox />
      <ButtonsContainer>
        {/* Return button is a normal link */}
        <Button
          label={return_label.label}
          href={customLinkToHref(return_label)} // Normal link
          bgColor={return_button_color}
          textColor={return_button_text_color}
        />

        {/* Candidate button to open the JobPopupForm */}
        {candidate_label.linkType === "JOB_POPUP_FORM" ? (
          <Button
            label={candidate_label.label}
            onClick={toggleCandidatePopup} // Toggle popup
            bgColor={candidate_button_color}
            textColor={candidate_button_text_color}
          />
        ) : (
          <Button
            label={candidate_label.label}
            href={customLinkToHref(candidate_label)} // Normal link
            bgColor={candidate_button_color}
            textColor={candidate_button_text_color}
          />
        )}
      </ButtonsContainer>

      {/* Render JobPopupForm when the candidate button's link type is JOB_POPUP_FORM */}
      {isCandidatePopupOpen &&
        candidate_label.linkType === "JOB_POPUP_FORM" && (
          <JobPopupForm
            onClose={toggleCandidatePopup}
            header={candidate_label.jobPopupForm.header}
            firstNameLabel={candidate_label.jobPopupForm.firstNameLabel}
            lastNameLabel={candidate_label.jobPopupForm.lastNameLabel}
            phoneLabel={candidate_label.jobPopupForm.phoneLabel}
            emailLabel={candidate_label.jobPopupForm.emailLabel}
            agreementLabel={candidate_label.jobPopupForm.agreementLabel}
            submitText={candidate_label.jobPopupForm.submitText}
            senderEmail={candidate_label.jobPopupForm.senderEmail}
            senderPassword={candidate_label.jobPopupForm.senderPassword}
            receiverEmail={candidate_label.jobPopupForm.receiverEmail}
            subtitle={candidate_label.jobPopupForm.subtitle}
            presentationLabel={candidate_label.jobPopupForm.presentationLabel}
            fileUploadLabel={candidate_label.jobPopupForm.fileUploadLabel}
          />
        )}
    </Container>
  );
};

export default JobApplication;
