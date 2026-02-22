import React from "react";

const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Dynamic Animated Glow */}
      <div 
        className="absolute w-[150vmax] h-[150vmax] rounded-full opacity-20 dark:opacity-10 blur-[100px] animate-[spin_40s_linear_infinite]"
        style={{
          top: "-25%",
          left: "-25%",
          background: `radial-gradient(circle, hsl(var(--page-accent)) 0%, transparent 50%)`,
        }}
      />
      
      {/* Optional: Subtle Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default NeuralBackground;