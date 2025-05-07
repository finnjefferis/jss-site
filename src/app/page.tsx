"use client"; // This marks the component as a Client Component

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons for email and phone
import {
  FaCode,
  FaShoppingCart,
  FaCogs,
  FaProjectDiagram,
} from "react-icons/fa";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  /* ---------- SUCCESS STATE ---------- */
  if (status === "sent") {
    return (
      <p className="text-center text-green-700">
        ✅ Thanks! I’ll reply within one business day.
      </p>
    );
  }

  /* ---------- FORM STATE (idle / submitting / error) ---------- */
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* honeypot */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-1 font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Sorry, something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      <p className="mt-2 text-sm text-gray-500 text-center">
        🔒 Your information is private and will never be shared.
      </p>

      {/* optional Calendly link */}
      <a
        href="https://calendly.com/finnjefferis/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-sm underline mt-4"
      >
        Prefer to chat? Book a slot →
      </a>
    </form>
  );
}


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
        <Head>
        <title>Affordable Web & Software Development – Jefferis Software Solutions</title>
        <meta
          name="description"
          content="Websites, e‑commerce, and custom software for small businesses and startups in West Sussex. Book a free 30‑minute consult today."
        />
        {/* Local business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jefferis Software Solutions",
              url: "https://your‑domain.com",
              telephone: "+447939309355",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Worthing",
                addressRegion: "West Sussex",
                addressCountry: "UK",
              },
            }),
          }}
        />
      </Head>
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
        <Link
  href="#contact"
  className="bounce mt-8 inline-block relative px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition arrow-button"
>
  Book a Free 30‑Minute Consultation
</Link>



      </section>

      {/* Why Us Section */}
      <section className="bg-gray-100 py-12 px-4">
  <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">

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
  {/* CONTACT ME SECTION */}
  <section
        id="contact"
        className="flex flex-col items-center justify-center min-h-screen bg-white p-6 md:p-12"
      >
        <h2 className="text-4xl font-bold text-black mb-8">Get in Touch</h2>
        <p className="text-xl text-center mb-12 text-gray-700">
          Ready to elevate your business with custom software solutions? Drop me a line below or
          book a quick call — I usually reply within one business day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* form */}
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg w-full">
            <ContactForm />
          </div>

          {/* direct contact card */}
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-2xl text-gray-700 mr-2" />
              <a href="mailto:finnjefferis@gmail.com" className="text-xl font-medium text-gray-700">
                finnjefferis@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-2xl text-gray-700 mr-2" />
              <a href="tel:+447939309355" className="text-xl font-medium text-gray-700">
                07939 309355
              </a>
            </div>
            <address className="mt-6 not-italic text-center text-gray-600 text-sm">
              Worthing, West Sussex, UK
            </address>
          </div>
        </div>
      </section>

    </div>
  );
}
