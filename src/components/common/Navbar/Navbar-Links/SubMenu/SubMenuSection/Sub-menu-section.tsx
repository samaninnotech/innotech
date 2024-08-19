"use client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import { ComponentPropsWithoutRef, FC } from "react";
import {
  MainSectionContainer,
  SectionLink,
  SectionLinksContainer,
} from "./Sub-menu-section.styled";

type SubmenuSectionProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  links: CustomLink[];
};
export const SubmenuSection: FC<SubmenuSectionProps> = ({ title, links }) => {
  return (
    <MainSectionContainer>
      <p>{title}</p>
      <SectionLinksContainer>
        {links?.length &&
          links.map((l, idx) => (
            <SectionLink key={title + idx} href={customLinkToHref(l)}>
              {l.label}
            </SectionLink>
          ))}
      </SectionLinksContainer>
    </MainSectionContainer>
  );
};
export default SubmenuSection;
