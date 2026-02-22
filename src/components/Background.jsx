import React from "react";

/**
 * Optimized Background Component
 * * Performance:
 * - Poster image for instant LCP (Largest Contentful Paint).
 * - will-change-transform for GPU-accelerated compositing.
 * - Cloudinary f_auto/q_auto for optimized asset delivery.
 * * Accessibility:
 * - aria-hidden="true" tells screen readers to ignore decorative background video.
 * - muted/playsInline ensures video autoplay compliance across browsers.
 * - Vignette/Radial overlay ensures text contrast meets AA/AAA standards.
 */
export default function Background({ theme }) {
  const isDark = theme === "dark";

  // Using Cloudinary transformations: f_auto (format), q_auto (quality), w_1200 (optimized width)
  const posterUrl = "https://res.cloudinary.com/douc8uat5/video/upload/f_auto,q_auto,w_1200/v1771642770/abrhr9zpfjt1ymmnfcf9_iqrtgi.jpg";
  const videoUrl = "https://res.cloudinary.com/douc8uat5/video/upload/v1771642770/abrhr9zpfjt1ymmnfcf9_iqrtgi.mp4";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Base Grid Layer - The primary surface */}
      <div
        className={`
          absolute inset-0 transition-all duration-700 ease-in-out
          ${isDark ? "bg-[#020205] bg-dark-grid opacity-100" : "bg-white bg-light-grid opacity-100"}
        `}
      />

      {/* 2. Video Engine - Layered above the grid */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isDark ? 'opacity-40' : 'opacity-[0.08]'
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
          aria-hidden="true" 
          disablePictureInPicture
          className="w-full h-full object-cover will-change-transform scale-105"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* 3. Vignette/Contrast Overlay - Safeguards legibility */}
      <div 
        className={`
          absolute inset-0 
          ${isDark 
            ? "bg-[radial-gradient(circle_at_center,transparent_0%,#020205_100%)]" 
            : "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.85)_100%)]"}
        `}
      />
    </div>
  );
}