import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
export default function ServiceCard({service,base}:{service:any,base:string}){return <article className="service-card"><img src={service.image} alt="" loading="lazy"/><div className="service-body"><span className="service-tag">ENGINEERING SERVICE</span><h3>{service.title}</h3><p>{service.description}</p><Link href={`${base}/services/${service.slug}`}>View Details <ArrowUpRight size={16}/></Link></div></article>}
