'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <img
          src="/Firegodbr-logo.png" // Replace with your actual logo path
          alt="Rogério Logo"
          className="w-24 h-24 object-contain mx-auto"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4"
      >
        Rogério Ferreira de Melo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl text-gray-600 mb-2"
      >
        📍 Montréal, QC H1N 0E5
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-base sm:text-lg text-gray-700 max-w-2xl mb-6"
      >
        Full Stack Developer with 5+ years experience in scalable web apps. Skilled
        in React, Laravel, Django, cloud platforms (AWS, GCP, Azure), and AI-powered
        solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4 text-gray-600 mb-4"
      >
        <span className="hidden sm:inline">•</span>
        <a
          href="https://linkedin.com/in/rogerio-ferreira-de-melo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 underline"
          aria-label="LinkedIn profile"
        >
          💼 LinkedIn
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-sm text-gray-500"
      >
        Languages: French, English, Portuguese
      </motion.p>
    </section>
  );
}
