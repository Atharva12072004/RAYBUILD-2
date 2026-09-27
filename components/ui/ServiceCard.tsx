"use client";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function ServiceCard({
  service,
  base,
}: {
  service: any;
  base: string;
}) {
  const handleCardClick = () => {
    window.dispatchEvent(
      new Event("raybuild-open-solar-lead-popup")
    );
  };

  return (
    <Reveal>
      <article className="service-card">
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
      />

      <div className="service-body">
        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <span className="service-details">
          <span>View Details</span>
          <ArrowRight size={17} aria-hidden="true" />
        </span>
      </div>
      </article>
    </Reveal>
  );
}