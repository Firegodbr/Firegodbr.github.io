'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sats4AI',
    description: 'AI service platform with Lightning/Bitcoin payments',
    techStack: 'ReactJS, Next.js, Prisma, Jest, MySQL, AWS',
    imageUrl: '/companies/sats4ai-logo.png',
    link: 'https://sats4ai.com/',
  },
  {
    title: 'IAgreeAI',
    description: 'AI-powered browser extension to analyze website T&Cs',
    techStack: 'Django, PostgreSQL, Chrome Extension, GCP, Langchain',
    imageUrl: '/companies/iagree_ai_logo.jpg',
    link: null,
  },
  {
    title: 'Honeybadger Dashboard',
    description: 'Enhanced UI/UX and developed new dashboard modules',
    techStack: 'React, Laravel, MySQL, AWS',
    imageUrl: '/companies/honeybadger-logo.png',
    link: 'https://etransfer.badgercoin.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map(({ title, description, techStack, imageUrl, link }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden border"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
              <img
                src={imageUrl}
                alt={`${title} logo`}
                className="object-contain w-full h-full p-4"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-gray-600 text-sm italic mb-2">{description}</p>
              <p className="text-gray-700 text-sm mb-4">
                <span className="font-medium">Tech Stack:</span> {techStack}
              </p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Visit Project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
