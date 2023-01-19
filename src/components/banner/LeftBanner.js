import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaBootstrap, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";
import { MdAlternateEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Front-end Developer.","Problem Solver."],
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 30,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-3xl font-bodyFont font-normal">Talk is less, show me the code...</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Danny</span>
        </h1>
        <h2 className="text-4xl text-white font-bodyFont">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Since beginning my journey as a business owner & web developer nearly 8 years ago, I've done for business startups, e-commercial website development and maintenance, business activities analysis and collaborated with talented people to achieve business value and targets. I'm quietly confident, naturally curious, and perpetually working on improving my problem solving skills at a time.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
             <a href='mailto:yang_danny@hotmail.com'> <MdAlternateEmail /></a>
            </span>
            <span className="bannerIcon">
              <a href='tel:0432261137'><MdOutlinePhoneAndroid /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/danny-yang-6598b4251/'><FaLinkedinIn /></a>
            </span>
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
              <TbBrandJavascript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
              <span className="bannerIcon">
              <SiGithub />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner