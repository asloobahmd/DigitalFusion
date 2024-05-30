import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { items } from "./data";

const getData = (cat: string) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Catagory = async ({ params }: { params: { catagory: string } }) => {
  const data = await getData(params.catagory);

  return (
    <div className="mt-[20px] min-h-[calc(100vh-100px)] flex flex-col gap-[50px] md:gap-[20px]">
      <h1 className="text-2xl font-bold text-center md:text-left">
        {params.catagory}
      </h1>
      {data.map((post: any) => (
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-[50px] items-center ">
          <div className="w-full md:w-1/2 flex flex-col gap-[20px]">
            <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
              {post.title}
            </h1>
            <p className="text-justify">{post.desc}</p>
            <Link
              href="/portfolio"
              className="bg-green-700 text-white p-2 rounded-sm w-fit self-center md:self-start"
            >
              See more
            </Link>
          </div>
          <div className="relative w-full md:w-1/2 h-[400px] md:h-[460px] flex items-center justify-center">
            <Image
              src={post.image}
              alt="hero image"
              fill={true}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catagory;
