import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const LoadMoreButton = styled.button`
  background: var(--accent-gradient-background);
  padding: 1.5rem 4.5rem;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid gray;
  color: #25567a;
  &:hover {
    background-color: #177aa9;
    color: white;
  }
`;

export const PostTitle = styled.h3`
  margin: 0.25rem;
  padding: 0 1rem;
`;

export const PostDescription = styled.p`
  margin-top: 0.25rem;
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: var(--text-light-color);
  padding: 0 1rem;
`;
export const PublishedDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  svg {
    width: 15px;
  }
`;
export const PostDate = styled.time`
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--text-light-color);

  &:hover {
    text-decoration: none;
  }
`;

export const PostImage = styled(Image)`
  object-fit: "cover";
  object-position: "top";
  width: "100%";
  border-radius: 0.25rem;
`;

export const ImageContainer = styled.picture`
  position: relative;
  display: block;
  margin-bottom: 1rem;
  ${mediaRules.md} {
  }
`;

export const TagBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 0.25rem;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;

export const TagBadge = styled.span`
  z-index: 2;
  top: -0.5rem;
  right: -0.5rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  background: var(--accent-gradient-background);
  color: var(--white-color);
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const PostTileStyled = styled(Link)`
  flex: 1 1 30%;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    text-decoration: none;
  }
`;
export const LearnMoreLink = styled.div`
  display: inline-block;
  color: #005a87;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  margin-top: auto;
  padding: 1.5rem 0;
  width: 100%;
  border-top: 1px solid gray;
  overflow: hidden;

  /* Pseudo-element for the inner cover */
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: #25567a; /* Darker blue cover color */
    transition: height 0.3s ease; /* Smooth transition for the cover */
    z-index: -1; /* Ensure the cover is beneath the text and arrow */
  }

  &:hover::before {
    height: 100%; /* Cover rises from the bottom to the top on hover */
  }

  /* Ensure text and arrow are above the cover */
  position: relative;
  z-index: 3;

  /* Change text and arrow color on hover */
  &:hover {
    color: white; /* Change text to white */
  }

  .arrow-icon {
    margin-left: 5px;
    transition: transform 0.3s ease;
    color: inherit; /* Inherit color from the parent */
  }

  &:hover .arrow-icon {
    transform: translateX(5px); /* Slide arrow on hover */
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background-color: #f8f8f8;
  margin: 0 auto;
  top: 120px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const TilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 40px;
  margin: 0 auto;
  align-content: center;
  justify-content: flex-start;
  ${mediaRules.md} {
    max-width: 910px;
    flex-direction: row;
    gap: 20px;
  }
  ${mediaRules.lg} {
    max-width: 1200px;
    flex-direction: row;
    gap: 40px;
  }
`;
