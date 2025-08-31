"use client";

import React, { useEffect, useState } from "react";
import { FaBolt, FaClock, FaShieldAlt } from "react-icons/fa";

const RevealPrice = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(new Date().getTime() + 48 * 60 * 60 * 1000) - +new Date();
    let timeLeft = { hours: "00", minutes: "00", seconds: "00" };

    if (difference > 0) {
      timeLeft = {
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        {/* Price Reveal */}
        <p className="text-lg text-gray-400 line-through mb-1">$6,000</p>
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Get Everything Today for <span className="text-orange-600">$997</span>
        </h2>
        <p className="text-gray-700 text-lg">
          Or 2 payments of <strong>$550</strong>{" "}
          <span className="text-sm text-gray-400">(30 days apart)</span>
        </p>

        <button
          className="inline-flex items-center justify-center space-x-3 bg-black text-white px-14 py-5 rounded-full text-xl font-semibold shadow-lg hover:bg-gray-900 transition focus:outline-none focus:ring-4 focus:ring-orange-400 animate-pulse mx-auto"
          aria-label="Join Now and Get Instant Access"
        >
          <FaBolt className="text-orange-400 text-2xl" />
          <span>Join Now & Get Instant Access</span>
        </button>

        {/* Scarcity */}
        <div className="bg-orange-50 py-8 px-6 rounded-lg max-w-xl mx-auto border border-orange-200 flex flex-col items-center space-y-3">
          <div className="inline-flex items-center space-x-3 text-orange-600 font-semibold uppercase tracking-wide">
            <FaClock className="text-2xl animate-bounce" />
            <span>Limited Time Offer</span>
          </div>
          <h3 className="text-3xl font-bold text-orange-700">
            Bonuses expire in {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </h3>
          <p className="text-orange-700 max-w-md mx-auto">
            After that, the price goes up and the bonuses disappear — don’t miss this opportunity.
          </p>
        </div>

        {/* Guarantee */}
        <div className="pt-12 border-t border-gray-200 max-w-xl mx-auto">
          <div className="flex justify-center mb-5">
            <FaShieldAlt className="text-green-500 text-5xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            You&apos;re Protected by My 14-Day Money-Back Guarantee
          </h3>
          <p className="text-gray-700 max-w-xl mx-auto leading-relaxed">
            Try everything for 14 days. If you don’t feel it’s worth every penny, just email and we’ll refund you — no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevealPrice;
