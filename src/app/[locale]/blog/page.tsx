import { SlugMapping } from "@/components/common/Navbar";
import PageBaseLayout from "@/components/common/PageBaseLayout";
import PageBuilder from "@/components/common/PageBuilder";
import { locales } from "@/i18n/settings";
import { getBlogMainPage } from "@/sanity/queries";
import { FC } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const Blog: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const slugMapping: SlugMapping = {};
  for (const l of locales) {
    slugMapping[l] = "blog";
  }

  const blogPageData = await getBlogMainPage(locale);
  return (
    <PageBaseLayout slugMapping={slugMapping}>
      <PageBuilder
        sections={blogPageData.pageBuilder || []}
        locale={locale}
      ></PageBuilder>
    </PageBaseLayout>
  );
};

export default Blog;
