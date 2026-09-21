import {notFound} from "next/navigation";
import ServicePage from "@/components/pages/ServicePage";
import { constructionServices } from "@/content/construction";
export function generateStaticParams(){return constructionServices.map(s=>({slug:s.slug}));}
export default async function Page({params}:{params:{slug:string}}){const service=constructionServices.find(s=>s.slug===params.slug);if(!service)notFound();return <ServicePage type="construction" service={service}/>;}
