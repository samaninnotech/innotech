import { createClient } from "@sanity/client";
import { draftMode } from "next/headers";

const getSanityClient = () => {
  const { isEnabled } = draftMode();
  const perspective = isEnabled ? "previewDrafts" : "published";
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: "2023-12-03",
    perspective,
    token: process.env.SANITY_TOKEN,
  });
};

export default getSanityClient;
