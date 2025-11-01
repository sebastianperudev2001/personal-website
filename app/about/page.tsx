"use client";

import AboutMe from "@/components/AboutMe";
import Navigation from "@/components/Navigation";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <AboutMe />
      </main>
    </div>
  );
};

export default AboutPage;
