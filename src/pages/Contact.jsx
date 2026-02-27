import React from 'react';
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle2, Loader2, Sparkles, ChevronDown, Phone } from 'lucide-react';

export default function Contact({ theme }) {
  const [state, handleSubmit] = useForm("xqedjekr");
  const isDark = theme === 'dark';

  const inputStyles = `
    w-full px-5 py-4 rounded-2xl border outline-none transition-all duration-300 font-medium text-sm appearance-none
    ${isDark 
      ? 'bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10' 
      : 'bg-black/5 border-black/10 text-slate-900 focus:border-blue-600 focus:bg-white'}
  `;

  const labelStyles = `text-[10px] font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-2
    ${isDark ? 'text-slate-300' : 'text-slate-600'}`;

  const optionStyles = isDark 
    ? { backgroundColor: '#1a1a1a', color: '#ffffff' } 
    : { backgroundColor: '#ffffff', color: '#000000' };

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-12 rounded-[2.5rem] text-center border transition-all w-full
            ${isDark ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-200'}`}
        >
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/40">
            <CheckCircle2 size={40} className="text-white" />
          </div>
          <h2 className={`text-3xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Transmission Received.
          </h2>
          <p className={`text-sm leading-relaxed max-w-xs mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Cylraweb engineers have been notified. Expect a technical brief shortly.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-10">
        <div className="flex items-center space-x-2 mb-4 text-blue-500">
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
            <Sparkles size={18} />
          </motion.div>
          <span className="text-[10px] font-black uppercase tracking-widest">Project Inquiry</span>
        </div>
        <h1 className={`text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Let’s talk<span className="text-blue-600">.</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className={labelStyles}>Operator Name</label>
            <input id="name" type="text" name="name" className={inputStyles} placeholder="Full Name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className={labelStyles}>Email Address</label>
            <input id="email" type="email" name="email" className={inputStyles} placeholder="email@provider.com" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="whatsapp" className={labelStyles}>WhatsApp Contact</label>
            <input id="whatsapp" type="tel" name="whatsapp" className={inputStyles} placeholder="+91 00000-00000" required />
          </div>
          <div className="space-y-2 relative">
            <label htmlFor="plan" className={labelStyles}>Selected Architecture</label>
            <select id="plan" name="plan" className={inputStyles} defaultValue="" required>
              <option value="" disabled style={optionStyles}>Choose a Plan</option>
              <option value="Basic Plan" style={optionStyles}>Basic Plan (₹7,800)</option>
              <option value="Classic Plan" style={optionStyles}>Classic Plan (₹8,800)</option>
              <option value="Premium Plan" style={optionStyles}>Premium Plan (₹14,300)</option>
              <option value="Shopify Edge" style={optionStyles}>Shopify E-commerce (₹9,999)</option>
              <option value="Real Estate Pro" style={optionStyles}>Real Estate Pro (₹5,999)</option>
              <option value="Custom Enterprise" style={optionStyles}>Custom/Enterprise</option>
            </select>
            <div className="absolute right-5 bottom-4 pointer-events-none opacity-50">
              <ChevronDown size={16} className={isDark ? 'text-white' : 'text-black'} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className={labelStyles}>Mission Brief</label>
          <textarea id="message" name="message" rows="4" className={`${inputStyles} resize-none`} placeholder="Tell us about your requirements..." required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <motion.button
          type="submit"
          disabled={state.submitting}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center space-x-3 transition-all
            ${state.submitting ? 'bg-slate-800 text-slate-500' : 'bg-blue-600 text-white shadow-xl shadow-blue-500/25'}`}
        >
          {state.submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          <span>{state.submitting ? 'Transmitting...' : 'Launch Inquiry'}</span>
        </motion.button>
      </form>
    </div>
  );
}