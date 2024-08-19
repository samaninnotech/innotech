"use client";
import { ComponentPropsWithoutRef, FC } from "react";
import { Element } from "./Nav-submenu-button.styled";

type NavSubmenuButtonProps = ComponentPropsWithoutRef<"button"> & {
  className?: string;
  margin?: string;
  label: string;
  href: string;
  bgColor: string;
  color: string;
};

const NavSubmenuButton: FC<NavSubmenuButtonProps> = ({
  className,
  margin,
  label,
  href,
  bgColor,
  color,
}) => {
  return (
    <Element
      className={className}
      $margin={margin}
      href={href}
      $bgColor={bgColor}
      $color={color}
    >
      {label}
    </Element>
  );
};

export default NavSubmenuButton;
