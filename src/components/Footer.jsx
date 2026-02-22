import React from "react";
import SubscribeForm from "./SubscribeForm";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  return (
    <footer className={`relative pt-40 pb-12 transition-colors duration-1000 ${isDark ? 'bg-[#020205]' : 'bg-slate-50'}`}>
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
            <div className="flex gap-4">
              {[Linkedin, Instagram, Twitter, Github].map((Icon, i) => (
                <motion.a key={i} whileHover={{ y: -5, color: '#2563eb' }} className={`p-4 rounded-2xl border transition-colors cursor-pointer ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-black/5 text-slate-500'}`}>
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em] mb-10">Company</p>
            <ul className={`space-y-4 text-sm font-bold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><a href="/work" className="hover:text-blue-600 transition-colors">Our Portfolio</a></li>
              <li><a href="/services" className="hover:text-blue-600 transition-colors">Core Services</a></li>
              <li><a href="/blog" className="hover:text-blue-600 transition-colors">Thinking</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition-colors">Join Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em] mb-10">Keep Pace</p>
            <SubscribeForm theme={theme} />
            <p className="mt-6 text-[10px] text-slate-500 font-medium">Subscribe for high-fidelity updates only.</p>
          </div>
        </div>

        {/* Legal */}
        <div className={`pt-12 border-t flex flex-col md:flex-row justify-between text-[10px] font-black uppercase tracking-widest ${isDark ? 'border-white/5 text-slate-600' : 'border-black/5 text-slate-400'}`}>
          <div className="flex flex-col gap-1">
             <p>© {new Date().getFullYear()} CYLRA CONSULTANCY SERVICES.</p>
             <p className="opacity-50">EST. 2024 — NEW DELHI, IN</p>
          </div>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="/privacy" className="hover:text-blue-600">Privacy</a>
            <a href="/terms" className="hover:text-blue-600">Terms</a>
            <a href="/cookies" className="hover:text-blue-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}