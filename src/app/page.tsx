"use client"; // This marks the component as a Client Component

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons for email and phone
import {
  FaCode,
  FaShoppingCart,
  FaCogs,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalContent, setModalContent] = useState<string | null>(null);

  const subheading = "Empowering Local Businesses with Cost-Effective Software";

  const textRef = useRef<HTMLParagraphElement>(null); // Ref to the paragraph element

  useEffect(() => {
    setIsVisible(true); // Trigger the fade-in effect for the heading

    let currentIndex = 0;
    const typingSpeed = 50; // Adjusted speed for faster typing

    const typingInterval = setInterval(() => {
      if (textRef.current && currentIndex <= subheading.length) {
        textRef.current.innerHTML =
          subheading.slice(0, currentIndex) +
          '<span class="caret">&nbsp;</span>';
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const toggleModal = (content: string | null = null) => {
    setModalContent(content); // Set modal content dynamically based on the clicked service
    setIsModalOpen(!isModalOpen); // Toggle modal state
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <h1
          className={`text-black text-4xl md:text-5xl font-bold transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          } mx-4 md:mx-0 text-left md:text-center`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Jefferis Software Solutions.
        </h1>
        <div className="flex items-center justify-center mt-2 sm:p-4 text-left md:text-center w-full">
          <p
            ref={textRef} // Assign the ref to the paragraph
            className="text-lg md:text-3xl text-left md:text-center px-4 font-light text-gray-700 w-full"
          ></p>
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

      {/* Why Us Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 md:p-12">
        <h2 className="text-4xl font-bold text-black mb-8">Why Us?</h2>
        <p className="text-xl text-gray-700 max-w-8xl text-center mb-12">
          We specialize in designing, developing, and implementing software that
          empowers local businesses. Our solutions are tailored to meet the
          unique challenges and goals of each client.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Custom Web Development */}
          <div
            className="bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer"
            onClick={() => toggleModal("Custom Web Development")}
          >
            <FaCode className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              Custom Web Development
            </h3>
            <p className="text-gray-600">
              Fully responsive and SEO-optimized websites tailored to your
              business needs.
            </p>
          </div>

          {/* E-commerce Solutions */}
          <div
            className="bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer"
            onClick={() => toggleModal("E-commerce Solutions")}
          >
            <FaShoppingCart className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              E-commerce Solutions
            </h3>
            <p className="text-gray-600">
              Expertise in Shopify, WooCommerce, and custom e-commerce solutions
              for local businesses.
            </p>
          </div>

          {/* API Integrations */}
          <div
            className="bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer"
            onClick={() => toggleModal("API Integrations")}
          >
            <FaProjectDiagram className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">API Integrations</h3>
            <p className="text-gray-600">
              Seamless integration of third-party services such as Zoho to
              improve business workflows.
            </p>
          </div>

          {/* Bespoke Software Development */}
          <div
            className="bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer"
            onClick={() => toggleModal("Bespoke Software Development")}
          >
            <FaCogs className="text-5xl text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              Bespoke Software Development
            </h3>
            <p className="text-gray-600">
              Custom software applications to streamline your business
              operations and maximize productivity.
            </p>
          </div>
        </div>
      </section>
      {/* Our Work Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 md:p-12">
        <h2 className="text-4xl font-bold text-black mb-8">Our Work</h2>
        <div className="flex items-center justify-center">
          <div
            className="bg-white p-8 shadow-lg rounded-lg cursor-pointer max-w-md"
            onClick={() => toggleModal("Toolbox for Beyond Procurement")}
          >
            <Image
              src="/toolbox.png"
              alt="Toolbox for Beyond Procurement"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
              Toolbox for Beyond Procurement
            </h3>
            <p className="text-gray-600 text-center">
              A comprehensive toolbox to streamline procurement processes for
              local businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => toggleModal(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">
              {modalContent}
            </h3>
            {modalContent === "Toolbox for Beyond Procurement" && (
              <>
                <Image
                  src="/toolbox.png"
                  alt="Toolbox for Beyond Procurement"
                  width={500}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <p className="text-gray-600 text-center mb-4">
                  Toolbox is a bespoke web platform created in C# .NET that lets
                  clients upload their bills to easily identify opportunities
                  for both cost savings and carbon reduction.
                </p>
              </>
            )}
            {modalContent === "Custom Web Development" && (
              <p className="text-gray-600 text-center mb-4">
                Our custom web development services include creating fully
                responsive, SEO-optimized websites tailored specifically to your
                business needs. We use the latest web technologies like React,
                Next.js, and more.
              </p>
            )}
            {modalContent === "E-commerce Solutions" && (
              <p className="text-gray-600 text-center mb-4">
                We specialize in building robust e-commerce solutions on
                platforms like Shopify and WooCommerce, including custom
                integrations and payment gateways.
              </p>
            )}
            {modalContent === "API Integrations" && (
              <p className="text-gray-600 text-center mb-4">
                With our API integration services, we seamlessly connect your
                business applications with third-party services such as Zoho,
                making your workflows more efficient.
              </p>
            )}
            {modalContent === "Bespoke Software Development" && (
              <p className="text-gray-600 text-center mb-4">
                Our bespoke software development service provides custom
                solutions that are tailored to streamline and optimize your
                business processes, ensuring you get the best out of your
                operations.
              </p>
            )}
            <button
              onClick={() => toggleModal(null)}
              className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Me Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white p-6 md:p-12">
        <h2 className="text-4xl font-bold text-black mb-8">Get in Touch</h2>
        <p className="text-xl text-center mb-12 text-gray-700">
          Ready to elevate your business with custom software solutions? Get in
          touch today to discuss your project needs!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact form as you currently have */}
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg w-full max-w-lg mx-auto">
            <form className="w-full">
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
          {/* Contact info as you currently have */}
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
                07939 309355
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
