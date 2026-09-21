"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Sun,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111]">

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-black text-white">
              <span className="text-lg font-bold">R</span>
            </div>

            <div>
              <div className="text-lg font-extrabold tracking-[0.18em]">
                RAYBUILD
              </div>

              <div className="text-[10px] font-medium tracking-[0.28em] text-gray-500">
                GROUP
              </div>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="text-sm font-medium transition hover:text-gray-500"
            >
              Home
            </Link>

            <a
              href="#about"
              className="text-sm font-medium transition hover:text-gray-500"
            >
              About
            </a>

            <a
              href="#divisions"
              className="text-sm font-medium transition hover:text-gray-500"
            >
              Our Divisions
            </a>

            <a
              href="#contact"
              className="text-sm font-medium transition hover:text-gray-500"
            >
              Contact
            </a>

          </nav>

          {/* =====================================================
              DESKTOP CTA
          ===================================================== */}
          <a
            href="#divisions"
            className="hidden rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 md:block"
          >
            Explore Divisions
          </a>

          {/* =====================================================
              MOBILE HAMBURGER BUTTON
          ===================================================== */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 bg-white transition hover:bg-gray-100 md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>

        </div>

        {/* =======================================================
            MOBILE NAVIGATION
        ======================================================= */}
        {mobileMenuOpen && (
          <div className="border-t border-black/10 bg-white shadow-lg md:hidden">

            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5">

              {/* HOME */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold transition hover:bg-gray-100"
              >
                Home
              </Link>

              {/* ABOUT */}
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold transition hover:bg-gray-100"
              >
                About
              </a>

              {/* DIVISIONS */}
              <a
                href="#divisions"
                onClick={closeMobileMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold transition hover:bg-gray-100"
              >
                Our Divisions
              </a>

              {/* CONTACT */}
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold transition hover:bg-gray-100"
              >
                Contact
              </a>

              {/* DIVIDER */}
              <div className="my-3 border-t border-black/10" />

              {/* MOBILE CTA */}
              <a
                href="#divisions"
                onClick={closeMobileMenu}
                className="rounded-lg bg-black px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Explore Divisions
              </a>

            </nav>

          </div>
        )}

      </header>

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#111] text-white">

        {/* Background Effects */}
        <div className="absolute inset-0">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />

          <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        </div>

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}
          <div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              RAYBUILD GROUP
            </p>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Building Tomorrow.
              <br />
              Powering Progress.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Raybuild Group brings together clean energy and construction
              expertise under one connected vision — creating practical,
              sustainable solutions for homes, businesses and infrastructure.
            </p>

            {/* HERO BUTTONS */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">

              <a
                href="#divisions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-gray-200"
              >
                Explore Our Divisions
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Talk to Raybuild
              </a>

            </div>

          </div>

          {/* =====================================================
              HERO VISUAL
          ===================================================== */}
          <div className="relative hidden lg:block">

            <div className="relative mx-auto h-[480px] max-w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#242424] to-[#101010] shadow-2xl">

              {/* SUN */}
              <div className="absolute right-12 top-10 h-28 w-28 rounded-full bg-yellow-400/90 blur-[1px]" />

              {/* BUILDING */}
              <div className="absolute bottom-0 left-0 h-[230px] w-[65%] bg-[#353535]">

                <div className="grid grid-cols-4 gap-3 p-6">

                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-9 rounded-sm bg-white/10"
                    />
                  ))}

                </div>

              </div>

              {/* SOLAR PANELS */}
              <div className="absolute bottom-[135px] right-8 rotate-[-12deg]">

                <div className="grid grid-cols-4 gap-1 rounded-md bg-blue-950 p-2 shadow-xl">

                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-9 w-12 border border-white/10 bg-blue-800"
                    />
                  ))}

                </div>

              </div>

              {/* ROAD */}
              <div className="absolute bottom-0 right-0 h-[110px] w-full skew-y-[-8deg] bg-[#1b1b1b]" />

              {/* VISUAL LABEL */}
              <div className="absolute bottom-7 left-7">

                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Solar • Construction
                </p>

                <p className="mt-2 text-2xl font-bold">
                  One Group. Two Divisions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ABOUT SECTION
      ========================================================= */}
      <section
        id="about"
        className="scroll-mt-20 bg-white py-20 sm:py-24"
      >

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
              About Raybuild Group
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              One vision. Multiple capabilities.
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Raybuild Group operates across two focused divisions —
              Raybuild Solar and Raybuild Construction. Each division brings
              specialised expertise while working under a common group
              identity.
            </p>

          </div>

          {/* ABOUT CARDS */}
          <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-6">

            {/* CARD 1 */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7">

              <h3 className="text-xl font-bold">
                Integrated Approach
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Energy and infrastructure capabilities connected through one
                group.
              </p>

            </div>

            {/* CARD 2 */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7">

              <h3 className="text-xl font-bold">
                Practical Solutions
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Solutions designed around real project requirements and
                long-term value.
              </p>

            </div>

            {/* CARD 3 */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7">

              <h3 className="text-xl font-bold">
                Focused Expertise
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Dedicated divisions for solar energy and construction
                requirements.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          DIVISIONS SECTION
      ========================================================= */}
      <section
        id="divisions"
        className="scroll-mt-20 bg-[#f1f1ee] py-20 sm:py-24"
      >

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* SECTION HEADING */}
          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
              Our Divisions
            </p>

            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Explore Raybuild
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              Choose a specialised Raybuild division based on your project
              requirements.
            </p>

          </div>

          {/* DIVISION CARDS */}
          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">

            {/* ===================================================
                SOLAR DIVISION
            =================================================== */}
            <Link
              href="/solar"
              className="group relative overflow-hidden rounded-3xl bg-[#151515] p-7 text-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-10"
            >

              {/* Glow */}
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="relative">

                {/* ICON */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                  <Sun size={28} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                  Division 01
                </p>

                <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  RAYBUILD SOLAR
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">
                  Solar rooftop systems, agricultural solar pumps, C&I
                  solutions, highmast systems and solar lighting
                  infrastructure.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-bold">
                  Visit Solar Division

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>

              </div>

            </Link>

            {/* ===================================================
                CONSTRUCTION DIVISION
            =================================================== */}
            <Link
              href="/construction"
              className="group relative overflow-hidden rounded-3xl bg-[#25313b] p-7 text-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-10"
            >

              {/* Glow */}
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

              <div className="relative">

                {/* ICON */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#25313b]">
                  <Building2 size={28} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-300">
                  Division 02
                </p>

                <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  RAYBUILD CONSTRUCTION
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">
                  Civil and structural construction, structural repair,
                  retrofitting, waterproofing and land development solutions.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-bold">
                  Visit Construction Division

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>

              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTACT SECTION
      ========================================================= */}
      <section
        id="contact"
        className="scroll-mt-20 bg-white py-16 sm:py-20"
      >

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="rounded-3xl bg-black p-7 text-white sm:p-12">

            <div className="grid gap-10 md:grid-cols-2 md:items-center">

              {/* CONTACT CONTENT */}
              <div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-400">
                  Get in Touch
                </p>

                <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                  Have a project in mind?
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                  Connect with Raybuild Group and let us understand your
                  requirement.
                </p>

              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-5 md:justify-self-end">

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-3 text-sm text-gray-200 transition hover:text-white sm:text-base"
                >
                  <Phone size={20} />
                  +91 XXXXXXXXXX
                </a>

                <a
                  href="mailto:XXXXXXXX@example.com"
                  className="flex items-center gap-3 break-all text-sm text-gray-200 transition hover:text-white sm:text-base"
                >
                  <Mail size={20} />
                  XXXXXXXXX@example.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-[#0b0b0b] text-white">

        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">

            {/* BRAND */}
            <div className="sm:col-span-2 md:col-span-2">

              <Link
                href="/"
                onClick={closeMobileMenu}
                className="inline-block"
              >

                <div className="text-2xl font-extrabold tracking-[0.18em]">
                  RAYBUILD
                </div>

                <div className="mt-1 text-xs tracking-[0.3em] text-gray-500">
                  GROUP
                </div>

              </Link>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
                Raybuild Group brings together specialised capabilities in
                solar energy and construction under one connected identity.
              </p>

            </div>

            {/* DIVISIONS */}
            <div>

              <h3 className="font-bold">
                Our Divisions
              </h3>

              <div className="mt-5 space-y-3">

                <Link
                  href="/solar"
                  className="block text-sm text-gray-400 transition hover:text-white"
                >
                  Raybuild Solar
                </Link>

                <Link
                  href="/construction"
                  className="block text-sm text-gray-400 transition hover:text-white"
                >
                  Raybuild Construction
                </Link>

              </div>

            </div>

            {/* COMPANY */}
            <div>

              <h3 className="font-bold">
                Company
              </h3>

              <div className="mt-5 space-y-3">

                <a
                  href="#about"
                  className="block text-sm text-gray-400 transition hover:text-white"
                >
                  About
                </a>

                <a
                  href="#divisions"
                  className="block text-sm text-gray-400 transition hover:text-white"
                >
                  Divisions
                </a>

                <a
                  href="#contact"
                  className="block text-sm text-gray-400 transition hover:text-white"
                >
                  Contact
                </a>

              </div>

            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="mt-12 border-t border-white/10 pt-7 sm:mt-14">

            <p className="text-xs leading-6 text-gray-500 sm:text-sm">
              © 2026 Raybuild Group. All Rights Reserved. A Unit of Raybuild
              Multi-Sector Enterprises.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}