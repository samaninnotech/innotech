// StyledJsxRegistry.tsx
"use client";
import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";

interface StyledJsxRegistryProps {
  children?: React.ReactNode; // Make children prop optional
}

const StyledComponentsRegistry: React.FC<StyledJsxRegistryProps> = ({
  children,
}) => {
  const [styleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = styleRegistry.styles();
    styleRegistry.flush();
    return <>{styles}</>; // Render styles on server insert
  });

  if (typeof window !== "undefined") {
    return <>{children}</>; // Render children on client side
  }

  return <StyleRegistry registry={styleRegistry}>{children}</StyleRegistry>;
};

export default StyledComponentsRegistry;
