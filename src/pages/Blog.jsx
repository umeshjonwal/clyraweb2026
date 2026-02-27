import React from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock, Terminal, Mail, Send } from 'lucide-react';

// --- Reusable Spatial Logic ---
const SpatialCard = ({ children, className = "", theme }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - (rect.left + rect.width / 2));
    y.set(event.clientY - (rect.top + rect.height / 2));
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={`relative group h-full ${className}`}
    >
      <div className={`absolute -inset-0.5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 
        ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-600/10'}`} />
      <div className={`relative h-full border rounded-[2.5rem] p-10 overflow-hidden backdrop-blur-xl transition-all duration-500
        ${theme === 'dark' 
          ? 'bg-[#0a0a0f]/80 border-white/5 group-hover:border-blue-500/30' 
          : 'bg-white/90 border-black/5 shadow-xl shadow-blue-500/5 group-hover:border-blue-600/20'}`}>
        
        {/* Background Decorative Icon */}
        <div className={`absolute -top-10 -right-10 transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110
          ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>
          <Terminal size={200} />
        </div>
        
        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default function Blog({ theme }) {
  const isDark = theme === 'dark';
  
  const posts = [
    {
      href: '/blog/conversion-first-design',
      title: 'Why Agencies Need Conversion‑First Design',
      desc: 'Go beyond pretty. Design for outcomes that move the needle and turn visitors into long-term partners.',
      readTime: '5 min read',
      tag: 'Strategy'
    },
    {
      href: '/blog/digital-menus',
      title: 'How Digital Menus Are Reshaping Restaurants',
      desc: 'QR menus are just the start. Experience data-driven dining that optimizes for kitchen efficiency.',
      readTime: '4 min read',
      tag: 'E-commerce'
    },
    {
      href: '/blog/smart-billing',
      title: 'Boosting Retail Revenue with Smart Billing',
      desc: 'Automation turns a simple checkout into a growth engine. Seamless payments for the modern age.',
      readTime: '6 min read',
      tag: 'Fintech'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
      {/* Header Section */}
      <section className="max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-[10px] font-black tracking-widest uppercase mb-6 
            ${isDark ? 'bg-blue-500/5 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}
        >
          <BookOpen size={12} />
          <span>Knowledge Base</span>
        </motion.div>
        
        <h1 className={`text-6xl md:text-8xl font-black tracking-tighter mb-8 transition-colors
          ${isDark ? 'text-white' : 'text-slate-900'}`}>
          INSIGHTS<span className="text-blue-600">.</span>
        </h1>
        <p className={`text-xl font-medium leading-relaxed max-w-2xl transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Exploring the intersection of high-performance code, spatial design, and business scalability. 
          The technical ledger of **Cylraweb**.
        </p>
      </section>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <a key={i} href={post.href} className="block group h-full">
            <SpatialCard theme={theme}>
              <div className="flex justify-between items-start mb-10">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg
                  ${isDark ? 'bg-white/5 text-slate-400' : 'bg-black/5 text-slate-500'}`}>
                  {post.tag}
                </span>
                <div className={`transition-all duration-500 group-hover:rotate-45 group-hover:text-blue-500
                  ${isDark ? 'text-slate-700' : 'text-slate-300'}`}>
                  <ArrowUpRight size={24} />
                </div>
              </div>

              <h2 className={`text-2xl font-black mb-4 leading-tight transition-colors
                ${isDark ? 'text-white' : 'text-slate-900 group-hover:text-blue-600'}`}>
                {post.title}
              </h2>
              
              <p className={`text-sm leading-relaxed mb-12 transition-colors
                ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {post.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-blue-500/10 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-500">
                  <Clock size={14} className="text-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{post.readTime}</span>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest text-blue-600 transition-all duration-300 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100`}>
                  Decrypt →
                </span>
              </div>
            </SpatialCard>
          </a>
        ))}
      </div>

      {/* Newsletter / Footer CTA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`p-12 md:p-20 rounded-[3rem] border transition-all relative overflow-hidden
          ${isDark ? 'bg-blue-600/5 border-blue-500/10' : 'bg-blue-50 border-blue-100 shadow-2xl shadow-blue-500/5'}`}
      >
        {/* Decorator */}
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Mail size={120} className="text-blue-500" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <h3 className={`text-4xl font-black mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Stay Synced.</h3>
          <p className={`text-lg font-medium mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Join the technical brief. No spam, just high-fidelity audits and design engineering trends delivered to your terminal.
          </p>
          
          {/* Updated Button referring to contact.jsx */}
          <motion.a 
            href="/contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/30 whitespace-nowrap cursor-pointer"
          >
            <span className="relative flex items-center gap-2">
              Initialize Subscription
              <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </motion.a>
          
          <p className={`mt-6 text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            SECURE TRANSMISSION • NO VENDOR LOCK-IN • ASYNC UPDATES
          </p>
        </div>
      </motion.div>
    </div>
  );
}