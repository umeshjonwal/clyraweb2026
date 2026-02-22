import { useEffect, useRef } from "react";

/**
 * Film grain overlay (GPU cheap)
 */
export default function Grain() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let raf;

    const animate = () => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      el.style.backgroundPosition = `${x}% ${y}%`;
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-20 pointer-events-none opacity-[0.035]
      bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
    />
  );
}