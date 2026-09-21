import Link from "next/link";
import {siteConfig,divisions} from "@/config/site";
export default function Footer({active}:{active:"solar"|"construction"}){
 const d=active==="solar"?divisions.solar:divisions.construction;
 const phone=`tel:${siteConfig.phone.replace(/[^\d+]/g,"")}`;
 const wa=`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Raybuild%20Group,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me.`;
 return <footer className="footer"><div className="container footer-grid"><div><img src="/logo/raybuild-logo.svg" className="footer-logo" alt="Raybuild Group"/><p>Raybuild Group brings together specialized clean-energy and infrastructure capabilities under one professional identity.</p></div><div><h3>Division</h3><Link href="/solar">Raybuild Solar</Link><Link href="/construction">Raybuild Construction</Link></div><div><h3>Explore</h3><Link href={`${d.href}/about`}>About</Link><Link href={`${d.href}/services`}>Services</Link><Link href={`${d.href}/projects`}>Projects</Link><Link href={`${d.href}/contact`}>Contact</Link></div><div><h3>Contact</h3><a href={phone}>{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={wa}>WhatsApp</a><span>{siteConfig.address}</span></div></div><div className="container footer-bottom">© 2026 Raybuild Group. All Rights Reserved. A Unit of Raybuild Multi-Sector Enterprises.</div></footer>;
}
