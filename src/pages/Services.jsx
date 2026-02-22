import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, Code2, Rocket, BrainCircuit, 
  Layers, ChevronRight, Activity, Gauge 
} from 'lucide-react';
import ResponsiveTable from '../components/ResponsiveTable.jsx';

// --- Spatial Service Card ---
const ServiceCard = ({ title, items, icon: Icon, theme }) => {
  const isDark = theme === 'dark';
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.01 }} 
      className={`p-8 rounded-[2.5rem] border transition-all duration-500 group
        ${isDark 
          ? 'bg-[#0a0a0f]/80 border-white/5 hover:border-blue-500/30' 
          : 'bg-white border-black/5 shadow-xl shadow-blue-500/5 hover:border-blue-600/20'}`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors
        ${isDark ? 'bg-white/5 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
        <Icon size={28} />
      </div>
      <h3 className={`text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className={`flex items-center text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <ChevronRight size={14} className="mr-2 text-blue-500 opacity-50" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function Services({ theme }) {
  const isDark = theme === 'dark';

  const columns = ['Engagement Plan', 'Deliverables', 'Timeline', 'Target Objective'];
  const rows = [
    ['Product Sprint', 'Landing page, copy, high-fidelity brand kit', '2–3 weeks', 'Rapid market entry & MVPs'],
    ['Full Architecture', 'Multi-page ecosystem, Headless CMS, SEO Ops', '4–6 weeks', 'B2B, SaaS, & Complex DTC'],
    ['Scale Protocol', 'Global Infrastructure + CRO + Performance Marketing', '3 months+', 'Aggressive revenue scaling'],
  ];

  const serviceData = [
    { title: 'Brand Identity', icon: Compass, items: ['Market Research', 'Visual Identity', 'Design Systems', 'Brand Guidelines'] },
    { title: 'Web Engineering', icon: Code2, items: ['Spatial UX/UI', 'Next.js Frontend', 'Headless CMS', 'API Orchestration'] },
    { title: 'Growth Ops', icon: Rocket, items: ['Technical SEO', 'Paid Acquisition', 'Data Analytics', 'CRM Automation'] },
    { title: 'AI Integration', icon: BrainCircuit, items: ['Workflow Automation', 'Content LLM Ops', 'Agentic Assistants', 'Business Intelligence'] },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      
      {/* --- Header Section --- */}
      <section className="max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-[10px] font-black tracking-widest uppercase mb-6 
            ${isDark ? 'bg-blue-500/5 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}
        >
          <Layers size={12} />
          <span>Full-Stack Capabilities</span>
        </motion.div>
        
        <h1 className={`text-6xl md:text-8xl font-black tracking-tighter mb-8 transition-colors
          ${isDark ? 'text-white' : 'text-slate-900'}`}>
          OUR SERVICES<span className="text-blue-600">.</span>
        </h1>
        
        <p className={`text-xl font-medium leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          End-to-end brand, web, and growth engineering. **Cylraweb** engagements operate on 
          real-time dashboards and weekly sprint cycles—ensuring absolute transparency 
          on what’s shipped and what’s scaling next.
        </p>
      </section>

      {/* --- Service Capabilities Grid --- */}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((service, i) => (
          <ServiceCard key={i} {...service} theme={theme} />
        ))}
      </div>

      {/* --- Plans & Pricing Matrix --- */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className={`text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Engagement Models.
            </h2>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              Select the speed and depth that aligns with your current growth phase.
            </p>
          </div>
          <div className="flex gap-4">
            <div className={`flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <Activity size={14} className="text-emerald-500" />
              <span>Real-time Tracking</span>
            </div>
            <div className={`flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <Gauge size={14} className="text-blue-500" />
              <span>Weekly Demos</span>
            </div>
          </div>
        </div>

        <div className={`p-1 rounded-[2.5rem] border overflow-hidden
          ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-black/5 shadow-2xl shadow-blue-500/5'}`}>
          <ResponsiveTable 
            columns={columns} 
            rows={rows} 
            theme={theme} // Passing theme to handle internal table styling
          />
        </div>
      </section>

      {/* --- Footer CTA Integration --- */}
      <div className={`rounded-[3rem] p-12 text-center border relative overflow-hidden
        ${isDark ? 'bg-blue-600/5 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
        <h3 className={`text-3xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Need a Custom Architecture?
        </h3>
        <p className={`text-sm mb-8 max-w-lg mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          We build bespoke solutions for enterprise-level requirements. Let's draft a 
          technical brief tailored specifically to your infrastructure.
        </p>
        <button className="px-10 py-4 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
          Book Technical Discovery
        </button>
      </div>
      
    </div>
  );
}