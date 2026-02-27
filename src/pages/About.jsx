import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Zap, Eye, Globe, 
  Target, ShieldCheck, Cpu, MessageSquare, Send 
} from 'lucide-react';

// --- Spatial Manifesto Card ---
const ManifestoCard = ({ title, desc, icon: Icon, theme }) => {
  const isDark = theme === 'dark';
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }} 
      className={`p-8 rounded-[2.5rem] border transition-all duration-500 group relative overflow-hidden
        ${isDark 
          ? 'bg-[#0a0a0f]/80 border-white/5 hover:border-blue-500/30' 
          : 'bg-white border-black/5 shadow-xl shadow-blue-500/5 hover:border-blue-600/20'}`}
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors
        ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
        <Icon size={24} />
      </div>
      <h3 className={`text-xl font-black mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {desc}
      </p>
    </motion.div>
  );
};

export default function About({ theme }) {
  const isDark = theme === 'dark';

  const manifesto = [
    { 
      title: 'Taste is a Moat', 
      desc: 'In a world of templated design, aesthetic excellence and distinct "flavor" are your greatest competitive advantages.', 
      icon: Eye 
    },
    { 
      title: 'Speed is a Feature', 
      desc: 'We operate in high-velocity sprints. Moving fast allows us to test, learn, and dominate market share before others wake up.', 
      icon: Zap 
    },
    { 
      title: 'Clarity over Complexity', 
      desc: 'If you can’t explain the system, you don’t own it. We build transparent architectures that empower your team.', 
      icon: Target 
    },
    { 
      title: 'Systems you Own', 
      desc: 'No vendor lock-in. We hand over world-class systems with full documentation and native scalability.', 
      icon: ShieldCheck 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      
      {/* --- Hero Header --- */}
      <section className="max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-[10px] font-black tracking-widest uppercase mb-6 
            ${isDark ? 'bg-blue-500/5 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}
        >
          <Users size={12} />
          <span>The Engineering Collective</span>
        </motion.div>
        
        <h1 className={`text-6xl md:text-8xl font-black tracking-tighter mb-8 transition-colors
          ${isDark ? 'text-white' : 'text-slate-900'}`}>
          ABOUT CYLRA<span className="text-blue-600">.</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <p className={`text-xl font-medium leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We’re a small, high-density team of designers, engineers, and growth strategists. 
            Remote-first with roots in <strong>Kolkata</strong>, collaborating across time zones 
            with tight async habits and crisp demos.
          </p>
          <div className={`p-8 rounded-[2rem] border ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-black/5'}`}>
             <div className="flex items-center space-x-4 mb-4">
                <Globe className="text-blue-500" size={20} />
                <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Global Operations</span>
             </div>
             <p className={`text-xs leading-loose font-bold ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                ASIA/KOLKATA CORE <br/>
                REMOTE-FIRST DISTRIBUTION <br/>
                ZERO OVERHEAD. 100% OUTPUT.
             </p>
          </div>
        </div>
      </section>

      {/* --- Manifesto Grid --- */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4">
            <h2 className={`text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>The Manifesto.</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {manifesto.map((item, i) => (
            <ManifestoCard key={i} {...item} theme={theme} />
          ))}
        </div>
      </section>

      {/* --- Cultural Tech Stack --- */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h2 className={`text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>How We Operate.</h2>
            <p className={`text-lg font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                We don't do "meetings" for the sake of meetings. We prefer tight async loops, 
                Loom demos, and Slack-first transparency.
            </p>
            <div className="space-y-4">
                {[
                    { icon: MessageSquare, text: 'Open & Transparent Communication' },
                    { icon: Cpu, text: 'Technical-First Decision Making' },
                    { icon: Zap, text: 'Weekly Deployment Cycles' }
                ].map((op, i) => (
                    <div key={i} className="flex items-center space-x-3">
                        <div className="text-blue-500"><op.icon size={18} /></div>
                        <span className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{op.text}</span>
                    </div>
                ))}
            </div>
        </div>
        
        <div className={`aspect-square rounded-[3rem] border relative overflow-hidden flex items-center justify-center
            ${isDark ? 'bg-[#0a0a0f] border-white/5 shadow-2xl' : 'bg-white border-black/5 shadow-2xl shadow-blue-500/10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 border-2 border-dashed border-blue-500/20 rounded-full flex items-center justify-center"
            >
                <div className="w-32 h-32 border-2 border-blue-500/40 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full shadow-2xl shadow-blue-500/5 flex items-center justify-center">
                        <Users className="text-white" />
                    </div>
                </div>
            </motion.div>
            <div className="absolute bottom-10 text-center">
                <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Established 2024</span>
            </div>
        </div>
      </section>

      {/* --- Footer CTA --- */}
      <div className={`rounded-[3rem] p-12 text-center border relative overflow-hidden
        ${isDark ? 'bg-blue-600/5 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
        <h3 className={`text-3xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Work with Cylra.
        </h3>
        <p className={`text-sm mb-8 max-w-lg mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          We only take on 3 projects at a time to maintain our standard of quality. 
          Check our current availability.
        </p>
        
        <motion.a 
          href="/contact"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/25 cursor-pointer"
        >
          <span className="relative flex items-center gap-2">
            Inquire Availability
            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </span>
        </motion.a>
      </div>
      
    </div>
  );
}