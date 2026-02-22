import { motion, useTransform } from "framer-motion";

/**
 * Animated spatial grid
 * Scroll + audio reactive
 */
export default function Grid({ theme = "dark", audio = 0, velocity }) {
  const driftY = useTransform(velocity, [-2000, 2000], [0, 80]);
  const pulse = 0.08 + audio * 0.25;

  return (
    <motion.div
      style={{
        y: driftY,
        opacity: pulse,
        backgroundPosition: "center",
      }}
      animate={{
        backgroundPosition: [
          "0px 0px",
          "40px 40px",
          "0px 0px",
        ],
      }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`fixed inset-0 z-[5] pointer-events-none
        bg-[size:40px_40px]
        ${
          theme === "dark"
            ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]"
        }`}
    />
  );
}