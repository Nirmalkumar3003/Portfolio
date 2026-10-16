import { useEffect } from "react";

/** Subtle cursor attraction on every [data-mag] element (desktop, motion allowed). */
export function useMagnetic() {
  useEffect(() => {
    if (!matchMedia("(hover:hover) and (pointer:fine)").matches || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const cleanups: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>("[data-mag]").forEach((b) => {
      const move = (e: PointerEvent) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
      };
      const leave = () => { b.style.transform = ""; };
      b.addEventListener("pointermove", move);
      b.addEventListener("pointerleave", leave);
      cleanups.push(() => { b.removeEventListener("pointermove", move); b.removeEventListener("pointerleave", leave); });
    });
    return () => cleanups.forEach((c) => c());
  }, []);
}
