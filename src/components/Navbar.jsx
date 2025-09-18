import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    // Load saved theme from localStorage or fallback to light
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
    // return localStorage.getItem("theme") !== "dark";
  });

  // Sync with <html> and save to localStorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo-white.svg" // 👈 file is in /public/logo.svg
              alt="Logo"
              className="w-14 h-14 hidden dark:block mb-4"
            />
            <img
              src="/logo-dark.svg" // 👈 file is in /public/logo.svg
              alt="Logo"
              className="w-14 h-14 block dark:hidden mb-4"
            />

            <div className="hidden sm:block">
              <div className="text-xs text-gray-500 dark:text-gray-400 -mt-0.5">
                Graphic Designer
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700 transition"
            >
              Resume
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="ml-4 px-3 py-1.5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95">
          <div className="px-4 py-4 flex flex-col gap-2">
            <a
              href="#about"
              className="py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#gallery"
              className="py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
            <a
              href="/LmJames-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block px-4 py-2 rounded-md bg-blue-600 text-white font-medium text-center hover:bg-blue-700"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>

            {/* Mobile dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="mt-3 px-3 py-1.5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
