"use client";

import React from "react";
import ContactFormPage from "@/components/ContactFormPage";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-mono text-lg font-bold text-black hover:text-gray-600 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              sebastian.dev
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <ContactFormPage />
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
