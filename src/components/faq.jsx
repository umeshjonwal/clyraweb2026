import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqData = [
  { q: "How long does it take to design and launch a website?", a: "Standard projects typically take 2 to 4 weeks depending on complexity." },
  { q: "How much does a website cost?", a: "Our packages start at ₹4,999 for basic sites and scale based on features." },
  { q: "Will my website work on mobile devices?", a: "Yes, every design is fully responsive and optimized for all screen sizes." },
  { q: "What if I need updates after completion?", a: "We offer post-launch support and maintenance plans for any future changes." },
  { q: "Will my website appear on Google?", a: "Yes, we include essential SEO setup to help your site rank in search results." },
  { q: "What if I already have a website and want a redesign?", a: "We specialize in modernizing existing sites while keeping your content safe." },
  { q: "What if I face any issue after the website is live?", a: "We provide 24/7 technical support to fix any bugs or hosting issues immediately." },
  { q: "What if I’m not satisfied with my website design?", a: "We offer multiple revision rounds to ensure the final result matches your vision." },
  { q: "Do you offer refunds or project cancellations?", a: "Yes, we offer partial refunds based on the current stage of project completion." },
  { q: "Do you help promote websites after launch?", a: "Yes, we offer additional digital marketing and advanced SEO services." },
  { q: "What payment methods do you accept?", a: "We accept UPI, Net Banking, and all major Credit/Debit cards." },
  { q: "Is there any advance payment required?", a: "Yes, a 50% advance is required to initiate the design and development sprint." },
  { q: "Are there any hidden costs?", a: "No. All costs are disclosed upfront in your quote before we start." }
];

const FAQItem = ({ item, isDark, isOpen, onToggle }) => {
  return (
    <div className={`border rounded-2xl overflow-hidden mb-4 transition-all duration-300 ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-sm'}`}>
      <button 
        onClick={onToggle} 
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
      >
        <span className={`font-bold pr-4 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item.q}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }} 
          className="text-blue-500 flex-shrink-0"
        >
          <Plus size={20} />
        </motion.span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className={`px-6 pb-6 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <div className={`h-[1px] w-full mb-4 ${isDark ? 'bg-white/5' : 'bg-slate-100'}`} />
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = ({ theme }) => {
  const isDark = theme === 'dark';
  // activeIndex tracks which FAQ index is currently open
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 pt-0 pb-0 relative z-10">
      <div className="text-center mb-16">
        <h2 className={`text-5xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>FAQs.</h2>
      </div>
      <div className="flex flex-col">
        {faqData.map((item, i) => (
          <FAQItem 
            key={i} 
            item={item} 
            isDark={isDark} 
            isOpen={activeIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;