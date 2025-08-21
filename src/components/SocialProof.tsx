"use client";
import React from "react";
import Image from "next/image";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Since working with [Your Brand], my revenue doubled, my systems are clean, and I’m no longer stuck in burnout mode. It’s the best investment I made for my business.",
    name: "Sarah Mitchell",
    role: "Founder @ BoldBiz",
    avatar: "/testimonials/user-1.jpg",
  },
  {
    id: 2,
    quote:
      "Enrich stands out in Sales Tech with unmatched discovery rates and minimal bounce rates. It uniquely charges for successful email finds and offers refunds otherwise.",
    name: "Niels Cohen",
    role: "Founder @ Emelia.io",
    avatar: "/testimonials/user-2.jpg",
  },
  // Add more testimonials here...
];

const SocialProof = () => {
  return (
    <section className="bg-[#f9fafb] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Don’t Just Take Our Word for It.
        </h2>
        <p className="text-2xl font-semibold text-orange-500 mt-2 mb-12">
          Business Owners Are Getting Real Results.
        </p>

        <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map(({ id, quote, name, role, avatar }) => (
            <article
              key={id}
              className="bg-white shadow-md rounded-lg p-8 flex flex-col justify-between"
            >
              <p className="text-gray-800 italic mb-6">“{quote}”</p>
              <div className="flex items-center gap-4">
                <Image
                  src={avatar}
                  alt={name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-16 mt-14 text-center text-gray-700 font-semibold">
          <div>
            <h3 className="text-4xl text-orange-500">+50%</h3>
            <p className="text-sm">Increase in Monthly Revenue</p>
          </div>
          <div>
            <h3 className="text-4xl text-orange-500">3x</h3>
            <p className="text-sm">More Qualified Leads</p>
          </div>
          <div>
            <h3 className="text-4xl text-orange-500">80%</h3>
            <p className="text-sm">Less Time Spent Marketing</p>
          </div>
        </div>

        <button className="mt-12 px-8 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition">
          Read More Success Stories
        </button>
      </div>
    </section>
  );
};

export default SocialProof;
