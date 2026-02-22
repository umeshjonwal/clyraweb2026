import React from "react";
import SubscribeForm from "./SubscribeForm";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  // Lighthouse Fix: "text-slate-500" or "400" is often flagged for low contrast.
  // Updated to slate-600 (Light Mode) and slate-200 (Dark Mode) for 100% Accessibility score.
  const labelStyle = `text-[11px] font-black uppercase tracking-[0.4em] mb-10 ${
    isDark ? 'text-slate-200' : 'text-slate-600'
  }`;

  return (
    <footer className={`relative pt-40 pb-12 transition-colors duration-1000 ${isDark ? 'bg-[#020205]' : 'bg-slate-50'}`}>
      {/* Visual top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-20 mb-32">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl">C</div>
              <span className={`text-3xl font-black uppercase tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>Cylraweb</span>
            </div>
            <p className={`text-5xl md:text-7xl font-black mb-10 tracking-tight leading-[0.85] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Impact through <br /> <span className="text-blue-600">Experience.</span>
            </p>
            
            {/* Social Links with proper accessibility labels */}
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "Github" }
              ].map(({ Icon, label }, i) => (
                <motion.a 
                  key={i} 
                  href="#"
                  aria-label={`Follow Clyraweb on ${label}`}
                  whileHover={{ y: -5, color: '#2563eb' }} 
                  className={`p-4 rounded-2xl border transition-colors cursor-pointer ${
                    isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-black/5 text-slate-500'
                  }`}
                >
                  <Icon size={20} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <p className={labelStyle}>Company</p>
            <nav aria-label="Footer Navigation">
              <ul className={`space-y-4 text-sm font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <li><a href="/work" className="hover:text-blue-600 transition-colors">Our Portfolio</a></li>
                <li><a href="/services" className="hover:text-blue-600 transition-colors">Core Services</a></li>
                <li><a href="/blog" className="hover:text-blue-600 transition-colors">Thinking</a></li>
                <li><a href="/contact" className="hover:text-blue-600 transition-colors">Join Us</a></li>
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <p className={labelStyle}>Keep Pace</p>
            {/* IMPORTANT: In SubscribeForm.jsx, make sure the input ID is 
                NOT "email". Use id="newsletter-email-input" to fix your 
                Lighthouse "Duplicate ARIA ID" error.
            */}
            <SubscribeForm theme={theme} idPrefix="footer-nav" />
            <p className={`mt-6 text-[10px] font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Subscribe for high-fidelity updates only. No spam, just engineering.
            </p>
          </div>
        </div>

        {/* Legal Section */}
        <div className={`pt-12 border-t flex flex-col md:flex-row justify-between text-[10px] font-black uppercase tracking-widest ${
          isDark ? 'border-white/5 text-slate-400' : 'border-black/5 text-slate-500'
        }`}>
          <div className="flex flex-col gap-1">
             <p>© {new Date().getFullYear()} CYLRA CONSULTANCY SERVICES.</p>
             <p className="opacity-70">EST. 2024 — NEW DELHI, IN</p>
          </div>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="/privacy" className="hover:text-blue-600 transition-colors underline-offset-4 hover:underline">Privacy</a>
            <a href="/terms" className="hover:text-blue-600 transition-colors underline-offset-4 hover:underline">Terms</a>
            <a href="/cookies" className="hover:text-blue-600 transition-colors underline-offset-4 hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}