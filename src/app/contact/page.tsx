"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";

const Contact = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/contact");
    },
  });

  return (
    <div className="md:mt-0 md:w-[90%] container mx-auto p-2 md:p-6 min-h-[calc(100vh-100px)]  flex flex-col items-center gap-[60px] justify-center">
      <h1 className="text-6xl font-bold">Let's keep in touch</h1>
      <div className="flex flex-col md:flex-row w-full md:w-[90%] gap-[30px] md:gap-[50px]  ">
        <div className="relative w-full md:w-1/2 h-[460px] ">
          <Image
            src="/images/contact.png"
            alt="contact image"
            fill={true}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="w-full md:w-1/2  flex flex-col justify-center items-center ">
          <form
            action=""
            className="flex flex-col gap-[30px] w-full md:w-[90%] "
          >
            <input
              type="text"
              placeholder="name"
              className="p-[12px] focus:outline-none bg-transparent border-2 rounded-[6px]"
            />
            <input
              type="text"
              placeholder="email"
              className="p-[12px] focus:outline-none bg-transparent border-2  rounded-[6px]"
            />
            <textarea
              name=""
              id=""
              placeholder="message"
              className="p-[10px] h-[240px] focus:outline-none bg-transparent border-2 rounded-[6px] resize-none"
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

export default Contact;
