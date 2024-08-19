import { FC, PropsWithChildren, useMemo } from "react";
import PagesConfigContext, { PagesConfigProps } from "./PagesConfigContext";

const PagesConfigProvider: FC<
  PropsWithChildren<{ navbarItems: PagesConfigProps }>
> = ({ children, navbarItems }) => {
  const value: PagesConfigProps = useMemo(() => navbarItems, [navbarItems]);

  return (
    <PagesConfigContext.Provider value={value}>
      {children}
    </PagesConfigContext.Provider>
  );
};

export default PagesConfigProvider;
