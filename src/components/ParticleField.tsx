import { useEffect, useRef } from "react";

interface P { x: number; y: number; vx: number; vy: number }

export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!, cx = cv.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    let W = 0, H = 0, mx = -999, my = -999, run = true, raf = 0, pts: P[] = [];
    const resize = () => {
      W = cv.width = innerWidth; H = cv.height = innerHeight;
      const n = Math.min(110, Math.floor((W * H) / 16000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 }));
    };
    const pm = (e: PointerEvent) => { mx = e.clientX; my = e.clientY; };
    const draw = () => {
      if (!run) return;
      cx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
        if (d < 140) { p.x += (dx / d) * 1.2; p.y += (dy / d) * 1.2; }
        cx.fillStyle = d < 140 ? "#c6ff3d" : "#6b6e75";
        cx.fillRect(p.x, p.y, 2, 2);
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], a = p.x - q.x, b = p.y - q.y, dd = a * a + b * b;
          if (dd < 10000) {
            cx.strokeStyle = `rgba(198,255,61,${0.16 * (1 - dd / 10000)})`;
            cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(q.x, q.y); cx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    const vis = () => { if (reduce) return; run = !document.hidden; if (run) { cancelAnimationFrame(raf); draw(); } };
    resize(); draw();
    if (reduce) run = false;
    addEventListener("resize", resize);
    addEventListener("pointermove", pm);
    document.addEventListener("visibilitychange", vis);
    return () => {
      run = false; cancelAnimationFrame(raf);
      removeEventListener("resize", resize); removeEventListener("pointermove", pm);
      document.removeEventListener("visibilitychange", vis);
    };
  }, []);
  return <canvas id="bg" ref={ref} aria-hidden="true" />;
}
