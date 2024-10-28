"use client";
import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { Element } from "./Button.styled";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  className?: string;
  margin?: string;
  label: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
  icon?: ReactNode | string;
  iconPosition?: "left" | "right";
};

const Button: FC<ButtonProps> = ({
  className,
  margin,
  label,
  href,
  bgColor,
  textColor,
  icon,
  iconPosition = "left",
  ...props
}) => {
  return (
    <Element
      as={href ? "a" : "button"}
      className={className}
      href={href || undefined}
      $margin={margin}
      $bgColor={bgColor}
      $textColor={textColor}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span style={{ marginRight: "0.5rem" }}>{icon}</span>
      )}
      {label}
      {icon && iconPosition === "right" && (
        <span style={{ marginLeft: "0.5rem" }}>{icon}</span>
      )}
    </Element>
  );
};

export default Button;
