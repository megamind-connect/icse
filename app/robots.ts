import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://apply.tcismangalore.org/sitemap.xml",
    host: "https://apply.tcismangalore.org",
  };
}