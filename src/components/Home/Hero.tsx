"use client";
import React from "react";

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center px-6 md:px-12 text-center overflow-hidden">

            {/* Background Image with Blur and Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
                    style={{ backgroundImage: "url('/heroFace.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-blue-900/40 opacity-80"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-4xl text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
                    Unlock the Leader Within.
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium mt-4 mb-6 text-blue-100">
                    Grow Your Business with Confidence
                </h2>
                <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-blue-200">
                    Proven strategies, real-world tools, and expert guidance to take your business to the next level.
                </p>

                {/* Primary CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#cta"
                        className="bg-white text-blue-700 hover:text-white hover:bg-blue-600 transition-all px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
                    >
                        Book a Call
                    </a>

                    {/* Secondary CTA */}
                    <a
                        href="#case-study"
                        className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-blue-700 px-7 py-3 rounded-full text-lg font-medium transition-all"
                    >
                        See Client Case Study
                        <svg
                            className="ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="20"
                            height="20"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5-5 5M6 7l5 5-5 5"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
