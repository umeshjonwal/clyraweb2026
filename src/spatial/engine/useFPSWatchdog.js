import { useEffect, useRef, useState } from "react";

/**
 * FPS watchdog
 * Dynamically adjusts quality based on real performance
 */
export function useFPSWatchdog(initial = "high") {
  const [quality, setQuality] = useState(initial);

  const lastTime = useRef(performance.now());
  const frames = useRef(0);
  const fps = useRef(60);

  useEffect(() => {
    let raf;

    const loop = (now) => {
      frames.current++;
      const delta = now - lastTime.current;

      if (delta >= 1000) {
        fps.current = (frames.current * 1000) / delta;
        frames.current = 0;
        lastTime.current = now;

        // 🔥 Quality decisions
        setQuality((q) => {
          if (fps.current < 40 && q !== "low") return "low";
          if (fps.current < 55 && q === "ultra") return "high";
          if (fps.current > 90 && q === "high") return "ultra";
          return q;
        });
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return quality;
}