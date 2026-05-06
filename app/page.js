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
    <div className="min-h-screen bg-[#FAF9F4] text-[#14143A]">
      {/* ============== TOP BAR ============== */}
      <header className="sticky top-0 z-50 bg-[#FAF9F4]/85 backdrop-blur-md border-b border-[rgba(20,20,58,0.08)]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-14 md:h-16 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-[#14143A] text-xl">
              Boys<span className="text-[#3A40BC]">2</span>Men
            </span>
            <span className="hidden sm:inline eyebrow text-[#4A4A6E] -translate-y-0.5">
              · 2026
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9 text-[13px] text-[#4A4A6E]">
            <a href="#reality" className="link-soft hover:text-[#14143A] transition-colors">The Reality</a>
            <a href="#program" className="link-soft hover:text-[#14143A] transition-colors">The Program</a>
            <a href="#agenda" className="link-soft hover:text-[#14143A] transition-colors">Agenda</a>
            <a href="#partners" className="link-soft hover:text-[#14143A] transition-colors">Partners</a>
          </nav>

          <a
            href="#apply"
            className="hidden md:inline-flex items-center gap-2 bg-[#14143A] text-[#FAF9F4] text-[13px] font-medium px-4 py-2 rounded-full hover:bg-[#3A40BC] transition-colors"
          >
            Apply
            <span aria-hidden>→</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12"/> : <path strokeLinecap="round" d="M4 7h16M4 17h16"/>}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[rgba(20,20,58,0.08)] bg-[#FAF9F4]">
            <div className="px-6 py-5 space-y-3 text-[#4A4A6E]">
              {[
                ["The Reality", "#reality"],
                ["The Program", "#program"],
                ["Agenda", "#agenda"],
                ["Partners", "#partners"],
              ].map(([l, h]) => (
                <a key={l} href={h} onClick={() => setMenuOpen(false)} className="block py-1.5">
                  {l}
                </a>
              ))}
              <a href="#apply" onClick={() => setMenuOpen(false)} className="block bg-[#14143A] text-[#FAF9F4] text-center py-2.5 rounded-full mt-3">
                Apply
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ============== HERO ============== */}
      <section id="top" className="relative">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 pb-12 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7 max-w-[680px]">
              <p className="eyebrow text-[#4A4A6E] mb-10">
                <span className="disc mr-2 align-middle" />
                A mentorship program · Ghana · 2026
              </p>

              <h1 className="font-display text-[#14143A] text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.92] tracking-[-0.03em]">
                Boys<span className="text-[#3A40BC]">2</span>
                <br className="md:hidden" />
                Men.
              </h1>

              <p className="mt-10 text-[#4A4A6E] text-lg md:text-xl leading-[1.55] max-w-[34rem]">
                Two days. A room of young men. The conversations
                manhood deserves — on their own terms.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 bg-[#14143A] text-[#FAF9F4] text-sm font-medium px-6 py-3.5 rounded-full hover:bg-[#3A40BC] transition-colors"
                >
                  Apply for the cohort
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 bg-transparent border border-[rgba(20,20,58,0.2)] text-[#14143A] text-sm font-medium px-6 py-3.5 rounded-full hover:border-[#14143A] transition-colors"
                >
                  Become a mentor
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[28px] overflow-hidden bg-[#EFEEE6]">
                <img
                  src={HERO_IMG}
                  alt="Portrait"
                  className="w-full h-full object-cover img-warm"
                />
              </div>
              <div className="absolute -top-5 -left-5 md:-left-8 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FDBD59] flex items-center justify-center shadow-md rotate-[-6deg]">
                <span className="font-display text-[#14143A] text-xl md:text-2xl">B2M</span>
              </div>
            </div>
          </div>

          {/* Spec row */}
          <dl className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-[rgba(20,20,58,0.12)] pt-8">
            {[
              ["Cohort", "2026"],
              ["Format", "2-day intensive"],
              ["For", "Men, 18 – 30"],
              ["Where", "Accra, Ghana"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow text-[#4A4A6E] mb-2">{k}</dt>
                <dd className="font-display text-2xl md:text-3xl text-[#14143A]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Topic ticker */}
        <div className="border-y border-[rgba(20,20,58,0.12)] py-5 overflow-hidden bg-[#F4F4FB]">
          <div className="flex marquee whitespace-nowrap">
            {[...TOPIC_TAGS, ...TOPIC_TAGS, ...TOPIC_TAGS].map((t, i) => (
              <span key={i} className="font-display text-[#14143A] text-2xl md:text-3xl flex items-center mr-12">
                {t}
                <span className="ml-12 text-[#FDBD59]" aria-hidden>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 01 — THE REALITY (Quote) ============== */}
      <section id="reality" className="bg-[#3A40BC] text-[#FAF9F4]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 md:py-40">
          <div className="grid lg:grid-cols-12 gap-10">
            <p className="eyebrow text-[#FDBD59] lg:col-span-3">
              01 — The Fallout
            </p>
            <div className="lg:col-span-9 max-w-[58rem]">
              <blockquote className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.02em]">
                &ldquo;I don&rsquo;t know who I&rsquo;m supposed to be —
                <span className="text-[#FDBD59]"> only who I&rsquo;m supposed to look like.&rdquo;</span>
              </blockquote>
              <p className="eyebrow text-[#FAF9F4]/60 mt-12">
                Boys2Men field interview · Accra · 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 02 — THE NUMBERS ============== */}
      <section className="bg-[#FAF9F4]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28 md:py-36">
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <p className="eyebrow text-[#4A4A6E] lg:col-span-3">02 — The Real Deal</p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-[#14143A] max-w-[40rem]">
              The numbers beneath the silence.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-[rgba(20,20,58,0.12)]">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`py-10 md:py-14 ${i > 0 ? "md:border-l border-[rgba(20,20,58,0.12)] md:pl-10" : "md:pr-10"} ${i > 0 ? "border-t md:border-t-0 border-[rgba(20,20,58,0.12)]" : ""}`}
              >
                <p className="font-display text-[#3A40BC] text-7xl md:text-8xl leading-none mb-8">
                  {s.big}
                </p>
                <p className="text-[#14143A] text-base md:text-lg leading-[1.55] mb-6 max-w-xs">
                  {s.body}
                </p>
                <p className="eyebrow text-[#4A4A6E]">{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 03 — REALITY 3 LINES ============== */}
      <section className="bg-[#EFEEE6]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28 md:py-36">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <p className="eyebrow text-[#4A4A6E] lg:col-span-3">03 — The Reality</p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-[#14143A] max-w-[44rem]">
              Pressure is high.<br />
              Opportunity is narrow.
            </h2>
          </div>

          <ol className="grid md:grid-cols-3 border-t border-[rgba(20,20,58,0.18)]">
            {REALITY.map((r, i) => (
              <li
                key={r.n}
                className={`py-10 md:py-14 ${i > 0 ? "md:border-l border-[rgba(20,20,58,0.18)] md:pl-10" : "md:pr-10"} ${i > 0 ? "border-t md:border-t-0 border-[rgba(20,20,58,0.18)]" : ""}`}
              >
                <p className="font-mono-num text-[#3A40BC] text-sm mb-10 tracking-widest">
                  {r.n} / 03
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-[#14143A] leading-tight mb-5">
                  {r.label}
                </h3>
                <p className="text-[#4A4A6E] text-base leading-[1.6] max-w-xs">
                  {r.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============== 04 — PROGRAM ============== */}
      <section id="program" className="bg-[#FAF9F4]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28 md:py-40">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-[28px] overflow-hidden bg-[#EFEEE6]">
                <img
                  src={PROGRAM_IMG}
                  alt="Mentorship in conversation"
                  className="w-full h-full object-cover img-warm"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-8">
              <p className="eyebrow text-[#4A4A6E] mb-8">04 — The Program</p>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-[#14143A] max-w-[28ch]">
                A place to land,
                <span className="text-[#3A40BC]"> while you figure out where you&rsquo;re going.</span>
              </h2>

              <p className="mt-10 text-[#4A4A6E] text-lg leading-[1.6] max-w-[36rem]">
                Mentors who&rsquo;ve walked the road. No lectures, no
                performance. Two days, real conversation.
              </p>

              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
                {[
                  "Leadership",
                  "Career",
                  "Finances",
                  "Mindset",
                  "Spirituality",
                  "Brotherhood",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#14143A] text-base">
                    <span className="disc" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 05 — PILLARS ============== */}
      <section className="bg-[#3A40BC] text-[#FAF9F4]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28 md:py-36">
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <p className="eyebrow text-[#FDBD59] lg:col-span-3">05 — In Our Words</p>
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
                <p className="font-display text-[#FDBD59] text-4xl md:text-5xl mb-12">
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
                className="border-r border-b border-[rgba(20,20,58,0.12)] p-7 md:p-8 min-h-[10rem] flex flex-col justify-between hover:bg-[#FAF9F4] transition-colors group"
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
      <section id="agenda" className="bg-[#FAF9F4]">
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
              <p className="eyebrow text-[#FDBD59] mb-8">08 — Who It&rsquo;s For</p>
              <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em]">
                If this is you,<br />
                this is for you.
              </h2>

              <div className="mt-16 flex items-baseline gap-6 border-t border-white/15 pt-8">
                <p className="font-display text-[#FDBD59] text-7xl md:text-9xl leading-none">
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
      <section id="partners" className="bg-[#FAF9F4]">
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
          <p className="eyebrow text-[#FDBD59] mb-12">Cohort 2026</p>
          <h2 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-[-0.03em] mx-auto max-w-[18ch]">
            Real talk. Real growth.
            <br />
            <span className="text-[#FDBD59]">Start here.</span>
          </h2>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@boys2men.gh"
              className="inline-flex items-center gap-2 bg-[#FDBD59] text-[#14143A] text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-white transition-colors"
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
                  Boys<span className="text-[#FDBD59]">2</span>Men
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
                <li><a href="#reality" className="hover:text-[#FDBD59] transition-colors">The Reality</a></li>
                <li><a href="#program" className="hover:text-[#FDBD59] transition-colors">The Program</a></li>
                <li><a href="#agenda" className="hover:text-[#FDBD59] transition-colors">Agenda</a></li>
                <li><a href="#partners" className="hover:text-[#FDBD59] transition-colors">Partners</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow text-white/40 mb-4">Get Involved</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#apply" className="hover:text-[#FDBD59] transition-colors">Apply</a></li>
                <li><a href="#apply" className="hover:text-[#FDBD59] transition-colors">Mentor</a></li>
                <li><a href="#apply" className="hover:text-[#FDBD59] transition-colors">Partner</a></li>
                <li><a href="#apply" className="hover:text-[#FDBD59] transition-colors">Donate</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="eyebrow text-white/40 mb-4">Contact</p>
              <a
                href="mailto:hello@boys2men.gh"
                className="block font-display text-xl text-white hover:text-[#FDBD59] transition-colors mb-4"
              >
                hello@boys2men.gh
              </a>
              <ul className="flex gap-4 text-sm">
                <li><a href="#" className="hover:text-[#FDBD59] transition-colors">IG</a></li>
                <li><a href="#" className="hover:text-[#FDBD59] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#FDBD59] transition-colors">X</a></li>
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
