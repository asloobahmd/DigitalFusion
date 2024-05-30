"use client";

import { signOut } from "next-auth/react";
import { FC } from "react";

const LogoutBtn: FC = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className=" p-2 bg-red-500 text-white rounded-sm"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
