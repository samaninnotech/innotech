import { DecoratedLink, NavbarItem } from "@/sanity/types";
import { createContext } from "react";

export type PagesConfigProps = {
  mainConfig: NavbarItem[];
  sideConfig: DecoratedLink[];
};
const PagesConfigContext = createContext<PagesConfigProps>({
  mainConfig: [],
  sideConfig: [],
});
export default PagesConfigContext;
