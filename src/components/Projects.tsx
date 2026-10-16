import { useEffect, useRef, useState } from "react";
import { PROJECTS, Project } from "../data/content";

export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dlg.current!;
    if (sel && !d.open) d.showModal();
    if (!sel && d.open) d.close();
  }, [sel]);

  return (
    <section id="projects">
      <div className="head wrap rv">
        <div className="lab">03 / Work</div>
        <h2 className="d">Projects.</h2>
        <p className="lab" style={{ marginTop: -20 }}>Scroll sideways or swipe. Open any card for the case study.</p>
      </div>
      <div className="reel" tabIndex={0} aria-label="Project reel">
        {PROJECTS.map((p) => (
          <button key={p.id} type="button" className={`proj ${p.cls}`} onClick={() => setSel(p)}>
            <span className="n d" aria-hidden="true">{p.n}</span>
            <div><span className={`st ${p.st}`}>{p.stl}</span><h3 className="d">{p.t}</h3><p>{p.d}</p></div>
            <div>
              <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              <span className="lab">Open case study →</span>
            </div>
          </button>
        ))}
      </div>

      <dialog ref={dlg} aria-labelledby="dt" onClose={() => setSel(null)} onClick={(e) => { if (e.target === dlg.current) setSel(null); }}>
        {sel && (
          <div className="dc">
            <button className="x" type="button" onClick={() => setSel(null)}>Close ✕</button>
            <span className={`st ${sel.st}`}>{sel.stl}</span>
            <h3 id="dt" className="d">{sel.t}</h3>
            <dl>
              <dt>Problem</dt><dd>{sel.prob}</dd>
              <dt>Solution</dt><dd>{sel.sol}</dd>
              <dt>Stack</dt><dd>{sel.stack}</dd>
              <dt>My contribution</dt><dd>{sel.me}</dd>
              <dt>Key decisions</dt><dd>{sel.dec}</dd>
              <dt>Links</dt>
              <dd>
                {sel.links.length ? (
                  <div className="lk">
                    {sel.links.map(([label, href]) => (
                      <a key={label} className="box" href={href} target="_blank" rel="noopener">{label}{label === "Live demo" ? " ↗" : ""}</a>
                    ))}
                  </div>
                ) : "[Repository and demo links to be added]"}
              </dd>
            </dl>
          </div>
        )}
      </dialog>
    </section>
  );
}
