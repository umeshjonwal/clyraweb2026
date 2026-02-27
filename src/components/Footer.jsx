import React from "react";
import SubscribeForm from "./SubscribeForm";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Github, Code2, Mail, MessageSquare, MapPin } from "lucide-react";

export default function Footer({ theme }) {
  const isDark = theme === 'dark';
  const labelStyle = `text-[11px] font-black uppercase tracking-[0.4em] mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`;

  return (
    <footer className={`relative pt-40 pb-12 transition-colors duration-1000 ${isDark ? 'bg-[#020205]' : 'bg-slate-50'}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-20 mb-32">
          
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
                <motion.a key={i} href="#" whileHover={{ y: -5 }} className={`p-4 rounded-2xl border ${isDark ? 'bg-white/5 border-white/20 text-white' : 'bg-white border-black/10 text-slate-600'}`}>
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p className={labelStyle}>Company</p>
            <ul className={`space-y-4 text-sm font-bold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Core Services</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Join Us</a></li>
            </ul>
          </div>

          <div>
            <p className={labelStyle}>Keep Pace</p>
            <div className="space-y-8">
              <SubscribeForm theme={theme} idPrefix="footer" />
              <div className={`space-y-4 text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className="flex items-center gap-3"><MapPin size={14} className="text-blue-600" /><span>New Delhi, India</span></div>
                <a href="mailto:hello@cylraweb.com" className="flex items-center gap-3 hover:text-blue-500"><Mail size={14} className="text-blue-600" /><span>hello@cylraweb.com</span></a>
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" className="flex items-center gap-3 hover:text-green-500"><MessageSquare size={14} className="text-blue-600" /><span>WhatsApp Support</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-start md:items-end text-[10px] font-black uppercase tracking-widest ${isDark ? 'border-white/10 text-slate-300' : 'border-black/10 text-slate-600'}`}>
          <div className="space-y-4">
            <p>© {new Date().getFullYear()} CYLRA CONSULTANCY SERVICES.</p>
            <div className={`flex items-center space-x-2 py-2 px-4 rounded-full border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'}`}>
              <Code2 size={12} className="text-blue-600" />
              <span>Engineered by <a href="#" className="underline decoration-blue-600/40">UMESH JONWAL</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}