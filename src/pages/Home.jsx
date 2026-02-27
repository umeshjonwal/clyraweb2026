  // import React from 'react';
  // import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
  // import {
  //   Check, Globe, Layout, Zap, Boxes, Star, Sparkles, ShoppingCart, Building2
  // } from 'lucide-react';
  // import Contact from "./Contact";

  // // --- Sub-Component: Spatial Tilt Card ---
  // const SpatialCard = ({ children, className = "", theme }) => {
  //   const x = useMotionValue(0);
  //   const y = useMotionValue(0);
  //   const springConfig = { damping: 25, stiffness: 150 };
  //   const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), springConfig);
  //   const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);

  //   function handleMouse(event) {
  //     const rect = event.currentTarget.getBoundingClientRect();
  //     const centerX = rect.left + rect.width / 2;
  //     const centerY = rect.top + rect.height / 2;
  //     x.set(event.clientX - centerX);
  //     y.set(event.clientY - centerY);
  //   }

  //   return (
  //     <motion.div
  //       style={{ rotateX, rotateY, perspective: 1000 }}
  //       onMouseMove={handleMouse}
  //       onMouseLeave={() => { x.set(0); y.set(0); }}
  //       className={`relative group transition-all duration-500 ease-out ${className}`}
  //     >
  //       <div className={`absolute -inset-0.5 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700 
  //         ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-600/10'}`} />
  //       <div className={`relative h-full border rounded-[2.5rem] overflow-hidden backdrop-blur-2xl transition-colors duration-500
  //         ${theme === 'dark' ? 'bg-[#0a0a0f]/80 border-white/5' : 'bg-white/80 border-black/5 shadow-xl shadow-blue-500/5'}`}>
  //         {children}
  //       </div>
  //     </motion.div>
  //   );
  // };

  // // --- Sub-Component: Section Badge ---
  // const SectionBadge = ({ children, theme }) => (
  //   <div
  //     className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase mb-8 transition-colors
  //       ${theme === 'dark' ? 'bg-blue-500/5 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}
  //   >
  //     <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`} />
  //     <span>{children}</span>
  //   </div>
  // );

  // export default function Home({ theme }) {
  //   const isDark = theme === 'dark';

  //   // --- Optimization: Dynamic Cloudinary URL Generator & Error Handling ---
  //   const optimizeCloudinary = (url, width = 800) => {
  //     if (!url || !url.includes('cloudinary.com')) return url;
  //     return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
  //   };

  //   // Fix: Pravatar often fails with CORS. Switched to UI-Avatars or placehold.it fallbacks
  //   const reviews = [
  //     { name: "Alex Rivet", role: "CTO, Nexus", text: "The Spring Boot integration is flawless. Speed is unmatched across our entire stack.", img: "https://ui-avatars.com/api/?name=Alex+Rivet&background=0D8ABC&color=fff" },
  //     { name: "Sarah Chen", role: "Founder, Bloom", text: "Cylraweb transformed our Shopify store into a high-tech ecosystem. Conversion is up 30%.", img: "https://ui-avatars.com/api/?name=Sarah+Chen&background=0D8ABC&color=fff" },
  //     { name: "Marcus Thorne", role: "Lead Dev, Arca", text: "The AI implementation using Gemini is actually intelligent, not just a script.", img: "https://ui-avatars.com/api/?name=Marcus+Thorne&background=0D8ABC&color=fff" },
  //     { name: "Elena Rossi", role: "Product Manager", text: "Beautifully designed UI with a backend that handles everything we throw at it.", img: "https://ui-avatars.com/api/?name=Elena+Rossi&background=0D8ABC&color=fff" },
  //     { name: "Julian Vane", role: "CEO, Vane Media", text: "Scalability was our priority, and they delivered a 99.9% architecture.", img: "https://ui-avatars.com/api/?name=Julian+Vane&background=0D8ABC&color=fff" },
  //     { name: "Sofia Gupta", role: "Tech Lead", text: "The cleanest React code I've seen in years. Truly professional engineering.", img: "https://ui-avatars.com/api/?name=Sofia+Gupta&background=0D8ABC&color=fff" },
  //   ];

  //   const techStack = [
  //     { n: 'Java', l: 'java', custom: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
  //     { n: 'Spring Boot', l: 'springboot' },
  //     { n: 'React 19', l: 'react' },
  //     { n: 'JavaScript', l: 'javascript' },
  //     { n: 'HTML5', l: 'html5' },
  //     { n: 'CSS3', l: 'css3', custom: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
  //     { n: 'MySQL', l: 'mysql' },
  //     { n: 'PostgreSQL', l: 'postgresql' },
  //     { n: 'Supabase', l: 'supabase' },
  //     { n: 'Gemini AI', l: 'googlegemini' },
  //     { n: 'Shopify', l: 'shopify' },
  //     { n: 'Cloudinary', l: 'cloudinary' },
  //     { n: 'Hostinger', l: 'hostinger' },
  //     { n: 'GitHub', l: 'github' },
  //     { n: 'Postman', l: 'postman' },
  //     { n: 'VS Code', l: 'visualstudiocode', custom: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
  //   ];

  //   const workHighlights = [
  //     { name: 'Doppelganger Finder', tag: 'Supabase • Cloud API', link: 'https://doppelganger.world/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256800/Untitled1_egi96v.jpg' },
  //     { name: 'AI Email Gen', tag: 'Spring Boot • Gemini', link: 'https://coruscating-beijinho-edb225.netlify.app/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256800/Untitled2_malquj.jpg' },
  //     { name: 'Spotify UI', tag: 'CSS Grid • Logic', link: 'https://umeshjonwal.github.io/spotify-clone/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256802/Untitled3_bhqxx8.jpg' },
  //     { name: 'Miranda Clone', tag: 'Motion Design', link: 'https://umeshjonwal.github.io/mirandaclone/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256802/Untitled4_f7khzo.jpg' },
  //     { name: 'Narmata Project', tag: 'Semantic UI', link: 'https://umeshjonwal.github.io/narmataproject/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256804/Untitled5_kycoja.jpg' },
  //     { name: 'Clyra World', tag: 'React • Netlify', link: 'https://clyraworld.netlify.app/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256802/Untitled6_hj7ico.jpg' }
  //   ];

  //   const pricingPlans = [
  //     { title: "Basic Node", price: "4,999", feat: ["1-8 Pages", "SEO + Analytics", "Free Domain"], icon: <Layout /> },
  //     { title: "Premium Suite", price: "7,999", feat: ["Backend Logic", "Supabase Auth", "Custom Domain"], icon: <Zap />, highlight: true },
  //     { title: "AI Evolution", price: "9,999", feat: ["Gemini AI Integrations", "Chatbot Core", "Automated Flows"], icon: <Sparkles /> },
  //     { title: "Shopify Edge", price: "14,999", feat: ["Full Store Setup", "Inventory Logic", "Payment Gateways"], icon: <ShoppingCart /> },
  //     { title: "Custom Enterprise", price: "15,999", feat: ["Full App Engine", "Scalable Cloud", "Priority Support"], icon: <Boxes /> },
  //     { title: "Real Estate Pro", price: "25,999", feat: ["Listing Manager", "Lead Gen Tools", "Interactive Maps"], icon: <Building2 /> },
  //   ];

  //   const scrollToContact = () => {
  //     document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  //   };

  //   return (
  //     <div className="space-y-40 pb-32 overflow-hidden">

  //       {/* 1. HERO SECTION */}
  //       <section className="max-w-7xl mx-auto px-6 pt-16">
  //         <div className="grid lg:grid-cols-12 gap-16 items-start">
  //           <div className="lg:col-span-7 lg:sticky lg:top-32">
  //             <SectionBadge theme={theme}>Full-Stack AI Engineering</SectionBadge>

  //             <h1 className={`text-7xl md:text-[8.5rem] font-black leading-[0.8] tracking-tighter mb-10 
  //                 ${isDark ? 'text-white' : 'text-slate-900'}`}>
  //               WEAVE<br />
  //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500 italic">
  //                 THE FUTURE.
  //               </span>
  //             </h1>

  //             <p className={`text-xl max-w-xl mb-12 leading-relaxed font-medium 
  //               ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
  //               Cylraweb integrates <strong>Spring Boot</strong> backends with <strong>React</strong> frontends.
  //               We deploy AI-powered ecosystems using Gemini, Supabase, and Shopify.
  //             </p>
  //             <button
  //               onClick={scrollToContact}
  //               className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-xl hover:bg-blue-500 hover:-translate-y-1 active:translate-y-0 transition-all focus:ring-2 focus:ring-blue-400 focus:outline-none"
  //             >
  //               Initialize Project
  //             </button>
  //           </div>

  //           <div className="lg:col-span-5 flex flex-col gap-8">
  //             <SpatialCard theme={theme} className="aspect-[16/10] w-full">
  //               <div className="absolute inset-0 z-0 bg-slate-900">
  //                 {/* Fixed Video Source & Error Prevention */}
  //                 <video
  //                   autoPlay
  //                   muted
  //                   loop
  //                   playsInline
  //                   preload="auto"
  //                   className="w-full h-full object-cover opacity-60"
  //                 >
  //                   {/* f_auto: Cloudinary will pick the best format (WebM/AV1/MP4) for the browser */}
  //                   {/* q_auto: Cloudinary will compress the video to the lowest size without losing quality */}
  //                   <source
  //                     src="https://res.cloudinary.com/douc8uat5/video/upload/f_auto,q_auto/v1740256770/abrhr9zpfjt1ymmnfcf9_iqrtgi"
  //                     type="video/webm"
  //                   />

  //                   {/* Fallback for older browsers */}
  //                   <source
  //                     src="https://res.cloudinary.com/douc8uat5/video/upload/f_auto,q_auto/v1740256770/abrhr9zpfjt1ymmnfcf9_iqrtgi.mp4"
  //                     type="video/mp4"
  //                   />
  //                 </video>
  //               </div>
  //               <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
  //               <div className="relative z-20 h-full flex flex-col justify-end p-10">
  //                 <h2 className="text-4xl font-black text-white mb-2">Primary Core</h2>
  //                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Neural Architecture</p>
  //               </div>
  //             </SpatialCard>

  //             <SpatialCard theme={theme} className="aspect-[16/10] w-full">
  //               <div className="absolute inset-0 z-0 bg-slate-900">
  //                 <video
  //                   autoPlay
  //                   muted
  //                   loop
  //                   playsInline
  //                   preload="auto"
  //                   className="w-full h-full object-cover opacity-60"
  //                 >
  //                   {/* The 'f_auto' parameter is the secret to speed—it serves the smallest file type possible */}
  //                   <source
  //                     src="https://res.cloudinary.com/douc8uat5/video/upload/f_auto,q_auto/v1740256764/Untitled_video_-_Made_with_Clipchamp_11_r5x4jj"
  //                     type="video/webm"
  //                   />

  //                   {/* Standard fallback for maximum compatibility */}
  //                   <source
  //                     src="https://res.cloudinary.com/douc8uat5/video/upload/f_auto,q_auto/v1740256764/Untitled_video_-_Made_with_Clipchamp_11_r5x4jj.mp4"
  //                     type="video/mp4"
  //                   />
  //                 </video>
  //               </div>
  //               <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
  //               <div className="relative z-20 h-full flex flex-col justify-end p-10">
  //                 <h2 className="text-4xl font-black text-white mb-2">99.9%</h2>
  //                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Uptime Intelligence</p>
  //               </div>
  //             </SpatialCard>
  //           </div>
  //         </div>
  //       </section>

  //       {/* 2. THE WORK REGISTRY */}
  //       <section className="max-w-7xl mx-auto px-6">
  //         <SectionBadge theme={theme}>Live Registry</SectionBadge>
  //         <h2 className={`text-6xl font-black tracking-tighter mb-20 ${isDark ? 'text-white' : 'text-slate-900'}`}>The Archives.</h2>
  //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  //           {workHighlights.map((project, i) => (
  //             <a href={project.link} key={i} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`View ${project.name} project live`}>
  //               <div className={`rounded-[2.5rem] border overflow-hidden transition-all duration-500
  //                 ${isDark ? 'bg-white/5 border-white/5 hover:border-blue-500/40' : 'bg-slate-50 border-black/5 hover:border-blue-600/20'}`}>
  //                 <div className="h-48 overflow-hidden bg-slate-800">
  //                   <img
  //                     src={optimizeCloudinary(project.img, 600)}
  //                     alt={project.name}
  //                     loading="lazy"
  //                     width="600"
  //                     height="318"
  //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  //                     onError={(e) => { e.target.src = "https://placehold.co/600x400?text=Project+Coming+Soon"; }}
  //                   />
  //                 </div>
  //                 <div className="p-8">
  //                   <Globe size={20} className="mb-4 text-blue-500" aria-hidden="true" />
  //                   <h3 className={`text-xl font-black mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.name}</h3>
  //                   <p className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{project.tag}</p>
  //                 </div>
  //               </div>
  //             </a>
  //           ))}
  //         </div>
  //       </section>

  //       {/* REVIEWS SECTION */}
  //       <section className="py-20 bg-transparent">
  //         <div className="max-w-7xl mx-auto px-6 mb-12">
  //           <SectionBadge theme={theme}>Transmission Feedback</SectionBadge>
  //           <h2 className={`text-5xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>Operator Intel.</h2>
  //         </div>

  //         <div className="relative flex overflow-x-hidden group">
  //           <motion.div
  //             className="flex whitespace-nowrap"
  //             animate={{ x: ["0%", "-50%"] }}
  //             transition={{ ease: "linear", duration: 40, repeat: Infinity }}
  //           >
  //             {[...reviews, ...reviews].map((rev, i) => (
  //               <div
  //                 key={i}
  //                 className={`flex-shrink-0 w-[450px] mx-4 p-10 rounded-[2.5rem] border backdrop-blur-sm transition-all duration-500
  //                 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-black/5 shadow-xl text-slate-900'}`}
  //               >
  //                 <div className="flex items-center justify-between mb-8">
  //                   <div className="flex items-center space-x-4">
  //                     <img src={rev.img} alt="" loading="lazy" width="56" height="56" className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/30" />
  //                     <div>
  //                       <h3 className="font-black text-base tracking-tight">{rev.name}</h3>
  //                       <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest">{rev.role}</p>
  //                     </div>
  //                   </div>
  //                   <div className="flex space-x-0.5">
  //                     {[...Array(5)].map((_, idx) => (
  //                       <Star key={idx} size={14} fill="#3b82f6" className="text-blue-500" aria-hidden="true" />
  //                     ))}
  //                   </div>
  //                 </div>
  //                 <p className={`text-[15px] leading-relaxed font-medium italic mb-2 whitespace-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
  //                   "{rev.text}"
  //                 </p>
  //               </div>
  //             ))}
  //           </motion.div>
  //         </div>
  //       </section>

  //       {/* 3. TECHNOLOGY STACK VISUALIZER */}
  //       <section className="relative py-32 overflow-hidden">
  //         <div className={`absolute inset-0 skew-y-3 ${isDark ? 'bg-blue-600/5' : 'bg-blue-50'}`} />
  //         <div className="max-w-7xl mx-auto px-6 relative z-10">
  //           <div className="text-center mb-20">
  //             <SectionBadge theme={theme}>The Engine</SectionBadge>
  //             <h2 className={`text-5xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>Integrated Ecosystem.</h2>
  //           </div>
  //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10">
  //             {techStack.map((tech, i) => (
  //               <div key={i} className="flex flex-col items-center text-center group cursor-default">
  //                 <div className={`relative w-24 h-24 rounded-[2rem] flex items-center justify-center mb-4 transition-all duration-500
  //                   ${isDark ? 'bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:scale-110' : 'bg-white border border-black/5 shadow-lg group-hover:bg-blue-50 group-hover:scale-110'}`}>
  //                   <img
  //                     src={tech.custom || `https://cdn.simpleicons.org/${tech.l}`}
  //                     alt={`${tech.n} logo`}
  //                     loading="lazy"
  //                     width="48"
  //                     height="48"
  //                     className="w-12 h-12 object-contain relative z-10"
  //                   />
  //                 </div>
  //                 <h3 className={`font-black text-[12px] mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{tech.n}</h3>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* 4. PRICING & PLAN MATRIX */}
  //       <section className="max-w-7xl mx-auto px-6">
  //         <div className="text-center mb-20">
  //           <SectionBadge theme={theme}>Investment Architecture</SectionBadge>
  //           <h2 className={`text-5xl md:text-8xl font-black tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Pricing.</h2>
  //         </div>
  //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  //           {pricingPlans.map((plan, i) => (
  //             <SpatialCard key={i} theme={theme} className={plan.highlight ? 'ring-2 ring-blue-500' : ''}>
  //               <div className="p-8">
  //                 <div className="flex justify-between items-start mb-10">
  //                   <div className={`p-4 rounded-2xl ${isDark ? 'bg-white/5 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
  //                     {React.cloneElement(plan.icon, { size: 24, "aria-hidden": "true" })}
  //                   </div>
  //                   <div className="text-right">
  //                     <div className={`text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>₹{plan.price}</div>
  //                     <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Project</p>
  //                   </div>
  //                 </div>
  //                 <h3 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.title}</h3>
  //                 <ul className="space-y-4 mb-10">
  //                   {plan.feat.map((f, idx) => (
  //                     <li key={idx} className={`flex items-center text-[11px] font-bold uppercase tracking-tighter ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
  //                       <Check size={14} className="mr-3 text-blue-500" /> {f}
  //                     </li>
  //                   ))}
  //                 </ul>
  //                 <button
  //                   onClick={scrollToContact}
  //                   className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
  //                   ${plan.highlight ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-500' : 'bg-white/5 border border-white/10 text-blue-500 hover:bg-blue-500/10'}`}>
  //                   Select Architecture
  //                 </button>
  //               </div>
  //             </SpatialCard>
  //           ))}
  //         </div>
  //       </section>

  //       {/* 5. CONTACT INTERFACE */}
  //       <section id="contact-section" className="max-w-7xl mx-auto px-6">
  //         <div className={`rounded-[3.5rem] overflow-hidden border transition-all
  //           ${isDark ? 'bg-[#0a0a0f] border-white/5' : 'bg-white border-black/5 shadow-2xl shadow-blue-500/5'}`}>
  //           <div className="grid lg:grid-cols-2">
  //             <div className="p-16 relative overflow-hidden bg-gradient-to-br from-blue-600/10 to-transparent flex flex-col justify-center">
  //               <h2 className={`text-6xl font-black tracking-tighter mb-8 leading-[0.9] ${isDark ? 'text-white' : 'text-slate-900'}`}>
  //                 INITIATE<br />TAKEOVER.
  //               </h2>
  //               <p className={`text-lg mb-12 max-w-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
  //                 Engineering core available. Hostinger, Wix, and Shopify domains supported.
  //               </p>
  //             </div>
  //             <div className={`p-16 border-l transition-colors ${isDark ? 'bg-black/40 border-white/5' : 'bg-slate-50 border-black/5'}`}>
  //               <Contact theme={theme} />
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   );
  // }
  import React from 'react';
  import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
  import {
    Check, Globe, Layout, Zap, Boxes, Star, Sparkles, ShoppingCart, Building2
  } from 'lucide-react';
  import Contact from "./Contact";

  // --- Sub-Component: Spatial Tilt Card ---
  const SpatialCard = ({ children, className = "", theme }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);

    function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
    }

    return (
      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        onMouseMove={handleMouse}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        className={`relative group transition-all duration-500 ease-out ${className}`}
      >
        <div className={`absolute -inset-0.5 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700 
          ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-600/10'}`} />
        <div className={`relative h-full border rounded-[2.5rem] overflow-hidden backdrop-blur-2xl transition-colors duration-500
          ${theme === 'dark' ? 'bg-[#0a0a0f]/80 border-white/5' : 'bg-white/80 border-black/5 shadow-xl shadow-blue-500/5'}`}>
          {children}
        </div>
      </motion.div>
    );
  };

  // --- Sub-Component: Section Badge ---
  const SectionBadge = ({ children, theme }) => (
    <div
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase mb-8 transition-colors
        ${theme === 'dark' ? 'bg-blue-500/5 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}
    >
      <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`} />
      <span>{children}</span>
    </div>
  );

  export default function Home({ theme }) {
    const isDark = theme === 'dark';

    const optimizeCloudinary = (url, width = 800) => {
      if (!url || !url.includes('cloudinary.com')) return url;
      return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
    };

    const reviews = [
      { name: "Alex Rivet", role: "CTO, Nexus", text: "The Spring Boot integration is flawless. Speed is unmatched across our entire stack.", img: "https://ui-avatars.com/api/?name=Alex+Rivet&background=0D8ABC&color=fff" },
      { name: "Sarah Chen", role: "Founder, Bloom", text: "Cylraweb transformed our Shopify store into a high-tech ecosystem. Conversion is up 30%.", img: "https://ui-avatars.com/api/?name=Sarah+Chen&background=0D8ABC&color=fff" },
      { name: "Marcus Thorne", role: "Lead Dev, Arca", text: "The AI implementation using Gemini is actually intelligent.", img: "https://ui-avatars.com/api/?name=Marcus+Thorne&background=0D8ABC&color=fff" },
    ];

    const techStack = [
      { n: 'Java', l: 'java' },
      { n: 'Spring Boot', l: 'springboot' },
      { n: 'React 19', l: 'react' },
      { n: 'JavaScript', l: 'javascript' },
      { n: 'MySQL', l: 'mysql' },
      { n: 'Supabase', l: 'supabase' },
      { n: 'Gemini AI', l: 'googlegemini' },
      { n: 'Shopify', l: 'shopify' },
    ];

    // --- COMBINED WORK REGISTRY (ALL 12 PROJECTS) ---
    const allProjects = [
      // New Projects
      { name: 'A2Z Home Solutions', tag: 'React • Tailwind', link: 'https://a2zhome.netlify.app/', img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182884/Screenshot_2026-02-27_142804_j9036g.jpg' },
      { name: 'Onzy Portfolio', tag: 'Vite • Responsive', link: 'https://onzy.netlify.app/', img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182885/Screenshot_2026-02-27_142914_r53erk.jpg' },
      { name: 'Chroma Visuals', tag: 'GSAP • Animations', link: 'https://chroma-com.netlify.app/', img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182884/Screenshot_2026-02-27_142947_fe9rdf.jpg' },
      { name: 'Manly Grooming', tag: 'ReactJS • UI/UX', link: 'https://manly-com.netlify.app/', img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182884/Screenshot_2026-02-27_143002_jndg3u.jpg' },
      { name: 'US Education Portal', tag: 'Web Vitals • Tailwind', link: 'https://us-education-com.netlify.app/', img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182884/Screenshot_2026-02-27_143016_xawwln.jpg' },
      { name: 'Akash Health Tech', tag: 'React • Lucide Icons', link: 'https://akashhealth-com.netlify.app/', img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182885/Screenshot_2026-02-27_143057_i00vz2.jpg' },
      
      // Original Projects
      { name: 'Doppelganger Finder', tag: 'Supabase • Cloud API', link: 'https://doppelganger.world/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256800/Untitled1_egi96v.jpg' },
      { name: 'AI Email Gen', tag: 'Spring Boot • Gemini', link: 'https://coruscating-beijinho-edb225.netlify.app/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256800/Untitled2_malquj.jpg' },
      { name: 'Spotify UI', tag: 'CSS Grid • Logic', link: 'https://umeshjonwal.github.io/spotify-clone/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256802/Untitled3_bhqxx8.jpg' },
      { name: 'Miranda Clone', tag: 'Motion Design', link: 'https://umeshjonwal.github.io/mirandaclone/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256802/Untitled4_f7khzo.jpg' },
      { name: 'Narmata Project', tag: 'Semantic UI', link: 'https://umeshjonwal.github.io/narmataproject/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256804/Untitled5_kycoja.jpg' },
      { name: 'Clyra World', tag: 'React • Netlify', link: 'https://clyraworld.netlify.app/', img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1740256802/Untitled6_hj7ico.jpg' }
    ];

    const pricingPlans = [
      { title: "Basic Node", price: "4,999", feat: ["1-8 Pages", "SEO + Analytics", "Free Domain"], icon: <Layout /> },
      { title: "Premium Suite", price: "7,999", feat: ["Backend Logic", "Supabase Auth", "Custom Domain"], icon: <Zap />, highlight: true },
      { title: "AI Evolution", price: "9,999", feat: ["Gemini AI Integrations", "Chatbot Core", "Automated Flows"], icon: <Sparkles /> },
    ];

    const scrollToContact = () => {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div className="space-y-40 pb-32 overflow-hidden">
        
        {/* 1. HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 pt-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 lg:sticky lg:top-32">
              <SectionBadge theme={theme}>Full-Stack AI Engineering</SectionBadge>
              <h1 className={`text-7xl md:text-[8.5rem] font-black leading-[0.8] tracking-tighter mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                WEAVE<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500 italic">THE FUTURE.</span>
              </h1>
              <p className={`text-xl max-w-xl mb-12 font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Cylraweb integrates <strong>Spring Boot</strong> with <strong>React</strong> to build AI-powered ecosystems.
              </p>
              <button onClick={scrollToContact} className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-xl hover:bg-blue-500 transition-all">
                Initialize Project
              </button>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              <SpatialCard theme={theme} className="aspect-[16/10] w-full">
                <div className="absolute inset-0 z-0 bg-slate-900">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
                    <source src="https://res.cloudinary.com/douc8uat5/video/upload/f_auto,q_auto/v1740256770/abrhr9zpfjt1ymmnfcf9_iqrtgi" type="video/webm" />
                  </video>
                </div>
                <div className="relative z-20 h-full flex flex-col justify-end p-10">
                  <h2 className="text-4xl font-black text-white mb-2">Primary Core</h2>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Neural Architecture</p>
                </div>
              </SpatialCard>
            </div>
          </div>
        </section>

        {/* 2. THE WORK REGISTRY (ALL 12 PROJECTS) */}
        <section className="max-w-7xl mx-auto px-6">
          <SectionBadge theme={theme}>Live Registry</SectionBadge>
          <h2 className={`text-6xl font-black tracking-tighter mb-20 ${isDark ? 'text-white' : 'text-slate-900'}`}>The Archives.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, i) => (
              <a href={project.link} key={i} target="_blank" rel="noopener noreferrer" className="group block">
                <div className={`rounded-[2.5rem] border overflow-hidden transition-all duration-500
                  ${isDark ? 'bg-white/5 border-white/5 hover:border-blue-500/40 shadow-2xl' : 'bg-slate-50 border-black/5 hover:border-blue-600/20 shadow-lg'}`}>
                  <div className="h-56 overflow-hidden bg-slate-800">
                    <img
                      src={optimizeCloudinary(project.img, 600)}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <Globe size={20} className="mb-4 text-blue-500" />
                    <h3 className={`text-xl font-black mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.name}</h3>
                    <p className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{project.tag}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="relative py-32 overflow-hidden">
          <div className={`absolute inset-0 skew-y-3 ${isDark ? 'bg-blue-600/5' : 'bg-blue-50'}`} />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <SectionBadge theme={theme}>The Engine</SectionBadge>
              <h2 className={`text-5xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>Integrated Ecosystem.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10">
              {techStack.map((tech, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-4 transition-all duration-500
                    ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-black/5 shadow-lg'}`}>
                    <img src={`https://cdn.simpleicons.org/${tech.l}`} alt="" className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className={`font-black text-[12px] ${isDark ? 'text-white' : 'text-slate-900'}`}>{tech.n}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionBadge theme={theme}>Investment Architecture</SectionBadge>
            <h2 className={`text-5xl md:text-8xl font-black tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Pricing.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <SpatialCard key={i} theme={theme} className={plan.highlight ? 'ring-2 ring-blue-500' : ''}>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-10">
                    <div className={`p-4 rounded-2xl ${isDark ? 'bg-white/5 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                      {React.cloneElement(plan.icon, { size: 24 })}
                    </div>
                    <div className="text-right">
                      <div className={`text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>₹{plan.price}</div>
                    </div>
                  </div>
                  <h3 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.title}</h3>
                  <ul className="space-y-4 mb-10">
                    {plan.feat.map((f, idx) => (
                      <li key={idx} className={`flex items-center text-[11px] font-bold uppercase ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        <Check size={14} className="mr-3 text-blue-500" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={scrollToContact} className="w-full py-5 rounded-2xl font-black text-xs uppercase bg-blue-600 text-white hover:bg-blue-500 transition-all">
                    Select Architecture
                  </button>
                </div>
              </SpatialCard>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="max-w-7xl mx-auto px-6">
          <div className={`rounded-[3.5rem] overflow-hidden border ${isDark ? 'bg-[#0a0a0f] border-white/5' : 'bg-white border-black/5 shadow-2xl'}`}>
            <div className="grid lg:grid-cols-2">
              <div className="p-16 bg-gradient-to-br from-blue-600/10 to-transparent flex flex-col justify-center">
                <h2 className={`text-6xl font-black tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  INITIATE<br />TAKEOVER.
                </h2>
              </div>
              <div className={`p-16 border-l ${isDark ? 'bg-black/40 border-white/5' : 'bg-slate-50 border-black/5'}`}>
                <Contact theme={theme} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }