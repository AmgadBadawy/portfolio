"use client";

import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  onClick?: () => void;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 6,
  glowColor = "rgba(34, 211, 238, 0.14)",
  onClick,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ rotateX, rotateY, scale: 1.015 });
    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div style={{ perspective: "1000px" }} className="h-full">
      <div
        ref={ref}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
          transition:
            tilt.rotateX === 0
              ? "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
              : "transform 0.08s ease-out",
        }}
        className={`relative h-full overflow-hidden ${className}`}
      >
        {/* Dynamic 3D Mouse Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px z-20 transition-opacity duration-300"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(380px circle at ${spotlight.x}% ${spotlight.y}%, ${glowColor}, transparent 80%)`,
          }}
        />
        {children}
      </div>
    </div>
  );
}
