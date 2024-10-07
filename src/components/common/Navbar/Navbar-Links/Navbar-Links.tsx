// NavbarLinks.tsx
"use client";

import Link from "@/i18n/Link";
import PagesConfigContext from "@/i18n/PagesConfigContext";
import {
  CustomLink,
  customLinkToHref,
  DecoratedLinkType,
  isNavbarSubmenu,
  NavbarSubmenuSection,
} from "@/sanity/types";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { FC, useContext, useEffect, useState } from "react";
import { MdClose, MdMenu, MdSearch } from "react-icons/md";
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
  SearchIconContainer,
  SidebarContentStyled,
  SideBarLogoButtonContainer,
  SidebarStyled,
  SideLinkStyled,
  SVGContainer,
} from "./Navbar-Links.styled";
import SubMenu from "./SubMenu";

export type NavbarLinksProps = {
  slugMapping: SlugMapping;
  logoSrc: string;
  onSidebarToggle: () => void;
  textColorClass: string;
  burgerButtoncolor: string;
};

const NavbarLinks: FC<NavbarLinksProps> = ({
  slugMapping,
  logoSrc,
  onSidebarToggle,
  textColorClass,
  burgerButtoncolor,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Track scroll position

  const handleSidebarToggle = () => {
    setShowMenu((prev) => !prev);
    setIsOverlayVisible((prev) => !prev);
    onSidebarToggle();
  };

  const handleScroll = () => {
    setScrollY(window.scrollY); // Update scroll position on scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"; // Prevent scrolling on body
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [showMenu]);

  return (
    <>
      <NavbarLinksStyled $showMenu={showMenu} className={textColorClass}>
        <LogoContainerStyled>
          <Link href="/" aria-label="Home">
            <Image src={logoSrc} alt="Logo" height={60} width={300} />
          </Link>
        </LogoContainerStyled>
        <MainLinksContainerStyled>
          <PageLinksContainer />
          <NavbarLanguages slugMapping={slugMapping} />
          <SearchIconContainer>
            <MdSearch />
          </SearchIconContainer>
        </MainLinksContainerStyled>
        <BurgerMenuButton
          onClick={handleSidebarToggle}
          $burgerButtoncolor={burgerButtoncolor}
        >
          {showMenu ? <MdClose /> : <MdMenu />}
        </BurgerMenuButton>
      </NavbarLinksStyled>
      <SidebarStyled $showMenu={showMenu} style={{ top: `${scrollY}px` }}>
        <SidebarContentStyled>
          <SideBarLogoButtonContainer>
            <Image
              src="/site-logo-blue.png"
              alt="Logo"
              height={60}
              width={300}
            />
            <MdClose onClick={handleSidebarToggle} />
          </SideBarLogoButtonContainer>
          <PageLinksContainer />
          <NavbarLanguages slugMapping={slugMapping} />
        </SidebarContentStyled>
      </SidebarStyled>
      <OverlayStyled
        $showOverlay={isOverlayVisible}
        onClick={handleSidebarToggle}
        style={{ top: `${scrollY}px` }}
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
  link = link || "/";
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
  const [submenuPosition, setSubmenuPosition] = useState<{
    left: number;
  } | null>(null); // State for submenu position

  const icon: React.ReactNode = (
    <SlArrowDown
      style={{
        transform: selected ? "rotate(-180deg)" : "rotate(0deg)",
      }}
    />
  );

  // Create a function to handle mouse leave
  const handleMouseLeave = () => {
    if (openSubMenu) {
      openSubMenu(-1); // Close the submenu
    }
  };

  // Function to get the position of the submenu
  const getSubMenuPosition = (event: React.MouseEvent) => {
    const { currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const submenuWidth = 200; // Set a fixed width for the submenu or calculate based on content

    return {
      left: left + (width - submenuWidth) - 30, // Center the submenu based on the parent width
    };
  };

  return (
    <>
      <NavbarMenuStyled
        onClick={(event) => {
          if (openSubMenu) {
            const position = getSubMenuPosition(event); // Call the function to get position
            setSubmenuPosition(position); // Update the state with the submenu position
            openSubMenu(index, position); // Pass position to open submenu
          }
        }}
        $selected={selected}
      >
        <ComplexNavbarLinkContainer>
          {label}
          <SVGContainer>{icon}</SVGContainer>
        </ComplexNavbarLinkContainer>
      </NavbarMenuStyled>
      {selected &&
        config &&
        submenuPosition && ( // Check if submenuPosition is not null
          <SubMenu
            showSubMenu={true}
            config={config}
            onMouseLeave={handleMouseLeave} // Pass onMouseLeave to SubMenu
            position={submenuPosition} // Pass the submenuPosition state
          />
        )}
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
