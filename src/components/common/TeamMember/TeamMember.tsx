"use client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "../../../i18n/Link"; // Import Link from Next.js
import {
  GridItemWithHover,
  InfoContainer,
  Name,
  PhotoContainer,
  Position,
  ProfileImage,
  SocialNetworks,
  SocialNetworksInner,
  TeamMemberContainer,
} from "./TeamMember.styled";

type TeamMemberProps = {
  image: string;
  name: string;
  position: string;
  linkedIn: CustomLink;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  position,
  linkedIn,
}) => {
  const href = customLinkToHref(linkedIn);

  return (
    <GridItemWithHover>
      <TeamMemberContainer>
        <PhotoContainer>
          <ProfileImage src={image} alt={name} width={1000} height={1000} />

          <Link href={href} target="_blank" aria-label="LinkedIn">
            <SocialNetworks>
              <SocialNetworksInner>
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </SocialNetworksInner>
            </SocialNetworks>
          </Link>
        </PhotoContainer>
        <InfoContainer>
          <Name>{name}</Name>
          <Position>{position}</Position>
        </InfoContainer>
      </TeamMemberContainer>
    </GridItemWithHover>
  );
};

export default TeamMember;
