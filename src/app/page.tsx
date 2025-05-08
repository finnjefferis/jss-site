"use client"; // This marks the component as a Client Component


import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

import { BsCheck2Circle } from "react-icons/bs";  // for bullets
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
            className=" text-lg md:text-3xl text-left md:text-center px-4 font-light text-gray-700 w-full"
          ></p>
        </div>
        <Link
  href="#contact"
  className={` bounce mt-8 inline-block relative px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition arrow-button mt-8 inline-block relative px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition 
              duration-1000 ease-in-out 
              ${isVisible ? "opacity-100" : "opacity-0"}`}
>
  Book a Free 30‑Minute Consultation
</Link>




      </section>
{/* ---------- ABOUT ME SECTION ---------- */}
{/* ---------- ABOUT ME SECTION ---------- */}
<section className="bg-gray-100 py-16 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-center">
    {/* ⬅ Portrait */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/me.jpg"
        alt="Finn Jefferis"
        width={260}
        height={260}
        className="rounded-full shadow-lg"
        priority
      />
    </div>

    {/* ➡ Bio */}
    <div className="md:col-span-2">
      {/* smaller, cleaner title + tagline */}
      <h2 className="text-4xl font-bold">Meet Finn</h2>
      <p className="text-lg text-gray-600 mb-4">
        Your local full-stack problem solver.
      </p>

      {/* tighter story */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Worthing-based dev pairing
        <strong> React / Next.js</strong> fronts with
        <strong> .NET / Laravel / Python</strong> power. Six years’ experience
        shipping high-ROI software for e-commerce, utilities and SME clients.
      </p>

      <h3 className="text-xl font-semibold mb-3">Wins I’m proud of:</h3>
      <ul className="space-y-3">
        {[
        
          "Slashed manual data entry for a local firm by integrating a bespoke C# MVC dashboard straight into Zoho CRM.",
          "Redesigned a Carbon Calculator application, improving speed, mobile usability and ensured results were synced to the client’s CRM in real-time.",
          "Refactored legacy code for a local e-commerce business, vastly improving SEO, trimming page-load seconds and lifting organic traffic.",
        ].map(item => (
          <li key={item} className="flex items-start gap-2 text-gray-600">
            <BsCheck2Circle className="text-blue-600 mt-1 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">Core toolset:</h3>
      <p className="text-gray-700 leading-relaxed">
        React&nbsp;/ Next.js • TypeScript • Tailwind • .NET • Laravel •
        Python • REST &amp; GraphQL • PostgreSQL / MySQL • Azure CI/CD
      </p>
    </div>
  </div>
</section>


      <section className="bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto flex flex-col items-center">
    <h2 className="text-4xl font-bold mb-10">How I Can Help</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {/* BUILD & LAUNCH */}
      <div
        onClick={() => toggleModal("Build & Launch")}
        className="group bg-white p-8 shadow-lg rounded-2xl text-center cursor-pointer hover:shadow-2xl transition"
      >
        {/* icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600
                        group-hover:scale-110 group-hover:rotate-6 transition duration-300">
          <FaCode className="text-4xl" />
        </div>

        <h3 className="text-2xl font-bold mb-4">Build & Launch</h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          New marketing site, e-commerce store or bespoke app—finished, live and
          ready to earn.
        </p>

        {/* quick benefits */}
        <ul className="space-y-2 text-left inline-block">
          {["Full-stack dev (Next.js, .NET)", "SEO & core-web-vitals ready", "CRM / payment integrations"].map(
            (item) => (
              <li key={item} className="flex items-start gap-2 text-gray-600">
                <BsCheck2Circle className="text-blue-600 mt-0.5" />
                <span>{item}</span>
              </li>
            )
          )}
        </ul>
      </div>

      {/* FIX & GROW */}
      <div
        onClick={() => toggleModal("Fix & Grow")}
        className="group bg-white p-8 shadow-lg rounded-2xl text-center cursor-pointer hover:shadow-2xl transition"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600
                        group-hover:scale-110 group-hover:-rotate-6 transition duration-300">
          <FaCogs className="text-4xl" />
        </div>

        <h3 className="text-2xl font-bold mb-4">Fix & Grow</h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Own a site already? I optimise, troubleshoot and add revenue-boosting
          features.
        </p>

        <ul className="space-y-2 text-left inline-block">
          {["Speed & SEO audits", "WordPress / Squarespace rescue", "Ongoing care & feature dev"].map(
            (item) => (
              <li key={item} className="flex items-start gap-2 text-gray-600">
                <BsCheck2Circle className="text-emerald-600 mt-0.5" />
                <span>{item}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Our Work Section */}
    {/* ---------- OUR WORK SECTION ---------- */}
<section className="bg-gray-100 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-14">Our Work</h2>

    {/* Responsive grid – cards stretch to equal height */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

      {/* CARD 1 */}
      <div
        className=" transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl bg-white p-8 shadow-lg rounded-2xl cursor-pointer flex flex-col h-full"
        onClick={() => toggleModal("Toolbox for Beyond Procurement")}
      >
        {/* fixed-height image wrapper keeps cards equal */}
        <div className="relative w-full h-48 mb-6">
          <Image
            src="/toolbox.png"
            alt="Toolbox for Beyond Procurement"
            fill          // ⬅ fills the  w-full / h-48 box
            className="object-cover rounded-lg"
          />
        </div>

        <h3 className="text-2xl font-semibold mb-2 text-center">
          Toolbox for Beyond Procurement
        </h3>
        <p className="text-gray-600 text-center">
          A comprehensive toolbox to streamline procurement processes for local
          businesses.
        </p>
      </div>

      {/* CARD 2 */}
      <div
        className="transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl bg-white p-8 shadow-lg rounded-2xl cursor-pointer flex flex-col h-full"
        onClick={() => toggleModal("Carbon Calculator for Beyond Procurement")}
      >
        <div className="relative w-full h-48 mb-6">
          <Image
            src="/carbon.png"
            alt="Carbon Calculator"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <h3 className="text-2xl font-semibold mb-2 text-center">
          Carbon Calculator for Beyond Procurement
        </h3>
        <p className="text-gray-600 text-center">
          React rebuild that boosted mobile UX and synced results to the client
          CRM in real-time.
        </p>
      </div>

      {/* CARD 3 */}
      <div
        className="transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl bg-white p-8 shadow-lg rounded-2xl cursor-pointer flex flex-col h-full"
        onClick={() => toggleModal("Portfolio Platform")}
      >
        <div className="relative w-full h-48 mb-6">
          <Image
            src="/portfolio2.png"
            alt="Portfolio Platform"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <h3 className="text-2xl font-semibold mb-2 text-center">
          Portfolio Platform
        </h3>
        <p className="text-gray-600 text-center">
  A blazing-fast Next.js landing page showcasing creative layouts and selected personal projects.
</p>

      </div>

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

<section
  id="contact"
  className="flex flex-col items-center justify-center min-h-screen bg-white p-6 md:p-12"
>
  <h2 className="text-4xl font-bold text-black mb-8">Get in Touch</h2>
  <p className="text-xl text-center mb-12 text-gray-700">
    Ready to elevate your business with custom software solutions? Book a free call or send a message.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
    {/* ⬅ LEFT: Calendly Booking Card (Link version) */}
    <div className="bg-gray-100 p-8 shadow-lg rounded-2xl flex flex-col items-center text-center space-y-6">
      <div className="bg-stone-200 text-stone-800 p-4 rounded-full">
        <FaRegCalendarAlt className="text-5xl" />
      </div>

      <h3 className="text-2xl font-bold text-black">
        Let’s Talk About Your Project
      </h3>

      <p className="text-gray-600">
        Use my calendar to book a free 30-minute call — no emails, no back-and-forth.
      </p>

      <a
        href="https://calendly.com/finnjefferis/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
      >
        Book a Call on Calendly
      </a>
    </div>

    {/* ➡ RIGHT: Contact Form */}
    <div className="bg-gray-100 p-6 shadow-lg rounded-lg w-full">
      <ContactForm />
    </div>
  </div>
</section>



    </div>
  );
}
