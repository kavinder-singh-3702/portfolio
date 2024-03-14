import React from "react";
import LeftBanner from "./LeftBanner";
import { LampDemo } from "../utils/lamp/lamp";
const Banner = () => {
  return (
    <section
      id="home"
      className="z-2 flex-1 w-full pt-10  flex flex-col gap-20 xl:gap-0 lg:flex-row items-start border-b-[1px] justify-center font-titleFont border-b-black"
    >
      <LeftBanner />
      <div className="hidden lg:flex">
        <LampDemo />
      </div>
    </section>
  );
};

export default Banner;
