import React from 'react'
import Title from '../layouts/Title'
import { reactWeather,
    reactFitness,
    MazdaToDo, 
  reactChat,} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="React Weather App"
          des="A Weather App developed by React(Hooks) based on MUI framework and OpenWeather API"
          src={reactWeather}
          url='https://yang-danny.github.io/react-weather/'
          github='https://github.com/yang-danny/react-weather'
        />
        <ProjectsCard
          title="React Fitness Website"
          des="This fitness website is developed by React(Hooks, Router) based on MUI framework and ExerciseDB provided by Rapid API."
          src={reactFitness}
          url='https://yang-danny.github.io/react-fitness/'
          github='https://github.com/yang-danny/react-fitness'
        />
        <ProjectsCard
          title="Mazda To Do App"
          des="It is a task manager(To Do List) group project developed by Mazda group using JavaScript, Bootstrap, and OOP/Module construction."
          src={MazdaToDo}
          url='https://yang-danny.github.io/Mazda-ToDo/'
          github='https://github.com/yang-danny/Mazda-ToDo'
        />
         <ProjectsCard
          title="React Chat App"
          des="A very cool social media app developed by React, SCSS and Firebase with Hooks, Router, API and Local Storage."
          src={reactChat}
          url='https://yang-danny.github.io/react-chat'
          github='https://github.com/yang-danny/react-chat'
        />
      </div>
    </section>
  );
}

export default Projects