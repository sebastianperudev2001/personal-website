import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Freelance",
      period: "2023 - Present",
      description:
        "Building scalable web applications and AI solutions. Specialized in React, Node.js, and AWS cloud services.",
      tech: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      role: "Full Stack Developer",
      company: "Tech Solutions",
      period: "2022 - 2023",
      description:
        "Developed and maintained web applications. Implemented CI/CD pipelines and optimized database performance.",
      tech: ["JavaScript", "Python", "PostgreSQL", "Docker"],
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      description:
        "Created responsive user interfaces and improved user experience. Collaborated with design and backend teams.",
      tech: ["React", "CSS", "HTML", "Git"],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="border-l-4 border-black pl-6">
        <h2 className="font-mono text-2xl font-bold text-black mb-2">
          ./experience
        </h2>
        <p className="font-mono text-gray-600">
          Building systems that don&apos;t break.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-300 pl-6">
            <div className="space-y-3">
              <div>
                <h3 className="font-mono text-lg font-bold text-black">
                  {exp.role}
                </h3>
                <div className="font-mono text-sm text-gray-600">
                  {exp.company} • {exp.period}
                </div>
              </div>

              <p className="font-mono text-sm text-gray-700">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="font-mono text-xs px-2 py-1 bg-gray-100 text-black border border-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
