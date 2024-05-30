import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My About Page",
  description: "Meta tag by Me",
};

const About = () => {
  return (
    <div className="container mx-auto flex flex-col items-center min-h-[calc(100vh-100px)] md:w-[90%] gap-y-[30px] gap-x-[50px] px-2 py-6">
      <div className="relative w-full h-[300px]">
        <Image
          src="https://images.pexels.com/photos/1437126/pexels-photo-1437126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cover image"
          fill={true}
          className="object-cover"
        />
        <div className="hidden md:block absolute bottom-[20px]  md:left-[20px] w-[90%] md:w-fit bg-green-700 text-white p-2 rounded-sm">
          <h1 className="font-bold md:text-2xl">Digital Storytellers</h1>
          <h2 className="font-bold md:text-xl">
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      <div className=" w-full flex flex-col md:flex-row gap-[60px] md:gap-[100px]">
        <div className="w-full md:w-1/2 flex flex-col gap-[30px]">
          <h1 className="text-4xl font-bold text-center md:text-left">
            Who Are We?
          </h1>
          <p className="text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            tempora illum deleniti! Sapiente quos velit perferendis magni rem
            <br />
            <br />
            debitis nesciunt libero mollitia suscipit voluptatibus cumque
            aspernatur, temporibus placeat ipsum molestias maiores nisi
            cupiditate magnam necessitatibus error labore repudiandae at eveniet
            <br />
            <br />
            sed! Possimus dolorum fugit dolores esse quia dignissimos, officia
            aliquid. debitis nesciunt libero mollitia suscipit voluptatibus
            cumque aspernatur, temporibus placeat ipsum molestias maiores nisi
            cupiditate magnam necessitatibus error labore repudiandae at eveniet
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-[30px]">
          <h1 className="text-4xl font-bold  text-center md:text-left">
            What We Do?
          </h1>
          <p className="text-justify  md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            tempora illum deleniti! Sapiente quos velit perferendis magni rem
            debitis nesciunt libero mollitia suscipit voluptatibus cumque
            aspernatur, temporibus placeat ipsum molestias maiores nisi
          </p>
          <ul className="flex flex-col gap-[8px]">
            <li>- Creative illustrations</li>
            <li>- Dynamic websites</li>
            <li>- Fast and Handy mobile Apps</li>
          </ul>
          <Link
            href="/portfolio"
            className="bg-green-700 text-white p-2 rounded-[4px] w-fit self-center md:self-start"
          >
            <span className="font-bold text-sm">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
