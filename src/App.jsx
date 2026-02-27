import { useEffect, useState, useMemo } from "react";
import WhatsAppFloat from "./components/WhatsAppFloat";

// --- Spatial Engine ---
import SpatialRoot from "./spatial/SpatialRoot";

// --- Layout ---
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

// --- Pages ---
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

// --- Routes ---
const routes = {
  "/": Home,
  "/services": Services,
  "/work": Work,
  "/about": About,
  "/contact": Contact,
  "/blog": Blog,
};

const pageAccent = {
  "/": "220 90% 60%",
  "/services": "160 80% 45%",
  "/work": "260 85% 65%",
  "/about": "35 90% 55%",
  "/blog": "330 85% 65%",
  "/contact": "195 85% 55%",
};

const isLowEnd =
  typeof navigator !== "undefined" &&
  (navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4);

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [path, setPath] = useState(window.location.pathname);

  const Page = useMemo(() => routes[path] || Home, [path]);

  // --- 1. Font Injection ---
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter-Variable.woff2') format('woff2');
        font-weight: 100 900;
        font-display: swap;
        font-style: normal;
      }
      :root {
        font-family: 'Inter', system-ui, sans-serif;
      }
    `;
    document.head.appendChild(style);
    return () => { if (document.head.contains(style)) document.head.removeChild(style); };
  }, []);

  // --- Theme Sync ---
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // --- Page Accent Sync ---
  useEffect(() => {
    const accent = pageAccent[path] || pageAccent["/"];
    document.documentElement.style.setProperty("--page-accent", accent);
  }, [path]);

  // --- Lightweight Router ---
  useEffect(() => {
    const handleNav = (e) => {
      const link = e.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href");
      
      if (!href || href.startsWith("http") || href.startsWith("#") || href.includes(":")) return;

      e.preventDefault();
      window.history.pushState({}, "", href);
      setPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    const handlePop = () => setPath(window.location.pathname);
    document.addEventListener("click", handleNav);
    window.addEventListener("popstate", handlePop);

    return () => {
      document.removeEventListener("click", handleNav);
      window.removeEventListener("popstate", handlePop);
    };
  }, []);

  return (
    <div
      className="
        relative min-h-screen overflow-x-hidden
        transition-colors duration-500 ease-in-out
        text-slate-900 dark:text-slate-300
        antialiased
      "
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[-25%] left-[-25%] w-[150%] h-[150%] opacity-20 dark:opacity-10 blur-[120px] animate-[spin_60s_linear_infinite]"
          style={{
            background: `radial-gradient(circle at center, hsl(var(--page-accent)) 0%, transparent 40%)`,
          }}
        />
      </div>

      {!isLowEnd && <SpatialRoot pathname={path} />}

      <Nav theme={theme} setTheme={setTheme} />
      
      <ChatWidget />
      
      <WhatsAppFloat phone="919911274711" />

      {/* FIXED: Changed pt-28 to pt-12. 
          This removes the massive empty gap between the Nav/Hero and the Page content.
      */}
      <main key={path} className="relative z-10 pt-12 reveal">
        <Page theme={theme} />
      </main>

      <Footer theme={theme} />
    </div>
  );
}