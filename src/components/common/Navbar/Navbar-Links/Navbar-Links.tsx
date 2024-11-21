// NavbarLinks.tsx
"use client";

import Link from "@/i18n/Link";
import PagesConfigContext from "@/i18n/PagesConfigContext";
import {
  CustomLink,
  customLinkToHref,
  isNavbarSubmenu,
  NavbarSubmenuSection,
} from "@/sanity/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const [scrollY, setScrollY] = useState(0);

  const handleSidebarToggle = () => {
    setShowMenu((prev) => !prev);
    setIsOverlayVisible((prev) => !prev);
    onSidebarToggle();
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <>
      <NavbarLinksStyled $showMenu={showMenu} className={textColorClass}>
        <LogoContainerStyled>
          <Link href="/" aria-label="Home">
            <Image src={logoSrc} alt="Logo" height={50} width={250} />
          </Link>
        </LogoContainerStyled>
        <MainLinksContainerStyled>
          <PageLinksContainer />
          <NavbarLanguages slugMapping={slugMapping} />
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
              width={275}
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
  const slug =
    pathname === "/" || pathname === "/en" ? "" : pathname.split("/").pop();

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
          selected={
            href.replace("/", "") === slug ||
            (slug === "" && (href === "/" || href === "/en"))
          }
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
  index = -1,
  config,
}) => {
  const [submenuPosition, setSubmenuPosition] = useState<{
    left: number;
  } | null>(null);
  const icon: React.ReactNode = (
    <SlArrowDown
      style={{
        transform: selected ? "rotate(-180deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
      }}
    />
  );

  const handleMouseLeave = () => {
    if (openSubMenu) {
      openSubMenu(-1);
    }
  };

  const getSubMenuPosition = (event: React.MouseEvent) => {
    const { currentTarget } = event;

    const targetElement = currentTarget as HTMLElement;
    const { left, width } = targetElement.getBoundingClientRect();

    const submenuWidth = 200;
    const parentLeft = targetElement.offsetParent
      ? (targetElement.offsetParent as HTMLElement).getBoundingClientRect().left
      : 0;

    return {
      left: left - parentLeft + (width - submenuWidth) / 2,
    };
  };

  return (
    <>
      <NavbarMenuStyled
        onClick={(event) => {
          if (openSubMenu) {
            const position = getSubMenuPosition(event);
            setSubmenuPosition(position);
            openSubMenu(index, position);
          }
        }}
        $selected={selected}
      >
        <ComplexNavbarLinkContainer>
          {label}
          <SVGContainer>{icon}</SVGContainer>
        </ComplexNavbarLinkContainer>
      </NavbarMenuStyled>
      {selected && config && submenuPosition && (
        <SubMenu
          showSubMenu={true}
          config={config}
          onMouseLeave={handleMouseLeave}
          position={submenuPosition}
        />
      )}
    </>
  );
};

export default NavbarLinks;
