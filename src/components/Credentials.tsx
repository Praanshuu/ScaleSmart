"use client";
import React from "react";
import Image from "next/image";

const companies = [
  { name: "Black Point Security", logo: "/logo/1.png" },
  { name: "PointCard", logo: "/logo/2.png" },
  { name: "Sprint Airwave", logo: "/logo/3.png" },
  { name: "RABPoint", logo: "/logo/4.png" },
  { name: "Loxmet", logo: "/logo/5.png" },
  { name: "Carollinum", logo: "/logo/6.png" },
  { name: "Banking Co", logo: "/logo/7.png" },
];

const Credentials = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          <span className="text-orange-500 font-bold">Trusted by 500+ </span>
          Entrepreneurs, CEOs, and Founders
        </h2>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center">
          {companies.map((company, index) => (
            <div key={index} className="mx-auto grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={company.logo}
                alt={company.name}
                width={100}
                height={100}
                className="mx-auto object-contain"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
