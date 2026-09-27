import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CrossPromotion from "@/components/global/CrossPromotion";
import { solarServices } from "@/content/solar";
import { constructionServices } from "@/content/construction";

export default function DivisionHome({ type }: { type: "solar" | "construction" }) {
  const solar = type === "solar";
  const services = solar ? solarServices : constructionServices;
  const features = solar
    ? ["Certified Experts", "Top-Quality Hardware", "End-to-End Service", "Affordable Financing"]
    : ["Engineering Focus", "End-to-End Execution", "Structural Reliability", "Transparent Scope"];
  const featureCopy = solar
    ? [
        "A dedicated team of highly experienced electrical engineers and MNRE certified solar installers.",
        "We deploy tier-1 high-efficiency Mono PERC/Bifacial panels and smart remote-monitoring inverters with up to 25 years warranty.",
        "Complete ownership from initial shadowing analysis, civil structures engineering, net-metering approvals to direct subsidy processing.",
        "Hassle-free custom EMI options and green energy loan assistance available.",
      ]
    : [
        "Engineering-led planning for new civil and structural work.",
        "Total site execution with precise tracking from layouts to final works.",
        "Structural repair, retrofitting, waterproofing and infrastructure capabilities.",
        "Scope-led execution using editable, verified project information.",
      ];

  return (
    <>
      <section className={`hero ${solar ? "hero-solar" : "hero-construction"}`}>
        <div className="container hero-grid">
          <Reveal direction="right">
            <span className="eyebrow">{solar ? "RAYBUILD SOLAR · CLEAN ENERGY" : "RAYBUILD CONSTRUCTION · ENGINEERING"}</span>
            <h1>{solar ? "Switch to Clean Energy with Raybuild. Save Big on Electricity Bills!" : "Engineering Trust. Building Reality. Turnkey Infrastructure by Raybuild."}</h1>
            <p>{solar ? "Premium Solar Rooftop Solutions for Homes, Businesses, and Farms. Get government subsidy up to ₹78,000 under PM-Surya Ghar Yojana." : "Specialists in New Structural Civil Construction, Advanced Structural Repairs, Industrial Land Development, Plot Layouts, and Certified Waterproofing Systems."}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href={`/${type}/contact`}>{solar ? "Get a Free Quote Today" : "Request a Free Site Survey"} <ArrowRight size={17} /></Link>
              <Link className="btn btn-secondary" href={`/${type}/contact`}>{solar ? "Book Free Site Survey" : "Consult Our Engineer"}</Link>
            </div>
          </Reveal>
          <Reveal className="hero-art" direction="left" delay={0.12}>
            <img src={solar ? "/images/solar/hero.svg" : "/images/construction/hero.svg"} alt={solar ? "Raybuild Solar installation" : "Raybuild Construction project"} />
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="WHY RAYBUILD" title={solar ? "A technical partner from planning to execution." : "Built around engineering discipline and execution."} />
          <div className="feature-grid">
            {features.map((feature, index) => (
              <Reveal key={feature} delay={index * 0.07}>
                <article className="feature-card">
                  <CheckCircle2 />
                  <h3>{feature}</h3>
                  <p>{featureCopy[index]}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="SERVICES" title={solar ? "Specialized Solar & Lighting Systems" : "Construction & Infrastructure Capabilities"} />
          <div className="service-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} base={`/${type}`} />)}</div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <SectionHeading light eyebrow="START A CONVERSATION" title={solar ? "Tell us what you want your solar system to achieve." : "Bring your site requirement to our engineering team."} />
          <Link className="btn btn-light" href={`/${type}/contact`}>{solar ? "Talk to an Expert" : "Talk to Our Team"} <ArrowRight size={17} /></Link>
        </div>
      </section>
      <CrossPromotion active={type} />
    </>
  );
}
