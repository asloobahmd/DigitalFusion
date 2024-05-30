"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const router = useRouter();
  const handleGoogleLogin = async () => {
    try {
      await signIn("google", { callbackUrl: "/" }); // if we want, we can give a specific callbackUrl
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[30px] md:mt-0 md:w-[90%] container mx-auto flex flex-col justify-center items-center p-2 md:p-6 min-h-[calc(100vh-200px)]">
      <div className=" flex flex-col gap-[40px] text-center">
        <h1 className=" text-4xl font-bold">Login Page</h1>

        <button
          onClick={handleGoogleLogin}
          className="hover:bg-gray-700 gap-[10px] flex w-[95%] md:w-[400px]  h-[50px]  items-center justify-center border p-2 rounded-[6px]"
        >
          Google <FcGoogle className="text-[30px]" />
        </button>

        <div className="">
          Dont have an account?{" "}
          <Link href="/dashboard/register" className="font-bold">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
