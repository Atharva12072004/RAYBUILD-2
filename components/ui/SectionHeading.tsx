import Reveal from "@/components/animations/Reveal";

export default function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return <Reveal className={`section-heading ${light ? "light" : ""}`}><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div></Reveal>;
}
