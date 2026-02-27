import React from 'react';
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle2, Loader2, Sparkles, ChevronDown, ShieldCheck, Zap } from 'lucide-react';

export default function Contact({ theme }) {
  const [state, handleSubmit] = useForm("xqedjekr");
  const isDark = theme === 'dark';

  // Enhanced UI styles with better contrast and glassmorphism
  const inputStyles = `
    w-full px-6 py-4 rounded-2xl border outline-none transition-all duration-300 font-medium text-sm appearance-none backdrop-blur-sm
    ${isDark 
      ? 'bg-white/[0.03] border-white/10 text-white focus:border-blue-500 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/10' 
      : 'bg-black/[0.02] border-black/10 text-slate-900 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5'}
  `;

  const labelStyles = `text-[10px] font-black uppercase tracking-[0.25em] mb-2 flex items-center gap-2
    ${isDark ? 'text-slate-400' : 'text-slate-500'}`;

  const optionStyles = isDark 
    ? { backgroundColor: '#0a0a0f', color: '#ffffff' } 
    : { backgroundColor: '#ffffff', color: '#0f172a' };

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-16 rounded-[3rem] text-center border shadow-2xl transition-all max-w-lg w-full
            ${isDark ? 'bg-blue-600/5 border-blue-500/20 shadow-blue-500/5' : 'bg-blue-50 border-blue-200 shadow-blue-500/10'}`}
        >
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/40 rotate-6">
            <CheckCircle2 size={40} className="text-white -rotate-6" />
          </div>
          <h2 className={`text-4xl font-black mb-4 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
            LINK ESTABLISHED<span className="text-blue-500">.</span>
          </h2>
          <p className={`text-base leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Cylraweb engineers have received your transmission. Expect a technical brief at your terminal shortly.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors"
          >
            New Inquiry →
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header UI */}
      <div className="mb-12">
        <div className="flex items-center space-x-2 mb-4 text-blue-500">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-blue-500/10 p-2 rounded-lg"
          >
            <Sparkles size={18} />
          </motion.div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Direct Terminal Access</span>
        </div>
        <h1 className={`text-6xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Secure Briefing<span className="text-blue-600">.</span>
        </h1>
        <p className={`text-lg font-medium max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Initialize your project by providing the technical parameters below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name & Email Row */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="name" className={labelStyles}>Operator Name</label>
            <input id="name" type="text" name="name" className={inputStyles} placeholder="First & Last Name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className={labelStyles}>Email Address</label>
            <input id="email" type="email" name="email" className={inputStyles} placeholder="name@domain.com" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        {/* WhatsApp & Plan Row */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="whatsapp" className={labelStyles}>WhatsApp Contact</label>
            <input id="whatsapp" type="tel" name="whatsapp" className={inputStyles} placeholder="+91 00000-00000" required />
          </div>
          <div className="space-y-2 relative">
            <label htmlFor="plan" className={labelStyles}>Project Architecture</label>
            <div className="relative">
              <select id="plan" name="plan" className={`${inputStyles} cursor-pointer`} defaultValue="" required>
                <option value="" disabled style={optionStyles}>Deploy Configuration...</option>
                <option value="Basic Plan" style={optionStyles}>Basic Plan (₹7,800)</option>
                <option value="Classic Plan" style={optionStyles}>Classic Plan (₹8,800)</option>
                <option value="Premium Plan" style={optionStyles}>Premium Plan (₹14,300)</option>
                <option value="Shopify Edge" style={optionStyles}>Shopify E-commerce (₹9,999)</option>
                <option value="Real Estate Pro" style={optionStyles}>Real Estate Pro (₹5,999)</option>
                <option value="Custom Enterprise" style={optionStyles}>Custom/Enterprise</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                <ChevronDown size={18} className={isDark ? 'text-white' : 'text-black'} />
              </div>
            </div>
          </div>
        </div>

        {/* Message Area */}
        <div className="space-y-2">
          <label htmlFor="message" className={labelStyles}>Mission Brief</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            className={`${inputStyles} resize-none py-5`} 
            placeholder="Tell us about your requirements, goals, and timeline..." 
            required 
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Action Section */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 opacity-40">
            <ShieldCheck size={18} className="text-blue-500" />
            <span className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>
              End-to-End Encrypted Transmission
            </span>
          </div>

          <motion.button
            type="submit"
            disabled={state.submitting}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full sm:w-auto px-12 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] flex items-center justify-center space-x-3 transition-all
              ${state.submitting 
                ? 'bg-slate-800 text-slate-500' 
                : 'bg-blue-600 text-white shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] hover:bg-blue-500'}`}
          >
            {state.submitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Zap size={16} className="fill-current" />
            )}
            <span>{state.submitting ? 'Transmitting...' : 'Launch Inquiry'}</span>
          </motion.button>
        </div>
      </form>
    </div>
  );
}