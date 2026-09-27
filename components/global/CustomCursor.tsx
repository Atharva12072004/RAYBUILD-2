"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopViewport = window.matchMedia("(min-width: 901px)");
    const updateAvailability = () => setEnabled(finePointer.matches && desktopViewport.matches && !reducedMotion.matches);

    updateAvailability();
    finePointer.addEventListener("change", updateAvailability);
    reducedMotion.addEventListener("change", updateAvailability);
    desktopViewport.addEventListener("change", updateAvailability);
    return () => {
      finePointer.removeEventListener("change", updateAvailability);
      reducedMotion.removeEventListener("change", updateAvailability);
      desktopViewport.removeEventListener("change", updateAvailability);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !dotRef.current || !ringRef.current) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const root = document.documentElement;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frameId = 0;

    root.classList.add("has-custom-cursor");

    const setDotPosition = () => {
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      dot.classList.add("is-active");
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      setDotPosition();
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest("a, button, input, select, textarea, [role='button'], .feature-card, .service-card, .division-popup-card, [data-cursor]");
      const image = target.closest("img, [data-cursor='image']");
      ring.classList.toggle("hover", Boolean(interactive));
      ring.classList.toggle("image-hover", Boolean(image));
    };

    const handlePointerLeave = () => {
      dot.classList.remove("is-active");
      ring.classList.remove("is-active");
    };

    const handlePointerEnter = () => {
      dot.classList.add("is-active");
      ring.classList.add("is-active");
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frameId = window.requestAnimationFrame(animateRing);
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    document.documentElement.addEventListener("pointerenter", handlePointerEnter);
    animateRing();

    return () => {
      window.cancelAnimationFrame(frameId);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      document.documentElement.removeEventListener("pointerenter", handlePointerEnter);
      root.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}
