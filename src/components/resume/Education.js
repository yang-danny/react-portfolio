import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="p-12 w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="px-12">
         <div className="flex flex-col gap-4 px-12">
          <p className="text-sm text-designColor tracking-[4px] font-bodyFont">2006 - 2022</p>
          <h2 className="text-4xl font-bodyFont">Education Quality</h2>
        </div>
        <div className="lgl:mt-10 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer Program"
            subTitle="Generation Australia (2022)"
            result="4.9/5"
            des="This includes technical training combined with hands-on projects and employability skills in Web Development position."
          />
          <ResumeCard
            title="Master of Information Technology"
            subTitle="University of Technology Sydney (2009 - 2010)"
            result="4.7/5"
            des="This course is designed to achieve a comprehensive and greater understanding of Information Technology in specialised technical or management areas."
          />
          <ResumeCard
            title="Bachelor of Information Technology"
            subTitle="University of Newcastle (2006 - 2008)"
            result="4.5/5"
            des="This course delivers the skills needed to succeed in an interconnected society, concerned with the application of technology to solve problems faced by business and wider society. "
          />
        </div>
      </div>

    </motion.div>
  );
}

export default Education