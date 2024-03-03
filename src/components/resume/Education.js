import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="mt-6 lgl:mt-14 w-[85vw] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Engineering in computer science and Buisness systems"
            subTitle="Chandigarh University(2021 - 2025)"
            des="7.8 CGPA"
          />
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Army Public School Jammu Cantt (2020 - 2021)"
            des="91.8 percentage"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Army Public School Tibri Cantt (2018-2019)"
            des="86.4 percentage"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
