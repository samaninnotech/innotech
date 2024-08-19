"use client";
import Button from "@/components/common/Button";
import {
  CustomLink,
  NavbarSubmenuSection,
  customLinkToHref,
  isNavbarSubmenuSection,
} from "@/sanity/types";
import { ComponentPropsWithoutRef, FC } from "react";
import {
  Element,
  SubmenuBlockContainer,
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
                <Button href={customLinkToHref(l)} label={l.label}></Button>
              )}
            </SubmenuBlockContainer>
          );
        })}
      </SubmenuParentContainer>
    </Element>
  );
};

export default SubMenu;
