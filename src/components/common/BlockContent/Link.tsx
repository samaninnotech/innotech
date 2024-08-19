import { CustomLinkType } from "@/sanity/types";
import { FunctionComponent, ReactNode } from "react";
import { StyledLink } from "./styles";

type LinkProps = {
  href?: string;
  children: ReactNode;
  linkType: CustomLinkType;
};

const LinkComponent: FunctionComponent<LinkProps> = ({
  href,
  children,
  linkType,
}) => {
  if (!href) {
    return <>{children}</>;
  }

  if (linkType === CustomLinkType.Internal) {
    return <StyledLink href={href}>{children}</StyledLink>;
  } else {
    return (
      <StyledLink href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledLink>
    );
  }
};

export default LinkComponent;
