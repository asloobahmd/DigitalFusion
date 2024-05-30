import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" md:w-[80%] container min-h-[620px] mx-auto p-2 md:p-6 flex flex-col justify-center">
      <h1 className="md:text-7xl text-5xl font-bold  text-center md:text-left">
        Our Works
      </h1>
      <main>{children}</main>
    </div>
  );
};

export default layout;
