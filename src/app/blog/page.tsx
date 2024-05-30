import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "My Blogs page",
  description: "Meta tag by Me",
};

const Blog = async () => {
  // this is how we check the auth session and redirect to login page if he's not authenticated
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/blog");
  }

  const data = await getData();

  console.log(data);

  return (
    <div className="mt-[30px] md:w-[90%] container mx-auto p-2 md:p-6 min-h-[calc(100vh-100px)] flex flex-col gap-[80px]   md:[&>*:nth-child(odd)]:flex-row-reverse">
      {data?.length <= 0 ? (
        <div className="mt-[100px] font-semibold text-4xl text-center">
          There are no posts currently..
        </div>
      ) : (
        data?.map((post: any) => (
          <div
            key={post._id}
            className="flex flex-col md:flex-row gap-[30px] md:gap-[50px] items-center "
          >
            <div className="w-full md:w-1/2 flex flex-col gap-[20px]">
              <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
                {post.title}
              </h1>
              <p className="text-justify">{post.desc}</p>
              <Link
                href={`/blog/${post.id}`}
                className="bg-green-700 text-white p-2 rounded-sm w-fit self-center md:self-start"
              >
                See more
              </Link>
            </div>
            <div className="relative w-full md:w-1/2 h-[300px] md:h-[320px] flex items-center justify-center">
              <Image
                src={post.img}
                alt="hero image"
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
