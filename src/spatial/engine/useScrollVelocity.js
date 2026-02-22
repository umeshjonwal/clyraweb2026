import { useScroll, useVelocity, useSpring } from "framer-motion";

/**
 * Smooth scroll velocity hook
 */
export function useScrollVelocitySmooth() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  return useSpring(velocity, {
    stiffness: 80,
    damping: 40,
    mass: 0.6,
  });
}