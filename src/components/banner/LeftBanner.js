import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNodedotjs,
  SiFramer,
  SiNextdotjs,
  SiAngularjs,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Front End Developer.",
      "Full Stack Developer.",
      "Back End Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full z-2 lg:w-1/2 flex flex-col gap-20 ">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kavinder</span>
        </h1>
        <h2 className="text-4xl font-bold text-white z-1">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#00BCD4"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a MERN stack developer with experience optimizing web platforms
          and improving user experience. I have developed backend APIs for
          CollegeChalo.com and created dashboards for AutomatEazy, enhancing
          data management with features like bulk communication and pagination.
          My focus is on delivering seamless functionality and efficient user
          interfaces.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between z-50">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              className="bannerIcon"
              href="https://github.com/kavinder-singh-3702/"
            >
              <FaGithub />
            </a>
            <a
              className="bannerIcon"
              href="https://www.instagram.com/_kamal_not_camel_/"
            >
              <FaInstagram />
            </a>
            <a
              className="bannerIcon"
              href="https://www.linkedin.com/in/kavinder-singh-91ba4a1b2/"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>

            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiAngularjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
