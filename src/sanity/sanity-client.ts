import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-12-03",
});

export const sanityImageBuilder = imageUrlBuilder(sanityClient);

export const sanityUrlFor = (source: SanityImageSource) =>
  sanityImageBuilder.image(source);

export default sanityClient;
