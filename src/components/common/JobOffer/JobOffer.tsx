import { CustomLink, customLinkToHref } from "@/sanity/types";
import React from "react";
import {
  ButtonLink,
  ButtonText,
  JobButton,
  JobDescription,
  JobInfo,
  JobOfferContainer,
  JobTitle,
  JobType,
} from "./JobOffer.styled";

type JobOfferProps = {
  title: string;
  type: string;
  description: string;
  link: CustomLink;
  index: number;
};

const JobOffer: React.FC<JobOfferProps> = ({
  title,
  type,
  description,
  link,
  index,
}) => {
  return (
    <JobOfferContainer isEven={index % 2 === 0}>
      <JobInfo>
        <JobTitle>{title}</JobTitle>
        <JobType>{type}</JobType>
      </JobInfo>
      <JobDescription>{description}</JobDescription>
      <JobButton>
        <ButtonLink href={customLinkToHref(link)}>
          <ButtonText>Maggiori Dettagli</ButtonText>
        </ButtonLink>
      </JobButton>
    </JobOfferContainer>
  );
};

export default JobOffer;
