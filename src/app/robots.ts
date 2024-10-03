import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // {
      //   userAgent: "*",
      //   disallow: [
      //     "/harming/humans",
      //     "/ignoring/human/orders",
      //     "/harm/to/self",
      //   ],
      // },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/privacy-policy", "/cookie-policy"],
      },
    ],
    host: process.env.NEXT_PUBLIC_FRONTEND_HOST,
    sitemap: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/sitemap.xml`,
  };
}
