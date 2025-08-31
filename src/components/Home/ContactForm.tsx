"use client";
import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="bg-white py-20 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto">
                {/* Global Heading */}
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center lg:text-left">
                    Send Me a Message
                </h2>

                {/* Make grid items align at the top */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Form Section */}
                    <div className="flex flex-col bg-gray-100 p-8 rounded-3xl shadow-lg">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-5">
                                {[
                                    { label: "Full Name", type: "text", required: true },
                                    { label: "Email Address", type: "email", required: true },
                                    { label: "WhatsApp / Phone", type: "tel", required: false },
                                ].map((field, index) => (
                                    <div key={index}>
                                        <label className="block text-gray-800 font-medium mb-2">{field.label}</label>
                                        <input
                                            type={field.type}
                                            required={field.required}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label className="block text-gray-800 font-medium mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    ></textarea>
                                </div>

                                <div className="space-y-2 pt-2">
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition duration-300"
                                    >
                                        Let’s Start the Conversation
                                    </button>
                                    <a
                                        href="https://wa.me/917770914745?text=Hi,%20I%20want%20to%20know%20more"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-center text-green-600 hover:text-green-700 hover:underline transition"
                                    >
                                        💬 Or Chat with Me on WhatsApp
                                    </a>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center bg-green-50 p-8 rounded-3xl shadow-lg flex flex-col justify-center h-full">
                                <h3 className="text-2xl font-semibold text-green-700 mb-3">Thank you for reaching out!</h3>
                                <p className="text-gray-700">
                                    I’ll get back to you within 24 hours. Meanwhile, feel free to connect on WhatsApp for a quicker response.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Contact Info - aligned top */}
                    <div className="flex flex-col justify-start text-center lg:text-left space-y-6">
                        {/* Direct Contact */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h3>
                            <div className="space-y-3 text-gray-700">
                                <p className="flex items-center gap-2 justify-center lg:justify-start">
                                    📞{" "}
                                    <a href="tel:+11234567890" className="hover:text-orange-600 transition">
                                        +1 (123) 456-7890
                                    </a>
                                </p>
                                <p className="flex items-center gap-2 justify-center lg:justify-start">
                                    📧{" "}
                                    <a href="mailto:hello@yourdomain.com" className="hover:text-orange-600 transition">
                                        hello@yourdomain.com
                                    </a>
                                </p>
                                <p className="flex items-center gap-2 justify-center lg:justify-start">🕑 Mon – Fri: 9 AM – 6 PM</p>
                            </div>
                        </div>
                        {/* Social Media */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Me</h3>
                            <div className="flex justify-center lg:justify-start space-x-6 text-2xl text-gray-600">
                                <a href="#" className="hover:text-orange-600 transition">
                                    <FaLinkedin />
                                </a>
                                <a href="#" className="hover:text-orange-600 transition">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="hover:text-orange-600 transition">
                                    <FaInstagram />
                                </a>
                            </div>
                            <p className="mt-4 text-gray-600">Follow for updates & tips</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
