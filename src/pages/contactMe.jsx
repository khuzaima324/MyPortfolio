import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const webhookURL = "https://discord.com/api/webhooks/1399324086567567391/mjzroWl28PvkQEmb-UGD39nktHONfWjRUHhZYGkaLottHFjEs0MFoW2O8Aqux3RoMltS"; 

    const payload = {
      content: `📩 **New Portfolio Message**  
      👤 Name: ${form.name}  
      📧 Email: ${form.email}  
      💬 Message: ${form.message}`,
    };

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      alert("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message ❌");
    }
  };

  return (
    <section className="relative min-h-screen bg-[var(--color-primary)] text-white flex items-center justify-center overflow-hidden px-6">
      {/* Futuristic gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--color-secondary)] rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-4xl bg-black/30 border border-blue-500/30 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.3)] p-10 backdrop-blur-xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-400 tracking-wider">
          Contact <span className="text-[var(--color-background)]">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 overflow-hidden">
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.a 
            whileHover={{ scale: 1.05 }} 
            className="flex items-center space-x-4 text-lg">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <span className="break-all text-center sm:text-left">khuzaimaiqbal01278@gmail.com</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 text-lg"
              href="https://api.whatsapp.com/send/?phone=%2B923241446790&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt className="text-blue-400 text-2xl" />
              <span>+92 324 1446790</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 text-lg"
              href="https://www.linkedin.com/in/khuzaima-iqbal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-400 text-2xl" />
              <span>Khuzaima Iqbal</span>
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-4 text-lg">
              <FaMapMarkerAlt className="text-blue-400 text-2xl" />
              <span>Lahore, Pakistan</span>
            </motion.div>
          </div>

          {/* Right - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full max-w-full px-4 py-3 bg-transparent border border-blue-500 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-blue-500 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-blue-500 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #3b82f6" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-[100%] bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-lg font-semibold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
