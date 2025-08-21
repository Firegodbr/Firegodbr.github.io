import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Professional";
import Footer from "./components/Footer";

// Smooth scroll polyfill for older browsers
function smoothScroll() {
  const links = document.querySelectorAll('a.smooth-scroll');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

export default function Portfolio() {
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
