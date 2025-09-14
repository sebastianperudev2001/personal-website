"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";

const RecentProjects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features responsive design and modern animations.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/sebastian/portfolio",
      live: "https://sebastian.dev",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application with AI integration. Built with React, Node.js, and OpenAI API.",
      tech: ["React", "Node.js", "OpenAI API", "Socket.io"],
      github: "https://github.com/sebastian/ai-chat",
      live: "https://ai-chat.sebastian.dev",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce platform with payment processing and admin dashboard.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      github: "https://github.com/sebastian/ecommerce",
      live: "https://shop.sebastian.dev",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="border-l-4 border-black pl-6">
        <h2 className="font-mono text-2xl font-bold text-black mb-2">
          ./projects
        </h2>
        <p className="font-mono text-gray-600">
          Production systems that actually work.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 p-6 hover:border-black transition-colors duration-200"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-mono text-xl font-bold text-black">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-600 hover:text-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="font-mono text-sm text-gray-700">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="font-mono text-xs px-3 py-1 bg-gray-100 text-black border border-gray-300"
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

export default RecentProjects;
