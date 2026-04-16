"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number;
  height?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
}

export function DotPattern({
  width = 20,
  height = 20,
  cx = 2,
  cy = 2,
  cr = 1.2,
  className,
  glow = false,
}: DotPatternProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!section) return;

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMouse({ x, y });
    };

    section.addEventListener("mousemove", handleMove);
    return () => section.removeEventListener("mousemove", handleMove);
  }, []);

  const id = "dot-pattern";

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      style={{
        maskImage: `radial-gradient(350px circle at ${mouse.x}% ${mouse.y}%, white, transparent)`,
        WebkitMaskImage: `radial-gradient(350px circle at ${mouse.x}% ${mouse.y}%, white, transparent)`,
        transition: "mask-image 0.08s ease, -webkit-mask-image 0.08s ease",
      }}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle
            cx={cx}
            cy={cy}
            r={cr}
            fill={glow ? "var(--accent-light)" : "var(--accent)"}
            opacity={glow ? 0.6 : 0.35}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
