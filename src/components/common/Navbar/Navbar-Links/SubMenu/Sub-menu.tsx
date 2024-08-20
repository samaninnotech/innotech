"use client";
import {
  CustomLink,
  customLinkToHref,
  isNavbarSubmenuSection,
  NavbarSubmenuSection,
} from "@/sanity/types";
import { ComponentPropsWithoutRef, FC } from "react";
import {
  Element,
  SubmenuBlockContainer,
  SubMenuLink,
  SubmenuParentContainer,
} from "./Sub-menu.styled";
import SubmenuSection from "./SubMenuSection";

type SubMenuProps = ComponentPropsWithoutRef<"div"> & {
  showSubMenu: boolean;
  config: (CustomLink | NavbarSubmenuSection)[];
};
const SubMenu: FC<SubMenuProps> = ({ showSubMenu, config }) => {
  return (
    <Element $showSubMenu={showSubMenu}>
      <SubmenuParentContainer>
        {config.map((l, index) => {
          const isSection = isNavbarSubmenuSection(l);
          return (
            <SubmenuBlockContainer
              key={index}
              flexAlignment={isSection ? "flex-start" : "center"}
            >
              {isSection && (
                <SubmenuSection
                  title={l.title}
                  links={l.links || []}
                ></SubmenuSection>
              )}
              {!isSection && (
                <SubMenuLink href={customLinkToHref(l)}>{l.label}</SubMenuLink>
              )}
            </SubmenuBlockContainer>
          );
        })}
      </SubmenuParentContainer>
    </Element>
  );
};

export default SubMenu;
