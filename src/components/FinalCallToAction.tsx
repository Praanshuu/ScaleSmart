"use client";

import React from "react";

const FinalCallToAction = () => {
  return (
    <section className="w-full bg-gradient-to-br from-red-50 via-white to-blue-50 px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        {/* Warning / Closing Reminder */}
        <div className="space-y-6">
          <div className="flex justify-center items-center space-x-3">
            <span className="text-red-600 text-5xl">⚠️</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 leading-tight max-w-3xl">
              Last Call: This Opportunity Is Closing
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            The doors to this offer are closing soon. If you miss this window, it may be months before it returns — if ever.
          </p>
          {/* Benefits Recap */}
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 text-left text-gray-800 text-base sm:text-lg max-w-3xl mx-auto">
            {[
              "12 Weeks of Expert Business Coaching",
              "Done-for-You Growth Templates",
              "Private Lifetime Community Access",
              "Personalized Business Audit + Strategy Plan",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-blue-600 text-2xl font-bold select-none">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="bg-black rounded-3xl py-16 px-10 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-snug">
            Ready to Build a Business You’re Proud Of?
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Let’s simplify, scale, and succeed — together.
          </p>
          <button className="px-12 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold shadow-md hover:bg-orange-600 transition mx-auto block">
            Enroll Now
          </button>
          <p className="text-sm text-gray-400 mt-4 italic max-w-md mx-auto">
            You have nothing to lose — except what’s holding you back.
          </p>
        </div>

        {/* Final Scarcity Reminder */}
        <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
          Only a few spots left — don’t wait and wonder what could have been.
        </p>
      </div>
    </section>
  );
};

export default FinalCallToAction;
