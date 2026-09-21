import {notFound} from "next/navigation";
import ServicePage from "@/components/pages/ServicePage";
import { solarServices } from "@/content/solar";
export function generateStaticParams(){return solarServices.map(s=>({slug:s.slug}));}
export default async function Page({params}:{params:{slug:string}}){const service=solarServices.find(s=>s.slug===params.slug);if(!service)notFound();return <ServicePage type="solar" service={service}/>;}
