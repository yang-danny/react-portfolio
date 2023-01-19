import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bodyFont text-white">Danny Yang</h3>
        <p className="text-lg font-bodyFont text-gray-400">
          Front-end Developer
        </p>
        <p className="text-base font-bodyFont text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+61 432 261 137</span>
        </p>
        <p className="text-base font-bodyFont text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">yang_danny@hotmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base font-bodyFont uppercase mb-3">Find me in</h2>
        <div className="flex gap-4">
    
            <span className="bannerIcon">
             <a href='https://github.com/yang-danny'> <SiGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/danny-yang-6598b4251/'><FaLinkedinIn /></a>
            </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft