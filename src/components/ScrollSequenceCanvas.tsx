"use client";

import React, { useEffect, useRef } from "react";

interface ScrollSequenceCanvasProps {
  containerRef: React.RefObject<HTMLElement | null>;
  frameCount?: number;
  framePath?: (index: number) => string;
  className?: string;
  onFrameChange?: (frame: number, progress: number) => void;
}

export default function ScrollSequenceCanvas({
  containerRef,
  frameCount = 50,
  framePath = (i: number) => `/frames/ezgif-frame-${String(i).padStart(3, "0")}.png`,
  className = "",
  onFrameChange,
}: ScrollSequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const targetFrameRef = useRef<number>(1);
  const currentFrameRef = useRef<number>(1);
  const lastRenderedRef = useRef<number>(-1);
  const needsRedrawRef = useRef<boolean>(true);
  const onFrameChangeRef = useRef(onFrameChange);

  useEffect(() => {
    onFrameChangeRef.current = onFrameChange;
  });

  useEffect(() => {
    const images: (HTMLImageElement | null)[] = [];
    imagesRef.current = images;

    // 1. Priority load: Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = framePath(1);
    firstImg.onload = () => {
      needsRedrawRef.current = true;
    };
    images[1] = firstImg;

    // 2. Preload remaining frames progressively
    for (let i = 2; i <= frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        // Redraw if current frame is waiting for this or near it
        const currentRounded = Math.round(currentFrameRef.current);
        if (Math.abs(currentRounded - i) <= 2) {
          needsRedrawRef.current = true;
        }
      };
      images[i] = img;
    }

    // Scroll handler to map progress 0..1 to 1..frameCount
    const updateScrollProgress = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));

      // Map progress directly to frame index [1 .. frameCount]
      const target = 1 + progress * (frameCount - 1);
      targetFrameRef.current = target;
    };

    // Calculate initial position
    updateScrollProgress();

    // Event listeners
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", () => {
      needsRedrawRef.current = true;
      updateScrollProgress();
    }, { passive: true });

    // Animation Loop with Smooth Lerp
    let rafId: number;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const drawFrame = (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      // Retina / DPR handling
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      const targetW = Math.round(w * dpr);
      const targetH = Math.round(h * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      // Find target image or fallback to closest loaded frame
      let bestImg: HTMLImageElement | null = imagesRef.current[frameIndex] || null;
      if (!bestImg || !bestImg.complete || bestImg.naturalWidth === 0) {
        for (let offset = 1; offset <= frameCount; offset++) {
          const prev = frameIndex - offset;
          const next = frameIndex + offset;

          const prevImg = prev >= 1 ? imagesRef.current[prev] : null;
          if (prevImg && prevImg.complete && prevImg.naturalWidth > 0) {
            bestImg = prevImg;
            break;
          }

          const nextImg = next <= frameCount ? imagesRef.current[next] : null;
          if (nextImg && nextImg.complete && nextImg.naturalWidth > 0) {
            bestImg = nextImg;
            break;
          }
        }
      }

      if (!bestImg || !bestImg.complete || bestImg.naturalWidth === 0) {
        return;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Seamless Cover Aspect Ratio Calculation (1920x1080)
      const nw = bestImg.naturalWidth;
      const nh = bestImg.naturalHeight;
      const imgRatio = nw / nh;
      const canvasRatio = w / h;

      let renderW = w;
      let renderH = h;
      let offX = 0;
      let offY = 0;

      if (canvasRatio > imgRatio) {
        renderW = w;
        renderH = w / imgRatio;
        offY = (h - renderH) / 2;
      } else {
        renderH = h;
        renderW = h * imgRatio;
        offX = (w - renderW) / 2;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(bestImg, offX, offY, renderW, renderH);

      ctx.restore();
    };

    const animate = () => {
      const isReducedMotion = mediaQuery.matches;
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;

      // Lerp toward target smoothly
      const lerpFactor = isReducedMotion ? 1 : 0.14;
      const diff = target - current;

      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * lerpFactor;
      } else {
        currentFrameRef.current = target;
      }

      const frameToRender = Math.min(
        frameCount,
        Math.max(1, Math.round(currentFrameRef.current))
      );

      if (frameToRender !== lastRenderedRef.current || needsRedrawRef.current) {
        drawFrame(frameToRender);
        if (frameToRender !== lastRenderedRef.current) {
          lastRenderedRef.current = frameToRender;
          onFrameChangeRef.current?.(frameToRender, (frameToRender - 1) / (frameCount - 1));
        }
        needsRedrawRef.current = false;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [containerRef, frameCount, framePath]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
