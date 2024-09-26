"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { SlugMapping } from "./Navbar/types";

interface PageBaseLayoutProps {
  slugMapping: SlugMapping;
  isHomepage?: boolean; // Add isHomepage prop
}

const PageBaseLayout: FC<PropsWithChildren<PageBaseLayoutProps>> = ({
  children,
  slugMapping,
  isHomepage = false, // Default to false if not passed
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    // Apply a class to the body when the sidebar is open
    if (isSidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    // Clean up the class on component unmount
    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [isSidebarOpen]);

  return (
    <>
      <Navbar
        slugMapping={slugMapping}
        onSidebarToggle={handleSidebarToggle}
        isHomepage={isHomepage}
      />
      <main className="flex-grow container mx-auto pt-32">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PageBaseLayout;
