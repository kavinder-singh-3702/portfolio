import React from "react";
import LeftBanner from "./LeftBanner";
import { bannerImg } from "../../assets/index";
import { LampDemo } from "../utils/lamp/lamp";
const Banner = () => {
  return (
    <section
      id="home"
      className="z-0 w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <LampDemo className={""} />
    </section>
  );
};

export default Banner;
