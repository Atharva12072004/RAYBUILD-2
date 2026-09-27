export type Project = {
  title: string;
  meta: string;
  description: string;
  image: string;
};

export const solarProjects: Project[] = [
  {
    title: "On-Grid Parking Rooftop",
    meta: "Uttan · On-grid solar",
    description: "A parking-rooftop system documented as a current project in the supplied portfolio.",
    image: "/images/portfolio/solar/parking-rooftop.jpg",
  },
  {
    title: "On-Grid Household Rooftops",
    meta: "Residential solar",
    description: "Completed household rooftop solar installations presented in the supplied portfolio.",
    image: "/images/portfolio/solar/residential-rooftop.jpg",
  },
  {
    title: "Solar & LED Highmast Installation",
    meta: "Highmast infrastructure",
    description: "Site preparation, pole erection and lighting work shown in the source project material.",
    image: "/images/portfolio/solar/highmast-installation.jpg",
  },
  {
    title: "Electrical Highmast Installation",
    meta: "Electrical infrastructure",
    description: "Foundation and installation-stage highmast work from the supplied project portfolio.",
    image: "/images/portfolio/solar/electrical-highmast.jpg",
  },
  {
    title: "Street Light & Highmast Coverage",
    meta: "Raigad District",
    description: "The portfolio cites street-light and highmast work across 100+ villages in Raigad District.",
    image: "/images/portfolio/solar/street-light-project.jpg",
  },
  {
    title: "Special-Project Street Lighting",
    meta: "Mumbai locations",
    description: "The source portfolio lists work at Aarey Colony, Borivali National Park, Mankhurd and Kandivali.",
    image: "/images/portfolio/solar/street-light-installation.jpg",
  },
];

export const constructionProjects: Project[] = [
  { title: "Triputi Bridge", meta: "Bridge works", description: "Project featured in the supplied construction portfolio.", image: "/images/portfolio/construction/triputi-bridge.jpg" },
  { title: "Reddy Bridge", meta: "Kokan · Bridge works", description: "Project featured in the supplied construction portfolio.", image: "/images/portfolio/construction/reddy-bridge.jpg" },
  { title: "PMC New Building", meta: "New building", description: "Project featured in the supplied construction portfolio.", image: "/images/portfolio/construction/pmc-new-building.jpg" },
  { title: "Nandval Bridge", meta: "Bridge works", description: "Project featured in the supplied construction portfolio.", image: "/images/portfolio/construction/nandval-bridge.jpg" },
  { title: "Sonake Bridge", meta: "Bridge works", description: "Project featured in the supplied construction portfolio.", image: "/images/portfolio/construction/sonake-bridge.jpg" },
  { title: "Jamboli MIDC", meta: "Mumbai · Industrial infrastructure", description: "Project featured in the supplied construction portfolio.", image: "/images/portfolio/construction/jamboli-midc.jpg" },
  { title: "Hindalco", meta: "Singrauli · Industrial project", description: "Project featured in the supplied construction portfolio.", image: "/images/portfolio/construction/hindalco-singrauli.jpg" },
  { title: "Dynamics Schreiber", meta: "Baramati · Industrial project", description: "Project featured in the supplied construction portfolio.", image: "/images/portfolio/construction/dynamics-schreiber.jpg" },
  { title: "Maruti Suzuki", meta: "Indore · Commercial project", description: "Project featured in the supplied construction portfolio.", image: "/images/portfolio/construction/maruti-suzuki-indore.jpg" },
];
