"use client";
import { ComponentPropsWithoutRef, FC } from "react";
import { Element } from "./Button.styled";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  className?: string;
  margin?: string;
  label: string;
  href?: string; // Optional href
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
  ...props
}) => {
  return (
    <Element
      as={href ? "a" : "button"} // Dynamically set as "a" if href is present
      className={className}
      href={href || undefined} // Pass href only if defined, else undefined
      $margin={margin}
      $bgColor={bgColor}
      $textColor={textColor}
      {...props}
    >
      {label}
    </Element>
  );
};

export default Button;
