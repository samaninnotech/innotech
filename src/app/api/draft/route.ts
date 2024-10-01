import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

const getUrl = (type: string | null, slug: string | null) => {
  if (!type) {
    return null;
  }

  // Handle homepage
  if (!slug) {
    return "/"; // Redirect to the homepage
  }

  return `/${slug}`; // For other pages
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const type = searchParams.get("type");

  if (secret !== process.env.DRAFT_SECRET || !type) {
    return new Response("Invalid parameters", { status: 401 });
  }

  const url = getUrl(type, slug);
  if (!url) {
    return new Response("Cannot retrieve url", { status: 400 });
  }

  draftMode().enable();

  redirect(url);
}

//http://localhost:3000/api/draft?secret=skeIdNJz3RLN2YGV7z2vLzyiFjKmIq9HmyFE2Ecg4CH5noRXnRxSZ8gIqMuDyHt8It4tGqBTwWPaQjcc56lrUEr9BUwfiIRrvyYQxlK4ABiVtqHquydKbKKJcrKasRGLbmipd6ClXdHOgJb2xjocvzQeo1GJv8jtOxEYTus9JeKgEDCsCfv5&type=page&slug=
