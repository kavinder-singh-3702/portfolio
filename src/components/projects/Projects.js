import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 sticky font-titleFont border-b-[1px]bg-gradient-to-r from-[rgba(2,1,23,1)] via-[rgba(12,12,42,1)]"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CHECK THIS PROJECTS" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="College Society Website"
          des="Built a College Society website using React and Tailwind with parallax scrolling and lazy loading techniques. The site saw a 35% increase in page views due to reduced load times and improved real-time data display using AXIOS."
          src={projectThree}
          hosted="https://hackathon.hackoverflowsociety.in/"
          github="https://github.com/Hackoverflow-Society/hackoverflow"
        />

        <ProjectsCard
          title="Cars24 Career Portal"
          des="Enhanced a career portal by implementing server-side rendering for SEO optimization, improving search engine rankings. Worked on backend API integrations to ensure smooth performance and user experience."
          src={projectThree}
        />
        <ProjectsCard
          title="AutomatEazy Dashboards"
          des="Developed and maintained dashboards for AutomatEazy, with features like bulk communication, pagination, and filters to improve data management. Ensured seamless integration for Admin, Counselor, Tenant, and Student roles."
          src={projectOne}
          hosted="https://dev-cc.automateazy.com/login"
        />

        <ProjectsCard
          title="SOCIAL MEDIA PLATFORM"
          github="https://github.com/kavinder-singh-3702/facebook-clone-"
          des="Developed a social media platform using the MERN stack with features like robust user authentication, real-time messaging with Socket.io, and customizable user profiles. The platform enhances user engagement through instant notifications and profile personalization."
          src={projectOne}
        />
        <ProjectsCard
          title="Gaming Event Website"
          des="Led the creation of a gaming event website to connect gamers across India. The platform supports dynamic event hosting, community interaction, and showcases user skills. Utilized technologies like React, Tailwind, and Framer Motion to improve user interaction."
          src={projectTwo}
          github={
            "https://github.com/Hackoverflow-Society/gaming-event-website"
          }
          hosted={"https://gaming-event-website.vercel.app/"}
        />
      </div>
    </section>
  );
};

export default Projects;
