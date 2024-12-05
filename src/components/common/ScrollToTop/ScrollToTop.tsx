"use client";

import { FC, useEffect, useState } from "react";
import { Arrow, ArrowContainer, Button } from "./ScrollToTop.styled";

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300 && lastScrollY - currentScrollY >= 10) {
        setIsVisible(true);
      } else if (currentScrollY <= 300 || currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Set the `isExiting` state when the mouse enters
  const handleMouseEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
    }, 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      className={isVisible ? "visible" : ""}
      onClick={scrollToTop}
      onMouseEnter={handleMouseEnter}
      aria-label="Scroll to top"
    >
      <ArrowContainer>
        <Arrow isExiting={isExiting}>↑</Arrow>
      </ArrowContainer>
    </Button>
  );
};

export default ScrollToTop;
