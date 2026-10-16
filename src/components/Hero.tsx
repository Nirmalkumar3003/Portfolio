import { LINKS } from "../data/content";

export default function Hero() {
  return (
    <section id="top">
      <div className="coords lab">LAT 11.1085° N<br />LON 77.3411° E<br />TIRUPUR, IN</div>
      <div className="wrap" style={{ width: "100%" }}>
        <div className="avail"><span className="dot" /> OPEN TO FULL-TIME OPPORTUNITIES</div>
        <h1 className="d" aria-label="Nirmalkumar M">
          <span className="l"><span>Nirmal</span></span>
          <span className="l"><span>kumar<em>.</em></span></span>
        </h1>
        <p className="tag d">An engineer ideas into experiences.</p>
        <p className="sub">Software developer targeting <b>Full Stack</b>, <b>Java</b> and <b>Web</b> roles. I build modern web applications and AI-assisted software, and I read the code I ship.</p>
        <div className="cta">
          <a className="btn p" href="#projects" data-mag>Explore My Work</a>
          <a className="btn" href={LINKS.resume} target="_blank" rel="noopener" data-mag>View Resume</a>
          <a className="btn" href="#contact" data-mag>Let's Connect</a>
        </div>
      </div>
    </section>
  );
}
