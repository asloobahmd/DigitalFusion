import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:w-[90%] gap-y-[40px] gap-x-[100px] px-2 py-6">
      <div className="w-full md:w-1/2 flex flex-col gap-y-[30px]">
        <h1 className="text-4xl md:text-7xl font-bold text-center md:text-left bg-gradient-to-b from-green-800 to-[#bbb] bg-clip-text text-transparent">
          Better design <br /> for your digital products
        </h1>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          doloribus perferendis ea earum itaque, reiciendis officiis quod, neque
          omnis rerum commodi nesciunt dicta voluptatem, soluta hicnisi dolorem!
        </p>
        <Link
          href="/portfolio"
          className="bg-green-700 p-2 text-white rounded-sm w-fit self-center md:self-start"
        >
          see portfolios
        </Link>
      </div>
      <div className=" relative w-full md:w-1/2 h-[400px] md:h-[560px]  flex items-center justify-center">
        <Image
          src="/images/hero.png"
          alt="hero image"
          fill={true}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Home;
