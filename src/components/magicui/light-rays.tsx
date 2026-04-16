"use client";

import { CSSProperties } from "react";

interface LightRaysProps {
  className?: string;
  style?: CSSProperties;
  rayColor?: string;
  rayCount?: number;
  rayOpacity?: number;
}

export function LightRays({
  className = "",
  style,
  rayColor = "#715aff",
  rayCount = 12,
  rayOpacity = 0.18,
}: LightRaysProps) {
  const rays = Array.from({ length: rayCount });

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={style}
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="ray-center" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor={rayColor} stopOpacity={rayOpacity * 1.5} />
            <stop offset="100%" stopColor={rayColor} stopOpacity={0} />
          </radialGradient>
        </defs>

        {/* Ambient glow */}
        <ellipse
          cx="400"
          cy="200"
          rx="340"
          ry="260"
          fill="url(#ray-center)"
        />

        {/* Rays */}
        {rays.map((_, i) => {
          const angle = (i / rayCount) * 360;
          const rad = (angle * Math.PI) / 180;
          const spread = 4 + (i % 3) * 2;
          const length = 420 + (i % 5) * 60;
          const x2 = 400 + Math.cos(rad) * length;
          const y2 = 200 + Math.sin(rad) * length;
          const x2a = 400 + Math.cos((angle + spread / 2) * (Math.PI / 180)) * length;
          const y2a = 200 + Math.sin((angle + spread / 2) * (Math.PI / 180)) * length;
          const x2b = 400 + Math.cos((angle - spread / 2) * (Math.PI / 180)) * length;
          const y2b = 200 + Math.sin((angle - spread / 2) * (Math.PI / 180)) * length;

          const opacity = i % 3 === 0 ? rayOpacity : i % 3 === 1 ? rayOpacity * 0.6 : rayOpacity * 0.35;

          return (
            <polygon
              key={i}
              points={`400,200 ${x2a},${y2a} ${x2},${y2} ${x2b},${y2b}`}
              fill={rayColor}
              opacity={opacity}
              style={{
                transformOrigin: "400px 200px",
                animation: `ray-drift-${i % 4} ${8 + (i % 5) * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          );
        })}
      </svg>

      <style>{`
        @keyframes ray-drift-0 {
          0%, 100% { opacity: 1; transform: rotate(0deg); }
          50% { opacity: 0.6; transform: rotate(3deg); }
        }
        @keyframes ray-drift-1 {
          0%, 100% { opacity: 0.7; transform: rotate(0deg); }
          50% { opacity: 1; transform: rotate(-2deg); }
        }
        @keyframes ray-drift-2 {
          0%, 100% { opacity: 0.5; transform: rotate(0deg); }
          50% { opacity: 0.85; transform: rotate(2deg); }
        }
        @keyframes ray-drift-3 {
          0%, 100% { opacity: 0.9; transform: rotate(0deg); }
          50% { opacity: 0.4; transform: rotate(-3deg); }
        }
      `}</style>
    </div>
  );
}
