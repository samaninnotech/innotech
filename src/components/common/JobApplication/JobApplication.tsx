import { CustomLink, customLinkToHref } from "@/sanity/types";
import React from "react";
import Button from "../Button";

type JobApplicationProps = {
  candidateButton: CustomLink;
  returnButton: CustomLink;
};

const JobApplication: React.FC<JobApplicationProps> = ({
  candidateButton,
  returnButton,
}) => {
  return (
    <>
      <Button
        label={candidateButton.label}
        href={customLinkToHref(candidateButton)}
      />
      <Button
        label={returnButton.label}
        href={customLinkToHref(returnButton)}
      />
    </>
  );
};

export default JobApplication;
