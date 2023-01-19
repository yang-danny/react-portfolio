import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="p-12 font-titleFont flex gap-20"
    >
      <div className="px-12">
        <div className="flex flex-col gap-4 px-12">
          <p className="text-sm text-designColor tracking-[4px] font-bodyFont">2011 - 2022</p>
          <h2 className="text-4xl font-bodyFont">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT Support "
            subTitle="Side By Side Advocacy - (2021 - Present)"
            result="Volunteer"
            des="Reporting to the EO, the purpose of this role is to troubleshoot and resolve endpoint issues, install and support the systems, and assist with the day-to-day operations of Side By Side Advocacy's business initiatives,  and IT infrastructure."
          />
          <ResumeCard
            title="Managing Director & Web Developer"
            subTitle="Hiper Pty Ltd - (2014 - 2022)"
            result="Own Business"
            des="Responsible for Hiper website’s appearance, making the website’s layout and integrating applications, graphics, and other content as both front-end and back-end. Translate Hiper's business needs into client-friendly functions that will expand the website’s influence and achieve digital goals."
          />
          <ResumeCard
            title="System Administrator "
            subTitle="Enovo Pty Ltd - (2011 - 2014)"
            result="Employee"
            des="Responsible for providing a reliable work environment for Enovo from the servers and network performance to security and all other areas that keep IT systems running smoothly. Design and apply e-commerce website maintenance and troubleshooting to achieve Enovo's marketing strategy. "
          />
        </div>
      </div>
      
      
    </motion.div>
  );
};

export default Experience;