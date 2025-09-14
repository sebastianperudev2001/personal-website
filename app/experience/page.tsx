import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy loading del componente Experience
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <LoadingSpinner />,
});

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <Suspense fallback={<LoadingSpinner />}>
            <Experience />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
