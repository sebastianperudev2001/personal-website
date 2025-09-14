import React from "react";
import Link from "next/link";
import CodeSnippet from "./CodeSnippet";

const NAVIGATION_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const developerData = {
  name: "Sebastián Chávarry",
  title: "Software Engineer",
  skills: ["TypeScript", "Python", "Next.js", "Tailwind CSS", "AWS", "LLMs"],
  location: "Lima, Peru",
  email: "schavarry01@gmail.com",
};

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Title - stays on top */}
        <div className="text-center mb-12">
          <h1 className="font-mono text-4xl md:text-6xl font-bold text-black">
            Sebastián Chávarry
          </h1>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="font-mono text-lg md:text-xl text-gray-600 space-y-2">
                <p>
                  Software Engineer with expertise in AI, AWS and Web
                  Development
                </p>
                <p>Building scalable systems. Solving complex problems.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-mono text-sm text-gray-500">
                <span className="text-black">$</span> whoami
              </div>
              <div className="font-mono text-sm text-gray-700">
                Software engineer who ships production code that doesn&apos;t
                break.
              </div>
            </div>

            <div className="space-y-6">
              <div className="font-mono text-lg text-gray-500">
                Explore sections:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-mono text-base font-bold text-black bg-white border border-gray-300 py-3 px-4 hover:bg-gray-50 hover:border-black transition-colors block text-center"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Code Snippet */}
          <div className="flex justify-center order-1 lg:order-2">
            <CodeSnippet developerData={developerData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
