import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  draftMode().disable();

  return NextResponse.json({ done: true });
}
