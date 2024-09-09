"use client";
import { ComponentPropsWithoutRef, FC } from "react";
import { Element } from "./Button.styled";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  className?: string;
  margin?: string;
  label: string;
  href: string;
  bgColor?: string;
  textColor?: string;
};

const Button: FC<ButtonProps> = ({
  className,
  margin,
  label,
  href,
  bgColor,
  textColor,
}) => {
  return (
    <Element
      className={className}
      $margin={margin}
      href={href}
      $bgColor={bgColor}
      $textColor={textColor}
    >
      {label}
    </Element>
  );
};

export default Button;
