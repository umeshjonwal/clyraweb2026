import { useState, useEffect, useRef } from "react";

// Optimized Cloudinary link
const CLYRA_AVATAR_URL = "https://res.cloudinary.com/douc8uat5/image/upload/f_auto,q_auto,w_120/v1771763391/imageclyra_v6truw.png";

/* ────────────────────────────────────────────────────────────
    Graq credentials
   ──────────────────────────────────────────────────────────── */
const GRAQ_API_URL = "https://api.graq.ai/v1/chat";
const GRAQ_API_KEY = import.meta.env.VITE_GRAQ_API_KEY || "YOUR_GRAQ_API_KEY";

/* ────────────────────────────────────────────────────────────
    System prompt
   ──────────────────────────────────────────────────────────── */
const SYSTEM_PROMPT = `
You are a professional, friendly, and knowledgeable support agent for Legit Global Agency website.
Answer only questions about the website’s features, services, pricing, contact details, plan inclusions, and related content.
Keep replies concise (1–2 sentences).
For a question unrelated to the site, politely say you can’t help with that.
`;

const faqs = {
  "book a demo": "📞 You can book a call at +91 9911274711 or email us at support@clyra.world.",
  "arrange call": "✅ Sure! Call us at +91 9911274711 — we’ll arrange everything.",
  contact: "Reach us anytime: 📞 +91 9911274711 | ✉️ support@clyra.world",
  services: "We offer AI-driven websites, performance marketing, automation, and growth systems.",
  pricing: "💡 Pricing varies by scope. Projects start from ₹4,999.",
  hi: "👋 Hello! I’m Clyra. How can I help you today?",
  hello: "😊 Hi there! Ask me about services, pricing, or support.",
  thanks: "🙏 You’re most welcome!",
  bye: "👋 Goodbye! Talk soon."
};

const parseCountry = (text) => {
  const t = text.toLowerCase();
  if (/uk|united kingdom/.test(t)) return "uk";
  if (/china|cn|cny/.test(t)) return "china";
  if (/india|in|rs/.test(t)) return "india";
  return null;
};

const priceByCountry = {
  uk: { price: "£99", detail: "" },
  china: { price: "¥399", detail: "." },
  india: { price: "₹4,999", detail: "GST (18%) applicable." }
};

const buildPriceMessage = (c) =>
  `Our Starter Plan costs ${priceByCountry[c].price} ${priceByCountry[c].detail}`;

export default function ChatWidget() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I’m Clyra. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [awaitingCountry, setAwaitingCountry] = useState(false);
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  /* ─── SPA-SAFE DELAYED MOUNT ─── */
  useEffect(() => {
    const mountWidget = () => {
      setTimeout(() => setMounted(true), 1200);
    };

    if (document.readyState === "complete") {
      mountWidget();
    } else {
      window.addEventListener("load", mountWidget);
      return () => window.removeEventListener("load", mountWidget);
    }
  }, []);

  /* ─── AUTO OPEN AFTER 5s ─── */
  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(t);
  }, [mounted]);

  /* ─── AUTO SCROLL ─── */
  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, isOpen]);

  const fallbackAnswer = (q) => {
    const l = q.toLowerCase();
    for (const k in faqs) if (l.includes(k)) return faqs[k];
    return "🤖 I can help with services, pricing, or contact details.";
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    setInput("");
    setMessages((p) => [...p, { sender: "user", text }]);

    if (awaitingCountry) {
      const c = parseCountry(text);
      if (c) {
        setMessages((p) => [...p, { sender: "bot", text: buildPriceMessage(c) }]);
        setAwaitingCountry(false);
      } else {
        setMessages((p) => [...p, { sender: "bot", text: "Which country are you based in?" }]);
      }
      return;
    }

    if (/price|cost|pricing|how much/i.test(text)) {
      setMessages((p) => [...p, { sender: "bot", text: "Which country are you based in?" }]);
      setAwaitingCountry(true);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(GRAQ_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GRAQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: text }
          ]
        })
      });

      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content || fallbackAnswer(text);
      setMessages((p) => [...p, { sender: "bot", text: reply }]);
    } catch {
      setMessages((p) => [...p, { sender: "bot", text: fallbackAnswer(text) }]);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat Support"
        className="relative w-16 h-16 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center hover:scale-105 transition group"
      >
        <img 
          src={CLYRA_AVATAR_URL} 
          className="w-12 h-12 rounded-full object-cover" 
          alt="Clyra AI Support Avatar" 
          role="img"
          width="48" 
          height="48"
          crossOrigin="anonymous" // Fixes Tracking Prevention log
          fetchpriority="high"    // Fixes LCP/Intervention delay
          decoding="async"
        />

        {/* ONLINE DOT */}
        <span className="absolute bottom-1 right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-white"></span>
        </span>
      </button>

      {isOpen && (
        <div 
          role="dialog" 
          aria-modal="true"
          aria-label="Chat Support Window"
          className="absolute bottom-20 right-0 w-[360px] bg-white rounded-xl shadow-2xl border border-gray-300 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-3 bg-gray-50/50">
            <img 
              src={CLYRA_AVATAR_URL} 
              className="w-8 h-8 rounded-full object-cover border border-gray-200" 
              alt="Clyra Mini Avatar" 
              width="32"
              height="32"
              crossOrigin="anonymous"
              decoding="async"
            />
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Clyra Support</h3>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="ml-auto text-gray-400 hover:text-gray-700 text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 h-[380px] overflow-y-auto text-sm bg-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[85%] shadow-sm ${
                    m.sender === "user"
                      ? "bg-gray-900 text-white rounded-tr-none"
                      : "bg-gray-100 text-gray-900 rounded-tl-none border border-gray-200/50"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-tl-none animate-pulse text-xs text-gray-400 italic">
                  Clyra is typing…
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 flex gap-2 bg-gray-50/30">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              aria-label="Chat input"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all text-sm"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-black transition-all disabled:opacity-50 shadow-md"
              aria-label="Send message"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                className="w-4 h-4 rotate-45"
                aria-hidden="true"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}