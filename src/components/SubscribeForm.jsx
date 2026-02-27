import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function SubscribeForm({ theme, idPrefix }) {
  const [state, handleSubmit] = useForm("xqedjeer");
  const isDark = theme === 'dark';
  const inputId = `${idPrefix}-email-input`;

  if (state.succeeded) {
    return (
      <div className={`flex items-center space-x-3 p-4 rounded-2xl border ${isDark ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-50 border-blue-200'}`}>
        <CheckCircle2 size={18} className="text-blue-500" />
        <span className="text-[10px] font-black uppercase tracking-widest">Node Active</span>
      </div>
    );
  }

  return (
    <div className="relative group max-w-sm">
      <form onSubmit={handleSubmit} className={`relative flex items-center p-2 rounded-2xl border transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 focus-within:bg-white/10' : 'bg-white border-slate-200 focus-within:shadow-xl'}`}>
        <input id={inputId} type="email" name="email" placeholder="Enter your email" required className={`bg-transparent pl-4 pr-14 py-3 w-full focus:outline-none text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`} />
        <motion.button type="submit" disabled={state.submitting} className="absolute right-2 p-3 bg-blue-600 text-white rounded-xl shadow-lg">
          {state.submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        </motion.button>
      </form>
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[10px] text-red-500 mt-2 block" />
    </div>
  );
}