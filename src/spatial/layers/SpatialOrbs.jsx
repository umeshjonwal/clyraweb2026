import { motion, useTransform } from "framer-motion";

export default function SpatialOrbs({ mood, audio, velocity }) {
  const drift = useTransform(velocity, [-2000, 2000], [-80, 80]);

  return (
    <>
      {/* Top-left orb */}
      <motion.div
        style={{
          y: drift,
          scale: 1 + audio * 0.4,
          background: `hsla(${mood.hue}, 80%, 55%, 0.12)`,
        }}
        className="absolute -top-1/3 -left-1/4 w-[70%] h-[70%]
        rounded-full blur-[160px] opacity-70"
      />

      {/* Bottom-right orb */}
      <motion.div
        style={{
          y: useTransform(drift, (v) => -v),
          scale: 1 + audio * 0.6,
          background: `hsla(${mood.hue + 30}, 90%, 60%, 0.14)`,
        }}
        className="absolute bottom-0 right-0 w-[60%] h-[60%]
        rounded-full blur-[180px] opacity-80"
      />
    </>
  );
}