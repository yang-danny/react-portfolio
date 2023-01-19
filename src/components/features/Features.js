import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Analisyst"
          des="Directly communicates and transfer business activities to the IT project development."
         
        />
        <Card
          title="Web Development"
          des="A tailored service for businesses looking to develop, design, and manage their websites."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Increase your site's visibility and rankings with search engine optimization, content marketing, and link building."
          icon={<SiProgress />}
        />
        <Card
          title="App Development"
          des="Help you re-think applications with app development, management, modernization, and more."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Focuses on the user’s visual experience and determines how an interface—be it an app, a video game or a website."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Host dynamic websites in the cloud with Click to Deploy or customized solutions, keeps your website up and running."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features