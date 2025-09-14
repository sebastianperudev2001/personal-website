import React from "react";

const TechnologyStack = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Git", "CI/CD", "Linux"],
    },
    {
      category: "AI & ML",
      skills: ["OpenAI API", "TensorFlow", "Python", "Data Analysis", "NLP"],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="border-l-4 border-black pl-6">
        <h2 className="font-mono text-2xl font-bold text-black mb-2">
          ./skills
        </h2>
        <p className="font-mono text-gray-600">
          Technologies I use to build things.
        </p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-mono text-lg font-bold text-black">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="font-mono text-sm px-3 py-1 bg-gray-100 text-black border border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;
