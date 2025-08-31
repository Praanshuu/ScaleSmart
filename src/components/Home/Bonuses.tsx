"use client";

import React from "react";
import { FaLock, FaUsers, FaBookOpen, FaBolt } from "react-icons/fa";

const bonuses = [
  {
    title: "Private Slack Channel",
    icon: <FaLock className="text-white text-2xl" />,
    description:
      "24/7 access to me and like-minded entrepreneurs for ongoing support, accountability, and feedback.",
  },
  {
    title: "Exclusive Workshop Library",
    icon: <FaBookOpen className="text-white text-2xl" />,
    description:
      "Instant access to 10+ premium trainings on marketing, mindset, scaling, and systems (worth $1,500+).",
  },
  {
    title: "Monthly Group Coaching",
    icon: <FaUsers className="text-white text-2xl" />,
    description:
      "Live monthly group coaching calls to tackle roadblocks, plan strategy, and build momentum together.",
  },
  {
    title: "Priority Email Support",
    icon: <FaBolt className="text-white text-2xl" />,
    description:
      "Skip the queue. Get priority responses to your emails when you need help implementing fast.",
  },
];

const Bonuses = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight md:leading-snug">
          Extra Value To Accelerate Your Growth
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-14 max-w-3xl mx-auto">
          Join now and unlock these powerful bonuses, crafted to give you an unfair advantage.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-10 text-left flex flex-col items-start hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-orange-500 p-5 rounded-full mb-6 flex items-center justify-center shadow-md">
                {bonus.icon}
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-4 leading-snug">
                <span>BONUS #{index + 1}:</span><br />
                <span>{bonus.title}</span>
              </h3>

              <p className="text-gray-700 text-base leading-relaxed">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="px-14 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full text-2xl font-bold shadow-lg transition duration-300 transform hover:scale-105" onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}>
            Claim All Bonuses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
