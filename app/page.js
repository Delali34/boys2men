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

const HERO_INFO = [
  { label: "Cohort", value: "2026" },
  { label: "Format", value: "2-day intensive" },
  { label: "For", value: "Men, 18 – 30" },
  { label: "Where", value: "Accra, Ghana" },
];

const QUOTES = [
  "I don't know who I'm supposed to be, only who I'm supposed to look like.",
  "My father didn't talk about this. His father didn't talk about this. So I don't talk about this.",
];

const STATS = [
  {
    big: "63%",
    body:
      "of Ghanaian men aged 18–30 report feeling pressure to conform to traditional masculinity norms.",
    src: "Ghana Statistical Service · 2022",
  },
  {
    big: "↑",
    body:
      "Anxiety, depression, and suicide rates among young men are rising — signalling a deeper, unspoken issue.",
    src: "World Health Organization · 2020",
  },
  {
    big: "1 in 4",
    body:
      "young men feel trapped post-school — unsure how to seek help, where to start, or who to trust.",
    src: "Field Interviews · Boys2Men, 2025",
  },
];

const REALITY = [
  {
    n: "01",
    body:
      "Many young men feel lost after school — chasing a path that isn't theirs, or no path at all. Pressure to succeed is loud; opportunities to actually do so are limited.",
    title: ["The Path", "Problem."],
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    n: "02",
    body:
      "Family expectations, romantic relationships, friendships — all loaded with unspoken rules. Many young men struggle to cope, and don't know it's okay not to.",
    title: ["The Relationship", "Weight."],
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    n: "03",
    body:
      "What's needed isn't another lecture. It's a place to be honest. To ask the question you can't ask anywhere else, and hear an answer from someone who's lived it.",
    title: ["The Space", "That's Missing."],
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const PILLARS = [
  {
    roman: "I",
    line1: "Navigating",
    line2: "Manhood.",
    label: "— The Program Tagline",
  },
  {
    roman: "II",
    line1: "Real Talk,",
    line2: "Real Growth.",
    label: "— The Room We Make",
  },
  {
    roman: "III",
    line1: "Redefining",
    line2: "Masculinity.",
    label: "— The Work We're Doing",
  },
];

const TOPICS = [
  {
    title: "Masculinity",
    body: "What it can mean, beyond what we were handed.",
  },
  {
    title: "Mental Health",
    body: "Honest tools for an honest conversation.",
  },
  {
    title: "Healthy Relationships",
    body: "Family, partners, friends — what we owe and what we don't.",
  },
  {
    title: "Entrepreneurship",
    body: "Building something — without burning yourself down for it.",
  },
  {
    title: "Leadership",
    body: "Showing up for the people around you, on purpose.",
  },
  {
    title: "Financial Literacy",
    body: "Money, plainly. Earn, keep, grow, share.",
  },
  {
    title: "Spirituality",
    body: "What you believe, why, and how it holds you up.",
  },
  {
    title: "Mindset",
    body: "The lens you bring — and how to sharpen it.",
  },
];

const DAY_ONE = [
  {
    time: "09:00",
    title: "Opening Session",
    body:
      "Grounding, ground rules, and introductions. Why we're in the room — what we're committing to for the next two days.",
  },
  {
    time: "10:30",
    title: "Mentorship Sessions · Block A",
    body:
      "Small-group conversations led by mentors across masculinity, mental health, and the path after school. Honest, no script.",
  },
  {
    time: "14:00",
    title: "Mentorship Sessions · Block B",
    body:
      "Money, relationships, and faith. Practical tools, real questions, and the space to actually answer them.",
  },
  {
    time: "16:30",
    title: "Panel Discussion",
    body:
      "Five voices, one room. Founders, fathers, therapists, and pastors talking about the parts they don't usually talk about.",
  },
];

const DAY_TWO = [
  {
    time: "09:30",
    title: "Mentorship Sessions · Block C",
    body:
      "Leadership, mindset, and entrepreneurship. The tools, frameworks, and conversations that change the trajectory.",
  },
  {
    time: "11:30",
    title: "Interactive Breakouts",
    body:
      "Choose your track: career mapping, conflict resolution, faith, or financial planning. Hands-on, small-group.",
  },
  {
    time: "15:00",
    title: "One-on-One Mentor Sessions",
    body:
      "40 dedicated minutes with a mentor of your choice. Questions you can't ask anywhere else, answered.",
  },
  {
    time: "17:00",
    title: "Closing Commitments",
    body:
      "Personal pledges, group reflection, and a communal meal to seal the brotherhood you've built.",
  },
];

const AUDIENCE_TAGS = [
  "Leadership",
  "Men's Health",
  "Entrepreneurship",
  "Investment",
  "Careers",
  "Relationships",
];

const PARTNERS = [
  { name: "Mental Health Authority" },
  { name: "Ghana Tech Lab" },
  { name: "YALI Network" },
  { name: "Stanbic Bank" },
  { name: "Impact Hub Accra" },
  { name: "+ Your Org" },
];

// Pexels images of Black men — curated for the page
const HERO_IMG =
  "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200";
const FALLOUT_IMG =
  "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1200";
const PROGRAM_IMG =
  "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1200";
const AUDIENCE_IMG =
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-ink">
      {/* ============== HEADER ============== */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-indigo/70 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-md">
              <span className="font-serif italic text-indigo-deep font-bold text-lg">
                B
              </span>
            </div>
            <span className="text-white font-serif italic text-lg tracking-tight">
              Boys2Men
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm">
            <a href="#fallout" className="text-white/80 hover:text-gold transition-colors link-underline">The Reality</a>
            <a href="#program" className="text-white/80 hover:text-gold transition-colors link-underline">The Program</a>
            <a href="#agenda" className="text-white/80 hover:text-gold transition-colors link-underline">Agenda</a>
            <a href="#partners" className="text-white/80 hover:text-gold transition-colors link-underline">Partners</a>
          </nav>

          <a
            href="#apply"
            className="hidden md:inline-flex items-center gap-2 bg-gold text-indigo-deep font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white transition-colors"
          >
            Apply for 2026
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/> : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-indigo-deep border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              {[
                { label: "The Reality", href: "#fallout" },
                { label: "The Program", href: "#program" },
                { label: "Agenda", href: "#agenda" },
                { label: "Partners", href: "#partners" },
              ].map((l) => (
                <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="block text-white/80 py-2">
                  {l.label}
                </a>
              ))}
              <a href="#apply" onClick={() => setMenuOpen(false)} className="block text-center bg-gold text-indigo-deep font-semibold py-3 rounded-full mt-2">
                Apply for 2026
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ============== HERO ============== */}
      <section
        id="top"
        className="relative min-h-screen bg-indigo overflow-hidden hero-vignette"
      >
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 md:pt-40 pb-24 grid lg:grid-cols-12 gap-10 items-end min-h-screen">
          <div className="lg:col-span-7 space-y-8">
            <p className="kicker text-gold">
              A Mentorship Program · Ghana · 2026
            </p>

            <h1 className="font-serif italic text-white text-[15vw] md:text-[10vw] lg:text-[9rem] xl:text-[11rem] leading-[0.9] tracking-tight">
              Boys<span className="text-gold">2</span>Men
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              A two-day intensive for young men learning to navigate manhood —
              on their own terms, in real conversation.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-gold text-indigo-deep font-semibold px-7 py-4 rounded-full hover:bg-white transition-colors"
              >
                Apply for the 2026 cohort
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-7 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Become a mentor
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={HERO_IMG}
                alt="Young African man in thoughtful portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-gold flex items-center justify-center shadow-xl rotate-[-8deg]">
              <span className="font-serif italic text-indigo-deep text-3xl font-bold">B2M</span>
            </div>
          </div>

          <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-12 border-t border-white/10">
            {HERO_INFO.map((item) => (
              <div key={item.label}>
                <p className="kicker text-gold mb-2">{item.label}</p>
                <p className="text-white text-lg md:text-xl font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Topic ticker */}
        <div className="relative bg-indigo-deep border-t border-white/10 py-5 marquee-mask overflow-hidden">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...TOPIC_TAGS, ...TOPIC_TAGS, ...TOPIC_TAGS].map((t, i) => (
              <span key={i} className="font-serif italic text-white/70 text-2xl md:text-3xl flex items-center gap-12">
                {t}
                <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 01 — THE FALLOUT ============== */}
      <section id="fallout" className="bg-indigo text-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="kicker text-gold mb-4">01 — The Fallout</p>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              The weight young men carry, quietly.
            </h2>
            <div className="mt-10 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <img
                src={FALLOUT_IMG}
                alt="Pensive young African man"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8 space-y-12">
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
              Across Ghana, young men are grappling with significant pressures
              — navigating masculinity, mental health, careers, spirituality,
              and relationships — often alone. Traditional notions of what a
              man should be can feel suffocating, leaving many isolated and
              disoriented.
            </p>

            <div>
              <p className="kicker text-gold mb-6">What it sounds like</p>
              <div className="space-y-6">
                {QUOTES.map((q, i) => (
                  <blockquote
                    key={i}
                    className="border-l-2 border-gold pl-6 py-2 max-w-2xl"
                  >
                    <p className="font-serif italic text-2xl md:text-3xl leading-tight text-white">
                      &ldquo;{q}&rdquo;
                    </p>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 02 — THE REAL DEAL (Stats) ============== */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <p className="kicker text-indigo mb-4">02 — The Real Deal</p>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
              The numbers beneath the silence.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white p-8 md:p-10 flex flex-col">
                <div className="font-serif italic text-7xl md:text-8xl text-indigo leading-none mb-8">
                  {s.big}
                </div>
                <p className="text-ink/80 text-base md:text-lg leading-relaxed mb-8">
                  {s.body}
                </p>
                <p className="kicker text-ink/40 mt-auto">{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 03 — THE REALITY ============== */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <p className="kicker text-indigo mb-4">03 — The Reality</p>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
              Pressure is high. Opportunity is narrow.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {REALITY.map((c) => (
              <article
                key={c.n}
                className="card-lift bg-white rounded-3xl overflow-hidden border border-gray-200/80 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title.join(" ")}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 lg:p-8 flex flex-col flex-1">
                  <p className="num-stamp text-gold-dark text-2xl mb-5">{c.n}</p>
                  <p className="text-ink/70 text-base leading-relaxed mb-8">
                    {c.body}
                  </p>
                  <h3 className="font-serif italic text-3xl md:text-4xl text-indigo leading-[1.05] mt-auto">
                    {c.title[0]}
                    <br />
                    {c.title[1]}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 04 — INTRODUCING ============== */}
      <section id="program" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="aspect-[5/6] rounded-3xl overflow-hidden">
              <img
                src={PROGRAM_IMG}
                alt="Group of young African men in conversation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <p className="kicker text-indigo">04 — Introducing</p>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
              A place to land, while you figure out where you&rsquo;re going.
            </h2>
            <div className="space-y-6 text-ink/70 text-lg leading-relaxed max-w-xl">
              <p>
                A transformative mentorship platform for young men (18–30) to
                explore, learn, and grow in a safe, supportive environment.
              </p>
              <p>
                The program includes leadership workshops, career exploration,
                financial literacy, building the right mindset to navigate the
                complexities of life, and a real conversation about
                spirituality. Mentors are committed — present, honest, and
                there to walk with you, not lecture you.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-6 max-w-xl">
              <p className="kicker text-indigo mb-3">Objective</p>
              <p className="text-ink text-lg leading-relaxed">
                Empower young men to unlock their potential, build meaningful
                relationships, and become leaders in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 05 — IN OUR WORDS (Pillars) ============== */}
      <section className="bg-indigo text-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-20">
            <p className="kicker text-gold mb-4">05 — In Our Words</p>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              What we stand for, in three lines.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {PILLARS.map((p) => (
              <div key={p.roman} className="bg-indigo p-10 md:p-12 min-h-[24rem] flex flex-col">
                <p className="font-serif italic text-gold text-4xl md:text-5xl mb-12">
                  {p.roman}
                </p>
                <h3 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-auto">
                  {p.line1}
                  <br />
                  {p.line2}
                </h3>
                <p className="kicker text-white/50 mt-12">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 06 — TOPICS ============== */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mb-16">
            <p className="kicker text-indigo mb-4">06 — The Mentorship Program</p>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
              Two days. Six conversations
              <br />
              that don&rsquo;t happen anywhere else.
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed mt-8 max-w-2xl">
              A dynamic mix of speakers, panel discussions, and interactive
              breakout sessions — a safe space to explore topics most rooms
              won&rsquo;t touch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200/80 border border-gray-200/80">
            {TOPICS.map((t, i) => (
              <div
                key={t.title}
                className="bg-cream p-7 md:p-8 group hover:bg-white transition-colors min-h-[14rem] flex flex-col"
              >
                <p className="num-stamp text-gold-dark text-lg mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-serif italic text-2xl text-indigo mb-4">
                  {t.title}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed mt-auto">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 07 — AGENDA ============== */}
      <section id="agenda" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <p className="kicker text-indigo mb-4">07 — Two Days, Plotted</p>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
              The shape of the weekend.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {[{ name: "Day One", sub: "Saturday", n: "01", items: DAY_ONE },
              { name: "Day Two", sub: "Sunday", n: "02", items: DAY_TWO }].map((day) => (
              <div key={day.name}>
                <div className="flex items-baseline justify-between border-b-2 border-ink pb-6 mb-10">
                  <h3 className="font-serif italic text-4xl md:text-5xl text-ink">
                    {day.name}
                  </h3>
                  <p className="kicker text-ink/50">{day.sub}</p>
                </div>
                <p className="num-stamp text-gold-dark text-2xl mb-8">{day.n}</p>

                <ol className="space-y-10">
                  {day.items.map((item, i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-6">
                      <p className="font-mono text-sm text-indigo font-bold pt-1 tabular-nums">
                        {item.time}
                      </p>
                      <div>
                        <h4 className="font-serif italic text-2xl text-ink mb-3">
                          {item.title}
                        </h4>
                        <p className="text-ink/70 text-base leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 08 — WHO IT'S FOR ============== */}
      <section className="bg-indigo text-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="kicker text-gold mb-4">08 — Who It&rsquo;s For</p>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              If this is you, this is for you.
            </h2>

            <div className="flex items-end gap-6 mt-12">
              <p className="font-serif italic text-7xl md:text-9xl text-gold leading-none">
                18—30
              </p>
              <p className="kicker text-white/60 pb-3">
                Target audience · Young men
              </p>
            </div>

            <div className="border-l-2 border-gold pl-6 mt-12 max-w-2xl">
              <p className="kicker text-gold mb-3">Objective</p>
              <p className="text-white/85 text-lg leading-relaxed">
                Create a safe space for young men to engage with experts and
                successful leaders — focused on leadership, men&rsquo;s health,
                entrepreneurship, investment, careers, relationships, and the
                issues that actually shape life right now.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-10">
              {AUDIENCE_TAGS.map((t) => (
                <span
                  key={t}
                  className="kicker px-4 py-2 border border-white/20 rounded-full text-white/80 hover:border-gold hover:text-gold transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={AUDIENCE_IMG}
                alt="Young African men in conversation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============== 09 — PARTNERS ============== */}
      <section id="partners" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <p className="kicker text-indigo mb-4">09 — Potential Partners</p>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
              Built with people already doing the work.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="bg-white p-8 md:p-10 min-h-[10rem] flex items-center group hover:bg-cream transition-colors"
              >
                <p className="font-serif italic text-2xl md:text-3xl text-ink leading-tight group-hover:text-indigo transition-colors">
                  {p.name}
                </p>
              </div>
            ))}
          </div>

          <p className="text-ink/70 text-lg leading-relaxed mt-12 max-w-2xl">
            We&rsquo;re in conversation with leaders across mental health,
            finance, faith, and entrepreneurship. If you&rsquo;d like to add
            your name, we&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section id="apply" className="bg-indigo text-white py-24 md:py-36 relative overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="kicker text-gold mb-8">Boys2Men · Cohort 2026</p>
          <h2 className="font-serif italic text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-balance">
            Real talk.
            <br />
            Real growth.
            <br />
            <span className="text-gold">Start here.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-14">
            <a
              href="mailto:hello@boys2men.gh"
              className="inline-flex items-center gap-2 bg-gold text-indigo-deep font-semibold px-7 py-4 rounded-full hover:bg-white transition-colors"
            >
              Apply as a mentee
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              href="mailto:hello@boys2men.gh"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-7 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Become a mentor
            </a>
            <a
              href="mailto:hello@boys2men.gh"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-7 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Partner with us
            </a>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="bg-indigo-deep text-white pt-20 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <a href="#top" className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <span className="font-serif italic text-indigo-deep font-bold text-lg">B</span>
                </div>
                <span className="font-serif italic text-xl">Boys2Men</span>
              </a>
              <p className="text-white/60 text-base leading-relaxed max-w-md">
                A mentorship program for young Ghanaian men, 18–30 — building
                the room manhood deserves.
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="kicker text-gold mb-4">Program</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#fallout" className="hover:text-gold transition-colors">The Reality</a></li>
                <li><a href="#program" className="hover:text-gold transition-colors">The Program</a></li>
                <li><a href="#agenda" className="hover:text-gold transition-colors">Agenda</a></li>
                <li><a href="#partners" className="hover:text-gold transition-colors">Partners</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="kicker text-gold mb-4">Get Involved</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#apply" className="hover:text-gold transition-colors">Apply as mentee</a></li>
                <li><a href="#apply" className="hover:text-gold transition-colors">Become a mentor</a></li>
                <li><a href="#apply" className="hover:text-gold transition-colors">Partner with us</a></li>
                <li><a href="#apply" className="hover:text-gold transition-colors">Donate</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="kicker text-gold mb-4">Contact</p>
              <a
                href="mailto:hello@boys2men.gh"
                className="text-white text-base hover:text-gold transition-colors block mb-4"
              >
                hello@boys2men.gh
              </a>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">X / Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/50">
            <p>&copy; 2026 Boys2Men · Accra, Ghana</p>
            <p className="font-serif italic text-white/70">Navigating Manhood</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
