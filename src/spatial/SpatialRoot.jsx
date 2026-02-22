import React, { Suspense, lazy } from "react";
import { useGPUQuality } from "./engine/useGPUQuality";
import { useFPSWatchdog } from "./engine/useFPSWatchdog";
import { useAudioReactive } from "./engine/useAudioReactive";
import { useScrollVelocitySmooth } from "./engine/useScrollVelocity";
import { useRouteMood } from "./engine/useRouteMood";

// --- Performance Optimization: Lazy Loading ---
// These components likely use Three.js or heavy Canvas logic. 
// Loading them only when needed prevents the initial JS bundle from exploding.
const ShaderBackground = lazy(() => import("./layers/ShaderBackground"));
const Grid = lazy(() => import("./layers/Grid"));
const SpatialOrbs = lazy(() => import("./layers/SpatialOrbs"));
const Particles = lazy(() => import("./layers/Particles"));
const Grain = lazy(() => import("./layers/Grain"));
const SplashCursor = lazy(() => import("../components/SplashCursor"));

export default function SpatialRoot({ pathname }) {
  const gpuBase = useGPUQuality();
  const fpsQuality = useFPSWatchdog(gpuBase.quality);

  // Memoized GPU configuration
  const gpu = React.useMemo(() => ({
    ...gpuBase,
    quality: fpsQuality,
    particleCount:
      fpsQuality === "ultra" ? 50 : fpsQuality === "high" ? 35 : 20,
    shaderResolution:
      fpsQuality === "ultra" ? 1 : fpsQuality === "high" ? 0.8 : 0.6,
  }), [gpuBase, fpsQuality]);

  const audio = useAudioReactive();
  const velocity = useScrollVelocitySmooth();
  const mood = useRouteMood(pathname);

  // If the FPS watchdog drops to 'low', we skip rendering the heaviest layers entirely
  if (gpu.quality === "low") return null;

  return (
    <Suspense fallback={null}>
      {/* 1. Base Layer: Shaders */}
      <ShaderBackground
        mood={mood}
        audio={audio}
        quality={gpu.shaderResolution}
      />

      {/* 2. Interaction Layer: Splash Cursor (High-end only) */}
      {gpu.quality === "ultra" && (
        <div className="fixed inset-0 z-[2] pointer-events-none">
          <SplashCursor
            SIM_RESOLUTION={128} // Reduced for better perf without visual loss
            DYE_RESOLUTION={1024} // 1920 is often overkill for fluid sims
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.2}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
          />
        </div>
      )}

      {/* 3. Structural Layer: Grid */}
      <Grid
        theme="dark"
        audio={audio}
        velocity={velocity}
      />

      {/* 4. Depth Layer: Orbs & Particles */}
      <SpatialOrbs
        mood={mood}
        audio={audio}
        velocity={velocity}
      />

      <Particles
        count={gpu.particleCount}
        audio={audio}
        velocity={velocity}
      />

      {/* 5. Overlay: Grain (Texture) */}
      <Grain />
    </Suspense>
  );
}