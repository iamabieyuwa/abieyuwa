"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export default function Contact() {
  const [status, setStatus] = useState(""); // '', 'success', or 'error'
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  // Validate fields and set errors if any are empty
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Please enter a valid email.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Remove error as user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("message", form.message);

      const res = await fetch("https://formspree.io/f/mqabjgll", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3500);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
        relative flex flex-col items-center justify-center
        pb-10 px-2 sm:px-4 md:px-8
        bg-gradient-to-b from-black via-zinc-950 to-black
        text-white scroll-mt-20 font-poppins
        md:min-h-[calc(100vh-64px)]
      "
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
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 tracking-tight underline underline-offset-8 decoration-white/30 font-poppins"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>
      <motion.p
        className="text-white/80 text-base sm:text-lg md:text-xl mb-8 text-center max-w-xl font-poppins"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Interested in working together or just want to say hello? Fill out the form or reach out via my socials!
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
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
          font-poppins
        "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        noValidate
      >
        <div className="flex flex-col gap-1">
          <input
            className={`bg-white/10 border-none rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition text-sm sm:text-base font-poppins ${errors.name ? "ring-2 ring-red-400" : ""}`}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.name && <span className="text-xs text-red-400 pl-1">{errors.name}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <input
            className={`bg-white/10 border-none rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition text-sm sm:text-base font-poppins ${errors.email ? "ring-2 ring-red-400" : ""}`}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.email && <span className="text-xs text-red-400 pl-1">{errors.email}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <textarea
            className={`bg-white/10 border-none rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition min-h-[90px] resize-none text-sm sm:text-base font-poppins ${errors.message ? "ring-2 ring-red-400" : ""}`}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.message && <span className="text-xs text-red-400 pl-1">{errors.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-400 hover:to-fuchsia-700 text-white font-bold py-2 px-4 rounded-md transition disabled:opacity-60 shadow-lg font-poppins"
          disabled={status === "success"}
        >
          {status === "success"
            ? "Message Sent!"
            : status === "error"
            ? "Something went wrong"
            : "Send Message"}
        </button>
        {status === "success" && (
          <motion.p
            className="text-green-400 text-center mt-2 text-base font-semibold bg-green-900/30 rounded-md py-2 px-3 shadow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🎉 Thank you! Your message has been sent.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            className="text-red-400 text-center mt-2 text-base font-semibold bg-red-900/30 rounded-md py-2 px-3 shadow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Oops! Something went wrong. Please try again.
          </motion.p>
        )}
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
          href="mailto:heisyuwa@gmail.com"
          className="rounded-full bg-white/10 backdrop-blur p-3 transition hover:bg-pink-400/30 hover:text-pink-300 shadow-lg text-white text-xl sm:text-2xl font-poppins"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/abieyuwa-imina"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 backdrop-blur p-3 transition hover:bg-pink-400/30 hover:text-pink-300 shadow-lg text-white text-xl sm:text-2xl font-poppins"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/iamnosakare"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 backdrop-blur p-3 transition hover:bg-pink-400/30 hover:text-pink-300 shadow-lg text-white text-xl sm:text-2xl font-poppins"
          aria-label="X"
        >
          <SiX />
        </a>
        <a
          href="https://github.com/iamabieyuwa"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 backdrop-blur p-3 transition hover:bg-pink-400/30 hover:text-pink-300 shadow-lg text-white text-xl sm:text-2xl font-poppins"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}