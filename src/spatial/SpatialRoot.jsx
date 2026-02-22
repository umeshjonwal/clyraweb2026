import ShaderBackground from "./layers/ShaderBackground";
import Grid from "./layers/Grid";
import SpatialOrbs from "./layers/SpatialOrbs";
import Particles from "./layers/Particles";
import Grain from "./layers/Grain";
import SplashCursor from "../components/SplashCursor";

import { useGPUQuality } from "./engine/useGPUQuality";
import { useFPSWatchdog } from "./engine/useFPSWatchdog";
import { useScrollVelocitySmooth } from "./engine/useScrollVelocity";
import { useRouteMood } from "./engine/useRouteMood";

export default function SpatialRoot({ pathname }) {
  // Static hardware-based guess
  const gpuBase = useGPUQuality();

  // Runtime FPS correction
  const fpsQuality = useFPSWatchdog(gpuBase.quality);

  // Final adaptive GPU config
  const gpu = {
    ...gpuBase,
    quality: fpsQuality,
    particleCount:
      fpsQuality === "ultra"
        ? 50
        : fpsQuality === "high"
        ? 35
        : 20,
    shaderResolution:
      fpsQuality === "ultra"
        ? 1
        : fpsQuality === "high"
        ? 0.8
        : 0.6,
  };

  const audio = useAudioReactive();
  const velocity = useScrollVelocitySmooth();
  const mood = useRouteMood(pathname);

  return (
    <>
      {/* Shader background */}
      <ShaderBackground
        mood={mood}
        audio={audio}
        quality={gpu.shaderResolution}
      />

      {/* Fluid splash cursor (auto-disabled on low FPS) */}
      {gpu.quality !== "low" && (
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
      )}

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