// NavbarLinks.tsx
"use client";

import Link from "@/i18n/Link";
import PagesConfigContext from "@/i18n/PagesConfigContext";
import { CustomLink, customLinkToHref, DecoratedLinkType, isNavbarSubmenu, NavbarSubmenuSection } from "@/sanity/types";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { FC, useContext, useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import NavbarLanguages from "../Navbar-Languages/NavbarLanguages";
import { SlugMapping } from "../types";
import {
  BurgerMenuButton,
  ComplexNavbarLinkContainer,
  LogoContainerStyled,
  MainLinksContainerStyled,
  NavbarElementStyled,
  NavbarLinkButtonStyled,
  NavbarLinksStyled,
  NavbarMenuStyled,
  OverlayStyled,
  PageLinksContainerStyled,
  SidebarContentStyled,
  SideBarLogoButtonContainer,
  SidebarStyled,
  SideLinkStyled,
  SVGContainer
} from "./Navbar-Links.styled";
import SubMenu from "./SubMenu";

export type NavbarLinksProps = { 
  slugMapping: SlugMapping; 
  logoSrc: string; 
  onSidebarToggle: () => void; 
};

const NavbarLinks: FC<NavbarLinksProps> = ({ slugMapping, logoSrc, onSidebarToggle }) => {
  const [showMenu, setShowMenu] = useState(false);
const [isOverlayVisible, setIsOverlayVisible] = useState(false);

const handleSidebarToggle = () => {
  setShowMenu(prev => !prev);
  setIsOverlayVisible(prev => !prev); // Toggle overlay visibility
  onSidebarToggle(); // Notify parent component of the sidebar toggle
};

useEffect(() => {
  if (showMenu) {
    document.body.style.overflow = 'hidden'; // Prevent scrolling on body
  } else {
    document.body.style.overflow = ''; // Re-enable scrolling
  }
  return () => {
    document.body.style.overflow = ''; // Cleanup on unmount
  };
}, [showMenu]);

return (
  <>
    <NavbarLinksStyled $showMenu={showMenu}>
      <LogoContainerStyled>
        <Link href="/" aria-label="Home">
          <Image src={logoSrc} alt="Logo" height={50} width={250} />
        </Link>
      </LogoContainerStyled>
      <MainLinksContainerStyled>
        <PageLinksContainer />
        <NavbarLanguages slugMapping={slugMapping} />
      </MainLinksContainerStyled>
      <BurgerMenuButton onClick={handleSidebarToggle}>
        {showMenu ? <MdMenu /> : <MdMenu />}
      </BurgerMenuButton>
    </NavbarLinksStyled>
    <SidebarStyled $showMenu={showMenu}>
      <SidebarContentStyled>
        <SideBarLogoButtonContainer>
          <Image src="/site-logo-blue.png" alt="Logo"  height={50} width={250}/>
          <MdClose onClick={handleSidebarToggle} />    
        </SideBarLogoButtonContainer>
        <PageLinksContainer />
        <NavbarLanguages slugMapping={slugMapping} />
      </SidebarContentStyled>
    </SidebarStyled>
    <OverlayStyled
      $showOverlay={isOverlayVisible}
      onClick={handleSidebarToggle} // Close sidebar when overlay is clicked
    />
  </>
);
};

const PageLinksContainer: FC = () => {
  const { mainConfig } = useContext(PagesConfigContext);
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Get the last part of the path

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleItemClicked = (index: number) => {
    if (index === selectedIndex) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  if (!mainConfig?.length) {
    return <PageLinksContainerStyled />;
  }

  const navbarElements = mainConfig.map((l, index) => {
    const isSelected = selectedIndex === index;

    if (isNavbarSubmenu(l)) {
      return (
        <ComplexNavbarLink
          key={l._key}
          label={l.title}
          selected={isSelected}
          openSubMenu={handleItemClicked}
          index={index}
          config={l.elements}
        />
      );
    } else {
      const href = customLinkToHref(l);
      return (
        <SimpleNavbarLink
          key={l._key}
          label={l.label}
          link={href}
          isButton={false}
          selected={href.replace("/", "") === slug} // Compare with slug from pathname
        />
      );
    }
  });

  return <PageLinksContainerStyled>{navbarElements}</PageLinksContainerStyled>;
};

type SimpleNavbarLinkProperties = {
  label: string;
  link: string;
  children?: React.ReactNode;
  isButton?: boolean;
  selected?: boolean;
};
const SimpleNavbarLink: FC<SimpleNavbarLinkProperties> = ({
  label,
  link,
  isButton,
  selected,
}) => {
  return isButton ? (
    <NavbarLinkButtonStyled href={link}>{label}</NavbarLinkButtonStyled>
  ) : (
    <NavbarElementStyled href={link} $selected={!!selected}>
      {label}
    </NavbarElementStyled>
  );
};

type ComplexNavbarLinkProperties = {
  label: string;
  selected?: boolean;
  openSubMenu?: Function;
  index?: number;
  config?: Array<CustomLink | NavbarSubmenuSection> | undefined;
};
const ComplexNavbarLink: FC<ComplexNavbarLinkProperties> = ({
  label,
  selected,
  openSubMenu,
  index,
  config,
}) => {
  const icon: React.ReactNode = (
    <SlArrowDown
      style={{
        transform: selected ? "rotate(-180deg)" : "rotate(0deg)",
      }}
    />
  );
  return (
    <>
      <NavbarMenuStyled
        onClick={openSubMenu ? () => openSubMenu(index) : undefined}
      >
        <ComplexNavbarLinkContainer $selected={!!selected}>
          {label}
          <SVGContainer>
            {icon}
          </SVGContainer>
        </ComplexNavbarLinkContainer>
      </NavbarMenuStyled>
      {selected && config && <SubMenu showSubMenu={true} config={config} />}
    </>
  );
};

const SideLinksContainer: FC = () => {
  const { sideConfig } = useContext(PagesConfigContext);
  const { slug } = useParams();

  if (!sideConfig?.length) {
    return <MainLinksContainerStyled />;
  }

  return (
    <MainLinksContainerStyled>
      {sideConfig.map((l) => {
        const { type, link } = l;
        const href = customLinkToHref(link);
        return (
          <SideLink
            key={link._key}
            label={link.label}
            link={href}
            isButton={type === DecoratedLinkType.Button}
            selected={href.replace("/", "") === slug} // TODO: TEMP - check if it works with nested pages too
          ></SideLink>
        );
      })}
    </MainLinksContainerStyled>
  );
};

type SideLinkProps = {
  label: string;
  link: string;
  isButton?: boolean;
  selected?: boolean;
};
const SideLink: FC<SideLinkProps> = ({ label, link, isButton, selected }) =>
  isButton ? (
    <NavbarLinkButtonStyled href={link}>{label}</NavbarLinkButtonStyled>
  ) : (
    <SideLinkStyled href={link} $selected={!!selected}>
      {label}
    </SideLinkStyled>
  );

export default NavbarLinks;
