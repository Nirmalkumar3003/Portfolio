import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matchMedia("(hover:hover) and (pointer:fine)").matches || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const el = ref.current!;
    const move = (e: PointerEvent) => { el.style.transform = `translate(${e.clientX - 17}px,${e.clientY - 17}px)`; };
    const over = (e: PointerEvent) => el.classList.toggle("h", !!(e.target as Element).closest("a,button,.proj"));
    addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    return () => { removeEventListener("pointermove", move); document.removeEventListener("pointerover", over); };
  }, []);
  return <div id="cur" ref={ref} />;
}
