import { FC, ReactNode } from "react";
import { GenericLinkStyled } from "./Generic-Link.styled";

type GenericLinkProps = { href: string; children: ReactNode };
export const GenericLink: FC<GenericLinkProps> = ({ href, children }) => {
  return <GenericLinkStyled href={`/${href}`}>{children}</GenericLinkStyled>;
};
