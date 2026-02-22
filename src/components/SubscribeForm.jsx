import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function SubscribeForm({ theme, idPrefix }) {
  const isDark = theme === 'dark';
  const inputId = `${idPrefix}-email-input`;

  return (
    <div className="relative group max-w-sm">
      {/* Accessibility: Enhanced sr-only label */}
      <label htmlFor={inputId} className="sr-only">
        Email address for newsletter
      </label>
      
      <form 
        onSubmit={(e) => e.preventDefault()}
        className={`relative flex items-center p-2 rounded-2xl border transition-all duration-300 ${
          isDark 
            ? 'bg-white/5 border-white/10 focus-within:border-blue-500/50 focus-within:bg-white/10' 
            : 'bg-white border-slate-200 focus-within:border-blue-600 focus-within:shadow-xl focus-within:shadow-blue-500/10'
        }`}
      >
        <input
          id={inputId}
          type="email"
          placeholder="Enter your email"
          required
          autoComplete="email"
          className={`bg-transparent pl-4 pr-14 py-3 w-full focus:outline-none text-sm font-medium transition-colors ${
            isDark 
              ? 'text-white placeholder:text-slate-300' // Improved contrast (was slate-400)
              : 'text-slate-900 placeholder:text-slate-600' // Improved contrast (was slate-500)
          }`}
        />
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Subscribe"
          className="absolute right-2 p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
        >
          <Send size={16} aria-hidden="true" />
        </motion.button>
      </form>

      {/* Performance & CLS: Reserved space with better contrast */}
      <div className="h-4 mt-2 overflow-hidden">
        <p className={`text-[10px] font-black uppercase tracking-[0.15em] opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 ${
          isDark ? 'text-blue-400' : 'text-blue-700'
        }`}>
          Encrypted Transmission.
        </p>
      </div>
    </div>
  );
}