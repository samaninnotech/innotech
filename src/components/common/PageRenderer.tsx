import { getPageById, getPageBySlug } from "@/sanity/queries";
import { Page } from "@/sanity/types";
import { notFound } from "next/navigation";
import { FC } from "react";
import PageBuilder from "./PageBuilder";

type PageRendererProps = { pageId?: string; slug?: string; locale: string };
const PageRenderer: FC<PageRendererProps> = async ({
  pageId,
  slug,
  locale,
}) => {
  let pageData: Page;
  if (pageId) {
    pageData = await getPageById(pageId, locale);
  } else if (slug) {
    pageData = await getPageBySlug(slug, locale);
  } else {
    return notFound();
  }

  if (!pageData) {
    return notFound();
  }

  return (
    <>
      <PageBuilder
        sections={pageData.pageBuilder || []}
        locale={locale}
      ></PageBuilder>
    </>
  );
};

export default PageRenderer;
