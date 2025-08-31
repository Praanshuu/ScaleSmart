"use client";

import React, { useState, useEffect } from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import Link from "next/link"; // Import Link from Next.js

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#solutions" },
  { name: "Service", href: "#service" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];


const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Show/hide on scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Hide nav when scrolling down
      setShow(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);

      // Apply scrolled style when beyond top
      setScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-white shadow-md text-gray-900" : "bg-transparent text-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
          <span className="font-semibold text-lg">James David</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="ml-auto md:ml-0 flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full shadow hover:scale-105 transition-transform"
        >
          <FaRegCalendarCheck className="text-base" />
          Book a Call
        </a>
      </div>
    </header>
  );
};

export default Header;
