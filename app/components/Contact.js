"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    // Honeypot check (spam protection)
    if (form.honeypot) return;

    if (!validate()) return;

    try {
      const response = await fetch("https://formspree.io/f/mqabjgll", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", honeypot: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
  id="contact"
  className="pt-10 md:pt-32 relative flex flex-col items-center justify-center pb-10 px-2 sm:px-4 md:px-8 bg-gradient-to-b from-black via-zinc-950 to-black text-white scroll-mt-20 font-poppins md:min-h-[calc(100vh-64px)]"
>

      {/* Background Glow */}
      <motion.div
        className="absolute left-1/2 top-1/3 w-[320px] sm:w-[400px] h-[180px] sm:h-[240px] -translate-x-1/2 -z-10 pointer-events-none blur-2xl"
        initial={{ opacity: 0.25, scale: 1 }}
        animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.07, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none">
          <ellipse cx="200" cy="120" rx="180" ry="90" fill="#f472b6" fillOpacity="0.18" />
        </svg>
      </motion.div>

      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 underline underline-offset-8 decoration-white/30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <motion.p
        className="text-white/80 text-sm sm:text-base md:text-lg mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Let’s collaborate or chat! Send me a message or connect via socials below.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col gap-4 shadow-2xl transition-all hover:shadow-pink-400/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        noValidate
      >
        {/* Honeypot Field */}
        <input
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="flex flex-col gap-1">
          <input
            className={`bg-white/10 rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm ${
              errors.name ? "ring-2 ring-red-400" : ""
            }`}
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-xs text-red-400 pl-1">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <input
            className={`bg-white/10 rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm ${
              errors.email ? "ring-2 ring-red-400" : ""
            }`}
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-xs text-red-400 pl-1">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <textarea
            className={`bg-white/10 rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 min-h-[90px] resize-none text-sm ${
              errors.message ? "ring-2 ring-red-400" : ""
            }`}
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <span className="text-xs text-red-400 pl-1">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-400 hover:to-fuchsia-700 text-white font-bold py-2 px-4 rounded-md transition disabled:opacity-60 text-sm"
          disabled={status === "success"}
        >
          {status === "success" ? "Sent!" : status === "error" ? "Error" : "Send"}
        </button>

        {status === "success" && (
          <motion.p
            className="text-green-400 text-center mt-2 text-base font-semibold bg-green-900/30 rounded-md py-2 px-3 shadow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🎉 Message sent successfully.
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            className="text-red-400 text-center mt-2 text-base font-semibold bg-red-900/30 rounded-md py-2 px-3 shadow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Oops! Something went wrong.
          </motion.p>
        )}
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="mt-8 flex gap-3 sm:gap-5 justify-center items-center flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <a
          href="mailto:heisyuwa@gmail.com"
          aria-label="Email"
          className="rounded-full bg-white/10 p-2 sm:p-3 text-lg sm:text-xl hover:bg-pink-400/30 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/abieyuwa-imina"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-full bg-white/10 p-2 sm:p-3 text-lg sm:text-xl hover:bg-pink-400/30 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/iamabieyuwa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="rounded-full bg-white/10 p-2 sm:p-3 text-lg sm:text-xl hover:bg-pink-400/30 transition"
        >
          <SiX />
        </a>
        <a
          href="https://github.com/iamabieyuwa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-full bg-white/10 p-2 sm:p-3 text-lg sm:text-xl hover:bg-pink-400/30 transition"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
