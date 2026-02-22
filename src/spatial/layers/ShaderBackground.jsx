import { useEffect, useRef } from "react";

/**
 * Shader-style animated background (WebGL-lite)
 */
export default function ShaderBackground({ mood, audio, quality }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    let w, h;
    let t = 0;
    let raf;

    const resize = () => {
      w = canvas.width = window.innerWidth * quality;
      h = canvas.height = window.innerHeight * quality;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      t += 0.004 + audio * 0.06;

      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createRadialGradient(
        w * (0.5 + Math.sin(t) * 0.1),
        h * (0.5 + Math.cos(t) * 0.1),
        0,
        w / 2,
        h / 2,
        Math.max(w, h)
      );

      gradient.addColorStop(
        0,
        `hsla(${mood.hue}, 70%, 60%, ${0.18 + audio})`
      );
      gradient.addColorStop(
        1,
        `hsla(${mood.hue + 40}, 80%, 15%, 0.1)`
      );

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [mood, audio, quality]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
  return (
  <>
    {/* Shader background */}
    <ShaderBackground
      mood={mood}
      audio={audio}
      quality={gpu.shaderResolution}
    />

    {/* Fluid splash cursor background */}
    <div className="fixed inset-0 z-[2] pointer-events-none">
      <SplashCursor
        SIM_RESOLUTION={224}
        DYE_RESOLUTION={1920}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      />
    </div>

    {/* Grid */}
    <Grid
      theme="dark"
      audio={audio}
      velocity={velocity}
    />

    {/* Orbs */}
    <SpatialOrbs
      mood={mood}
      audio={audio}
      velocity={velocity}
    />

    {/* Particles */}
    <Particles
      count={gpu.particleCount}
      audio={audio}
      velocity={velocity}
    />

    {/* Grain */}
    <Grain />
  </>
);
}