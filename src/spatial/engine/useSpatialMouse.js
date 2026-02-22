import { useLayoutEffect, useCallback } from "react";
import { useSpring } from "framer-motion";

/**
 * High-performance spatial mouse tracking optimized for 
 * Lighthouse Performance scores and 120Hz+ displays.
 * * Fixes: Forced Reflow (86ms), Main Thread Work, and TBT.
 */
export function useSpatialMouse() {
  // Optimized spring physics: High stiffness for responsiveness, 
  // balanced damping to prevent oscillatory layout thrashing.
  const mouseX = useSpring(0, { stiffness: 150, damping: 30, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 30, mass: 0.5 });

  const handleMove = useCallback((e) => {
    // requestAnimationFrame ensures we only update the spring 
    // during the "Update Animations" phase of the browser's render loop.
    requestAnimationFrame(() => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    });
  }, [mouseX, mouseY]);

  // useLayoutEffect prevents the "unattributed" reflow time by 
  // executing synchronously before the browser paints the next frame.
  useLayoutEffect(() => {
    // TBT Optimization: Do not attach listeners on touch devices 
    // where mouse coordinates aren't relevant.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // { passive: true } tells the browser the listener won't call 
    // preventDefault(), allowing for faster scrolling and interactions.
    window.addEventListener("mousemove", handleMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [handleMove]);

  return { mouseX, mouseY };
}