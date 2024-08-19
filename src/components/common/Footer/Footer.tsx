'use client';
import React from 'react';
import { FooterColumn, FooterContainer, FooterHeading, FooterInnerContainer, FooterList, FooterLogo, FooterRow, FooterText, FooterWrapper, SocialLinks } from './Footer.styled';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterInnerContainer>
        <FooterRow>
          <FooterColumn className="logo-column">
            <FooterLogo href="https://innotech.software/">
              <img
                src="https://innotech.software/wp-content/uploads/2021/01/Logo_Innotech_Positive_RGB-250x52.png"
                alt="InnoTech Logo"
              />
            </FooterLogo>
            <FooterHeading>Centro Direzionale E33</FooterHeading>
            <FooterText>
              v.le Del Lavoro, 33<br />
              37036 San Martino B.A. (VR) – Italy<br />
              Tel. +39 045 445 00 55
            </FooterText>
            <FooterText>
              <a href="mailto:info@innotech.email">info@innotech.email</a>
            </FooterText>
          </FooterColumn>

          <FooterColumn  className="links-column">
            <FooterHeading>IT Services</FooterHeading>
            <FooterList>
              <li><a href="#">IT Software</a></li>
              <li><a href="#">IT Project</a></li>
              <li><a href="#">IT Platform</a></li>
              <li><a href="#">Production Suite</a></li>
              <li><a href="#">Cloud Computing</a></li>
            </FooterList>
          </FooterColumn>

          <FooterColumn  className="links-column">
            <FooterHeading>Quick links</FooterHeading>
            <FooterList>
              <li><a href="https://innotech.software/team/">Team</a></li>
              <li><a href="https://innotech.software/privacy-e-cookie-policy/">Privacy e Cookie Policy</a></li>
            </FooterList>
          </FooterColumn>

          <FooterColumn className="links-column">
            <FooterHeading>About Us</FooterHeading>
            <FooterList>
              <li><a href="https://innotech.software/contatti/">Contatti</a></li>
            </FooterList>
          </FooterColumn>

          <FooterColumn className="social-column">
            <SocialLinks>
              <a href="https://www.twitter.com/innotechsrl" target="_blank" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/innotechsrl" target="_blank" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/innotech_srl" target="_blank" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/innotechsrl" target="_blank" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCs1lvBra7nMneYANtfRsOIA" target="_blank" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </SocialLinks>
          </FooterColumn>
        </FooterRow>

        <FooterRow>
          <FooterColumn >
            <FooterText>
              © 2021 InnoTech Srl. Tutti i diritti riservati | Cod. Fisc. e P.Iva 04758110235 | REA VR-445854<br />
              Cap. Soc. Euro 10.000,00 i.v. | Codice Univoco: A4707H7
            </FooterText>
          </FooterColumn>
        </FooterRow>
        </FooterInnerContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
