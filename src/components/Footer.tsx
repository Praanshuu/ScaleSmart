"use client";
import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 sm:px-10 pt-20 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">

        {/* Profile + Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">James David</h3>
          <div className="flex gap-4 text-gray-700 text-xl">
            <a href="#"><FaLinkedinIn className="hover:text-black transition" /></a>
            <a href="#"><FaInstagram className="hover:text-black transition" /></a>
            <a href="#"><FaYoutube className="hover:text-black transition" /></a>
            <a href="#"><FaXTwitter className="hover:text-black transition" /></a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Coaching</a>
          <a href="#" className="hover:text-black transition">Success Stories</a>
          <a href="#" className="hover:text-black transition">Blog</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium text-gray-800">
            Subscribe to the newsletter
          </h4>
          <form className="flex items-center bg-gray-100 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-4 py-2 text-sm bg-transparent outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-tr from-red-500 to-orange-400 hover:to-orange-500 text-white px-4 py-2 rounded-full text-sm transition-all"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-10"></div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-3">
        <p>©copyright 2025</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
