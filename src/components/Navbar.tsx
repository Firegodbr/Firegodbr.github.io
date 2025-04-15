import { useState, useEffect } from "react";
import MobileSidebar from "./MobileSidebar";
import ThemeToggle from "./ThemeToggle"; // adjust path if needed

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          // ? "bg-transparent dark:bg-transparent backdrop-blur"
          ? "bg-transparent dark:bg-transparent"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Left: Logo */}
        <div>
          <a href="https://github.com/Firegodbr" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="/avatar.jpeg"
              alt="Avatar"
            />
          </a>
        </div>

        {/* Center: Nav links */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12 text-center">
          {["Product", "Features", "Marketplace", "Company"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold text-gray-900 dark:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Hamburger menu */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsSidebarOpen(true)}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <MobileSidebar onClose={() => setIsSidebarOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;
