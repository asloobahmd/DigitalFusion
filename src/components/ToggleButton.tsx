"use client";

import ThemeContext from "@/context/ThemeContext";
import { ThemeContectType } from "@/types/type";
import { useContext } from "react";

const ToggleButton = () => {
  const { mode, toggleThemeMode } = useContext<ThemeContectType>(ThemeContext);

  const handleClick = () => {
    toggleThemeMode();
  };

  return (
    <div
      className="relative flex gap-[8px] items-center w-[56px] h-[28px] justify-between border-2 border-[#444] bp-[2px] rounded-[20px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute left-[2px]">🌙</div>
      <div className="absolute right-[2px]">🔆</div>
      <div
        className={`absolute w-[22px] h-[22px] bg-green-500 rounded-[50%] ${
          mode === "dark" ? "right-[2px]" : "left-[2px]"
        } `}
      />
    </div>
  );
};

export default ToggleButton;
