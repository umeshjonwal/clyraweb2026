/**
 * Route-based visual mood system
 * Returns color hue + intensity based on pathname
 */
export function useRouteMood(pathname) {
  return (
    {
      "/": { hue: 220, intensity: 0.15 },
      "/services": { hue: 270, intensity: 0.18 },
      "/work": { hue: 190, intensity: 0.2 },
      "/about": { hue: 245, intensity: 0.12 },
      "/contact": { hue: 145, intensity: 0.22 },
      "/blog": { hue: 35, intensity: 0.16 },
    }[pathname] || { hue: 220, intensity: 0.15 }
  );
}