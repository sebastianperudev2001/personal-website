import React from "react";
import { tech_stack } from "@/data";

const TechnologyStack = () => {
  return (
    <section id="techstack">
      <div className="py-20 w-full">
        <h1 className="heading">
          My <span className="text-purple">tech stack</span>
        </h1>
        <div className="mb-10 w-full mt-12 grid lg:grid-cols-8 grid-cols-1 gap-4">
          <TechButton items={tech_stack} />
        </div>
      </div>
    </section>
  );
};
export default TechnologyStack;

const TechButton = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  return (
    <>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex items-center justify-center h-auto"
        >
          <img src={item.image} alt={item.name} className="mr-2 h-6 w-6" />
          {item.name}
        </div>
      ))}
    </>
  );
};
