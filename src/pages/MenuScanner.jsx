import React from 'react';
import { motion } from "framer-motion";
import { 
  QrCode, ScanEye, Languages, ShieldAlert, 
  Smartphone, Zap, Camera, SearchCode 
} from 'lucide-react';

// Reusable Spatial Feature Card
const FeatureCard = ({ title, desc, icon: Icon, theme }) => {
  const isDark = theme === 'dark';
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 group
        ${isDark 
          ? 'bg-[#0a0a0f]/80 border-white/5 hover:border-blue-500/30 hover:bg-white/10' 
          : 'bg-white border-black/5 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/10'}`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12
        ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
        <Icon size={28} />
      </div>
      <h3 className={`text-xl font-black mb-3 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
    </motion.div>
  );
};

export default function MenuScanner({ theme }) {
  const isDark = theme === 'dark';

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      
      {/* --- Hero: Interaction Visualization --- */}
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-[10px] font-black tracking-widest uppercase mb-8 
            ${isDark ? 'bg-blue-500/5 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}>
            <ScanEye size={12} />
            <span>AI Vision Module v4.1</span>
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85]
            ${isDark ? 'text-white' : 'text-slate-900'}`}>
            QR MENU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500 italic">SCANNER.</span>
          </h1>
          
          <p className={`text-xl font-medium max-w-xl mb-10 leading-relaxed transition-colors
            ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Transform static cards into dynamic experiences. **Cylraweb's** Vision AI converts 
            cluttered physical menus into interactive, searchable, and translatable digital 
            interfaces in real-time.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="px-10 py-5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/20">
              Launch Scanner
            </button>
            <button className={`px-10 py-5 border text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all
              ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-black/10 text-black hover:bg-black/5'}`}>
              Developer API
            </button>
          </div>
        </motion.div>

        {/* --- Spatial Preview Mockup --- */}
        <div className="relative group">
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className={`relative z-10 aspect-[9/16] w-full max-w-[320px] mx-auto rounded-[3rem] border-8 p-4 overflow-hidden shadow-2xl
              ${isDark ? 'bg-black border-slate-800' : 'bg-white border-slate-200'}`}
          >
            {/* Camera View UI */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent flex flex-col justify-between p-6">
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Camera size={16} className="text-white" />
                </div>
                <div className="px-3 py-1 bg-blue-600 rounded-full text-[8px] font-black text-white uppercase tracking-tighter">
                  Processing AI...
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-3/4 bg-white/40 rounded-full animate-pulse" />
                <div className="h-2 w-1/2 bg-white/20 rounded-full animate-pulse" />
              </div>
            </div>
            {/* The "Scanner Line" */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-blue-400 shadow-[0_0_15px_#60a5fa] z-20 opacity-50"
            />
          </motion.div>
          {/* Decorative Back Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 blur-[120px] -z-10 rounded-full" />
        </div>
      </div>

      {/* --- Feature Ecosystem --- */}
      
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          theme={theme}
          icon={SearchCode}
          title="Smart OCR Engine"
          desc="Proprietary neural networks extract text from images with 99.8% accuracy, even in low-light restaurant environments."
        />
        <FeatureCard 
          theme={theme}
          icon={Languages}
          title="Instant Translation"
          desc="Context-aware translation in 40+ languages. No more lost-in-translation moments for international foodies."
        />
        <FeatureCard 
          theme={theme}
          icon={ShieldAlert}
          title="Safety Profiling"
          desc="Automatically flags allergens and dietary tags (Veg/Non-Veg, Keto, Halal) to ensure a safe dining experience."
        />
      </div>

      {/* --- Technical Section --- */}
      <div className={`mt-32 rounded-[3rem] p-12 md:p-20 border overflow-hidden relative
        ${isDark ? 'bg-[#0a0a0f] border-white/5' : 'bg-white border-black/5 shadow-2xl'}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`text-4xl font-black mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Beyond the Pixel.
            </h2>
            <div className="space-y-8">
              {[
                { 
                  t: "Zero Latency Processing", 
                  d: "Edge-computed Vision AI ensures your menu loads faster than the page turns.",
                  icon: Zap
                },
                { 
                  t: "PWA Integrated", 
                  d: "No app install required. Works directly through any browser with camera permissions.",
                  icon: Smartphone
                },
                { 
                  t: "QR Generation Suite", 
                  d: "Create custom branded QR codes with embedded analytics for every table.",
                  icon: QrCode
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className={`mt-1 p-2 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                    <item.icon size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.t}</h4>
                    <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`p-10 rounded-[2rem] border transition-colors
            ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-black/5'}`}>
            <h4 className={`text-[10px] font-black uppercase tracking-widest mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>System Output</h4>
            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between opacity-50"><span>INIT VISION_AI...</span><span className="text-emerald-500">OK</span></div>
              <div className="flex justify-between"><span>EXTRACT_COORDS</span><span>[42.0, 118.5]</span></div>
              <div className="flex justify-between"><span>OCR_DATA</span><span className="text-blue-500">"Wagyu Burger"</span></div>
              <div className="flex justify-between"><span>DETECT_ALLERGEN</span><span className="text-red-500">GLUTEN_DETECTED</span></div>
              <div className="w-full h-1 bg-blue-600/30 rounded-full mt-8 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "100%" }} 
                  transition={{ duration: 2 }} 
                  className="h-full bg-blue-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}