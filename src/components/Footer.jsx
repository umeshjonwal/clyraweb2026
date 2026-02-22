import React from "react";
import SubscribeForm from "./SubscribeForm";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Github, Code2 } from "lucide-react";

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  // Performance Fix: Using more standard slate colors for WCAG AA contrast
  const labelStyle = `text-[11px] font-black uppercase tracking-[0.4em] mb-10 ${
    isDark ? 'text-slate-200' : 'text-slate-700'
  }`;

  return (
    <footer className={`relative pt-40 pb-12 transition-colors duration-1000 ${isDark ? 'bg-[#020205]' : 'bg-slate-50'}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-20 mb-32">
          
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-10">
              <a href="https://cylraweb.com" className="flex items-center space-x-3 group" aria-label="Cylraweb Home">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shadow-blue-500/20">C</div>
                <span className={`text-3xl font-black uppercase tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>Cylraweb</span>
              </a>
            </div>
            <p className={`text-5xl md:text-7xl font-black mb-10 tracking-tight leading-[0.85] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Impact through <br /> <span className="text-blue-600">Experience.</span>
            </p>
            
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/company/cylraweb" },
                { Icon: Instagram, label: "Instagram", url: "https://instagram.com/cylraweb" },
                { Icon: Twitter, label: "Twitter", url: "https://twitter.com/cylraweb" },
                { Icon: Github, label: "Github", url: "https://github.com/cylraweb" }
              ].map(({ Icon, label, url }) => (
                <motion.a 
                  key={label} 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`} // Accessibility Fix
                  whileHover={{ y: -5 }} 
                  className={`p-4 rounded-2xl border transition-all ${
                    isDark ? 'bg-white/5 border-white/20 text-white hover:border-blue-500' : 'bg-white border-black/10 text-slate-600 hover:text-blue-600'
                  }`}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p className={labelStyle}>Company</p>
            <nav aria-label="Footer Sitemap">
              <ul className={`space-y-4 text-sm font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <li><a href="https://cylraweb.com/work" className="hover:text-blue-600 transition-colors">Our Portfolio</a></li>
                <li><a href="https://cylraweb.com/services" className="hover:text-blue-600 transition-colors">Core Services</a></li>
                <li><a href="https://cylraweb.com/contact" className="hover:text-blue-600 transition-colors">Join Us</a></li>
              </ul>
            </nav>
          </div>

          <div>
            <p className={labelStyle}>Keep Pace</p>
            <SubscribeForm theme={theme} idPrefix="footer" />
          </div>
        </div>

        <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-start md:items-end text-[10px] font-black uppercase tracking-widest ${
          isDark ? 'border-white/10 text-slate-300' : 'border-black/10 text-slate-600'
        }`}>
          <div className="space-y-4">
             <div className="flex flex-col gap-1">
                <p>© {new Date().getFullYear()} CYLRA CONSULTANCY SERVICES.</p>
                <p className="opacity-100">EST. 2024 — NEW DELHI, IN</p> {/* Accessibility Fix: Removed low opacity */}
             </div>
             
             <div className={`flex items-center space-x-2 py-2 px-4 rounded-full border w-fit ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'}`}>
                <Code2 size={12} className="text-blue-600" />
                <span>Engineered by <a href="https://www.linkedin.com/in/javawithumesh" target="_blank" rel="noreferrer" className={`hover:text-blue-600 transition-colors ${isDark ? 'text-white' : 'text-black'}`}>Umesh Jonwal</a></span>
             </div>
          </div>

          <div className="flex gap-10 mt-8 md:mt-0">
            <a href="https://cylraweb.com/privacy" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="https://cylraweb.com/terms" className="hover:text-blue-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}