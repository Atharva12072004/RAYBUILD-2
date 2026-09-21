import Link from "next/link";
import {ArrowRight} from "lucide-react";
export default function CrossPromotion({active}:{active:"solar"|"construction"}){
 const solar=active==="solar";
 return <section className="cross-promo"><div className="container cross-inner"><div><span className="eyebrow">RAYBUILD GROUP</span><h2>{solar?"Looking for Heavy Civil Solutions?":"Lower Your Infrastructure Operational Costs!"}</h2><p>{solar?"Explore Raybuild Construction for Turnkey Projects, Engineering, Plot Infrastructure, and Advanced Waterproofing Services.":"Explore Raybuild Solar for Industrial Megawatt Rooftops, Government Subsidy Approval, and Highmast Smart Lighting Setups."}</p></div><Link className="btn btn-primary" href={solar?"/construction":"/solar"}>{solar?"Go to Construction Website":"Go to Solar Website"} <ArrowRight size={17}/></Link></div></section>;
}
