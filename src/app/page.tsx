"use client"; // This marks the component as a Client Component

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons for email and phone

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const subheading = "Empowering Local Businesses with Cost-Effective Software";
  const textRef = useRef<HTMLParagraphElement>(null); // Ref to the paragraph element
  const caretRef = useRef<HTMLSpanElement>(null); // Ref to the caret element

  useEffect(() => {
    setIsVisible(true); // Trigger the fade-in effect for the heading

    let currentIndex = 0;
    const typingSpeed = 50; // Adjusted speed for faster typing

    const typingInterval = setInterval(() => {
      if (textRef.current && currentIndex < subheading.length) {
        textRef.current.textContent = subheading.slice(0, currentIndex + 1);
        currentIndex++;

        // Ensure the caret stays directly after the text
        if (caretRef.current) {
          caretRef.current.style.display = "inline-block";
        }
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1
          className={`text-black text-4xl md:text-5xl font-bold transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          } underline decoration-gray-400`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Jefferis Software Solutions.
        </h1>
        <div className="flex items-center mt-2">
          <p
            ref={textRef} // Assign the ref to the paragraph
            className="text-xl md:text-3xl font-light text-gray-700"
          >
            {/* The text content will be updated directly */}
          </p>
          <span
            ref={caretRef} // Assign the ref to the caret
            className="caret"
          >
            &nbsp;
          </span>
        </div>
        <div className="mt-32">
          <div className="bounce">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path d="M12 16L8 12H16L12 16Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      {/* Why Me / Portfolio Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 md:p-12">
        <h2 className="text-4xl font-bold text-black mb-8">Why Us?</h2>
        <p className="text-xl text-gray-700 max-w-8xl text-center mb-12">
          With years of experience in building full-stack applications across
          diverse industries, we are well-equipped to deliver comprehensive
          software solutions tailored to your business needs. From design and
          specification to development, testing, and ongoing support, we provide
          end-to-end services that offer exceptional value and meet your
          business objectives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: Toolbox for Beyond Procurement */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              src="/toolbox.png" // Corrected image path
              alt="Toolbox for Beyond Procurement"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
              Toolbox for Beyond Procurement
            </h3>
            <p className="text-gray-600 text-center">
              A comprehensive toolbox designed to streamline procurement
              processes and enhance efficiency for businesses.
            </p>
          </div>
          {/* Project 2: Carbon Calculator for Beyond Procurement */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              src="/carbon.png" // Corrected image path
              alt="Carbon Calculator for Beyond Procurement"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
              Carbon Calculator for Beyond Procurement
            </h3>
            <p className="text-gray-600 text-center">
              A tool for calculating and reducing carbon footprints, helping
              organizations meet sustainability goals.
            </p>
          </div>
          {/* Project 3: My Portfolio Site */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              src="/portfolio2.png" // Corrected image path
              alt="My Portfolio Site"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
              My Portfolio Site
            </h3>
            <p className="text-gray-600 text-center">
              A showcase of my skills and projects, demonstrating my expertise
              in web development and design.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h2 className="text-4xl font-bold text-black mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
            <form className="w-full max-w-lg">
              <div className="flex flex-col mb-4">
                <label
                  className="mb-2 text-gray-700 font-medium"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  className="mb-2 text-gray-700 font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  className="mb-2 text-gray-700 font-medium"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-2xl text-gray-700 mr-2" />
              <a
                href="mailto:finnjefferis@gmail.com"
                className="text-xl font-medium text-gray-700"
              >
                finnjefferis@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-2xl text-gray-700 mr-2" />
              <a
                href="tel:+447939309355"
                className="text-xl font-medium text-gray-700"
              >
                07939309355
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
