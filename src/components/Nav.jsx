import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load theme on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored || (prefersDark ? "dark" : "light"));
  }, []);

  // Apply theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-950/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="h-9 w-9 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 grid place-content-center text-white font-black"
          >
            C
          </motion.div>
          <span className="text-xl font-extrabold tracking-tight">Cylra</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="hover:opacity-80" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 btn btn-ghost"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
          <li>
            <a className="btn btn-primary" href="/contact">
              Start a Project
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden rounded-xl border px-3 py-2"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden flex flex-col gap-4 px-4 pb-4"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="block py-2 hover:opacity-80"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="btn btn-ghost w-full"
              >
                {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </li>
            <li>
              <a className="btn btn-primary w-full" href="/contact" onClick={() => setOpen(false)}>
                Start a Project
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
