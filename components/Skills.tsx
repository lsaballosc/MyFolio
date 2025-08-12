import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import {  skillsLogos, testimonials } from "@/data";

const Skills = () => {
  return (
    <div className="py-20" id="Skills">
      <h1 className="heading">
        My skills {""}
        <br />
        <span className="text-purple"> include</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
          {skillsLogos.map(({ id, name, img }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
