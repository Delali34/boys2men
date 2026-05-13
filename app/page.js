"use client";

import { useState } from "react";

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
  "Masculinity",
  "Mental Health",
  "Healthy Relationships",
  "Entrepreneurship",
  "Leadership",
  "Financial Literacy",
  "Spirituality",
  "Mindset",
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

// Pexels — portraits of Black men
const HERO_IMG =
  "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200";
const PROGRAM_IMG =
  "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1200";
const AUDIENCE_IMG =
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0f0f23]">
      {/* ============== NAVBAR ============== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="h-[72px] flex items-center justify-between">
            <a href="#top" className="text-[22px] font-extrabold tracking-tight text-[#0f0f23]">
              Boys<span className="text-[#FFBD58]">2</span>Men
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
                className="text-[14px] font-semibold bg-[#3A40BC] text-white px-6 py-2.5 rounded-full hover:bg-[#2e339e] transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Apply Now
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-5 h-5 text-[#0f0f23]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 16.5h16.5" />
                }
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-[#3A40BC] z-40 animate-[fadeIn_0.2s_ease]">
            <div className="px-8 py-10">
              {[
                ["About", "#reality"],
                ["Program", "#program"],
                ["Agenda", "#agenda"],
                ["Partners", "#partners"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white text-[28px] font-semibold py-5 border-b border-white/10"
                >
                  {label}
                </a>
              ))}
              <div className="mt-10 flex flex-col gap-3">
                <a
                  href="#apply"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-[#FFBD58] text-[#0f0f23] font-bold text-lg px-8 py-4 rounded-full"
                >
                  Apply Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#apply"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center text-white/70 font-medium text-base py-3"
                >
                  Become a Mentor
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ============== HERO ============== */}
      <section id="top" className="relative bg-[#3A40BC] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,189,88,0.12),transparent)]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-[120px] md:pt-[140px] pb-0">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            <div className="lg:col-span-7 pb-16 md:pb-24 lg:pb-32">
              <div className="inline-flex items-center gap-2.5 bg-white/[0.08] border border-white/[0.06] px-5 py-2.5 rounded-full mb-10">
                <span className="w-2 h-2 rounded-full bg-[#FFBD58] pulse-dot" />
                <span className="text-white/70 text-[13px] font-medium tracking-wide">
                  Mentorship Program &middot; Accra 2026
                </span>
              </div>

              <h1 className="text-white font-extrabold text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[1.06] tracking-[-0.025em]">
                Navigating
                <br />
                Manhood.
                <br />
                <span className="text-[#FFBD58]">On Their Terms.</span>
              </h1>

              <p className="mt-7 text-white/55 text-lg md:text-xl leading-relaxed max-w-lg">
                Two days of real conversation for young men aged 18–30 in Accra, Ghana.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#apply"
                  className="group inline-flex items-center gap-2.5 bg-[#FFBD58] text-[#0f0f23] font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-[#ffcb78] transition-all duration-300 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5"
                >
                  Apply for Cohort
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-medium text-[15px] px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-t-3xl lg:rounded-3xl overflow-hidden ring-1 ring-white/10">
                <img
                  src={HERO_IMG}
                  alt="Young man in Accra"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Details strip */}
        <div className="relative border-t border-white/[0.08] bg-[#3238a8]">
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
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[20rem] md:text-[28rem] font-extrabold leading-none text-gray-100 select-none pointer-events-none" aria-hidden>
          &ldquo;
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-40 text-center">
          <div className="inline-flex items-center gap-2 bg-[#3A40BC]/[0.06] px-4 py-2 rounded-full mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3A40BC]" />
            <span className="text-[#3A40BC] text-[12px] font-semibold tracking-[0.12em] uppercase">The Reality</span>
          </div>

          <blockquote className="text-[#0f0f23] font-extrabold text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.15] tracking-[-0.02em]">
            &ldquo;I don&rsquo;t know who I&rsquo;m supposed to be —
            <span className="text-[#3A40BC]"> only who I&rsquo;m supposed to look like.&rdquo;</span>
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#FFBD58]" />
            <p className="text-gray-400 text-[12px] font-semibold tracking-[0.12em] uppercase">
              Boys2Men Field Interview · Accra · 2025
            </p>
            <div className="h-px w-8 bg-[#FFBD58]" />
          </div>
        </div>
      </section>

      {/* ============== 02 — THE NUMBERS ============== */}
      <section className="bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#3A40BC]/[0.06] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3A40BC]" />
              <span className="text-[#3A40BC] text-[12px] font-semibold tracking-[0.12em] uppercase">The Numbers</span>
            </div>
            <h2 className="text-[#0f0f23] font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              The numbers beneath the silence.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200/80 hover:border-[#3A40BC]/20 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
              >
                <p className="text-[#3A40BC] font-extrabold text-6xl md:text-7xl leading-none mb-6">
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
            <div className="inline-flex items-center gap-2 bg-[#3A40BC]/[0.06] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3A40BC]" />
              <span className="text-[#3A40BC] text-[12px] font-semibold tracking-[0.12em] uppercase">The Challenges</span>
            </div>
            <h2 className="text-[#0f0f23] font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] max-w-2xl mx-auto">
              Pressure is high. Opportunity is narrow.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {REALITY.map((r) => (
              <div
                key={r.n}
                className="relative bg-[#3A40BC] rounded-2xl p-8 md:p-10 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
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
              <div className="inline-flex items-center gap-2 bg-[#3A40BC]/[0.06] px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3A40BC]" />
                <span className="text-[#3A40BC] text-[12px] font-semibold tracking-[0.12em] uppercase">The Program</span>
              </div>

              <h2 className="text-[#0f0f23] font-extrabold text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.02em] mb-6">
                A place to land, while you figure out
                <span className="text-[#3A40BC]"> where you&rsquo;re going.</span>
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
                  "Brotherhood",
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
      <section className="bg-[#3A40BC] text-[#FAF9F4]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28 md:py-36">
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <p className="eyebrow text-[#FFBD58] lg:col-span-3">05 — In Our Words</p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] max-w-[36rem]">
              What we stand for, in three lines.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-white/15">
            {PILLARS.map((p, i) => (
              <div
                key={p.roman}
                className={`py-12 md:py-16 ${i > 0 ? "md:border-l border-white/15 md:pl-10" : "md:pr-10"} ${i > 0 ? "border-t md:border-t-0 border-white/15" : ""}`}
              >
                <p className="font-display text-[#FFBD58] text-4xl md:text-5xl mb-12">
                  {p.roman}
                </p>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em]">
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
      <section className="bg-[#F4F4FB]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28 md:py-36">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <p className="eyebrow text-[#4A4A6E] lg:col-span-3">06 — The Conversations</p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-[#14143A] max-w-[44rem]">
              Eight conversations<br />
              that don&rsquo;t happen anywhere else.
            </h2>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[rgba(20,20,58,0.12)]">
            {TOPICS.map((t, i) => (
              <li
                key={t}
                className="border-r border-b border-[rgba(20,20,58,0.12)] p-7 md:p-8 min-h-[10rem] flex flex-col justify-between hover:bg-white transition-colors group"
              >
                <p className="font-mono-num text-[11px] tracking-widest text-[#4A4A6E]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl md:text-[1.65rem] text-[#14143A] leading-tight group-hover:text-[#3A40BC] transition-colors">
                  {t}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============== 07 — AGENDA ============== */}
      <section id="agenda" className="bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28 md:py-36">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <p className="eyebrow text-[#4A4A6E] lg:col-span-3">07 — The Weekend</p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-[#14143A] max-w-[36rem]">
              The shape of two days.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {[
              { name: "Day One", sub: "Saturday", items: DAY_ONE },
              { name: "Day Two", sub: "Sunday", items: DAY_TWO },
            ].map((day) => (
              <div key={day.name}>
                <div className="flex items-baseline justify-between border-b border-[rgba(20,20,58,0.18)] pb-5 mb-2">
                  <h3 className="font-display text-3xl md:text-4xl text-[#14143A]">
                    {day.name}
                  </h3>
                  <p className="eyebrow text-[#4A4A6E]">{day.sub}</p>
                </div>
                <ol>
                  {day.items.map((item, i) => (
                    <li
                      key={i}
                      className="border-b border-[rgba(20,20,58,0.08)] py-6 grid grid-cols-[80px_1fr] items-baseline gap-6"
                    >
                      <span className="font-mono-num text-sm text-[#3A40BC]">
                        {item.time}
                      </span>
                      <span className="font-display text-xl md:text-2xl text-[#14143A]">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 08 — WHO IT'S FOR ============== */}
      <section className="bg-[#3A40BC] text-[#FAF9F4]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28 md:py-40">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[#FFBD58] mb-8">08 — Who It&rsquo;s For</p>
              <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em]">
                If this is you,<br />
                this is for you.
              </h2>

              <div className="mt-16 flex items-baseline gap-6 border-t border-white/15 pt-8">
                <p className="font-display text-[#FFBD58] text-7xl md:text-9xl leading-none">
                  18—30
                </p>
                <p className="eyebrow text-white/60 pb-3">
                  Young men · Accra
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-[28px] overflow-hidden bg-[#1A1F4D]">
                <img
                  src={AUDIENCE_IMG}
                  alt="Young man portrait"
                  className="w-full h-full object-cover img-warm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 09 — PARTNERS ============== */}
      <section id="partners" className="bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28 md:py-36">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <p className="eyebrow text-[#4A4A6E] lg:col-span-3">09 — Partners</p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-[#14143A] max-w-[40rem]">
              Built with people<br />
              already doing the work.
            </h2>
          </div>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 border-t border-l border-[rgba(20,20,58,0.12)]">
            {PARTNERS.map((p, i) => (
              <li
                key={p}
                className="border-r border-b border-[rgba(20,20,58,0.12)] p-8 md:p-10 min-h-[8rem] flex items-center hover:bg-[#EFEEE6] transition-colors"
              >
                <span className="font-display text-2xl md:text-3xl text-[#14143A] leading-tight">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section id="apply" className="bg-[#1A1F4D] text-[#FAF9F4]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 md:py-48 text-center">
          <p className="eyebrow text-[#FFBD58] mb-12">Cohort 2026</p>
          <h2 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-[-0.03em] mx-auto max-w-[18ch]">
            Real talk. Real growth.
            <br />
            <span className="text-[#FFBD58]">Start here.</span>
          </h2>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@boys2men.gh"
              className="inline-flex items-center gap-2 bg-[#FFBD58] text-[#14143A] text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-white transition-colors"
            >
              Apply as a mentee <span aria-hidden>→</span>
            </a>
            <a
              href="mailto:hello@boys2men.gh"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Become a mentor
            </a>
            <a
              href="mailto:hello@boys2men.gh"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Partner with us
            </a>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="bg-[#1A1F4D] text-[#FAF9F4]/70 border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-display text-2xl text-white">
                  Boys<span className="text-[#FFBD58]">2</span>Men
                </span>
                <span className="eyebrow text-white/40">2026</span>
              </div>
              <p className="text-white/55 text-sm leading-[1.6] max-w-xs">
                A mentorship program for young Ghanaian men, 18–30 — building
                the room manhood deserves.
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow text-white/40 mb-4">Program</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#reality" className="hover:text-[#FFBD58] transition-colors">The Reality</a></li>
                <li><a href="#program" className="hover:text-[#FFBD58] transition-colors">The Program</a></li>
                <li><a href="#agenda" className="hover:text-[#FFBD58] transition-colors">Agenda</a></li>
                <li><a href="#partners" className="hover:text-[#FFBD58] transition-colors">Partners</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow text-white/40 mb-4">Get Involved</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#apply" className="hover:text-[#FFBD58] transition-colors">Apply</a></li>
                <li><a href="#apply" className="hover:text-[#FFBD58] transition-colors">Mentor</a></li>
                <li><a href="#apply" className="hover:text-[#FFBD58] transition-colors">Partner</a></li>
                <li><a href="#apply" className="hover:text-[#FFBD58] transition-colors">Donate</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="eyebrow text-white/40 mb-4">Contact</p>
              <a
                href="mailto:hello@boys2men.gh"
                className="block font-display text-xl text-white hover:text-[#FFBD58] transition-colors mb-4"
              >
                hello@boys2men.gh
              </a>
              <ul className="flex gap-4 text-sm">
                <li><a href="#" className="hover:text-[#FFBD58] transition-colors">IG</a></li>
                <li><a href="#" className="hover:text-[#FFBD58] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#FFBD58] transition-colors">X</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
            <p>&copy; 2026 Boys2Men · Accra, Ghana</p>
            <p className="font-display text-white/70">Navigating Manhood</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
