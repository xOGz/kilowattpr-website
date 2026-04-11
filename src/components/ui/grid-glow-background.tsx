"use client";

import React, { useRef, useEffect } from "react";

interface GridGlowBackgroundProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  gridColor?: string;
  gridSize?: number;
  glowColors?: string[];
  glowCount?: number;
}

export const GridGlowBackground: React.FC<GridGlowBackgroundProps> = ({
  children,
  className = "",
  backgroundColor = "#121240",
  gridColor = "rgba(245, 166, 35, 0.06)",
  gridSize = 50,
  glowColors = ["#F5A623", "#E09500", "#3DD8F5", "#F5A623"],
  glowCount = 8,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let glows: GlowInstance[] = [];
    let frameId: number;

    interface GlowInstance {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      radius: number;
      speed: number;
      color: string;
      alpha: number;
      update: () => void;
      draw: () => void;
    }

    const createGlow = (): GlowInstance => {
      const glow: GlowInstance = {
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize,
        targetX: 0,
        targetY: 0,
        radius: Math.random() * 100 + 50,
        speed: Math.random() * 0.012 + 0.008,
        color: glowColors[Math.floor(Math.random() * glowColors.length)],
        alpha: 0,
        update() {
          this.x += (this.targetX - this.x) * this.speed;
          this.y += (this.targetY - this.y) * this.speed;
          if (
            Math.abs(this.targetX - this.x) < 1 &&
            Math.abs(this.targetY - this.y) < 1
          ) {
            this.targetX =
              Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
            this.targetY =
              Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
          }
          if (this.alpha < 1) this.alpha += 0.008;
        },
        draw() {
          if (!ctx) return;
          ctx.globalAlpha = this.alpha;
          const grad = ctx.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.radius
          );
          grad.addColorStop(0, this.color);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.globalAlpha = 1;
        },
      };
      glow.targetX =
        Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
      glow.targetY =
        Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
      return glow;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      glows = Array.from({ length: glowCount }, () => createGlow());
    };

    const drawGrid = () => {
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      glows.forEach((g) => {
        g.update();
        g.draw();
      });
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, [gridColor, gridSize, glowColors, glowCount]);

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ backgroundColor }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full opacity-40"
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default GridGlowBackground;
