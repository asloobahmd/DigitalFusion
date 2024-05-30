import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const Single = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  return (
    <div className="mt-[30px] md:mt-0 md:w-[90%] container mx-auto p-2 md:p-6 min-h-[calc(100vh-100px)] flex flex-col gap-[30px] ">
      <div className="flex flex-col md:flex-row gap-[30px] md:gap-[50px] items-center ">
        <div className="w-full md:w-1/2 flex flex-col gap-[50px]">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            {data.title}
          </h1>
          <p className="text-justify">{data.desc}</p>
          <div className="flex  items-center gap-[10px] border-2 w-fit p-2 px-4 border-gray-500 rounded-md">
            <div className="relative w-[40px] h-[40px] rounded-[50px] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="hero image"
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <span className="text-xl font-bold">{data.username}</span>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[320px] flex items-center justify-center bg-red-400">
          <Image
            src={data.img}
            alt="hero image"
            fill={true}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div>{data.content}</div>
    </div>
  );
};

export default Single;
