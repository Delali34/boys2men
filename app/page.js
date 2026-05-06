"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "The Reality", href: "#reality" },
  { label: "The Program", href: "#program" },
  { label: "Agenda", href: "#agenda" },
  { label: "Partners", href: "#partners" },
];

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
    value: "63%",
    label: "of Ghanaian men report conformity pressure",
    source: "Ghana Statistical Service, 2022",
  },
  {
    value: "2x",
    label: "Rising anxiety, depression & suicide rates among young men",
    source: "WHO, 2020",
  },
  {
    value: "1 in 4",
    label: "Feel trapped and directionless post-school",
    source: "Boys2Men field interviews, 2025",
  },
];

const REALITY_CARDS = [
  {
    title: "The Path Problem",
    description:
      "Young men graduate into a world that expects them to have it all figured out — career, finances, purpose — but offers no roadmap to get there.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=740&q=80",
  },
  {
    title: "The Relationship Weight",
    description:
      "Navigating love, friendship, and family while carrying the unspoken pressure to be strong, stoic, and self-sufficient takes its toll.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=740&q=80",
  },
  {
    title: "The Space That's Missing",
    description:
      "There are almost no spaces where young men can be honest, vulnerable, and real without being judged or told to 'man up.'",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=740&q=80",
  },
];

const TOPICS = [
  {
    title: "Masculinity",
    description: "Redefining what it means to be a man beyond stereotypes",
    icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Mental Health",
    description: "Breaking the silence on anxiety, depression and emotional wellness",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Healthy Relationships",
    description: "Building authentic connections with partners, friends and family",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Entrepreneurship",
    description: "Building ventures, thinking creatively and creating opportunity",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Leadership",
    description: "Serving communities and leading with integrity and purpose",
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Financial Literacy",
    description: "Mastering money, investing wisely, and building generational wealth",
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
    color: "from-yellow-500 to-amber-600",
  },
  {
    title: "Spirituality",
    description: "Exploring faith, meaning, and inner purpose beyond religion",
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Mindset",
    description: "Cultivating resilience, growth thinking, and mental strength",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    color: "from-cyan-500 to-blue-600",
  },
];

const DAY_ONE = [
  {
    time: "09:00",
    title: "Opening Session",
    description:
      "Welcome, introductions, and setting the tone for honest conversation.",
  },
  {
    time: "10:30",
    title: "Mentorship Block A",
    description:
      "Deep-dive conversations on masculinity, mental health, and navigating post-school paths.",
  },
  {
    time: "14:00",
    title: "Mentorship Block B",
    description:
      "Guided sessions on money, relationships, and faith — led by mentors who've walked the road.",
  },
  {
    time: "16:30",
    title: "Panel Discussion",
    description:
      "Five speakers share real stories on career pivots, mental health journeys, and redefining success.",
  },
];

const DAY_TWO = [
  {
    time: "09:30",
    title: "Mentorship Block C",
    description:
      "Sessions on leadership, mindset shifts, and building an entrepreneurial foundation.",
  },
  {
    time: "11:30",
    title: "Interactive Breakouts",
    description:
      "Choose your track: career mapping, conflict resolution, faith exploration, or financial planning.",
  },
  {
    time: "15:00",
    title: "One-on-One Mentor Sessions",
    description:
      "40-minute private sessions with a mentor of your choice for personalized guidance.",
  },
  {
    time: "17:00",
    title: "Closing Commitments",
    description:
      "Personal pledges, group reflection, and a communal meal to seal the brotherhood.",
  },
];

const PARTNERS = [
  { name: "Mental Health Authority", category: "Health & Wellness" },
  { name: "Ghana Tech Lab", category: "Technology & Innovation" },
  { name: "YALI Network", category: "Leadership Development" },
  { name: "Stanbic Bank", category: "Financial Empowerment" },
  { name: "Impact Hub Accra", category: "Community & Enterprise" },
];

const AUDIENCE_TAGS = [
  "Leadership",
  "Health",
  "Entrepreneurship",
  "Investment",
  "Careers",
  "Relationships",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* ===================== NAVIGATION ===================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">B</span>
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">
                Boys<span className="text-accent">2</span>Men
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#apply"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-amber-200 transition-all hover:-translate-y-0.5"
              >
                Apply for 2026
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-gray-700 hover:text-amber-600 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-3 rounded-full text-sm font-semibold mt-2"
              >
                Apply for 2026
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ===================== HERO ===================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/80 text-sm font-medium">2026 Cohort Now Open</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1]">
                Navigating{" "}
                <span className="gradient-text">Manhood</span>
                <br />
                <span className="text-white/60 text-3xl sm:text-4xl lg:text-5xl font-light italic">
                  on your own terms.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
                A two-day intensive for young men learning to navigate manhood
                — in real conversation, with real mentors, building real
                brotherhood.
              </p>

              <div className="flex flex-wrap gap-2">
                {TOPIC_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-xs text-white/70 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5"
                >
                  Apply as a Mentee
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 transition-all"
                >
                  Learn More
                </a>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-white">2-Day</p>
                  <p className="text-white/50 text-sm">Intensive</p>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <p className="text-2xl font-bold text-white">18–30</p>
                  <p className="text-white/50 text-sm">Ages</p>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <p className="text-2xl font-bold text-white">Accra</p>
                  <p className="text-white/50 text-sm">Ghana</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=740&q=80"
                  alt="Young African man"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/90 font-serif italic text-lg">
                    &ldquo;I don&rsquo;t know who I&rsquo;m supposed to be, only who
                    I&rsquo;m supposed to look like.&rdquo;
                  </p>
                  <p className="text-white/50 text-sm mt-2">
                    — Anonymous, Boys2Men Field Interview
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Applications Open</p>
                  <p className="text-xs text-gray-500">Limited to 50 spots</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent" />
      </section>

      {/* ===================== SECTION 01: THE FALLOUT ===================== */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <span className="section-number">01</span>
              <div className="relative z-10">
                <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                  The Fallout
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                  Young men are under{" "}
                  <span className="gradient-text">pressure.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Society tells them to be strong, successful, and silent.
                  But behind the performance, many are lost — struggling
                  with identity, mental health, finances, and relationships
                  without anyone to talk to.
                </p>
                <blockquote className="border-l-4 border-accent pl-6 py-2">
                  <p className="text-xl font-serif italic text-gray-800">
                    &ldquo;I don&rsquo;t know who I&rsquo;m supposed to be, only
                    who I&rsquo;m supposed to look like.&rdquo;
                  </p>
                  <cite className="text-sm text-gray-500 mt-2 block not-italic">
                    — Boys2Men Field Interview, 2025
                  </cite>
                </blockquote>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=740&q=80"
                  alt="Thoughtful young African man"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 02: STATS ===================== */}
      <section id="reality" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Section 02
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              The Real Deal
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These aren&rsquo;t opinions. These are facts about the state of young
              men in Ghana today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="stat-card rounded-2xl p-8 border border-gray-800 bg-gray-900/50 backdrop-blur text-center group hover:border-accent/40 transition-all duration-500"
              >
                <p className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-4">
                  {stat.value}
                </p>
                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  {stat.label}
                </p>
                <p className="text-gray-600 text-xs uppercase tracking-widest">
                  {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 03: REALITY CARDS ===================== */}
      <section className="py-24 md:py-32 bg-[#f3f0ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Section 03
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
              The Reality
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Three core struggles that define the young male experience today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REALITY_CARDS.map((card, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 04: PROGRAM INTRO ===================== */}
      <section id="program" className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=740&q=80"
                  alt="Group of young men in conversation"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-accent/10 w-48 h-48 rounded-full blur-3xl" />
            </div>

            <div className="order-1 lg:order-2 relative">
              <span className="section-number right-0 left-auto">04</span>
              <div className="relative z-10">
                <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                  The Program
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                  This is your{" "}
                  <span className="gradient-text">room.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Boys2Men is a mentorship platform that brings together young
                  men ages 18–30 for two days of real talk on leadership,
                  careers, finances, spirituality, and mindset building.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  No lectures. No performance. Just honest conversations with
                  mentors who&rsquo;ve been where you are — and made it through.
                </p>

                <div className="space-y-4">
                  {[
                    { label: "Navigating Manhood", sub: "The journey" },
                    { label: "Real Talk, Real Growth", sub: "The room" },
                    { label: "Redefining Masculinity", sub: "The work" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">{item.label}</p>
                        <p className="text-sm text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 05: TOPICS ===================== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Section 05
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
              Eight Conversations That Matter
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each topic is led by a mentor with lived experience — not theory,
              but real wisdom from real journeys.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOPICS.map((topic, i) => (
              <div
                key={i}
                className="topic-card group glass-card p-6 hover:bg-white cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={topic.icon} />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{topic.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 06: AGENDA ===================== */}
      <section id="agenda" className="py-24 md:py-32 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Section 06
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
              The Agenda
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Two days of structured mentorship, real conversation, and
              meaningful connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Day One */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">01</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold">Day One</h3>
                  <p className="text-gray-500 text-sm">Saturday</p>
                </div>
              </div>
              <div className="space-y-6">
                {DAY_ONE.map((item, i) => (
                  <div key={i} className="relative pl-10 agenda-line group">
                    <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-gray-800 border-2 border-accent/40 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-xs font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5 hover:border-accent/30 transition-all">
                      <p className="text-accent text-sm font-mono mb-1">{item.time}</p>
                      <h4 className="font-serif font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day Two */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">02</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold">Day Two</h3>
                  <p className="text-gray-500 text-sm">Sunday</p>
                </div>
              </div>
              <div className="space-y-6">
                {DAY_TWO.map((item, i) => (
                  <div key={i} className="relative pl-10 agenda-line group">
                    <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-gray-800 border-2 border-blue-500/40 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <span className="text-xs font-mono text-blue-400">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5 hover:border-blue-500/30 transition-all">
                      <p className="text-blue-400 text-sm font-mono mb-1">{item.time}</p>
                      <h4 className="font-serif font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 07: WHO IS THIS FOR ===================== */}
      <section className="py-24 md:py-32 bg-[#f3f0ea] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Section 07
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                Built for young men{" "}
                <span className="gradient-text">ready for more.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                If you&rsquo;re 18–30, based in or around Accra, and you want
                more than the script society handed you — this weekend is
                yours.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {AUDIENCE_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl hover:shadow-amber-200 transition-all hover:-translate-y-0.5"
              >
                Apply as a Mentee
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&q=80"
                    alt="Smiling young African man"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                    alt="Young man working on laptop"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=400&q=80"
                    alt="Young man reading"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                    alt="Confident young African businessman"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 08: PARTNERS ===================== */}
      <section id="partners" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Section 08
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Partners
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Organizations and institutions championing the growth of young
              men across Ghana.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PARTNERS.map((partner, i) => (
              <div
                key={i}
                className="glass-card p-6 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto mb-4 group-hover:from-accent/10 group-hover:to-amber-50 transition-all">
                  <span className="text-2xl font-serif font-bold text-gray-300 group-hover:text-accent transition-colors">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-sm mb-1">{partner.name}</h3>
                <p className="text-gray-400 text-xs">{partner.category}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">
              Want to support the next generation of men?
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-all"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 09: CTA ===================== */}
      <section
        id="apply"
        className="py-24 md:py-32 hero-gradient relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Your journey starts with{" "}
            <span className="gradient-text">one step.</span>
          </h2>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Apply as a mentee, become a mentor, partner with us, or donate to
            help more young men find their path.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <a
              href="mailto:info@boys2men.org"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5"
            >
              Apply as a Mentee
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:info@boys2men.org"
              className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              Become a Mentor
            </a>
            <a
              href="mailto:info@boys2men.org"
              className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-[#050505] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-lg">B</span>
                </div>
                <span className="font-serif font-bold text-xl">
                  Boys<span className="text-accent">2</span>Men
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                A two-day intensive for young men learning to navigate manhood
                — on their own terms, in real conversation.
              </p>
              <div className="flex gap-3">
                {["Instagram", "LinkedIn", "X"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-accent/20 flex items-center justify-center transition-colors group"
                    aria-label={social}
                  >
                    <span className="text-gray-500 group-hover:text-accent text-xs font-bold transition-colors">
                      {social.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
                Navigate
              </h4>
              <ul className="space-y-3">
                {["The Reality", "The Program", "Agenda", "Partners"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                        className="text-gray-500 hover:text-white text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
                Get Involved
              </h4>
              <ul className="space-y-3">
                {["Apply", "Mentor", "Partner", "Donate"].map((link) => (
                  <li key={link}>
                    <a
                      href="#apply"
                      className="text-gray-500 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@boys2men.org"
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    info@boys2men.org
                  </a>
                </li>
                <li className="text-gray-500 text-sm">Accra, Ghana</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              &copy; 2026 Boys2Men &middot; Accra, Ghana. All rights reserved.
            </p>
            <p className="text-gray-700 text-xs">
              Building the next generation of men.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
