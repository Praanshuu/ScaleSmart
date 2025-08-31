"use client";

import React, { useEffect, useState } from "react";
import { FaBolt, FaClock, FaShieldAlt } from "react-icons/fa";

const FinalOfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: "00", minutes: "00", seconds: "00" });

  // 🔁 Function to calculate remaining time
  const calculateTimeLeft = (deadline: number) => {
    const now = new Date().getTime();
    const difference = deadline - now;

    if (difference > 0) {
      return {
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      return { hours: "00", minutes: "00", seconds: "00" };
    }
  };

  useEffect(() => {
    // Get or set deadline in localStorage
    let deadline = localStorage.getItem("offerDeadline");

    if (!deadline) {
      const newDeadline = new Date().getTime() + 48 * 60 * 60 * 1000; // 48 hours
      localStorage.setItem("offerDeadline", newDeadline.toString());
      deadline = newDeadline.toString();
    }

    const deadlineTime = parseInt(deadline);

    // Set interval to update countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadlineTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white px-6 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto space-y-16 text-center">
        {/* Pricing Reveal */}
        <div>
          <p className="text-lg text-gray-400 line-through mb-3">$6,000</p>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Get Everything Today for{" "}
            <span className="text-orange-600">${997}</span>
          </h2>
          <p className="text-gray-700 text-lg mb-10">
            Or 2 payments of <strong>$550</strong>{" "}
            <span className="text-sm text-gray-400">(30 days apart)</span>
          </p>

          <button
            className="inline-flex items-center justify-center space-x-3 bg-orange-600 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-lg hover:bg-orange-700 transition focus:outline-none focus:ring-4 focus:ring-orange-400 animate-pulse mx-auto"
            aria-label="Join Now and Get Instant Access" onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <FaBolt className="text-orange-200 text-2xl" />
            <span>Join Now & Get Instant Access</span>
          </button>
        </div>

        {/* Scarcity */}
        <div className="text-orange-700 space-y-2">
          <div className="inline-flex items-center justify-center space-x-3 text-orange-600 font-semibold uppercase tracking-wide mb-2">
            <FaClock className="text-2xl animate-bounce" />
            <span>Limited Time Offer</span>
          </div>
          <h3 className="text-3xl font-bold">
            Bonuses expire in {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </h3>
          <p className="max-w-lg mx-auto">
            After that, the price goes up and the bonuses disappear — don’t miss this opportunity.
          </p>
        </div>

        {/* Guarantee */}
        <div className="border-t border-gray-200 pt-12 max-w-xl mx-auto text-gray-700">
          <div className="flex justify-center mb-6">
            <FaShieldAlt className="text-green-500 text-5xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            You&apos;re Protected by My 14-Day Money-Back Guarantee
          </h3>
          <p>
            Try everything for 14 days. If you don’t feel it’s worth every penny, just email and we’ll refund you — no questions asked.
          </p>
        </div>

        {/* Last Call */}
        <div className="mt-20 max-w-3xl mx-auto text-center px-6 sm:px-0">
          <div className="flex justify-center items-center mb-4 space-x-3 text-red-700 font-semibold text-lg sm:text-xl">
            <span className="text-3xl sm:text-4xl">⚠️</span>
            <h2 className="font-extrabold">Last Call: This Opportunity Is Closing</h2>
          </div>
          <p className="text-gray-700 max-w-xl mx-auto mb-8">
            The doors to this offer are closing soon. If you miss this window, it may be months before it returns — if ever.
          </p>

          <ul className="text-left text-gray-800 max-w-xl mx-auto space-y-3 mb-12">
            {[
              "12 Weeks of Expert Business Coaching",
              "Done-for-You Growth Templates",
              "Private Lifetime Community Access",
              "Personalized Business Audit + Strategy Plan",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-blue-600 text-xl font-bold select-none">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <button
            className="bg-black text-white rounded-full py-5 px-12 text-xl font-semibold shadow-lg hover:bg-gray-900 transition transform hover:scale-105"
            aria-label="Ready to Build a Business You’re Proud Of? Enroll Now" onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Ready to Build a Business You’re Proud Of? Enroll Now
          </button>

          <p className="mt-6 text-sm text-gray-500 italic">
            Only a few spots left — don’t wait and wonder what could have been.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalOfferSection;
