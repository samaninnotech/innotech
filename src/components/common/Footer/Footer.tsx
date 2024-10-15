"use client";
import { sanityUrlFor } from "@/sanity/sanity-client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import Image from "next/image";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterColumn,
  FooterContainer,
  FooterHeading,
  FooterInnerContainer,
  FooterList,
  FooterLogo,
  FooterRow,
  FooterText,
  FooterWrapper,
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

// Mapping of social media labels to their corresponding icons
const socialIcons: Record<string, JSX.Element> = {
  Twitter: <FaTwitter />,
  Facebook: <BiLogoFacebook />,
  Instagram: <FaInstagram />,
  LinkedIn: <FaLinkedinIn />,
  YouTube: <FaYoutube />,
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
              <FooterText dangerouslySetInnerHTML={{ __html: address }} />
              <FooterText>{phone}</FooterText>
              <FooterText>
                <a href={`mailto:${email}`}>{email}</a>
              </FooterText>
            </FooterColumn>

            {/* Services List (Without Links) */}
            <FooterColumn className="services-column">
              <FooterHeading>IT Services</FooterHeading>
              <ServicesList>
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ServicesList>
            </FooterColumn>

            {/* Quick Links */}
            <FooterColumn className="links-column">
              <FooterHeading>Quick Links</FooterHeading>
              <FooterList>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={customLinkToHref(link)}>{link.label}</a>
                  </li>
                ))}
              </FooterList>
            </FooterColumn>

            {/* About Links */}
            <FooterColumn className="links-column">
              <FooterHeading>About Us</FooterHeading>
              <FooterList>
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <a href={customLinkToHref(link)}>{link.label}</a>
                  </li>
                ))}
              </FooterList>
            </FooterColumn>
          </FooterRow>

          <FooterRow>
            <FooterText>{copyrightText}</FooterText>
            {/* Social Links */}
            <SocialLinks>
              {socialLinks.map((socialLink, index) => {
                const icon = socialIcons[socialLink.label]; // Get the icon based on the label
                return (
                  <a
                    key={index}
                    href={customLinkToHref(socialLink)}
                    aria-label={socialLink.label}
                    target="_blank"
                  >
                    {icon}
                  </a>
                );
              })}
            </SocialLinks>
          </FooterRow>
        </FooterInnerContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
