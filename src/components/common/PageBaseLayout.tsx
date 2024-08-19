import { getFooterInfo } from "@/sanity/queries";
import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import { Navbar, SlugMapping } from "./Navbar";

const PageBaseLayout: FC<
  PropsWithChildren<{ slugMapping: SlugMapping }>
> = async ({ children, slugMapping }) => {
  const { address, phone, email } = await getFooterInfo();
  return (
    <>
      <Navbar slugMapping={slugMapping}></Navbar>
      <main className="flex-grow container mx-auto pt-32">{children}</main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default PageBaseLayout;
