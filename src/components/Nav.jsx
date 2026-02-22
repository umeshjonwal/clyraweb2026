import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Nav({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-[100] transition-all duration-500 px-6 ${scrolled ? 'top-4' : 'top-8'}`}
    >
      <div className={`max-w-6xl mx-auto flex items-center justify-between p-2 rounded-full border transition-all duration-500 ${
        scrolled 
        ? (theme === 'dark' ? 'bg-[#020205]/80 backdrop-blur-2xl border-white/10 shadow-2xl' : 'bg-white/80 backdrop-blur-2xl border-black/10 shadow-xl')
        : (theme === 'dark' ? 'bg-white/5 backdrop-blur-md border-white/5' : 'bg-black/5 backdrop-blur-md border-black/5')
      }`}>
        
        {/* Modern Logo */}
        <div className="flex items-center px-4">
          <a href="/" className="flex items-center gap-3 group" aria-label="Cylraweb Home">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
              C
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className={`text-xl font-black uppercase tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Cylraweb<span className="text-blue-600">.</span>
            </span>
          </a>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-blue-500 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Tray */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleTheme} 
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`p-3 rounded-full transition-all border ${
              theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-black/5 border-black/10 text-slate-900 hover:bg-black/10'
            }`}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a href="/contact" className={`hidden sm:block px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 ${
            theme === 'dark' ? 'bg-white text-black' : 'bg-white text-black hover:bg-slate-100' // Improved contrast for light
          }`}>
            Start Project
          </a>

          <button 
            className="md:hidden p-3" 
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} className={theme === 'dark' ? 'text-white' : 'text-black'} /> : <Menu size={20} className={theme === 'dark' ? 'text-white' : 'text-black'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-24 left-6 right-6 p-8 border rounded-[2.5rem] md:hidden backdrop-blur-3xl shadow-3xl ${
              theme === 'dark' ? 'bg-[#0a0a0c]/95 border-white/10' : 'bg-white/95 border-black/10'
            }`}
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-black uppercase tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                >
                  {link.label}
                </a>
              ))}
              <a href="/contact" onClick={() => setOpen(false)} className="bg-blue-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest">Let's Talk</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}