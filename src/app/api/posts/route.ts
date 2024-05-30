import { db } from "@/libs/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";

export const GET = async (request: Request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    if (username) {
      const posts = await db.post.findMany({
        where: {
          username: username!,
        },
      });
      return new NextResponse(JSON.stringify(posts), { status: 200 });
    }

    const posts = await db.post.findMany();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const { title, desc, img, content } = await request.json();
  const session = await getServerSession(options);

  try {
    const newPost = await db.post.create({
      data: {
        title,
        desc,
        img,
        content,
        username: session?.user?.name!,
      },
    });

    return new NextResponse(JSON.stringify(newPost), { status: 201 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
