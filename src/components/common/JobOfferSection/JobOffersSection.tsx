"use client";
import { JobOfferType } from "@/sanity/types";
import React from "react";
import JobOffer from "./JobOffer/JobOffer";
import { Header, JobOffersContainer } from "./JobOffersSection.styled";

type JobOffersSectionProps = {
  header: string;
  jobOffers: JobOfferType[];
};
const JobOffersSection: React.FC<JobOffersSectionProps> = ({
  header,
  jobOffers,
}) => {
  return (
    <JobOffersContainer>
      <Header>{header}</Header>
      {jobOffers.map((job, index) => (
        <JobOffer
          key={index}
          title={job.title}
          type={job.type}
          description={job.description}
          link={job.link}
          index={index}
        />
      ))}
    </JobOffersContainer>
  );
};

export default JobOffersSection;
