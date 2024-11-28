"use client";
import Link from "@/i18n/Link";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { FaPhone } from "react-icons/fa6";
import {
  Container,
  InfoIcon,
  PageTopBarContainer,
  PhoneContactLink,
  Row,
  TopBarInfo,
  TopBarLeft,
  TopBarRight,
  TopBarWrap,
} from "./PageTopBar.styled";

type TopBarProps = {
  contactLink: CustomLink;
  contactText: any;
  phoneContact: string;
  phoneContactLink: string;
  isHomePage?: boolean;
};

const PageTopBar: FC<TopBarProps> = ({
  contactLink,
  contactText,
  phoneContact,
  phoneContactLink,
  isHomePage,
}) => {
  const href = customLinkToHref(contactLink);
  const path = usePathname();
  const isHomePageCurrent = path === "/" || path === "/en";

  return (
    <PageTopBarContainer $isHomePage={isHomePageCurrent}>
      <Container>
        <Row>
          <TopBarWrap>
            <TopBarLeft>
              <Link href={href}>{contactLink.label} </Link>
              {contactText}
            </TopBarLeft>
            <TopBarRight>
              <TopBarInfo>
                <InfoIcon>
                  <FaPhone />
                </InfoIcon>
                <PhoneContactLink href={phoneContactLink}>
                  <strong>{phoneContact}</strong>
                </PhoneContactLink>
              </TopBarInfo>
            </TopBarRight>
          </TopBarWrap>
        </Row>
      </Container>
    </PageTopBarContainer>
  );
};

export default PageTopBar;
