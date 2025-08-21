"use client";

import React from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Strategic 1:1 Coaching Sessions",
    description:
      "Tailored weekly or bi-weekly sessions focused on your biggest business challenges and goals.",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Personalized Growth Roadmap",
    description:
      "You'll get a step-by-step plan built specifically for your business stage, vision, and strengths.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Leadership & Productivity Systems",
    description:
      "Frameworks to help you lead better, make smarter decisions, and streamline your daily workflow.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
];

const HowIGrow = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
        <div>
          <h2 className="text-4xl font-extrabold text-white-900 mb-2">
            Here’s How I Help You{" "}
            <span className="text-orange-600">Grow</span>
          </h2>
          <p className="text-gray-600 max-w-xl">
            Proven tools, personalized strategy, and accountability to turn
            your goals into results.
          </p>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0">
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">
            View Benefits
          </button>
          <button className="border border-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
            Free Call
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
          >
            <Image
              src={benefit.image}
              alt={benefit.title}
              width={800} 
              height={300} 
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          aria-label="Previous"
          className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          aria-label="Next"
          className="p-3 rounded-full bg-black text-white hover:bg-gray-900 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HowIGrow;
