import React, { useRef } from "react";
import { EXPERIENCES } from "../constants";

const WorkExp = () => {
  const expref = useRef(null);
  return (
    <section className="py-16 " id="work" ref={expref}>
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl lg:text-4xl text-center font-semibold">
          Experience
        </h2>
        <div className="flex flex-col space-y-12 mt-8">
          {EXPERIENCES.map((exp, index) => {
            return (
              <div
                key={index}
                className="flex md:flex-row flex-col items-start justify-between p-4 "
              >
                <div className="w-full md:w-1/4 font-semibold lg:text-lg mb-2">
                  {exp.yearRange}
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="font-semibold text-lg lg:text-2xl mb-3">
                    {exp.role} -{" "}
                    <span className="bg-gradient-to-b from bg-pink-400 to bg-purple-400 bg-clip-text text-transparent font-bold">
                      {exp.company}
                    </span>
                  </h3>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.techStack.map((tech, index) => {
                      return (
                          <ul className=" ">
                            <li key={index} className="border rounded-lg p-2 border-orange-400">{tech}</li>
                          </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
