"use client";

import { useEffect, useState } from "react";

const TOPIC_TAGS = [
  "Masculinity",
  "Mental Health",
  "Career",
  "Spirituality",
  "Relationships",
  "Leadership",
  "Money",
];

const STATS = [
  {
    big: "63%",
    body: "of Ghanaian men, 18–30, feel pressured to perform a version of manhood that isn't theirs.",
    src: "Ghana Statistical Service, 2022",
  },
  {
    big: "↑",
    body: "Anxiety, depression and suicide rates among young men are climbing.",
    src: "World Health Organization, 2020",
  },
  {
    big: "1 in 4",
    body: "feel trapped after school. They don't know who to ask, or where to start.",
    src: "Boys2Men Field Interviews, 2025",
  },
];

const REALITY = [
  {
    n: "01",
    label: "The Path Problem",
    body: "Pressure to succeed is loud. Real opportunity is narrow.",
  },
  {
    n: "02",
    label: "The Relationship Weight",
    body: "Family, partners, friends — loaded with rules nobody named.",
  },
  {
    n: "03",
    label: "The Space That's Missing",
    body: "Not another lecture. A room where the question can be asked.",
  },
];

const PILLARS = [
  { roman: "I", line1: "Navigating", line2: "Manhood." },
  { roman: "II", line1: "Real Talk,", line2: "Real Growth." },
  { roman: "III", line1: "Redefining", line2: "Masculinity." },
];

const TOPICS = [
  {
    name: "Masculinity",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    ),
  },
  {
    name: "Mental Health",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    ),
  },
  {
    name: "Healthy Relationships",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    ),
  },
  {
    name: "Entrepreneurship",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    ),
  },
  {
    name: "Leadership",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.32.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .32-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    ),
  },
  {
    name: "Financial Literacy",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    name: "Spirituality",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    ),
  },
  {
    name: "Mindset",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    ),
  },
];

const DAY_ONE = [
  { time: "09:00", title: "Opening Session" },
  { time: "10:30", title: "Mentorship · Block A" },
  { time: "14:00", title: "Mentorship · Block B" },
  { time: "16:30", title: "Panel Discussion" },
];

const DAY_TWO = [
  { time: "09:30", title: "Mentorship · Block C" },
  { time: "11:30", title: "Interactive Breakouts" },
  { time: "15:00", title: "1:1 Mentor Sessions" },
  { time: "17:00", title: "Closing Commitments" },
];

const PARTNERS = [
  "Mental Health Authority",
  "Ghana Tech Lab",
  "YALI Network",
  "Stanbic Bank",
  "Impact Hub Accra",
  "+ Your Org",
];

// Brand photography
const HERO_IMG = "/img4.jpg";
const PROGRAM_IMG = "/img1.jpg";
const AUDIENCE_IMG = "/img3.jpg";
const CROSSROADS_IMG = "/img2.jpg";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-white text-[#0f0f23]">
      {/* ============== NAVBAR ============== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="h-[80px] flex items-center justify-between">
            <a href="#top" className="flex items-center">
              <img src="/logo.png" alt="Boys2Men" className="h-14 md:h-16 w-auto" />
            </a>

            <nav className="hidden md:flex items-center gap-10">
              {[
                ["About", "#reality"],
                ["Program", "#program"],
                ["Agenda", "#agenda"],
                ["Partners", "#partners"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-[14px] font-medium text-gray-500 hover:text-[#0f0f23] transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#apply"
                className="text-[14px] font-semibold text-gray-600 hover:text-[#0f0f23] transition-colors px-4 py-2.5"
              >
                Become a Mentor
              </a>
              <a
                href="#apply"
                className="text-[14px] font-semibold bg-[#0054a5] text-white px-6 py-2.5 rounded-full hover:bg-[#003f7a] transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Apply Now
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5 text-[#0f0f23]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 16.5h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ============== MOBILE MENU OVERLAY ============== */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0054a5]"
          onClick={() => setMenuOpen(false)}
        />

        {/* Decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,189,88,0.18),transparent)] pointer-events-none" />

        {/* Panel content */}
        <div className="relative h-full flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 h-[80px] border-b border-white/[0.08]">
            <a href="#top" onClick={() => setMenuOpen(false)} className="flex items-center">
              <img src="/logo.png" alt="Boys2Men" className="h-14 w-auto brightness-0 invert" />
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.15] transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-5 sm:px-8 pt-10 overflow-y-auto">
            <p className="text-white/40 text-[11px] font-semibold tracking-[0.15em] uppercase mb-6">Menu</p>
            <div className="space-y-1">
              {[
                ["About", "#reality"],
                ["Program", "#program"],
                ["Agenda", "#agenda"],
                ["Partners", "#partners"],
              ].map(([label, href], i) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between text-white text-3xl font-bold py-5 border-b border-white/[0.08] transition-colors hover:text-[#FFBD58]"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-white/30 text-sm font-mono font-normal w-6">
                      0{i + 1}
                    </span>
                    {label}
                  </span>
                  <svg className="w-5 h-5 text-white/30 group-hover:text-[#FFBD58] transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-12 space-y-3">
              <a
                href="#apply"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#FFBD58] text-[#0f0f23] font-bold text-base px-8 py-4 rounded-full hover:bg-[#ffcb78] transition-colors"
              >
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#apply"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Become a Mentor
              </a>
            </div>
          </nav>

          {/* Footer */}
          <div className="px-5 sm:px-8 py-6 border-t border-white/[0.08]">
            <p className="text-white/40 text-[11px] font-semibold tracking-[0.15em] uppercase mb-3">Get in Touch</p>
            <a
              href="mailto:hello@boys2men.gh"
              className="text-white font-semibold text-base hover:text-[#FFBD58] transition-colors"
            >
              hello@boys2men.gh
            </a>
            <div className="flex gap-2 mt-4">
              {["IG", "LinkedIn", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/60 text-xs font-semibold hover:bg-[#FFBD58] hover:text-[#0f0f23] hover:border-[#FFBD58] transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============== HERO ============== */}
      <section id="top" className="relative bg-[#0054a5] overflow-hidden">
        {/* Background ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_85%_30%,rgba(255,189,88,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_70%,rgba(0,40,90,0.4),transparent)]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-[120px] md:pt-[140px] pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT — content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm px-3.5 py-1.5 rounded-full mb-8">
                <span className="text-[#FFBD58] text-[11px]">&#9670;</span>
                <span className="text-white/80 text-[12px] font-semibold tracking-[0.12em] uppercase">Cohort 2026 &middot; Accra</span>
              </div>

              <h1 className="text-white font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.06] tracking-[-0.025em]">
                Navigating
                <br />
                Manhood.
                <br />
                <span className="text-[#FFBD58]">On Their Terms.</span>
              </h1>

              <p className="mt-7 text-white/60 text-base md:text-lg leading-relaxed max-w-md">
                Two days of real conversation for young men aged 18–30 in Accra, Ghana.
              </p>

              <div className="flex flex-wrap gap-3 mt-9">
                <a
                  href="#apply"
                  className="group inline-flex items-center gap-2.5 bg-[#FFBD58] text-[#0f0f23] font-semibold text-[14px] px-7 py-3.5 rounded-full hover:bg-[#ffcb78] transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
                >
                  Apply for Cohort
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center gap-2 text-white font-medium text-[14px] px-6 py-3.5 hover:text-[#FFBD58] transition-colors duration-200"
                >
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>

              {/* Stats row */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-white/[0.1] pt-7">
                {[
                  ["50+", "Mentees"],
                  ["20", "Mentors"],
                  ["8", "Topics"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <p className="text-[#FFBD58] font-extrabold text-2xl md:text-3xl leading-none">{val}</p>
                    <p className="text-white/45 text-[11px] font-semibold tracking-[0.1em] uppercase mt-2">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image with layered accents */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full max-w-[420px] mx-auto lg:ml-auto lg:mr-0">
                {/* Gold offset block */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-[88%] h-[88%] bg-[#FFBD58] rounded-2xl" />
                {/* Indigo grid texture frame */}
                <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-24 h-24 border-2 border-[#FFBD58]/40 rounded-2xl" />

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/30">
                  <img
                    src={HERO_IMG}
                    alt="A young Ghanaian man, ready to grow"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Caption pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD58] pulse-dot shrink-0" />
                    <p className="text-white text-[12px] font-medium truncate">Real men. Real conversations. Real growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details strip */}
        <div className="relative border-t border-white/[0.08] bg-[#004a92]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <dl className="grid grid-cols-2 md:grid-cols-4">
              {[
                ["Cohort", "2026"],
                ["Format", "2-Day Intensive"],
                ["For", "Men, 18–30"],
                ["Location", "Accra, Ghana"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`py-5 md:py-6 ${i > 0 ? "md:border-l border-white/[0.08] md:pl-8" : ""}`}
                >
                  <dt className="text-white/35 text-[11px] font-semibold tracking-[0.15em] uppercase mb-1">{k}</dt>
                  <dd className="text-white font-semibold text-[15px]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>


      {/* ============== 01 — THE REALITY (Quote) ============== */}
      <section id="reality" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={CROSSROADS_IMG}
                  alt="A man at a crossroads"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/80 text-[11px] font-semibold tracking-[0.15em] uppercase mb-1">At the crossroads</p>
                  <p className="text-white font-bold text-lg leading-tight">The questions every young man faces.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#0054a5]/[0.06] px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0054a5]" />
                <span className="text-[#0054a5] text-[12px] font-semibold tracking-[0.12em] uppercase">The Reality</span>
              </div>

              <div className="text-[#0054a5]/15 font-extrabold text-7xl md:text-8xl leading-none mb-4 select-none">&ldquo;</div>

              <blockquote className="text-[#0f0f23] font-extrabold text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] tracking-[-0.02em]">
                I don&rsquo;t know who I&rsquo;m supposed to be —
                <span className="text-[#0054a5]"> only who I&rsquo;m supposed to look like.</span>
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-8 bg-[#FFBD58]" />
                <p className="text-gray-400 text-[12px] font-semibold tracking-[0.12em] uppercase">
                  Boys2Men Field Interview · Accra · 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 02 — THE NUMBERS ============== */}
      <section className="bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#0054a5]/[0.06] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0054a5]" />
              <span className="text-[#0054a5] text-[12px] font-semibold tracking-[0.12em] uppercase">The Numbers</span>
            </div>
            <h2 className="text-[#0f0f23] font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              The numbers beneath the silence.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200/80 hover:border-[#0054a5]/20 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
              >
                <p className="text-[#0054a5] font-extrabold text-6xl md:text-7xl leading-none mb-6">
                  {s.big}
                </p>
                <p className="text-[#0f0f23] text-base md:text-[17px] leading-[1.55] mb-6">
                  {s.body}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-px bg-[#FFBD58]" />
                  <p className="text-gray-400 text-[11px] font-semibold tracking-[0.1em] uppercase">{s.src}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 03 — THE CHALLENGES ============== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#0054a5]/[0.06] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0054a5]" />
              <span className="text-[#0054a5] text-[12px] font-semibold tracking-[0.12em] uppercase">The Challenges</span>
            </div>
            <h2 className="text-[#0f0f23] font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] max-w-2xl mx-auto">
              Pressure is high. Opportunity is narrow.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {REALITY.map((r) => (
              <div
                key={r.n}
                className="relative bg-[#0054a5] rounded-2xl p-8 md:p-10 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-6 right-6 text-white/[0.06] font-extrabold text-8xl leading-none select-none pointer-events-none">
                  {r.n}
                </div>
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[#FFBD58] flex items-center justify-center mb-8">
                    <span className="text-[#0f0f23] font-bold text-sm">{r.n}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-4">
                    {r.label}
                  </h3>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 04 — THE PROGRAM ============== */}
      <section id="program" className="bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#e8e9f0]">
                <img
                  src={PROGRAM_IMG}
                  alt="Mentorship in conversation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#0054a5]/[0.06] px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0054a5]" />
                <span className="text-[#0054a5] text-[12px] font-semibold tracking-[0.12em] uppercase">The Program</span>
              </div>

              <h2 className="text-[#0f0f23] font-extrabold text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.02em] mb-6">
                A place to land, while you figure out
                <span className="text-[#0054a5]"> where you&rsquo;re going.</span>
              </h2>

              <p className="text-gray-500 text-[17px] leading-relaxed mb-10 max-w-lg">
                Mentors who&rsquo;ve walked the road. No lectures, no
                performance. Two days, real conversation.
              </p>

              <div className="grid grid-cols-2 gap-3 max-w-md">
                {[
                  "Leadership",
                  "Career",
                  "Finances",
                  "Mindset",
                  "Spirituality",
                  "Family",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-200/80">
                    <div className="w-2 h-2 rounded-full bg-[#FFBD58]" />
                    <span className="text-[#0f0f23] text-[14px] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 05 — PILLARS ============== */}
      <section className="bg-[#0054a5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(255,189,88,0.1),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.06] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD58]" />
              <span className="text-white/70 text-[12px] font-semibold tracking-[0.12em] uppercase">Our Pillars</span>
            </div>
            <h2 className="text-white font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              What we stand for.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {PILLARS.map((p, i) => (
              <div
                key={p.roman}
                className="relative bg-white/[0.06] border border-white/[0.08] rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:bg-white/[0.1] transition-all duration-300 group"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFBD58] text-[#0f0f23] font-bold text-lg mb-8">
                  {p.roman}
                </span>
                <h3 className="text-white font-bold text-2xl md:text-3xl leading-[1.15] tracking-[-0.01em]">
                  {p.line1}
                  <br />
                  {p.line2}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 06 — TOPICS ============== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#0054a5]/[0.06] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0054a5]" />
              <span className="text-[#0054a5] text-[12px] font-semibold tracking-[0.12em] uppercase">The Conversations</span>
            </div>
            <h2 className="text-[#0f0f23] font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] max-w-xl mx-auto">
              Eight conversations that don&rsquo;t happen anywhere else.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOPICS.map((t, i) => (
              <div
                key={t.name}
                className="group relative bg-[#f7f8fc] rounded-2xl p-6 md:p-7 hover:bg-[#0054a5] border border-gray-200/60 hover:border-[#0054a5] transition-all duration-300 cursor-default overflow-hidden"
              >
                <span className="absolute top-5 right-5 text-[#0054a5]/15 group-hover:text-white/15 font-extrabold text-2xl leading-none transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-white/10 border border-gray-200/60 group-hover:border-white/10 flex items-center justify-center mb-6 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-[#0054a5] group-hover:text-[#FFBD58] transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    viewBox="0 0 24 24"
                  >
                    {t.icon}
                  </svg>
                </div>
                <h3 className="text-[#0f0f23] group-hover:text-white font-bold text-lg leading-tight transition-colors duration-300">
                  {t.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 07 — AGENDA ============== */}
      <section id="agenda" className="bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#0054a5]/[0.06] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0054a5]" />
              <span className="text-[#0054a5] text-[12px] font-semibold tracking-[0.12em] uppercase">The Weekend</span>
            </div>
            <h2 className="text-[#0f0f23] font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              The shape of two days.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { name: "Day One", sub: "Saturday", items: DAY_ONE },
              { name: "Day Two", sub: "Sunday", items: DAY_TWO },
            ].map((day) => (
              <div key={day.name} className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden">
                <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
                  <h3 className="text-[#0f0f23] font-bold text-xl">
                    {day.name}
                  </h3>
                  <span className="text-gray-400 text-[12px] font-semibold tracking-[0.12em] uppercase">{day.sub}</span>
                </div>
                <div className="px-8 py-2">
                  {day.items.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-5 py-5 ${i < day.items.length - 1 ? "border-b border-gray-100" : ""}`}
                    >
                      <span className="text-[#0054a5] font-mono text-[13px] font-semibold w-14 shrink-0">
                        {item.time}
                      </span>
                      <span className="text-[#0f0f23] font-semibold text-[16px]">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 08 — WHO IT'S FOR ============== */}
      <section className="bg-[#0054a5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(255,189,88,0.1),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.06] px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD58]" />
                <span className="text-white/70 text-[12px] font-semibold tracking-[0.12em] uppercase">Who It&rsquo;s For</span>
              </div>

              <h2 className="text-white font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.025em] mb-8">
                If this is you,
                <br />
                <span className="text-[#FFBD58]">this is for you.</span>
              </h2>

              <p className="text-white/55 text-lg leading-relaxed max-w-md mb-10">
                Young men in Accra, aged 18–30, ready for honest conversations about the road ahead.
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-sm">
                {[
                  ["18–30", "Age Range"],
                  ["Accra", "Location"],
                  ["2 Days", "Duration"],
                ].map(([val, label]) => (
                  <div key={label} className="bg-white/[0.06] border border-white/[0.08] rounded-xl p-4 text-center">
                    <p className="text-[#FFBD58] font-extrabold text-xl leading-none mb-1.5">{val}</p>
                    <p className="text-white/40 text-[11px] font-semibold tracking-wide uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10">
                <img
                  src={AUDIENCE_IMG}
                  alt="Young man portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 09 — PARTNERS ============== */}
      <section id="partners" className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#0054a5]/[0.06] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0054a5]" />
              <span className="text-[#0054a5] text-[12px] font-semibold tracking-[0.12em] uppercase">Partners</span>
            </div>
            <h2 className="text-[#0f0f23] font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] max-w-xl mx-auto">
              Built with people already doing the work.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="group bg-[#f7f8fc] rounded-2xl px-8 py-7 border border-gray-200/60 hover:border-[#0054a5]/20 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0054a5]/[0.08] group-hover:bg-[#0054a5] flex items-center justify-center shrink-0 transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#0054a5] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
                  </svg>
                </div>
                <span className="text-[#0f0f23] font-semibold text-[16px]">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section id="apply" className="relative bg-[#0054a5] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,189,88,0.15),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-40 text-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.06] px-4 py-2 rounded-full mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD58]" />
            <span className="text-white/70 text-[12px] font-semibold tracking-[0.12em] uppercase">Cohort 2026</span>
          </div>

          <h2 className="text-white font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] tracking-[-0.025em] mb-6">
            Real talk. Real growth.
            <br />
            <span className="text-[#FFBD58]">Start here.</span>
          </h2>

          <p className="text-white/50 text-lg mb-12 max-w-md mx-auto">
            Join the next cohort of young men ready to have the conversations that matter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@boys2men.gh"
              className="group inline-flex items-center gap-2.5 bg-[#FFBD58] text-[#0f0f23] font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-[#ffcb78] transition-all duration-300 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5"
            >
              Apply as a Mentee
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="mailto:hello@boys2men.gh"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-medium text-[15px] px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              Become a Mentor
            </a>
            <a
              href="mailto:hello@boys2men.gh"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-medium text-[15px] px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              Partner with Us
            </a>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="bg-[#0f0f23]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-4">
              <a href="#top" className="text-[22px] font-extrabold tracking-tight text-white inline-block mb-5">
                Boys<span className="text-[#FFBD58]">2</span>Men
              </a>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                A mentorship program for young Ghanaian men, 18–30 — building
                the room manhood deserves.
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="text-white/30 text-[11px] font-semibold tracking-[0.15em] uppercase mb-5">Program</p>
              <ul className="space-y-3 text-sm">
                <li><a href="#reality" className="text-white/50 hover:text-[#FFBD58] transition-colors duration-200">About</a></li>
                <li><a href="#program" className="text-white/50 hover:text-[#FFBD58] transition-colors duration-200">Program</a></li>
                <li><a href="#agenda" className="text-white/50 hover:text-[#FFBD58] transition-colors duration-200">Agenda</a></li>
                <li><a href="#partners" className="text-white/50 hover:text-[#FFBD58] transition-colors duration-200">Partners</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="text-white/30 text-[11px] font-semibold tracking-[0.15em] uppercase mb-5">Get Involved</p>
              <ul className="space-y-3 text-sm">
                <li><a href="#apply" className="text-white/50 hover:text-[#FFBD58] transition-colors duration-200">Apply</a></li>
                <li><a href="#apply" className="text-white/50 hover:text-[#FFBD58] transition-colors duration-200">Mentor</a></li>
                <li><a href="#apply" className="text-white/50 hover:text-[#FFBD58] transition-colors duration-200">Partner</a></li>
                <li><a href="#apply" className="text-white/50 hover:text-[#FFBD58] transition-colors duration-200">Donate</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="text-white/30 text-[11px] font-semibold tracking-[0.15em] uppercase mb-5">Contact</p>
              <a
                href="mailto:hello@boys2men.gh"
                className="text-white font-semibold text-lg hover:text-[#FFBD58] transition-colors duration-200 block mb-5"
              >
                hello@boys2men.gh
              </a>
              <div className="flex gap-3">
                {["IG", "LinkedIn", "X"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 text-xs font-semibold hover:bg-[#FFBD58] hover:text-[#0f0f23] hover:border-[#FFBD58] transition-all duration-200"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between gap-2 text-[13px] text-white/30">
            <p>&copy; 2026 Boys2Men &middot; Accra, Ghana</p>
            <p className="text-white/50 font-medium">Navigating Manhood</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
