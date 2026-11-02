import { CATEGORIES, LINK_COUNT } from "@/lib/links";
import SuiteNav from "@/components/SuiteNav";
import { siteUrl } from "@/lib/suite";

const FLOATING_TAGS = [
  { label: "CalCentral", className: "left-[6%] top-[22%] -rotate-6 animate-float" },
  { label: "Ed", className: "left-[14%] bottom-[18%] rotate-3 animate-float-slow" },
  { label: "bCourses", className: "right-[8%] top-[18%] rotate-6 animate-float-slow" },
  { label: "Gradescope", className: "right-[4%] bottom-[24%] -rotate-3 animate-float" },
];

// the ones students open every day
const QUICK_LINKS = [
  { icon: "🏛️", title: "CalCentral", url: "https://calcentral.berkeley.edu", hint: "Enrollment" },
  { icon: "📘", title: "bCourses", url: "https://bcourses.berkeley.edu", hint: "Classes" },
  { icon: "💬", title: "Ed Discussion", url: "https://edstem.org", hint: "Q&A" },
  { icon: "📝", title: "Gradescope", url: "https://www.gradescope.com", hint: "Homework" },
];

const STATS = [
  { value: String(LINK_COUNT), label: "links collected" },
  { value: String(CATEGORIES.length), label: "categories" },
  { value: "1", label: "tab to bookmark" },
  { value: "★", label: "star your favorites" },
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-linear-to-br from-berkeley-dark via-berkeley to-[#0b4a7a] px-4 pb-36 text-white">
      {/* background: grid + moving glows + floating link tags */}
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 animate-aurora rounded-full bg-gold/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-112 w-md animate-aurora rounded-full bg-berkeley-light/40 blur-3xl [animation-delay:-7s]" />

      {FLOATING_TAGS.map((t) => (
        <span
          key={t.label}
          className={`pointer-events-none absolute hidden rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs text-blue-100/70 backdrop-blur-sm xl:block ${t.className}`}
        >
          {t.label}
        </span>
      ))}

      {/* nav */}
      <nav className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 py-6">
        <div className="flex items-center gap-2 font-bold tracking-tight">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.svg" alt="" className="h-8 w-8" />
          EECS Links
        </div>
        <SuiteNav current="links" />
      </nav>

      <div className="relative mx-auto mt-8 grid max-w-6xl items-center gap-12 lg:mt-14 lg:grid-cols-[1.15fr_1fr]">

        {/* pitch */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            For UC Berkeley EECS students
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Every link you need,{" "}
            <span className="animate-shimmer bg-linear-to-r from-gold via-amber-200 to-gold bg-size-[200%_auto] bg-clip-text text-transparent">
              one tab away
            </span>
            .
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-blue-100/90 sm:text-lg lg:mx-0">
            Enrollment, degree requirements, course sites, tutoring, internships, and campus
            resources, all in one place. Search it, or star the ones you use most.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#links"
              className="rounded-xl bg-gold px-6 py-3 font-semibold text-berkeley shadow-lg shadow-gold/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Browse the links ↓
            </a>
            <a
              href={siteUrl("planner")}
              className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              Plan my degree
            </a>
          </div>
        </div>

        {/* quick access card */}
        <div className="relative mx-auto hidden w-full max-w-md animate-fade-up [animation-delay:200ms] sm:block">
          <div className="absolute -inset-4 rounded-4xl bg-gold/10 blur-2xl" />
          <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <div className="mb-5 flex items-center justify-between text-xs text-blue-100">
              <span className="font-semibold uppercase tracking-wider">Quick access</span>
              <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-emerald-300">● used daily</span>
            </div>

            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l, i) => (
                <li key={l.url} className="animate-fade-up" style={{ animationDelay: `${400 + i * 150}ms` }}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/20"
                  >
                    <span className="text-xl" aria-hidden>{l.icon}</span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{l.title}</span>
                      <span className="block text-xs text-blue-200">{l.hint}</span>
                    </span>
                    <span className="text-gold transition group-hover:translate-x-1" aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* stats */}
      <dl className="relative mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-berkeley-dark/40 px-4 py-4 text-center">
            <dt className="text-2xl font-extrabold text-gold">{s.value}</dt>
            <dd className="text-xs text-blue-200">{s.label}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
