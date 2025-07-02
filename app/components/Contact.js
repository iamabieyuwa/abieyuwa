"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 2500);
    }, 1200);
  }

  return (
    <section
      id="contact"
      // Remove pt-16, use only scroll-mt-20
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] pb-10 px-2 sm:px-4 md:px-8 bg-gradient-to-b from-black via-zinc-950 to-black text-white scroll-mt-20"
    >
      {/* Stylish blurred ellipse background */}
      <motion.div
        className="absolute left-1/2 top-1/3 w-[320px] sm:w-[400px] h-[180px] sm:h-[240px] -translate-x-1/2 -z-10 pointer-events-none blur-2xl"
        initial={{ opacity: 0.25, scale: 1 }}
        animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.07, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none">
          <ellipse
            cx="200"
            cy="120"
            rx="180"
            ry="90"
            fill="#f472b6"
            fillOpacity="0.18"
          />
        </svg>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight underline underline-offset-8 decoration-white/30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>
      <motion.p
        className="text-white/80 text-lg md:text-xl mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Interested in working together or just want to say hello? Fill out the form or reach out via my socials!
      </motion.p>

      {/* Stylish CONTACT FORM */}
      <motion.form
        className="
          w-full max-w-lg
          bg-white/10
          backdrop-blur-xl
          rounded-2xl
          p-5 sm:p-7 md:p-8
          flex flex-col gap-4
          shadow-2xl
          transition-all duration-300
          hover:shadow-pink-400/20
        "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        onSubmit={handleSubmit}
      >
        <input
          className="bg-white/10 border-none rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition text-base"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          className="bg-white/10 border-none rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition text-base"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          className="bg-white/10 border-none rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition min-h-[90px] resize-none text-base"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-400 hover:to-fuchsia-700 text-white font-bold py-2 px-4 rounded-md transition disabled:opacity-60 shadow-lg"
          disabled={loading || sent}
        >
          {loading ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
        </button>
      </motion.form>

      {/* Social links - glassy w/ hover glow */}
      <motion.div
        className="mt-8 flex gap-4 sm:gap-6 justify-center items-center flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <a
          href="mailto:youremail@example.com"
          className="rounded-full bg-white/10 backdrop-blur p-3 transition hover:bg-pink-400/30 hover:text-pink-300 shadow-lg text-white text-2xl"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 backdrop-blur p-3 transition hover:bg-pink-400/30 hover:text-pink-300 shadow-lg text-white text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 backdrop-blur p-3 transition hover:bg-pink-400/30 hover:text-pink-300 shadow-lg text-white text-2xl"
          aria-label="X"
        >
          <SiX />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 backdrop-blur p-3 transition hover:bg-pink-400/30 hover:text-pink-300 shadow-lg text-white text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}