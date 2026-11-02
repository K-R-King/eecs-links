import { PLANNER_URL } from "@/lib/starred";

const TIPS = [
  { icon: "🔍", title: "Search anything", text: "Press / anywhere to jump to search, Esc to clear it." },
  { icon: "⭐", title: "Star your favorites", text: "Starred links stay at the top, saved in this browser." },
  { icon: "🔖", title: "Bookmark this page", text: "One tab for every Berkeley site you'll need." },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-linear-to-br from-berkeley-dark via-berkeley to-[#0b4a7a] px-4 pt-16 pb-10 text-white">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 animate-aurora rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Get the <span className="text-gold">most</span> out of it
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {TIPS.map((t, i) => (
            <div
              key={t.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{t.icon}</span>
                <span className="text-xs font-bold text-gold">TIP {i + 1}</span>
              </div>
              <p className="mt-3 font-semibold">{t.title}</p>
              <p className="mt-1 text-sm text-blue-200">{t.text}</p>
            </div>
          ))}
        </div>

        {PLANNER_URL && (
          <a
            href={PLANNER_URL}
            className="group mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold/30 bg-gold/10 p-6 transition hover:border-gold sm:flex-row"
          >
            <span className="text-center sm:text-left">
              <span className="block font-semibold">🗺️ Planning your next semesters?</span>
              <span className="block text-sm text-blue-200">The EECS Planner maps your whole degree, prerequisites and all.</span>
            </span>
            <span className="shrink-0 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-berkeley shadow-lg shadow-gold/30 transition group-hover:-translate-y-0.5">
              Open the planner →
            </span>
          </a>
        )}

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.svg" alt="" className="h-7 w-7" />
            EECS Links
          </div>
          <p className="text-center text-xs text-blue-200">
            Unofficial student resource, not affiliated with UC Berkeley.
          </p>
          <a href="#top" className="rounded-full border border-white/20 px-4 py-1.5 text-xs transition hover:border-gold hover:text-gold">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
