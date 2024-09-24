"use client";

import { FC, useEffect, useState } from "react";
import NavbarLinks from "./Navbar-Links/Navbar-Links";
import {
  MainNavbarStyled,
  NavbarInnerWrapper,
  NavbarWrapper,
  SecondaryNavbarStyled,
} from "./Navbar.styled";
import { SlugMapping } from "./types";

export type NavbarProps = {
  slugMapping: SlugMapping;
  onSidebarToggle: () => void;
  isHomepage: boolean;
};

const Navbar: FC<NavbarProps> = ({ slugMapping, onSidebarToggle, isHomepage }) => {
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const shouldShow = scrollY > 50;
    setShowSecondaryNavbar(shouldShow);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Navbar (for all pages) */}
      <MainNavbarStyled isVisible={!showSecondaryNavbar}>
        <NavbarWrapper>
          <NavbarInnerWrapper>
            <NavbarLinks
              slugMapping={slugMapping}
              logoSrc={isHomepage ? "/site-logo.png" : "/site-logo-blue.png"}
              onSidebarToggle={onSidebarToggle}
              textColorClass={isHomepage ? "text-white" : "text-black"} // Pass the text color class
              burgerButtoncolor={isHomepage ? "white" : "black"}            />
          </NavbarInnerWrapper>
        </NavbarWrapper>
      </MainNavbarStyled>

      {/* Secondary Navbar (for all pages) */}
      <SecondaryNavbarStyled isVisible={showSecondaryNavbar}>
        <NavbarWrapper>
          <NavbarInnerWrapper>
            <NavbarLinks
              slugMapping={slugMapping}
              logoSrc="/site-logo-blue.png"
              onSidebarToggle={onSidebarToggle}
              textColorClass="text-black" // Always black for the secondary navbar
              burgerButtoncolor={"black"}            />
          </NavbarInnerWrapper>
        </NavbarWrapper>
      </SecondaryNavbarStyled>
    </>
  );
};

export default Navbar;
