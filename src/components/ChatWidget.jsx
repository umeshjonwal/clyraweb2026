import { useState, useEffect, useRef } from "react";
import clyraAvatar from "./imageclyra.png";

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

const botAvatarUrl = clyraAvatar;

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

/* ────────────────────────────────────────────────────────────
    ChatWidget Component
   ──────────────────────────────────────────────────────────── */
export default function ChatWidget({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I’m Clyra. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [awaitingCountry, setAwaitingCountry] = useState(false);
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  // ─── AUTO OPEN AFTER 5 SECONDS ───
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // ─── AUTO SCROLL TO BOTTOM ───
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

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
      const country = parseCountry(text);
      if (country) {
        setMessages((p) => [...p, { sender: "bot", text: buildPriceMessage(country) }]);
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

  return (
    <div className={`fixed bottom-6 right-6 z-[100] font-sans ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Floating Avatar Button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center hover:scale-105 transition border-2 border-transparent hover:border-blue-400"
        >
          <img src={botAvatarUrl} className="w-14 h-14 rounded-full object-cover" alt="bot avatar" />
          
          <span className="absolute bottom-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-slate-900"></span>
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[360px] max-h-[500px] bg-white dark:bg-[#0f111a] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={botAvatarUrl} className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="header avatar" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold leading-tight">Ask Clyra</h3>
                <p className="text-[10px] uppercase font-bold opacity-90">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white text-2xl transition-transform hover:rotate-90">×</button>
          </div>

          {/* Messages Area - Scrollable */}
          <div className="flex-1 h-[350px] p-4 space-y-4 overflow-y-auto bg-gray-50 dark:bg-slate-900/50 text-sm scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-white/10">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                {m.sender === "bot" && (
                  <img src={botAvatarUrl} className="w-6 h-6 rounded-full mr-2 self-end" alt="msg avatar" />
                )}
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[80%] break-words shadow-sm ${
                    m.sender === "user"
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-br-sm"
                      : "bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-200 rounded-bl-sm border border-gray-100 dark:border-white/5"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-slate-500 animate-pulse ml-8">
                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-slate-600 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                <span className="italic">Clyra is typing...</span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t dark:border-white/10 bg-white dark:bg-[#0f111a] flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about pricing, services..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-transparent dark:text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none text-sm transition-all placeholder:text-gray-400 dark:placeholder:text-slate-600"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}