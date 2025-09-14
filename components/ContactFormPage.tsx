"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

const ContactFormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="space-y-8">
      <div className="border-l-4 border-black pl-6">
        <h2 className="font-mono text-2xl font-bold text-black mb-2">
          ./contact
        </h2>
        <p className="font-mono text-gray-600">
          Let&apos;s talk about solving problems.
        </p>
      </div>

      {isSubmitted ? (
        <div className="border-2 border-gray-200 p-6 text-center">
          <div className="text-green-600 mb-4">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-mono text-lg font-bold text-black mb-2">
            Message sent!
          </h3>
          <p className="font-mono text-sm text-gray-600 mb-4">
            I&apos;ll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="font-mono text-sm px-4 py-2 border-2 border-gray-300 hover:border-black transition-colors bg-white hover:bg-gray-50"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-sm font-bold text-black mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className={`w-full px-4 py-3 font-mono text-sm border border-gray-300 rounded bg-white text-gray-800 focus:border-black focus:outline-none transition-colors`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="font-mono text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-mono text-sm font-bold text-black mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-3 font-mono text-sm border border-gray-300 rounded bg-white text-gray-800 focus:border-black focus:outline-none transition-colors`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="font-mono text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="topic"
              className="block font-mono text-sm font-bold text-black mb-2"
            >
              Subject
            </label>
            <input
              id="topic"
              type="text"
              {...register("topic", {
                required: "Subject is required",
                minLength: {
                  value: 3,
                  message: "Subject must be at least 3 characters",
                },
              })}
              className={`w-full px-4 py-3 font-mono text-sm border border-gray-300 rounded bg-white text-gray-800 focus:border-black focus:outline-none transition-colors`}
              placeholder="What's this about?"
            />
            {errors.topic && (
              <p className="font-mono text-xs text-red-500 mt-1">
                {errors.topic.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-mono text-sm font-bold text-black mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              rows={5}
              className={`w-full px-4 py-3 font-mono text-sm border border-gray-300 rounded bg-white text-gray-800 focus:border-black focus:outline-none transition-colors resize-none`}
              placeholder="Tell me about the problem you need to solve..."
            />
            {errors.message && (
              <p className="font-mono text-xs text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="font-mono text-base font-bold px-8 py-3 bg-black text-white rounded hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      <hr className="my-8 border-gray-200" />
      <div className="font-mono text-gray-600 text-sm space-y-1">
        <p>Response time: 24-48 hours</p>
        <p>Available for senior-level positions and consulting</p>
      </div>
    </div>
  );
};

export default ContactFormPage;
