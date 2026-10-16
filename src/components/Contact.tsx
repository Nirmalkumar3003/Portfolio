import { FormEvent, useState } from "react";
import { LINKS } from "../data/content";

interface Errors { n?: string; e?: string; m?: string }

export default function Contact() {
  const [f, setF] = useState({ n: "", e: "", m: "" });
  const [err, setErr] = useState<Errors>({});
  const [msg, setMsg] = useState("");
  const set = (k: keyof typeof f) => (ev: { target: { value: string } }) => setF({ ...f, [k]: ev.target.value });

  // No backend is connected, so this opens the visitor's email app instead of faking a send.
  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const x: Errors = {};
    if (!f.n.trim()) x.n = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.e)) x.e = "Enter a valid email.";
    if (f.m.trim().length < 10) x.m = "Message needs at least 10 characters.";
    setErr(x);
    if (Object.keys(x).length) { setMsg("Please fix the highlighted fields."); return; }
    setMsg(`Opening your email app. If nothing opens, write to ${LINKS.email} directly.`);
    location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent("Portfolio enquiry from " + f.n)}&body=${encodeURIComponent(f.m + "\n\nReply to: " + f.e)}`;
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="lab rv">05 / Contact</div>
        <h2 className="d rv">Have an interesting problem? <span style={{ color: "var(--acc)" }}>Let's build the solution.</span></h2>
        <div className="links rv">
          <a className="btn p" href={`mailto:${LINKS.email}`} data-mag>Email</a>
          <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener" data-mag>LinkedIn</a>
          <a className="btn" href={LINKS.github} target="_blank" rel="noopener" data-mag>GitHub</a>
          <a className="btn" href={LINKS.resume} target="_blank" rel="noopener" data-mag>Resume</a>
        </div>
        <form className="rv" noValidate onSubmit={submit}>
          <div><label htmlFor="n">Name</label><input id="n" autoComplete="name" value={f.n} onChange={set("n")} aria-invalid={!!err.n} /><div className="err">{err.n}</div></div>
          <div><label htmlFor="e">Email</label><input id="e" type="email" autoComplete="email" value={f.e} onChange={set("e")} aria-invalid={!!err.e} /><div className="err">{err.e}</div></div>
          <div><label htmlFor="m">Message</label><textarea id="m" rows={4} value={f.m} onChange={set("m")} aria-invalid={!!err.m} /><div className="err">{err.m}</div></div>
          <button className="btn p" type="submit">Open in my email app</button>
          <div id="msg" className="lab" role="status">{msg}</div>
        </form>
      </div>
    </section>
  );
}
