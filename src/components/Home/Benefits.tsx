"use client";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const benefits = [
  {
    title: "Attract High-Quality Clients",
    description:
      "Build a brand and offer that draws in clients ready to invest in your expertise.",
  },
  {
    title: "Position Yourself as the Expert",
    description:
      "Leverage authority-building strategies to stand out in a crowded market.",
  },
  {
    title: "Simplify Your Marketing",
    description:
      "Ditch the overwhelm with clear messaging and automated lead systems.",
  },
  {
    title: "Boost Revenue Consistently",
    description:
      "Implement scalable systems that increase your income without burning out.",
  },
  {
    title: "Balance Work & Life",
    description:
      "Reclaim your time and operate from clarity, not chaos — without sacrificing results.",
  },
  {
    title: "Ongoing Support & Clarity",
    description:
      "Stay accountable and supported as you grow, pivot, and scale with confidence.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="relative bg-white py-24 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          The Benefits You’ll Gain
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-14">
          When you follow our proven roadmap, these are the real-world
          transformations you’ll experience in your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-lg hover:border-orange-400 transition duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <CheckCircleIcon className="h-7 w-7 text-orange-500 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
