import { useEffect } from "react";
import { useSpring } from "framer-motion";

/**
 * High-refresh-rate mouse tracking
 */
export function useSpatialMouse() {
  const mouseX = useSpring(0, { stiffness: 120, damping: 40, mass: 0.4 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
}