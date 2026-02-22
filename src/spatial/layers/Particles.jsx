import { motion, useTransform } from "framer-motion";
import { useMemo } from "react";

/**
 * Micro particles – audio + scroll reactive
 */
export default function Particles({ count, audio, velocity }) {
  const yDrift = useTransform(
    velocity,
    [-2000, 2000],
    [0, -160 - audio * 220]
  );

  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            y: yDrift,
            scale: 1 + audio * 2,
          }}
          animate={{
            x: [0, Math.sin(p.phase) * 40, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 14 + p.phase,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white/40"
        />
      ))}
    </div>
  );
}