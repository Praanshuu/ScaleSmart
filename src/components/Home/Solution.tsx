"use client";
import React from "react";
import Image from "next/image";

const Solution = () => {
  return (
    <section id="solutions" className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div>
            <Image
              src="/heroFace.jpg"
              alt="Solution Illustration"
              width={500}
              height={400}
              className="w-full max-w-md rounded-lg shadow-lg"
            />


          </div>

          {/* Text Side */}
          <div>
            <p className="uppercase text-sm tracking-wide text-gray-500 mb-2">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet <span className="text-orange-500">James David</span>,<br />
              Your Business Growth Partner
            </h2>
            <p className="text-gray-700 mb-6">
              Without a clear roadmap, every decision feels risky, slow, and emotionally exhausting. That’s why I’ve helped 100s of entrepreneurs scale with clarity and confidence.
            </p>
            <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition mb-4">
              Read My Full Story{" "}
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

            <div className="flex space-x-8 text-sm text-gray-700 font-medium mt-4">
              <div>
                <div className="text-lg font-bold text-gray-900">10</div>
                years of Experience
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">12</div>
                Awards Winning
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">2015–2025</div>
                Impactful Decade
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
