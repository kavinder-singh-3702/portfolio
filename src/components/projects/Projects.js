import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CHECK THIS PROJECTS" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Facebook Clone using MERN Stack This project is a Facebook clone created using the MERN stack, encompassing MongoDB, Express.js, React, and Node.js. The application replicates several key features and functionalities of the popular social media platform Facebook, providing users with a familiar interface and experience."
          src={projectOne}
        />
        <ProjectsCard
          title="Gaming Website"
          des=" Led the creation of a cutting-edge gaming website tailored for online gaming events nationwide. Designed to serve as a centralized platform, the website seamlessly connects gamers across PAN India, offering a dynamic space for competitions, community interaction, and skill showcasing. Through strategic planning and implementation."
          src={projectTwo}
          github={
            "https://github.com/Hackoverflow-Society/gaming-event-website"
          }
          hosted={"https://gaming-event-website.vercel.app/"}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
