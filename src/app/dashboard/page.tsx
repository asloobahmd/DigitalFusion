"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { MdDelete } from "react-icons/md";
import useSWR from "swr";

const Dashboard = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  const fetcher = (input: RequestInfo, init?: RequestInit) =>
    fetch(input, init).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    session && session.user
      ? `http://localhost:3000/api/posts?user=${session.user.name}`
      : null,
    fetcher
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const desc = (form.elements.namedItem("desc") as HTMLInputElement).value;
    const img = (form.elements.namedItem("img") as HTMLInputElement).value;
    const content = (form.elements.namedItem("content") as HTMLTextAreaElement)
      .value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
        }),
      });
      mutate();
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const shortTitle = (title: string) => {
    const titleArr = title.split(" ");
    const shortedArr = titleArr.slice(0, 3);
    const shortedTitle = shortedArr.join(" ");
    return shortedTitle;
  };

  return (
    <div className="md:mt-0 md:w-[90%] container mx-auto p-2 md:p-6 min-h-[calc(100vh-100px)] flex  gap-[60px] justify-center">
      <div className="mt-[50px] flex flex-col md:flex-row items-start justify-center w-full md:w-[90%] gap-[30px] md:gap-[50px]  ">
        <div className="flex flex-col gap-[30px] w-full md:w-1/2 ">
          {data?.length <= 0 ? (
            <div className="mt-[100px] font-semibold text-4xl text-center">
              There are no posts currently..
            </div>
          ) : (
            data?.map((post: any) => (
              <div className=" w-full gap-[10px] items-center  flex h-[160px]">
                <div className="relative  w-1/2 h-[160px]">
                  <Image
                    src={post.img}
                    alt="post image"
                    fill={true}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="relative flex text-2xl w-1/2 h-[160px] items-center justify-between">
                  <p className="absolute left-[20px] font-semibold">
                    {shortTitle(post.title)}..
                  </p>
                  <div
                    onClick={() => handleDelete(post.id)}
                    className="absolute right-[20px] cursor-pointer"
                  >
                    <MdDelete />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="w-full md:w-1/2  flex flex-col justify-center items-center ">
          <form
            action=""
            className="flex flex-col gap-[30px] w-full md:w-[90%] "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="title"
              placeholder="title"
              className="p-[12px] focus:outline-none bg-transparent border-2 rounded-[6px]"
            />
            <input
              type="text"
              name="desc"
              placeholder="desc"
              className="p-[12px] focus:outline-none bg-transparent border-2  rounded-[6px]"
            />
            <input
              type="text"
              name="img"
              placeholder="image URL"
              className="p-[12px] focus:outline-none bg-transparent border-2  rounded-[6px]"
            />
            <textarea
              name="content"
              id=""
              placeholder="content"
              className="p-[10px] h-[200px] focus:outline-none bg-transparent border-2 rounded-[6px] resize-none"
            ></textarea>
            <button className="bg-green-700 text-white  p-2 rounded-[4px] w-[120px] self-center md:self-start">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
