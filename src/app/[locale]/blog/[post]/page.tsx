import { Carousel } from "@/components/common";
import BlogBodySection from "@/components/common/Blog/BlogBodySection";
import BlogHeader from "@/components/common/Blog/BlogHeader";
import { SlugMapping } from "@/components/common/Navbar";
import PageBaseLayout from "@/components/common/PageBaseLayout";
import { locales } from "@/i18n/settings";
import { getAllPostsSlugs, getPostBySlug } from "@/sanity/queries";
import { sanityUrlFor } from "@/sanity/sanity-client";
import { notFound } from "next/navigation";
import { FC } from "react";

type PageWithSlugParams = { locale: string; slug: string };
export async function generateStaticParams() {
  const localizedPostsSlugs = await getAllPostsSlugs();

  const params: PageWithSlugParams[] = [];

  for (const postSlugs of localizedPostsSlugs) {
    for (const locale of locales) {
      const slugName = `slug_${locale}`;

      params.push({
        locale,
        slug: postSlugs[slugName] || postSlugs.slug_default,
      });
    }
  }

  return params;
}

const Post: FC<{ params: { locale: string; post: string } }> = async ({
  params: { locale, post },
}) => {
  const detail = await getPostBySlug(locale, post);
  if (!detail) {
    return notFound();
  }

  const formattedDate = new Date(detail.publish_date).toLocaleString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const slugMapping: SlugMapping = {};
  locales.map((l) => {
    const slugName = `slug_${l}`;
    slugMapping[l] = "blog/" + detail[slugName];
  });

  return (
    <PageBaseLayout slugMapping={slugMapping}>
      <BlogHeader
        title={detail.title}
        imgSrc={sanityUrlFor(detail.cover).url()}
        publishedOn={formattedDate}
      />
      <BlogBodySection post={detail} />
      {detail.carousel?.images && (
        <Carousel
          imgSrc={detail.carousel.images.map((img) => sanityUrlFor(img).url())}
          title={detail.carousel.title}
          imgWidth={370}
          imgHeight={200}
          background="var(--light-gray)"
        />
      )}
    </PageBaseLayout>
  );
};

export default Post;
