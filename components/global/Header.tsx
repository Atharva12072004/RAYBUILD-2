"use client";
import Link from "next/link";
import {useState} from "react";
import {Menu,X,Phone} from "lucide-react";
import {siteConfig,divisions} from "@/config/site";
export default function Header({active}:{active:"solar"|"construction"}){
 const [open,setOpen]=useState(false); const base=active==="solar"?divisions.solar:divisions.construction;
 const phone=`tel:${siteConfig.phone.replace(/[^\d+]/g,"")}`;
 return <header className="header"><div className="container header-inner"><Link href={base.href} className="brand"><img src="/logo/raybuild-logo.svg" alt="Raybuild Group"/></Link><nav className="desktop-nav"><Link href={base.href}>Home</Link><Link href={`${base.href}/about`}>About</Link><Link href={`${base.href}/services`}>Services</Link><Link href={`${base.href}/projects`}>Projects</Link><Link href={`${base.href}/contact`}>Contact</Link></nav><a className="call-btn" href={phone}><Phone size={17}/> Call Now</a><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div>{open&&<div className="mobile-menu"><Link href={base.href} onClick={()=>setOpen(false)}>Home</Link><Link href={`${base.href}/about`} onClick={()=>setOpen(false)}>About</Link><Link href={`${base.href}/services`} onClick={()=>setOpen(false)}>Services</Link><Link href={`${base.href}/projects`} onClick={()=>setOpen(false)}>Projects</Link><Link href={`${base.href}/contact`} onClick={()=>setOpen(false)}>Contact</Link><a className="call-btn" href={phone}>Call Now</a></div>}</header>;
}
