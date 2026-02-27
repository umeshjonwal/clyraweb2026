import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Database } from 'lucide-react';

// --- Spatial Project Card Component ---
const ProjectCard = ({ name, desc, tech, link, img, theme }) => {
  const isDark = theme === 'dark';
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  // Cloudinary Optimization: Auto-format, Auto-quality, and Resize to 800px width
  const optimizedImg = img.replace('/upload/', '/upload/f_auto,q_auto,w_800/');

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="h-full"
    >
      <div
        className={`relative h-full border rounded-[2.5rem] overflow-hidden transition-all duration-500 group
        ${
          isDark
            ? 'bg-[#0a0a0f]/80 border-white/5 hover:border-blue-500/30 shadow-2xl shadow-blue-500/5'
            : 'bg-white border-black/5 shadow-xl shadow-blue-500/5 hover:border-blue-600/20'
        }`}
      >
        {/* Project Image Header */}
        <div className="relative h-56 overflow-hidden bg-slate-900">
          <img
            src={optimizedImg}
            alt={`${name} preview`}
            loading="lazy"
            decoding="async"
            crossOrigin="anonymous"
            width="800"
            height="450"
            /* Grayscale removed here to keep images colorful */
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${name} live deployment`}
            className="absolute top-6 right-6 p-3 bg-blue-600 text-white rounded-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100 focus:translate-y-0"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.split('•').map((t, i) => (
              <span
                key={i}
                className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded
                ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}
              >
                {t.trim()}
              </span>
            ))}
          </div>

          <h2
            className={`text-2xl font-black mb-4 tracking-tighter ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {name}
          </h2>

          <div
            className={`text-sm leading-relaxed mb-8 space-y-4 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {typeof desc === 'string' ? <p>{desc}</p> : desc}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] group/link
              ${
                isDark
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
          >
            <span>Live Deployment</span>
            <ArrowUpRight
              size={14}
              className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Work({ theme }) {
  const isDark = theme === 'dark';

  const projects = [
    {
      name: 'A2Z Home Solutions',
      tech: 'React • Tailwind • Framer Motion',
      desc: 'Premium home service platform featuring a modern grid layout and smooth scrolling animations for enhanced user conversion.',
      link: 'https://a2zhome.netlify.app/',
      img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182884/Screenshot_2026-02-27_142804_j9036g.jpg',
    },
    {
      name: 'Onzy Portfolio',
      tech: 'React • Vite • Responsive Design',
      desc: 'Minimalist creative portfolio showcasing high-end typography and interactive UI components optimized for all devices.',
      link: 'https://onzy.netlify.app/',
      img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182885/Screenshot_2026-02-27_142914_r53erk.jpg',
    },
    {
      name: 'Chroma Visuals',
      tech: 'HTML • CSS • GSAP Animations',
      desc: 'A vibrant, design-centric landing page focused on high-impact visuals and seamless transition effects.',
      link: 'https://chroma-com.netlify.app/',
      img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182884/Screenshot_2026-02-27_142947_fe9rdf.jpg',
    },
    {
      name: 'Manly Grooming',
      tech: 'ReactJS • UI/UX • Netlify',
      desc: 'Sophisticated e-commerce concept for men’s grooming, featuring clean product cards and a masculine aesthetic.',
      link: 'https://manly-com.netlify.app/',
      img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182884/Screenshot_2026-02-27_143002_jndg3u.jpg',
    },
    {
      name: 'US Education Portal',
      tech: 'React • Tailwind CSS • Web Vitals',
      desc: 'Information-heavy educational dashboard designed with a focus on accessibility and clear content hierarchy.',
      link: 'https://us-education-com.netlify.app/',
      img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182884/Screenshot_2026-02-27_143016_xawwln.jpg',
    },
    {
      name: 'Akash Health Tech',
      tech: 'React • Lucide Icons • CSS Modules',
      desc: 'Healthcare management interface prioritizing data visualization and user-friendly navigation for medical professionals.',
      link: 'https://akashhealth-com.netlify.app/',
      img: 'https://res.cloudinary.com/dwhlv0yog/image/upload/v1772182885/Screenshot_2026-02-27_143057_i00vz2.jpg',
    },
    {
      name: 'Doppelganger Finder',
      tech: 'HTML • CSS • JS • Supabase • Cloud API',
      desc: (
        <p>
          Developed a real-time web application using <strong>Supabase</strong>{' '}
          for secure storage. Achieved <strong>&lt;2 second latency</strong> for
          image processing.
        </p>
      ),
      link: 'https://doppelganger.world/',
      img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1771642800/Untitled1_egi96v.jpg',
    },
    {
      name: 'AI Email Generator',
      tech: 'React • Vite • Spring Boot • Gemini AI',
      desc: (
        <p>
          Intelligent automation tool drafting responses with{' '}
          <strong>70% accuracy</strong>. Integrated Google Gemini for NLP,
          reducing manual effort.
        </p>
      ),
      link: 'https://coruscating-beijinho-edb225.netlify.app/',
      img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1771642800/Untitled2_malquj.jpg',
    },
    {
      name: 'Spotify UI Clone',
      tech: 'HTML • CSS • JavaScript',
      desc:
        'Responsive frontend clone focusing on layout accuracy and modern UI practices. Strengthened mobile-first design.',
      link: 'https://umeshjonwal.github.io/spotify-clone/',
      img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1771642802/Untitled3_bhqxx8.jpg',
    },
    {
      name: 'Miranda Website Clone',
      tech: 'HTML • JavaScript • CSS',
      desc:
        'Pixel-accurate UI clone focusing on advanced typography and spacing consistency. Optimized for performance.',
      link: 'https://umeshjonwal.github.io/mirandaclone/',
      img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1771642802/Untitled4_f7khzo.jpg',
    },
    {
      name: 'Narmata Web Project',
      tech: 'HTML • CSS • JavaScript',
      desc:
        'Static web project engineered to practice structured semantic HTML layouts and scalable CSS organization.',
      link: 'https://umeshjonwal.github.io/narmataproject/',
      img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1771642804/Untitled5_kycoja.jpg',
    },
    {
      name: 'Clyra World',
      tech: 'HTML • CSS • React JS • Netlify',
      desc:
        'Creative website project focused on visual presentation and polished deployment workflows using React.',
      link: 'https://clyraworld.netlify.app/',
      img: 'https://res.cloudinary.com/douc8uat5/image/upload/v1771642802/Untitled6_hj7ico.jpg',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <header className="mb-24">
        <div
          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase mb-8
          ${
            isDark
              ? 'bg-blue-500/5 border-blue-500/20 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-600'
          }`}
        >
          <Database size={14} />
          <span>Project Archive v3.0</span>
        </div>

        <h1
          className={`text-6xl md:text-8xl font-black tracking-tighter mb-8 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          THE WORK<span className="text-blue-600">.</span>
        </h1>

        <p
          className={`text-xl max-w-2xl font-medium leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          From real-time image processing with <strong>Supabase</strong> to
          intelligent automation via <strong>Spring Boot</strong> and{' '}
          <strong>Gemini AI</strong>.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} theme={theme} />
        ))}
      </div>

      <section
        className={`mt-32 p-12 md:p-20 rounded-[3rem] border text-center relative overflow-hidden
        ${
          isDark
            ? 'bg-[#0a0a0f] border-white/5'
            : 'bg-slate-50 border-black/5 shadow-2xl shadow-blue-500/5'
        }`}
      >
        <div className="relative z-10">
          <h2
            className={`text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Next-Gen Deployment?
          </h2>
          <p
            className={`text-lg mb-10 max-w-xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Our team is available for custom builds involving AI integration,
            real-time databases, and spatial UI design.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-6 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/25 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Initialize Project
          </a>
        </div>
      </section>
    </div>
  );
}