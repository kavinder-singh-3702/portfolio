import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20 z-10">
        <Card
          title="UI Development"
          des="Specialized in crafting intuitive and responsive user interfaces using modern frameworks like React and Angular. Experienced in transforming designs into interactive experiences."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimization"
          des="Proficient in optimizing websites for search engines, improving organic reach through on-page SEO strategies, keyword analysis, and performance tuning."
          icon={<SiProgress />}
        />
        <Card
          title="Website Development"
          des="Skilled in building dynamic and scalable web applications, utilizing technologies like JavaScript, HTML5, CSS3, and back-end integration."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Expertise in designing user-centered interfaces that enhance user experience, conducting research, and creating wireframes to ensure seamless user journeys."
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
};

export default Features;
