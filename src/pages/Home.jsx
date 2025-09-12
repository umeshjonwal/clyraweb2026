import { motion } from "framer-motion";
import Contact from "./Contact"; // ✅ import the main contact form

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const hoverLift = { whileHover: { y: -2, scale: 1.02 }, whileTap: { scale: 0.98 } };

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-extrabold">{value}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

export default function Home() {
  return (
    <div className="py-16">
      {/* Hero */}
      <section className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold leading-tight"
          >
            Cylra builds{" "}
            <span className="bg-gradient-to-br from-brand-600 to-accent-600 bg-clip-text text-transparent">
              brand-defining
            </span>{" "}
            websites &{" "}
            <span className="bg-gradient-to-br from-accent-600 to-brand-600 bg-clip-text text-transparent">
              revenue engines
            </span>
            .
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl"
          >
            We’re a results-obsessed digital agency. From identity systems and
            UX to SEO, performance ads, and AI automation — we combine taste
            with speed so your brand looks world-class and grows on purpose.
          </motion.p>
          <div className="flex gap-4">
            <motion.a
              {...hoverLift}
              href="/services"
              className="btn btn-primary"
            >
              Explore Services
            </motion.a>
            <motion.a
              {...hoverLift}
              href="/contact"
              className="btn btn-ghost"
            >
              Talk to an Expert
            </motion.a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <Stat value="+18%" label="Avg order value" />
            <Stat value="99%" label="Client retention" />
            <Stat value="3.1x" label="Marketing ROAS" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="card h-full min-h-[320px] grid place-content-center text-center"
          >
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              Trusted By
            </p>
            <div className="grid grid-cols-3 gap-4 opacity-80">
              <div className="font-bold">Nova</div>
              <div className="font-bold">Quantum</div>
              <div className="font-bold">Helix</div>
              <div className="font-bold">Astra</div>
              <div className="font-bold">Glyph</div>
              <div className="font-bold">Volt</div>
            </div>
          </motion.div>
        </div>
      </section>
{/* Services highlights */}
<section className="mt-20">
  <div className="grid md:grid-cols-3 gap-6">
    {[
{
  title: "AI-Driven Websites",
  desc: "Smart, adaptive sites with AI assistants, personalization, and automation built in.",
  img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
},

      {
        title: "Web Design & Dev",
        desc: "Headless, SEO-first websites — fast, accessible, and easy to edit.",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Performance Marketing",
        desc: "Full-funnel strategy with creative that converts and analytics that prove it.",
        img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "AI Automation",
        desc: "From lead routing to content ops — ship more with fewer clicks.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      },
      
{
  title: "Content Systems",
  desc: "Topic maps, briefs, and publishing pipelines for compounding growth.",
  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
}, 
{
  title: "E-commerce",
  desc: "Product storytelling, PDPs that sell, optimized checkouts.",
  img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
},

    ].map((c, i) => (
      <motion.div
        key={i}
        {...hoverLift}
        className="card overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-900"
      >
        {/* Image */}
        <img
          src={c.img}
          alt={c.title}
          className="w-full h-40 object-cover"
        />
        {/* Text */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{c.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Process */}
      <section className="mt-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold mb-4">
            Process — simple, fast, collaborative
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We borrowed the best ideas from design systems and growth teams.
            Every engagement is time-boxed, with weekly demos and measurable
            outcomes.
          </p>
        </div>
        <ol className="grid md:grid-cols-4 gap-6">
          {[
            [
              "Discover",
              "Lightning interviews, analytics audit, and quick brand pulse.",
            ],
            ["Design", "Low-fi flows → hi-fi visuals. Motion where it matters."],
            [
              "Build",
              "Clean React components, Tailwind styles, a11y by default.",
            ],
            [
              "Launch & Grow",
              "SEO, performance budgets, and weekly experiments.",
            ],
          ].map((s, i) => (
            <li key={i} className="card">
              <div className="text-sm text-gray-500">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-lg font-semibold">{s[0]}</div>
              <p className="text-gray-700 dark:text-gray-300">{s[1]}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="mt-24">
        <h2 className="text-3xl font-extrabold mb-6">What clients say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              "“We shipped a brand new site in 3 weeks and doubled demo requests.”",
              "Astra — B2B SaaS",
            ],
            [
              "“Design taste meets growth rigor. Best agency we’ve worked with.”",
              "Volt — DTC",
            ],
            [
              "“They automated our content ops. 40% fewer clicks, higher output.”",
              "Glyph — Media",
            ],
          ].map((t, i) => (
            <motion.blockquote key={i} {...hoverLift} className="card">
              <p className="italic"> {t[0]} </p>
              <footer className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                {t[1]}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* CTA with Contact Form */}
      <section className="mt-24">
        <div className="card grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-extrabold mb-2">
              Ready to build something people love?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Tell us where you want to be in 90 days. We’ll map the fastest
              path and own the outcomes.
            </p>
          </div>

          {/* ✅ Use Contact form here instead of mini form */}
          <Contact />
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24">
        <h2 className="text-3xl font-extrabold mb-6">FAQs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            [
              "How fast can we start?",
              "Discovery can begin this week. Typical kickoff is within 5–7 days.",
            ],
            [
              "What makes Cylra different?",
              "Taste + speed. We ship quality quickly and measure what matters.",
            ],
            [
              "Do you work with startups and enterprises?",
              "Yes. We adapt our process to the decision speed and stack.",
            ],
            [
              "Can you help after launch?",
              "Yes — growth retainers for SEO, ads, and CRO.",
            ],
          ].map((f, i) => (
            <div key={i} className="card">
              <div className="font-semibold">{f[0]}</div>
              <p className="text-gray-700 dark:text-gray-300">{f[1]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
  