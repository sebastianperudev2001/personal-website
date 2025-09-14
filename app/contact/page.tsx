import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy loading del componente ContactFormPage
const ContactFormPage = dynamic(() => import("@/components/ContactFormPage"), {
  loading: () => <LoadingSpinner />,
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <Suspense fallback={<LoadingSpinner />}>
            <ContactFormPage />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
