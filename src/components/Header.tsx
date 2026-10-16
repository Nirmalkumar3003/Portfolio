import { useScrollState } from "../hooks/useScrollState";

const NAV = ["about", "skills", "projects", "journey", "contact"];

export default function Header() {
  const { active, progress } = useScrollState(NAV);
  return (
    <>
      <div id="prog" style={{ width: progress + "%" }} />
      <header>
        <a className="logo" href="#top">NM<span style={{ color: "var(--acc)" }}>/</span></a>
        <nav aria-label="Primary">
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? "on" : ""}>{id}</a>
          ))}
        </nav>
      </header>
      <a className="hire" href="#contact" data-mag>Hire me →</a>
    </>
  );
}
