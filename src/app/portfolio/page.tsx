import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="mt-[30px] flex flex-col gap-[30px] md:gap-[20px] p-4 md:p-0">
      <h2 className="text-3xl font-bold text-center md:text-left">
        Choose a gallery
      </h2>
      <div className="flex flex-col gap-[50px] md:flex-row">
        <Link href={"/portfolio/Illustrations"}>
          <div className="group hover:cursor-pointer relative w-full md:w-[260px] h-[400px] md:h-[340px] border-4 rounded-md">
            <Image
              src="/images/illustration.png"
              alt="Illustrations"
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute bottom-[10px] right-[10px]">
              <h1 className="text-3xl font-bold group-hover:text-green-500">
                Illustrations
              </h1>
            </div>
          </div>
        </Link>
        <Link href={"/portfolio/Websites"}>
          <div className="group hover:cursor-pointer relative w-full md:w-[260px] h-[400px] md:h-[340px]  border-4 rounded-md">
            <Image
              src="/images/websites.jpg"
              alt="Websites"
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute bottom-[10px] right-[10px]">
              <h1 className="text-3xl font-bold group-hover:text-green-500">
                Websites
              </h1>
            </div>
          </div>
        </Link>
        <Link href={"/portfolio/Apps"}>
          <div className="group hover:cursor-pointer relative w-full md:w-[260px] h-[400px] md:h-[340px] border-4 rounded-md">
            <Image
              src="/images/apps.jpg"
              alt="Application"
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute bottom-[10px] right-[10px]">
              <h1 className="text-3xl font-bold group-hover:text-green-500">
                Applications
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
