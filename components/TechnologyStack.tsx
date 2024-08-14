import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltop";
import { tech_stack } from "@/data";

const TechnologyStack = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">tech stack</span>
      </h1>
      <div className="items-center justify-center mb-10 w-full mt-12  grid lg:grid-cols-4 grid-cols-2 ">
        <AnimatedTooltip items={tech_stack} />
      </div>
    </div>
  );
};

export default TechnologyStack;
