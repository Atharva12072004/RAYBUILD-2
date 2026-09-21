import {Phone,MessageCircle} from "lucide-react";
import {siteConfig} from "@/config/site";
export default function FloatingActions(){const p=siteConfig.phone.replace(/[^\d+]/g,"");const w=`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Raybuild%20Group,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me.`;return <><a className="fab fab-call" href={`tel:${p}`} aria-label="Call Raybuild"><Phone/></a><a className="fab fab-wa" href={w} aria-label="WhatsApp Raybuild"><MessageCircle/></a></>;}
