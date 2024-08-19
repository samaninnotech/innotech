"use client";

import Link from "@/i18n/Link";
import PagesConfigContext from "@/i18n/PagesConfigContext";
import {
  CustomLink,
  DecoratedLinkType,
  NavbarSubmenuSection,
  customLinkToHref,
  isNavbarSubmenu,
} from "@/sanity/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FC, ReactNode, useContext, useState } from "react";
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
  PageLinksContainerStyled,
  SideLinkStyled,
  SideLinksContainerStyled,
} from "./Navbar-Links.styled";
import SubMenu from "./SubMenu";
export type NavbarProps = { slugMapping: SlugMapping, logoSrc: string };

/*************************/
/* Componente Principale */
/*************************/
const NavbarLinks: FC<NavbarProps> = ({ slugMapping, logoSrc }) => {
  const [showMenu, setOpen] = useState(false);
  const handleOpenToggle = () => setOpen(!showMenu);

  return (
    <NavbarLinksStyled $showMenu={showMenu}>
      <LogoContainerStyled>
        <Link href={"/"} title={process.env.appName}>
          <Image src={logoSrc} alt="logo" width={300} height={50} />
        </Link>
      </LogoContainerStyled>
      <MainLinksContainerStyled>
        <PageLinksContainer />
        <NavbarLanguages slugMapping={slugMapping} />
        <SideLinksContainer />
      </MainLinksContainerStyled>
      <BurgerMenuButton onClick={handleOpenToggle}>
        {showMenu ? <MdClose /> : <MdMenu />}
      </BurgerMenuButton>
    </NavbarLinksStyled>
  );
};

/***************/
/* Navbar Menu */
/***************/
const PageLinksContainer: FC = () => {
  const { mainConfig } = useContext(PagesConfigContext);
  const { slug } = useParams();
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
          selected={href.replace("/", "") === slug} // TODO: TEMP - check if it works with nested pages too
        />
      );
    }
  });

  return <PageLinksContainerStyled>{navbarElements}</PageLinksContainerStyled>;
};

/* Link Standard Navbar */
type SimpleNavbarLinkProperties = {
  label: string;
  link: string;
  children?: ReactNode;
  isButton?: boolean;
  selected?: boolean;
  openSubMenu?: Function;
  index?: number;
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

/* Elemento con Submenu */
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
  const icon: ReactNode = (
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
          {icon}
        </ComplexNavbarLinkContainer>
      </NavbarMenuStyled>
      {selected && config && <SubMenu showSubMenu={true} config={config} />}
    </>
  );
};

/*************************/
/* Navbar Call to Action */
/*************************/
const SideLinksContainer: FC = () => {
  const { sideConfig } = useContext(PagesConfigContext);
  const { slug } = useParams();

  if (!sideConfig?.length) {
    return <SideLinksContainerStyled />;
  }

  return (
    <SideLinksContainerStyled>
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
    </SideLinksContainerStyled>
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
