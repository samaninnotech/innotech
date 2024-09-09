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
};

const Navbar: FC<NavbarProps> = ({ slugMapping, onSidebarToggle }) => {
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
  const [hideMainNavbar, setHideMainNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hide the main navbar after scrolling 50px
      setHideMainNavbar(scrollY > 50);

      // Show the secondary navbar after scrolling 200px
      setShowSecondaryNavbar(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Transparent Navbar */}
      <MainNavbarStyled isVisible={!hideMainNavbar}>
        <NavbarWrapper>
          <NavbarInnerWrapper>
            <NavbarLinks
              slugMapping={slugMapping}
              logoSrc="/site-logo.png"
              onSidebarToggle={onSidebarToggle}
            />
          </NavbarInnerWrapper>
        </NavbarWrapper>
      </MainNavbarStyled>

      {/* Secondary White Navbar */}
      <SecondaryNavbarStyled isVisible={showSecondaryNavbar}>
        <NavbarWrapper>
          <NavbarInnerWrapper>
            <NavbarLinks
              slugMapping={slugMapping}
              logoSrc="/site-logo-blue.png"
              onSidebarToggle={onSidebarToggle}
            />
          </NavbarInnerWrapper>
        </NavbarWrapper>
      </SecondaryNavbarStyled>
    </>
  );
};

export default Navbar;
