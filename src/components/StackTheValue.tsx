"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const stackItems = [
  {
    title: "6 Weeks of 1:1 Business Coaching",
    value: "$1,800",
  },
  {
    title: "Personalized Business Growth Roadmap",
    value: "$600",
  },
  {
    title: "Lifetime Access to Premium Workshop Library",
    value: "$1,500",
  },
  {
    title: "Private Slack Community & Support",
    value: "$900",
  },
  {
    title: "Monthly Group Coaching Calls for 12 Months",
    value: "$1,200",
  },
];

const StackTheValue = () => {
  return (
    <section className="bg-white py-24 px-8 md:px-12">
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-green-50 to-white rounded-2xl p-8 shadow-lg">
        <ul className="space-y-6">
          {stackItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white px-6 py-5 rounded-xl shadow border border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-green-500 text-2xl" />
                <span className="text-lg font-semibold text-gray-900 leading-snug">
                  {item.title}
                </span>
              </div>
              <span className="text-lg font-bold text-green-700">{item.value}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-right">
          <p className="text-xl font-semibold text-gray-700 tracking-wide">Total Real-World Value:</p>
          <p className="text-4xl font-extrabold text-green-800 drop-shadow-md">$6,000+</p>
        </div>
      </div>
    </section>
  );
};

export default StackTheValue;
