import Link from "next/link";
import { ArrowRight, Building2, Mail, Phone, Sun } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import DivisionPopup from "@/components/forms/DivisionPopup";
import Header from "@/components/global/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-clip bg-[#f7f7f5] text-[#111]">
        <section className="relative overflow-hidden bg-[#111] text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />
            <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          </div>
          <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <Reveal direction="down">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">RAYBUILD GROUP</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  Building Tomorrow.<br />Powering Progress.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                  Raybuild Group brings together clean energy and construction expertise under one connected vision — creating practical, sustainable solutions for homes, businesses and infrastructure.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a href="#divisions" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-xl">
                    Explore Our Divisions <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/10">
                    Talk to Raybuild
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="relative hidden lg:block" direction="left" delay={0.16}>
              <div className="group relative mx-auto h-[480px] max-w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#242424] to-[#101010] shadow-2xl transition duration-500 hover:-translate-y-1 hover:shadow-black/50">
                <div className="absolute right-12 top-10 h-28 w-28 rounded-full bg-yellow-400/90 blur-[1px] transition duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 h-[230px] w-[65%] bg-[#353535]">
                  <div className="grid grid-cols-4 gap-3 p-6">
                    {Array.from({ length: 16 }).map((_, index) => <div key={index} className="h-9 rounded-sm bg-white/10" />)}
                  </div>
                </div>
                <div className="absolute bottom-[135px] right-8 rotate-[-12deg] transition duration-500 group-hover:rotate-[-9deg] group-hover:scale-105">
                  <div className="grid grid-cols-4 gap-1 rounded-md bg-blue-950 p-2 shadow-xl">
                    {Array.from({ length: 20 }).map((_, index) => <div key={index} className="h-9 w-12 border border-white/10 bg-blue-800" />)}
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 h-[110px] w-full skew-y-[-8deg] bg-[#1b1b1b]" />
                <div className="absolute bottom-7 left-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Solar • Construction</p>
                  <p className="mt-2 text-2xl font-bold">One Group. Two Divisions.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">About Raybuild Group</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">One vision. Multiple capabilities.</h2>
              <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Raybuild Group operates across two focused divisions — Raybuild Solar and Raybuild Construction. Each division brings specialised expertise while working under a common group identity.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-6">
              {[
                ["Integrated Approach", "Energy and infrastructure capabilities connected through one group."],
                ["Practical Solutions", "Solutions designed around real project requirements and long-term value."],
                ["Focused Expertise", "Dedicated divisions for solar energy and construction requirements."],
              ].map(([title, text], index) => (
                <Reveal key={title} delay={index * 0.08}>
                  <article className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-black/20 hover:shadow-xl sm:p-7">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="divisions" className="scroll-mt-20 bg-[#f1f1ee] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">Our Divisions</p>
              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Explore Raybuild</h2>
              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">Choose a specialised Raybuild division based on your project requirements.</p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
              <Reveal delay={0.04}>
                <Link href="/solar" className="group relative block overflow-hidden rounded-3xl bg-[#151515] p-7 text-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-10">
                  <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl transition duration-500 group-hover:scale-125" />
                  <div className="relative">
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black transition duration-300 group-hover:rotate-6 group-hover:scale-110"><Sun size={28} /></div>
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Division 01</p>
                    <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">RAYBUILD SOLAR</h3>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">Solar rooftop systems, agricultural solar pumps, C&I solutions, highmast systems and solar lighting infrastructure.</p>
                    <span className="mt-8 inline-flex items-center gap-2 font-bold">Visit Solar Division <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </Reveal>
              <Reveal delay={0.12}>
                <Link href="/construction" className="group relative block overflow-hidden rounded-3xl bg-[#25313b] p-7 text-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-10">
                  <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl transition duration-500 group-hover:scale-125" />
                  <div className="relative">
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#25313b] transition duration-300 group-hover:rotate-6 group-hover:scale-110"><Building2 size={28} /></div>
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-300">Division 02</p>
                    <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">RAYBUILD CONSTRUCTION</h3>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">Civil and structural construction, structural repair, retrofitting, waterproofing and land development solutions.</p>
                    <span className="mt-8 inline-flex items-center gap-2 font-bold">Visit Construction Division <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <div className="rounded-3xl bg-black p-7 text-white shadow-xl sm:p-12">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-400">Get in Touch</p>
                    <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Have a project in mind?</h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">Connect with Raybuild Group and let us understand your requirement.</p>
                  </div>
                  <div className="space-y-5 md:justify-self-end">
                    <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 text-sm text-gray-200 transition duration-300 hover:translate-x-1 hover:text-white sm:text-base"><Phone size={20} />+91 XXXXXXXXXX</a>
                    <a href="mailto:XXXXXXXX@example.com" className="flex items-center gap-3 break-all text-sm text-gray-200 transition duration-300 hover:translate-x-1 hover:text-white sm:text-base"><Mail size={20} />XXXXXXXX@example.com</a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="bg-[#0b0b0b] text-white">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
              <div className="sm:col-span-2 md:col-span-2">
                <Link href="/" className="inline-block transition duration-300 hover:opacity-75">
                  <div className="text-2xl font-extrabold tracking-[0.18em]">RAYBUILD</div>
                  <div className="mt-1 text-xs tracking-[0.3em] text-gray-500">GROUP</div>
                </Link>
                <p className="mt-6 max-w-md text-sm leading-7 text-gray-400 sm:text-base">Raybuild Group brings together specialised capabilities in solar energy and construction under one connected identity.</p>
              </div>
              <div>
                <h3 className="font-bold">Our Divisions</h3>
                <div className="mt-5 space-y-3">
                  <Link href="/solar" className="block text-sm text-gray-400 transition hover:text-white">Raybuild Solar</Link>
                  <Link href="/construction" className="block text-sm text-gray-400 transition hover:text-white">Raybuild Construction</Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold">Company</h3>
                <div className="mt-5 space-y-3">
                  <a href="#about" className="block text-sm text-gray-400 transition hover:text-white">About</a>
                  <a href="#divisions" className="block text-sm text-gray-400 transition hover:text-white">Divisions</a>
                  <a href="#contact" className="block text-sm text-gray-400 transition hover:text-white">Contact</a>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-7 sm:mt-14">
              <p className="text-xs leading-6 text-gray-500 sm:text-sm">© 2026 Raybuild Group. All Rights Reserved. A Unit of Raybuild Multi-Sector Enterprises.</p>
            </div>
          </div>
        </footer>
      </main>
      <DivisionPopup />
    </>
  );
}
