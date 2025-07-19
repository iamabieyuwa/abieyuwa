"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";

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
      className="relative px-4 py-24 bg-white text-gray-900 font-poppins"
    >
      <motion.h2
        className="text-center text-2xl sm:text-3xl font-bold mb-4 underline underline-offset-8 decoration-pink-400/40"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <motion.p
        className="text-center max-w-xl mx-auto text-gray-600 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Let’s collaborate or chat! Send me a message or connect via socials below.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-md mx-auto p-4 sm:p-6 flex flex-col gap-4 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        {/* Honeypot */}
        <input
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          className="hidden"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 text-sm bg-gray-100 rounded-md outline-none ${
            errors.name ? "ring-1 ring-red-400" : ""
          }`}
        />
        {errors.name && <p className="text-xs text-red-500 pl-1">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 text-sm bg-gray-100 rounded-md outline-none ${
            errors.email ? "ring-1 ring-red-400" : ""
          }`}
        />
        {errors.email && <p className="text-xs text-red-500 pl-1">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 text-sm bg-gray-100 rounded-md outline-none resize-none ${
            errors.message ? "ring-1 ring-red-400" : ""
          }`}
        />
        {errors.message && <p className="text-xs text-red-500 pl-1">{errors.message}</p>}

        <button
          type="submit"
          disabled={status === "success"}
          className="bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-sm font-semibold py-2 px-4 rounded-md hover:from-pink-600 hover:to-fuchsia-700 transition"
        >
          {status === "success" ? "Sent!" : status === "error" ? "Error" : "Send"}
        </button>

        {status === "success" && (
          <motion.p
            className="text-green-500 text-center mt-2 text-sm font-medium"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            className="text-red-500 text-center mt-2 text-sm font-medium"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ❌ Something went wrong. Try again.
          </motion.p>
        )}
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="mt-8 flex justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <a
          href="mailto:heisyuwa@gmail.com"
          aria-label="Email"
          className="text-xl text-black-500 hover:scale-110 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/abieyuwa-imina"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-xl text-black-500 hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/@abieyuwaimina"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="text-xl text-black-500 hover:scale-110 transition"
        >
          <SiX />
        </a>
        <a
          href="https://github.com/iamabieyuwa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-xl text-black-500 hover:scale-110 transition"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
