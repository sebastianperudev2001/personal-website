import React from "react";

const AboutMe = () => {
  const skills = [
    "Problem Solving",
    "System Design",
    "Code Review",
    "Mentoring",
    "Technical Writing",
    "Team Collaboration",
  ];

  const interests = [
    "Open Source",
    "AI/ML",
    "Cloud Architecture",
    "DevOps",
    "Clean Code",
    "Performance Optimization",
  ];

  return (
    <div className="space-y-8">
      <div className="border-l-4 border-black pl-6">
        <h2 className="font-mono text-2xl font-bold text-black mb-2">
          ./about_me
        </h2>
        <p className="font-mono text-gray-600">
          Software engineer passionate about building reliable systems.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border-l-2 border-gray-300 pl-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-mono text-lg font-bold text-black mb-3">
                $ cat intro.txt
              </h3>
              <div className="font-mono text-sm text-gray-700 space-y-3">
                <p>
                  Hi! I&apos;m Sebastián, a software engineer with a passion for
                  creating scalable, maintainable systems that solve real-world
                  problems.
                </p>
                <p>
                  My journey in tech started with curiosity about how things
                  work under the hood. This led me to specialize in full-stack
                  development, cloud architecture, and AI implementations.
                </p>
                <p>
                  I believe in writing code that tells a story - clean,
                  documented, and built to last. When I&apos;m not coding,
                  you&apos;ll find me contributing to open source projects or
                  exploring the latest in AI and cloud technologies.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-lg font-bold text-black mb-3">
                $ ls skills/soft/
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="font-mono text-xs px-2 py-1 bg-gray-100 text-black border border-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-lg font-bold text-black mb-3">
                $ echo $INTERESTS
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="font-mono text-xs px-2 py-1 bg-gray-100 text-black border border-gray-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-lg font-bold text-black mb-3">
                $ cat philosophy.md
              </h3>
              <div className="font-mono text-sm text-gray-700 space-y-2">
                <p>
                  <span className="text-black"># Core Principles</span>
                </p>
                <p>- Write code for humans, not just machines</p>
                <p>- Test early, test often, deploy with confidence</p>
                <p>- Documentation is love letter to future self</p>
                <p>- Simple solutions beat complex ones every time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
