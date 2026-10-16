import { useEffect, useState } from "react";

/** Scroll progress (0-100) and the id of the section currently in view. */
export function useScrollState(ids: string[]) {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      setProgress((scrollY / (h.scrollHeight - innerHeight)) * 100);
      let cur = "";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.4) cur = id;
      });
      setActive(cur);
    };
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, [ids.join()]);
  return { active, progress };
}
