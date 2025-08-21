'use client';

import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Professional() {
  return (
    <section id="professional" className="max-w-4xl mx-auto px-6 py-16">
      <motion.h2
        {...fadeIn(0)}
        className="text-3xl font-semibold mb-8 text-center"
      >
        Professional Experience
      </motion.h2>

      <motion.div {...fadeIn(0.2)} className="mb-12">
        <h3 className="text-xl font-semibold mb-1">Web Developer</h3>
        <p className="italic text-gray-600 mb-3">
          Nerd Auto — Montréal, QC | 2020 – Present
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Developed scalable full-stack applications using React, Django, and Laravel</li>
          <li>Designed RESTful APIs and integrated back-end services using Node.js and Express</li>
          <li>Managed cloud infrastructure on GCP and Azure for AI-powered solutions</li>
          <li>Created and maintained browser extensions for Chrome and Firefox</li>
          <li>Deployed applications with Docker and automated CI/CD pipelines</li>
          <li>Led integration of AI tools (Langchain, LlamaIndex) for smart automation</li>
          <li>Collaborated with cross-functional teams to ensure feature delivery on Agile sprints</li>
        </ul>
      </motion.div>

      <motion.h2
        {...fadeIn(0.4)}
        className="text-3xl font-semibold mb-6 text-center"
      >
        Additional Contributions
      </motion.h2>

      <motion.ul
        {...fadeIn(0.6)}
        className="list-disc list-inside text-gray-700 space-y-2 max-w-xl mx-auto"
      >
        <li>Web Scraping: Automated data extraction using Puppeteer and JavaScript for specialized sites</li>
        <li>System Support: Infrastructure maintenance and development of new features for various internal tools</li>
        <li>AI Consulting: Used LlamaIndex to verify the viability of AI in projects with user-collected data</li>
      </motion.ul>
    </section>
  );
}
