import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I'm Ask Clyra. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  // 🔥 Expanded FAQ library from your site content
  const faqs = {
    "book a demo": "📞 You can book a call at +91 9911274711 or email us at support@clyra.world.",
    "arrange call": "✅ Sure! Call us at +91 9911274711 — we’ll arrange everything.",
    "contact": "Reach us anytime: +91 9911274711 | support@clyra.world",
    "why choose clyra": "🌟 7 reasons to choose Clyra:\n1️⃣ Conversion-first design\n2️⃣ Smart AI-driven websites\n3️⃣ Automated GST + billing\n4️⃣ Performance marketing that works\n5️⃣ Growth systems with compounding ROI\n6️⃣ Lightning-fast execution\n7️⃣ 99% client retention 🚀",
    "services": "We offer:\n- AI-Driven Websites\n- Web Design & Dev\n- Performance Marketing\n- AI Automation\n- Content Systems\n- E-commerce Solutions",
    "process": "Our 4-step process:\n1️⃣ Discover\n2️⃣ Design\n3️⃣ Build\n4️⃣ Launch & Grow",
    "clients": "Trusted by Nova, Quantum, Helix, Astra, Glyph, Volt 💼",
    "results": "📊 Avg Order Value +18%, Client Retention 99%, ROAS 3.1x",
    "pricing": "💡 Pricing depends on scope. Let’s discuss — call +91 9911274711.",
    "support": "For support: support@clyra.world or WhatsApp +91 9911274711",
    "after launch": "Yes ✅ — we help with SEO, ads, CRO, and growth retainers.",
    "start project": "🚀 Ready? Click 'Start a Project' on our site or call us at +91 9911274711.",
    "blog": "Check our blog for insights: Conversion-first design, Digital menus, Smart billing 💡",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Bot reply
    const lowerInput = input.toLowerCase();
    let reply = "🤖 Hmm, I don’t have that info. Try asking about services, pricing, process, or support.";
    for (const key in faqs) {
      if (lowerInput.includes(key)) {
        reply = faqs[key];
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
    <button
  onClick={() => setIsOpen(!isOpen)}
  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
>
  <MessageCircle className="w-7 h-7" />
</button>


      {/* Chat window (toggle on click) */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center text-white py-3 font-bold">
            Ask Clyra
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm max-h-80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
