"use client";
import Link from "@/i18n/Link";
import { sanityUrlFor } from "@/sanity/sanity-client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import Image from "next/image";
import React, { useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  Bubble,
  CopyRightRow,
  FooterColumn,
  FooterContainer,
  FooterHeading,
  FooterInnerContainer,
  FooterList,
  FooterLogo,
  FooterRow,
  FooterText,
  FooterWrapper,
  LinksRow,
  ServicesList,
  SocialLinks,
} from "./Footer.styled";

interface FooterProps {
  logoSrc: string;
  address: string;
  phone: string;
  email: string;
  services: string[];
  quickLinks: CustomLink[];
  aboutLinks: CustomLink[];
  socialLinks: CustomLink[];
  copyrightText: string;
}

const socialIcons: Record<string, JSX.Element> = {
  Twitter: <FaTwitter />,
  Facebook: <BiLogoFacebook />,
  Instagram: <FaInstagram />,
  Linkedin: <FaLinkedinIn />,
  Youtube: <FaYoutube />,
};

const Footer: React.FC<FooterProps> = ({
  logoSrc,
  address,
  phone,
  email,
  services,
  quickLinks,
  aboutLinks,
  socialLinks,
  copyrightText,
}) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleMouseEnter = (iconName: string) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterInnerContainer>
          <FooterRow>
            <FooterColumn>
              <FooterLogo href="/">
                <Image
                  src={sanityUrlFor(logoSrc).url()}
                  alt={"logo"}
                  width={300}
                  height={60}
                />
              </FooterLogo>
              <FooterText style={{ width: "80%" }}>{address}</FooterText>
              <FooterText>{phone}</FooterText>
              <FooterText>
                <a href={`mailto:${email}`}>{email}</a>
              </FooterText>
            </FooterColumn>
            <LinksRow>
              <FooterColumn>
                <FooterHeading>IT Services</FooterHeading>
                <ServicesList>
                  {services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ServicesList>
              </FooterColumn>

              <FooterColumn>
                <FooterHeading>Quick Links</FooterHeading>
                <FooterList>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={customLinkToHref(link)}>{link.label}</a>
                    </li>
                  ))}
                </FooterList>
              </FooterColumn>

              <FooterColumn>
                <FooterHeading>About Us</FooterHeading>
                <FooterList>
                  {aboutLinks.map((link, index) => (
                    <li key={index}>
                      <a href={customLinkToHref(link)}>{link.label}</a>
                    </li>
                  ))}
                </FooterList>
              </FooterColumn>
            </LinksRow>
          </FooterRow>

          <CopyRightRow>
            <FooterText>{copyrightText}</FooterText>
            <SocialLinks>
              {socialLinks.map((socialLink, index) => {
                const icon = socialIcons[socialLink.label];
                return (
                  <Link
                    key={index}
                    href={customLinkToHref(socialLink)}
                    aria-label={socialLink.label}
                    target="_blank"
                    onMouseEnter={() => handleMouseEnter(socialLink.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {icon}

                    {hoveredIcon === socialLink.label && (
                      <Bubble className="show">{hoveredIcon}</Bubble>
                    )}
                  </Link>
                );
              })}
            </SocialLinks>
          </CopyRightRow>
        </FooterInnerContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
