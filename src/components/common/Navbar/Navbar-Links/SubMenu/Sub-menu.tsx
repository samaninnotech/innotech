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
  onMouseLeave: () => void;
  position: { left: number };
};

const SubMenu: FC<SubMenuProps> = ({
  showSubMenu,
  config,
  onMouseLeave,
  position,
}) => {
  const { left } = position;
  return (
    <Element
      $showSubMenu={showSubMenu}
      onMouseLeave={onMouseLeave}
      $left={Math.ceil(left)}
    >
      <SubmenuParentContainer>
        {config.map((l, index) => {
          const isSection = isNavbarSubmenuSection(l);
          return (
            <SubmenuBlockContainer
              key={index}
              flexAlignment={isSection ? "flex-start" : "center"}
            >
              {isSection && (
                <SubmenuSection title={l.title} links={l.links || []} />
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
