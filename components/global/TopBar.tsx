"use client";
import Link from "next/link";
import { divisions } from "@/config/site";
export default function TopBar({active}:{active:"solar"|"construction"}){
  return <div className="topbar"><div className="container topbar-inner"><span>Welcome to Raybuild Group</span><div className="topbar-links"><Link className={active==="solar"?"active":""} href={divisions.solar.href}>Visit Solar Division</Link><Link className={active==="construction"?"active":""} href={divisions.construction.href}>Visit Construction Division</Link></div></div></div>;
}
