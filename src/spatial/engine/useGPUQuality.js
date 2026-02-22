import { useEffect, useState } from "react";

/**
 * GPU-adaptive quality hook
 */
export function useGPUQuality() {
  const [quality, setQuality] = useState("high");

  useEffect(() => {
    const cores = navigator.hardwareConcurrency || 4;
    const memory = navigator.deviceMemory || 4;
    const dpr = window.devicePixelRatio || 1;

    let refreshRate = 60;
    try {
      refreshRate = screen?.refreshRate || 60;
    } catch {}

    if (cores <= 4 || memory <= 4) {
      setQuality("low");
    } else if (refreshRate >= 120 && dpr >= 2) {
      setQuality("ultra");
    } else {
      setQuality("high");
    }
  }, []);

  return {
    quality,
    particleCount:
      quality === "ultra" ? 50 : quality === "high" ? 35 : 20,
    blurStrength:
      quality === "ultra" ? 160 : quality === "high" ? 120 : 80,
    shaderResolution:
      quality === "ultra" ? 1 : quality === "high" ? 0.8 : 0.6,
  };
}