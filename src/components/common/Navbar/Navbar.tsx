"use client";

import { FC, useEffect, useState } from "react";
import NavbarLinks from "./Navbar-Links/Navbar-Links";
import { MainNavbarStyled, NavbarWrapper, SecondaryNavbarStyled } from "./Navbar.styled";
import { SlugMapping } from "./types";

export type NavbarProps = { slugMapping: SlugMapping };

const Navbar: FC<NavbarProps> = ({ slugMapping }) => {
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
  const [hideMainNavbar, setHideMainNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hide the main navbar after scrolling 50px
      if (scrollY > 50) {
        setHideMainNavbar(true);
      } else {
        setHideMainNavbar(false);
      }

      // Show the secondary navbar after scrolling 200px
      if (scrollY > 200) {
        setShowSecondaryNavbar(true);
      } else {
        setShowSecondaryNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Transparent Navbar */}
      <MainNavbarStyled isVisible={!hideMainNavbar}>
        <NavbarWrapper>
          <NavbarLinks slugMapping={slugMapping} logoSrc="/site-logo.png" />
        </NavbarWrapper>
      </MainNavbarStyled>

      {/* Secondary White Navbar */}
      <SecondaryNavbarStyled isVisible={showSecondaryNavbar}>
        <NavbarWrapper>
          <NavbarLinks slugMapping={slugMapping} logoSrc="/site-logo-blue.png" />
        </NavbarWrapper>
      </SecondaryNavbarStyled>
    </>
  );
};

export default Navbar;
