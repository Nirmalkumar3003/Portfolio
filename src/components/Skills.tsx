import { useState } from "react";
import { TECH } from "../data/content";

export default function Skills() {
  const keys = Object.keys(TECH);
  const [sel, setSel] = useState(keys[0]);
  const [use, flow, related] = TECH[sel];
  return (
    <section id="skills">
      <div className="wrap">
        <div className="lab rv">02 / Stack</div>
        <h2 className="d rv">Tools I reach for.</h2>
        <div className="sk">
          <div className="cloud rv" role="group" aria-label="Technologies">
            {keys.map((k) => (
              <button key={k} type="button" aria-pressed={k === sel} onClick={() => setSel(k)}>{k}</button>
            ))}
          </div>
          <div className="panel rv" aria-live="polite">
            <div className="lab">Selected</div>
            <h3 className="d">{sel}</h3>
            <p><b>Use:</b> {use}</p>
            <p><b>Workflow:</b> {flow}</p>
            <p><b>Related:</b> {related}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
