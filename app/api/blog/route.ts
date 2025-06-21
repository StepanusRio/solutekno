export const runtime = "nodejs";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET() {
  const data = await prisma.blogPost.findMany();
  return NextResponse.json(data);
}
