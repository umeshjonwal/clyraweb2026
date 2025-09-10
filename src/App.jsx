import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx"; // ✅ Formspree Contact form
import Blog from "./pages/Blog.jsx";
import BlogPost1 from "./blog/blog-conversion-first-design.jsx";
import BlogPost2 from "./blog/blog-digital-menus.jsx";
import BlogPost3 from "./blog/blog-smart-billing.jsx";
import MenuScanner from "./pages/MenuScanner.jsx";
import GstBilling from "./pages/GstBilling.jsx";
import ChatWidget from "./components/ChatWidget.jsx"; // ✅ new chatbot

// 🌊 Rainbow / Fairy-tail water-like cursor
function CursorWater() {
  useEffect(() => {
    const blob = document.createElement("div");
    blob.style.position = "fixed";
    blob.style.top = "0";
    blob.style.left = "0";
    blob.style.pointerEvents = "none";
    blob.style.borderRadius = "50%";
    blob.style.mixBlendMode = "screen";
    blob.style.zIndex = "0";
    document.body.appendChild(blob);

    // ✨ Sparkles container
    const sparkleContainer = document.createElement("div");
    sparkleContainer.style.position = "fixed";
    sparkleContainer.style.top = "0";
    sparkleContainer.style.left = "0";
    sparkleContainer.style.pointerEvents = "none";
    sparkleContainer.style.zIndex = "1";
    document.body.appendChild(sparkleContainer);

    const pastelColors = [
      "#fbc2eb",
      "#a6c1ee",
      "#ffd6e0",
      "#c3f0ca",
      "#fff3b0",
      "#d9caff",
      "#b5ead7",
      "#ffdac1",
    ];

    const sparkles = [];
    for (let i = 0; i < 14; i++) {
      const s = document.createElement("div");
      s.style.position = "absolute";
      s.style.width = "6px";
      s.style.height = "6px";
      s.style.borderRadius = "50%";
      s.style.background =
        pastelColors[Math.floor(Math.random() * pastelColors.length)];
      s.style.opacity = "0.6";
      sparkleContainer.appendChild(s);
      sparkles.push({
        el: s,
        angle: Math.random() * 360,
        dist: 60 + Math.random() * 50,
        drift: Math.random() * 0.05 + 0.02,
        offset: Math.random() * Math.PI * 2,
      });
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let angle = 0;
    let t = 0;

    const getGradient = (angle) => {
      const isDark = document.documentElement.classList.contains("dark");

      if (isDark) {
        blob.style.width = "520px";
        blob.style.height = "520px";
        blob.style.filter = "blur(160px)";
        blob.style.opacity = "0.7";
        sparkleContainer.style.display = "none";
        return `conic-gradient(from ${angle}deg,
          #00f, #0ff, #0f0, #ff0, #f0f, #f00, #00f)`;
      } else {
        blob.style.width = "320px";
        blob.style.height = "320px";
        blob.style.filter = "blur(110px)";
        blob.style.opacity = "0.55";
        sparkleContainer.style.display = "block";
        return `conic-gradient(from ${angle}deg,
          #fbc2eb, #a6c1ee, #ffd6e0, #c3f0ca, #fff3b0, #d9caff, #fbc2eb)`;
      }
    };

    const createTrailParticle = (x, y) => {
      if (document.documentElement.classList.contains("dark")) return;

      const p = document.createElement("div");
      p.style.position = "fixed";
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      p.style.width = "8px";
      p.style.height = "8px";
      p.style.borderRadius = "50%";
      p.style.background =
        pastelColors[Math.floor(Math.random() * pastelColors.length)];
      p.style.pointerEvents = "none";
      p.style.zIndex = "2";
      p.style.opacity = "0.8";
      p.style.transform = "translate(-50%, -50%) scale(1)";
      document.body.appendChild(p);

      let life = 0;
      const fade = () => {
        life += 0.04;
        p.style.opacity = `${0.8 - life}`;
        p.style.transform = `translate(-50%, -50%) scale(${1 - life * 0.7})`;
        if (life < 1) {
          requestAnimationFrame(fade);
        } else {
          p.remove();
        }
      };
      fade();
    };

    const move = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      createTrailParticle(targetX, targetY);
    };

    const animate = () => {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;

      angle += 2;
      t += 0.03;

      const isDark = document.documentElement.classList.contains("dark");
      let pulse = isDark ? 1 : 1 + Math.sin(t * 1.5) * 0.1;
      blob.style.transform = `translate(-50%, -50%) scale(${pulse})`;

      blob.style.left = `${x}px`;
      blob.style.top = `${y}px`;
      blob.style.background = getGradient(angle);

      sparkles.forEach((s) => {
        s.angle += 1.5;
        const rad = (s.angle * Math.PI) / 180;

        const breath = Math.sin(t * s.drift + s.offset) * 20;
        const sx = x + Math.cos(rad) * (s.dist + breath);
        const sy = y + Math.sin(rad) * (s.dist + breath);

        s.el.style.left = `${sx}px`;
        s.el.style.top = `${sy}px`;
        s.el.style.opacity = `${0.4 + Math.random() * 0.6}`;

        if (Math.random() < 0.05) {
          s.el.style.transform = "scale(1.6)";
          s.el.style.background =
            pastelColors[Math.floor(Math.random() * pastelColors.length)];
          setTimeout(() => {
            s.el.style.transform = "scale(1)";
          }, 150);
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(blob);
      document.body.removeChild(sparkleContainer);
    };
  }, []);

  return null;
}

// ✅ WhatsApp Floating Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919911274711"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-l-2xl shadow-lg hover:bg-green-600 transition z-50 flex items-center"
    >
      {/* WhatsApp Logo (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 .02 5.35.02 11.98c0 2.11.55 4.16 1.6 5.98L0 24l6.25-1.63a11.94 11.94 0 005.75 1.48h.01c6.63 0 11.98-5.35 11.98-11.98 0-3.2-1.25-6.2-3.47-8.39zM12 21.46a9.43 9.43 0 01-4.8-1.31l-.34-.2-3.72.97.99-3.63-.22-.37a9.43 9.43 0 01-1.45-4.97c0-5.2 4.23-9.43 9.43-9.43 2.52 0 4.89.98 6.67 2.75a9.37 9.37 0 012.76 6.67c0 5.2-4.23 9.43-9.43 9.43zm5.21-7.07c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.16.19-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.13-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.02 2.83 1.16 3.02c.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.29.19 1.77.12.54-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
      </svg>
    </a>
  );
}

// ✅ Routes (Contact uses Formspree)
const routes = {
  "/": Home,
  "/index.html": Home,
  "/services": Services,
  "/work": Work,
  "/about": About,
  "/contact": Contact,
  "/blog": Blog,
  "/blog/conversion-first-design": BlogPost1,
  "/blog/digital-menus": BlogPost2,
  "/blog/smart-billing": BlogPost3,
  "/menuscanner": MenuScanner,
  "/gstbilling": GstBilling,
};

export default function App() {
  const [PathComponent, setPathComponent] = useState(
    () => routes[window.location.pathname] || Home
  );

  // ✅ Force dark mode on first load
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a,button[data-href]");
      if (!a) return;
      const href = a.getAttribute("href") || a.getAttribute("data-href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      )
        return;
      e.preventDefault();
      window.history.pushState({}, "", href);
      setPathComponent(() => routes[href] || Home);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", () =>
      setPathComponent(() => routes[window.location.pathname] || Home)
    );

    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div>
      {/* 🌊 Rainbow / Fairy-tail cursor */}
      <CursorWater />

      {/* ✅ Floating WhatsApp Chat */}
      <WhatsAppButton />

      {/* ✅ Floating Clyra AI Chatbot */}
      <ChatWidget />

      <Nav />
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PathComponent />
      </main>
      <Footer />
    </div>
  );
}
