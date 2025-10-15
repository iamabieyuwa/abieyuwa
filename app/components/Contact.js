"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { SiX } from "react-icons/si";

// 1. Consolidated input styling into a utility class for better readability
const inputBaseClasses = `
  w-full px-5 py-3 text-base text-gray-800 bg-gray-100 rounded-lg border-2 border-transparent 
  transition-all duration-300 shadow-sm
  placeholder-gray-500 outline-none
  focus:bg-white focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 
`;

export default function Contact() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Your name is required.";
    if (!form.email.trim()) newErrors.email = "Your email address is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Please enter a valid email address.";
    if (!form.message.trim()) newErrors.message = "A message is required to start the conversation.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    if (form.honeypot) return;
    if (!validate()) {
      setStatus("");
      return;
    }

    try {
      // NOTE: Replace with your actual Formspree endpoint 
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

  const isSending = status === "sending";
  const isSuccess = status === "success";

  const socialLinks = [
    { href: "mailto:heisyuwa@gmail.com", icon: <FaEnvelope />, aria: "Email" },
    { href: "https://linkedin.com/in/abieyuwa-imina", icon: <FaLinkedin />, aria: "LinkedIn" },
    { href: "https://x.com/iamabieyuwa", icon: <SiX />, aria: "X (Twitter)" }, 
    { href: "https://github.com/iamabieyuwa", icon: <FaGithub />, aria: "GitHub" },
  ];

  return (
    <section
      id="contact"
      className="relative px-4 py-24 bg-gray-50 text-gray-900 font-poppins"
    >
      {/* Title Block */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-gray-900"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-fuchsia-600">
          Get In Touch
        </span>
      </motion.h2>

      <motion.p
        className="text-center max-w-xl mx-auto text-gray-700 text-lg mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        I&apos;m currently open to new Frontend Engineering opportunities. Let&apos;s discuss your project, collaboration idea, or just chat about React and Next.js development.
      </motion.p>

      {/* Main Content Grid: Contact Info (Left) and Form (Right) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Left Side: Contact Information and Call to Action */}
        <motion.div
          className="flex flex-col gap-6 p-6 sm:p-8 rounded-xl bg-white shadow-xl h-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900">Direct Connect</h3>
          <p className="text-gray-600 text-base">
            Prefer a direct line? You can reach me instantly via email or connect with me on professional networks.
          </p>

          <div className="space-y-4">
            <ContactInfoItem 
              icon={<FaEnvelope className="text-pink-500 text-xl" />}
              title="Email"
              value="heisyuwa@gmail.com"
              href="mailto:heisyuwa@gmail.com"
            />
            <ContactInfoItem 
              icon={<FaLinkedin className="text-pink-500 text-xl" />}
              title="LinkedIn"
              value="Abieyuwa Imina"
              href="https://linkedin.com/in/abieyuwa-imina"
            />
          </div>

          {/* Social Links - Re-styled for better visibility */}
          <div className="mt-8">
             <h3 className="text-xl font-bold mb-4">Follow My Journey</h3>
             <div className="flex gap-4">
                {socialLinks.map(({ href, icon, aria }) => (
                  <a
                    key={aria}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={aria}
                    className="text-gray-600 text-2xl hover:text-pink-600 hover:scale-110 transition duration-300"
                  >
                    {icon}
                  </a>
                ))}
             </div>
          </div>
        </motion.div>


        {/* Right Side: Contact Form - Enhanced Focus Style */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          className="p-6 sm:p-8 rounded-xl shadow-xl bg-white flex flex-col gap-5 border border-pink-100"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
            className={`${inputBaseClasses} ${errors.name ? "border-red-500 ring-2 ring-red-500/30" : ""}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'error-name' : undefined}
          />
          {errors.name && <p id="error-name" className="text-xs text-red-500 pl-1">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className={`${inputBaseClasses} ${errors.email ? "border-red-500 ring-2 ring-red-500/30" : ""}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'error-email' : undefined}
          />
          {errors.email && <p id="error-email" className="text-xs text-red-500 pl-1">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Tell me about your project or idea..."
            rows="6"
            value={form.message}
            onChange={handleChange}
            className={`${inputBaseClasses} resize-none ${errors.message ? "border-red-500 ring-2 ring-red-500/30" : ""}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'error-message' : undefined}
          />
          {errors.message && <p id="error-message" className="text-xs text-red-500 pl-1">{errors.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending || isSuccess}
            className={`
              flex items-center justify-center gap-2 text-white text-base font-semibold py-3 px-6 rounded-lg transition transform 
              ${isSending || isSuccess 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-pink-600 to-fuchsia-600 hover:from-pink-700 hover:to-fuchsia-700 shadow-lg hover:scale-[1.01]'}
            `}
          >
            {isSending ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : isSuccess ? (
              <>
                <FaCheckCircle className="text-lg" />
                Sent!
              </>
            ) : (
              <>
                <FaPaperPlane className="text-base" />
                Send Message
              </>
            )}
          </button>

          {/* Status Messages - Using Icons instead of Emojis */}
          {isSuccess && (
            <motion.p
              className="text-green-600 text-center mt-2 text-sm font-medium flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaCheckCircle className="text-green-500 text-lg" />
              Success! I&apos;ll get back to you as soon as possible.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-red-600 text-center mt-2 text-sm font-medium flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaExclamationCircle className="text-red-500 text-lg" />
              Something went wrong. Please try emailing directly!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

// Helper component
const ContactInfoItem = ({ icon, title, value, href }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-4 p-3 hover:bg-pink-50 rounded-lg transition duration-200"
    >
        {icon}
        <div>
            <p className="text-xs font-semibold uppercase text-pink-500">{title}</p>
            <p className="text-sm text-gray-800">{value}</p>
        </div>
    </a>
);