import React from 'react';
import { motion } from "framer-motion";
import { 
  FileText, ShieldCheck, BarChart3, Database, 
  ArrowRight, Calculator, CheckCircle2, Receipt,
  CloudZap, PieChart
} from 'lucide-react';

const FeatureCard = ({ title, desc, icon: Icon, theme }) => {
  const isDark = theme === 'dark';
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative p-8 rounded-[2rem] border transition-all duration-500
        ${isDark 
          ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/30' 
          : 'bg-white border-black/5 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 hover:border-blue-600/20'}`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 
        ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
        <Icon size={24} />
      </div>
      <h3 className={`text-xl font-black mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
    </motion.div>
  );
};

export default function GstBilling({ theme }) {
  const isDark = theme === 'dark';

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      
      {/* --- Section 1: Hero & Strategic Overview --- */}
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
        >
          <div className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-[10px] font-black tracking-widest uppercase mb-8 
            ${isDark ? 'bg-blue-500/5 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}>
            <Calculator size={12} />
            <span>Fintech Engine v2.0</span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]
            ${isDark ? 'text-white' : 'text-slate-900'}`}>
            GST BILLING <br />
            <span className="text-blue-600 italic">& INVOICING.</span>
          </h1>
          
          <p className={`text-xl font-medium max-w-xl mb-10 leading-relaxed
            ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Engineered for compliance, designed for speed. **Cylraweb** automates the 
            complexity of Indian tax laws with real-time HSN/SAC validation and 
            automated GSTR reporting.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
              Launch Billing App
            </button>
            <button className={`px-10 py-5 border text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all
              ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-black/10 text-black hover:bg-black/5'}`}>
              Download Specs
            </button>
          </div>
        </motion.div>

        {/* --- Abstract Visual Feature: The Invoice Flow --- */}
        
        <div className={`relative p-10 rounded-[3rem] border transition-colors
          ${isDark ? 'bg-[#0a0a0f] border-white/5' : 'bg-slate-50 border-black/5'}`}>
          <div className="space-y-6">
            <div className={`h-4 w-1/3 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
            <div className="grid grid-cols-2 gap-4">
              <div className={`h-24 rounded-2xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-black/5'}`} />
              <div className={`h-24 rounded-2xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-black/5'}`} />
            </div>
            <div className={`h-32 w-full rounded-2xl border flex flex-col justify-end p-6 ${isDark ? 'bg-blue-600/10 border-blue-500/20' : 'bg-blue-600 text-white'}`}>
               <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest">Total GST Payable</span>
                  <span className="text-2xl font-black">₹ 14,250.00</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 2: Core Capabilities --- */}
      <div className="grid md:grid-cols-3 gap-8 mb-32">
        <FeatureCard 
          theme={theme}
          icon={ShieldCheck}
          title="Auto GST & HSN"
          desc="Place-of-supply logic identifies IGST vs. CGST/SGST automatically. Verified HSN database lookups for every line item."
        />
        <FeatureCard 
          theme={theme}
          icon={Database}
          title="Inventory Ledger"
          desc="Unified SKU management. Updates stock levels the moment an invoice is generated or a credit note is issued."
        />
        <FeatureCard 
          theme={theme}
          icon={BarChart3}
          title="Audit Ready"
          desc="Instant GSTR-1 and GSTR-3B data exports. Maintain a perfect digital paper trail for tax season without the stress."
        />
      </div>

      {/* --- Section 3: Technical Deep-Dive --- */}
      <div className={`rounded-[3rem] p-12 md:p-20 border overflow-hidden relative
        ${isDark ? 'bg-[#0a0a0f] border-white/5' : 'bg-white border-black/5 shadow-2xl shadow-blue-500/5'}`}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className={`text-4xl font-black mb-8 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Cloud-Native <br />Accounting Architecture.
            </h2>
            <div className="grid gap-8">
              {[
                { 
                  t: "Digital Signatures", 
                  d: "Automated e-signing for PDF invoices ensuring legal non-repudiation.",
                  icon: CloudZap 
                },
                { 
                  t: "Multi-Currency Sync", 
                  d: "Handle international exports with real-time exchange rate conversion and LUT tracking.",
                  icon: Receipt 
                },
                { 
                  t: "Automated Reconciliation", 
                  d: "Smart matching of bank statements with issued invoices to close your books faster.",
                  icon: PieChart 
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-5">
                  <div className={`mt-1 p-2.5 rounded-xl ${isDark ? 'bg-white/5 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className={`font-black text-sm mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.t}</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Badge/Summary */}
          <div className={`p-10 rounded-[2.5rem] border flex flex-col items-center text-center
            ${isDark ? 'bg-blue-600/5 border-blue-500/20' : 'bg-slate-50 border-blue-100'}`}>
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h3 className={`text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>GSTR-Ready.</h3>
            <p className={`text-sm mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Our system architecture follows the latest GSTN guidelines for 2026, 
              ensuring your JSON exports are never rejected.
            </p>
            <div className={`h-[1px] w-full mb-8 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Verified by Cylraweb Systems</span>
          </div>
        </div>
      </div>

    </main>
  );
}