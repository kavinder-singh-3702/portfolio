import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Best paper entitled."
            result="LINK"
            des="Received recognition for the best paper in a technical session during the ’National Conference on Research Advancements and Innovations in Computing, Communication, and Information Technologies,’ emphasizing expertise and contributions in the field."
          />
          <ResumeCard
            title="Event lead"
            result="Success"
            des="Orchestrated a 9-day online event  comprising daily sessions with diverse speakers on various topics."
          />
          <ResumeCard
            title="Leetcode"
            result="LINK"
            des="Accomplished over 150 questions on Leetcode, earning 3 monthly badges for consistent performance."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
