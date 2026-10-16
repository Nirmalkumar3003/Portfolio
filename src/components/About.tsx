const POINTS = [
  "Quick to adapt to new technologies",
  "Understands code logic, architecture and project structure",
  "Builds real projects with AI-assisted development",
  "Interested in clean code, algorithms and problem-solving",
  "Always learning: Java full stack internship, plus DSA, DBMS and JavaScript certifications",
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap split">
        <div className="rv"><div className="lab">01 / How I build</div><h2 className="d">Developer, not a biography.</h2>
          <figure className="portrait">
            <img src="/profile.jpg" width={720} height={830} alt="Portrait of Nirmalkumar M" loading="lazy" />
            <figcaption className="lab">NM / TIRUPUR, IN</figcaption>
          </figure>
        </div>
        <div className="rv">
          <p className="big">I'm Nirmalkumar, an aspiring software engineer who builds <b>practical, scalable</b> products across frontend and backend, and uses <b>AI tools</b> to move faster without losing sight of the logic underneath.</p>
          <ul className="pts" style={{ marginTop: 30 }}>
            {POINTS.map((p) => <li key={p}><span>→</span>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
