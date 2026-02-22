import { motion } from "framer-motion";

export default function WhatsAppFloat({ phone }) {
  return (
    <div className="fixed bottom-8 left-8 z-[100] group">
      {/* subtle rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-2 rounded-full border border-dashed border-green-500/25"
      />

      {/* WhatsApp icon button */}
      <motion.a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="
          relative w-14 h-14
          rounded-full
          bg-[#25D366]
          flex items-center justify-center
          shadow-[0_16px_40px_rgba(37,211,102,0.35)]
        "
      >
       <img
  src="/WhatsApp.svg" // Use the SVG version for better performance/quality
  alt="Contact us on WhatsApp"
  width="28" // Explicit dimensions prevent layout shifts
  height="28"
  className="w-7 h-7 select-none pointer-events-none"
  loading="lazy" // This is fine since this icon is likely in the footer/contact area
  decoding="async"
/>
      </motion.a>
    </div>
  );
}