"use client";
import React from "react";

const FinalCallToAction = () => {
  return (
    <section className="w-full bg-gradient-to-br from-red-50 via-white to-blue-50 px-6 sm:px-10 py-28">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
        <div className="px-6 sm:px-12 py-16 sm:py-24 text-center flex flex-col items-center">

          {/* Warning */}
          <div className="mb-10">
            <div className="flex justify-center items-center mb-4">
              <span className="text-red-600 text-4xl mr-3">⚠️</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-red-700">
                Last Call: This Opportunity Is Closing
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              The doors to this offer are closing soon. If you miss this window, it may be months before it returns—if ever.
            </p>
          </div>

          {/* Benefit Recap */}
          <div className="grid sm:grid-cols-2 gap-6 text-left text-gray-800 text-base sm:text-lg mb-12 max-w-3xl">
            {[
              "12 Weeks of Expert Business Coaching",
              "Done-for-You Growth Templates",
              "Private Lifetime Community Access",
              "Personalized Business Audit + Strategy Plan",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#cta"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg sm:text-xl py-4 px-10 rounded-full shadow-lg transition-all hover:scale-105 mb-6"
          >
            Yes, I’m Ready to Grow →
          </a>

          {/* Scarcity / Final Reminder */}
          <p className="text-sm text-gray-500 italic">
            Only a few spots left — don’t wait and wonder what could have been.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCallToAction;
