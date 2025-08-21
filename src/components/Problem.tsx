"use client";
import React from "react";
import Image from "next/image";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";

const Problem = () => {
  return (
    <section className="relative bg-gray-50 py-24 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Feeling Stuck or Overwhelmed as a{" "}
            <span className="text-orange-500">Business Owner?</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            You&apos;re not alone. These are common pain points that many
            entrepreneurs face.
          </p>

          <ul className="space-y-5 mb-8">
            {[
              "You’re struggling to scale and don’t know what to prioritize.",
              "You feel exhausted juggling too many roles in your business.",
              "You crave a clear, personalized roadmap to grow faster and smarter.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-base">{text}</span>
              </li>
            ))}
          </ul>

          <button className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-full shadow-md">
            Let’s Find Solutions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L21 12l-3.75 5.25M3 12h18"
              />
            </svg>
          </button>
        </div>

        {/* Right Visual Side */}
        <div className="flex flex-col h-full justify-between space-y-6">
          <div className="w-full">
            <Image
              src="/client2.jpg"
              alt="Problem Illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full max-h-[300px]"
            />
          </div>

          <div className="w-full space-y-4">
            {[
              {
                title: "Growth Stuck",
                desc: "You've plateaued and need fresh strategies to break through the ceiling.",
              },
              {
                title: "Wearing Too Many Hats",
                desc: "You're juggling everything — marketing, sales, delivery.",
              },
              {
                title: "Lack of Clarity",
                desc: "Without a roadmap, every decision feels risky and draining.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-md"
              >
                <ExclamationTriangleIcon className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-md font-bold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;
