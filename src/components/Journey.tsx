import { TIMELINE } from "../data/content";

export default function Journey() {
  return (
    <section id="journey">
      <div className="wrap split">
        <div className="rv"><div className="lab">04 / Journey</div><h2 className="d">Path so far.</h2></div>
        <div className="rv">
          <div className="tl">
            {TIMELINE.map((t) => (
              <div key={t.title}>
                <span className="lab">{t.label}</span>
                <h3>{t.title}</h3>
                {t.text && <p>{t.text}</p>}
                {t.links?.map(([l, h], i) => (
                  <span key={l}>{i > 0 && " · "}<a href={h} target="_blank" rel="noopener">{l}</a></span>
                ))}
              </div>
            ))}
          </div>
          <div className="val">
            <div><b>Ships</b><br />Turns ideas into working apps, end to end.</div>
            <div><b>Understands</b><br />Reads and reasons about the code, not just prompts it.</div>
            <div><b>Adapts</b><br />Picks up new stacks quickly and keeps learning.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
