import React, { useRef } from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectsref = useRef(null);
  return (
    <div className="pt-16 overflow-hidden " ref={projectsref} id="projects">
      <div className="px-4">
        <h1 className="mb-8 text-3xl text-center lg:text-4xl font-medium">Projects</h1>
        <div className="flex flex-wrap justify-center">
            {PROJECTS.map((item)=>{
                return(
                <div key={item.id} className="md:w-1/2 lg:w-1/3 flex w-full flex-col p-4">
                    <div className="flex-grow overflow-hidden border border-purple-300 rounded-2xl">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" >
                            <img src={item.imgSrc} alt={item.title} className="w-full h-60 object-cover"/>
                        </a>
                        <div className="mt-4  p-2">
                            <h1 className="mb-3 font-semibold lg:text-2xl">{item.title}</h1>
                            <h2>{item.description}</h2>
                            <div className="mt-4">
                                <strong>Tech stack : </strong>
                                <ul className="flex gap-4 mt-4 ">
                                {item.techStack.map((tech, index)=>{
                                    return(
                                        <li key={index} className="border p-2 border-orange-300 rounded-md px-3 py-2 font-semibold text-sm">{tech}</li>
                                    )
                                })}
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )})}
        </div>
      </div>
    </div>
  );
};

export default Projects;
