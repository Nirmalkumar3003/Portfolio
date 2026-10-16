import { useCallback, useEffect, useRef, useState } from "react";

const MSGS = ["compiling nirmalkumar.java", "linking modules", "rendering universe"];

export default function Loader({ onDone }: { onDone: () => void }) {
  const [v, setV] = useState(0);
  const [out, setOut] = useState(false);
  const [gone, setGone] = useState(false);
  const done = useRef(false);

  const fin = useCallback(() => {
    if (done.current) return;
    done.current = true;
    setOut(true);
    onDone();
    setTimeout(() => setGone(true), 950);
  }, [onDone]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) { fin(); return; }
    const t = setInterval(() => setV((x) => Math.min(100, x + Math.ceil(Math.random() * 14))), 130);
    return () => clearInterval(t);
  }, [fin]);

  useEffect(() => {
    if (v >= 100) { const t = setTimeout(fin, 250); return () => clearTimeout(t); }
  }, [v, fin]);

  if (gone) return null;
  return (
    <div id="load" className={out ? "out" : ""} role="status" aria-live="polite">
      <div className="d" style={{ fontSize: "clamp(28px,6vw,54px)" }}>{v}%</div>
      <div className="bar"><i style={{ width: v + "%" }} /></div>
      <div className="lab">{MSGS[Math.min(2, Math.floor(v / 34))]}</div>
      <button type="button" onClick={fin}>Skip intro</button>
    </div>
  );
}
