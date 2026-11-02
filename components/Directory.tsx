"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES, LINK_COUNT, type Category, type Link } from "@/lib/links";
import { loadStarred, saveStarred } from "@/lib/starred";

const STARRED = "starred";

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

function matches(link: Link, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [link.title, link.description, link.note ?? "", hostname(link.url)]
    .some((text) => text.toLowerCase().includes(q));
}

export default function Directory() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [starred, setStarred] = useState<string[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  // stars live in the browser, so read them after the first render
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStarred(loadStarred());
  }, []);

  // "/" jumps to the search box, like on GitHub
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(target.tagName)) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function toggleStar(url: string) {
    const next = starred.includes(url) ? starred.filter((u) => u !== url) : [...starred, url];
    setStarred(next);
    saveStarred(next);
    if (next.length === 0 && filter === STARRED) setFilter("all");
  }

  const sections = useMemo(() => {
    const starredSection: Category = {
      id: STARRED,
      icon: "⭐",
      title: "Starred",
      blurb: "Your favorites, saved in this browser.",
      links: CATEGORIES.flatMap((c) => c.links).filter((l) => starred.includes(l.url)),
    };
    const all = starredSection.links.length ? [starredSection, ...CATEGORIES] : CATEGORIES;
    return all
      .filter((c) => (filter === "all" ? true : c.id === filter))
      .map((c) => ({ ...c, links: c.links.filter((l) => matches(l, query)) }))
      .filter((c) => c.links.length > 0);
  }, [query, filter, starred]);

  const shown = sections.filter((s) => s.id !== STARRED).reduce((n, s) => n + s.links.length, 0);
  const chips = [
    { id: "all", label: "All", icon: "✨", count: LINK_COUNT },
    ...(starred.length ? [{ id: STARRED, label: "Starred", icon: "⭐", count: starred.length }] : []),
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.title, icon: c.icon, count: c.links.length })),
  ];

  return (
    <section id="links" className="relative mx-auto -mt-24 max-w-6xl scroll-mt-4">
      {/* search + category filters */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-xl shadow-berkeley/10 ring-1 ring-slate-200 dark:ring-slate-700 sm:p-6">
        <label htmlFor="search" className="sr-only">Search links</label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden>🔍</span>
          <input
            ref={searchRef}
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && setQuery("")}
            placeholder="Search links: enrollment, tutoring, CS 61B…"
            className="w-full rounded-2xl bg-slate-50 dark:bg-slate-800/60 py-3.5 pl-12 pr-14 text-base ring-1 ring-slate-200 dark:ring-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <kbd className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-md border border-slate-300 dark:border-slate-600 px-2 py-0.5 font-mono text-xs text-slate-500 dark:text-slate-400 sm:block">
            /
          </kbd>
        </div>

        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {chips.map((c) => {
            const active = filter === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setFilter(c.id)}
                aria-pressed={active}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-berkeley text-white shadow-md shadow-berkeley/30 dark:bg-gold dark:text-berkeley"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                <span aria-hidden>{c.icon}</span>
                {c.label}
                <span className={`text-xs ${active ? "opacity-80" : "text-slate-500 dark:text-slate-400"}`}>{c.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 px-1 text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
        {query.trim() ? `${shown} link${shown === 1 ? "" : "s"} match “${query.trim()}”` : null}
      </p>

      {/* results */}
      <div className="mt-2 space-y-14">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-berkeley dark:text-blue-300">
                  <span aria-hidden>{s.icon}</span>
                  {s.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.blurb}</p>
              </div>
              <span className="shrink-0 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-dark dark:text-gold">
                {s.links.length}
              </span>
            </div>

            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.links.map((l) => (
                <LinkCard
                  key={l.url}
                  link={l}
                  starred={starred.includes(l.url)}
                  onToggleStar={() => toggleStar(l.url)}
                />
              ))}
            </ul>
          </div>
        ))}

        {sections.length === 0 && (
          <div className="rounded-2xl bg-white dark:bg-slate-900 p-10 text-center shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
            <div className="mx-auto flex h-16 w-16 animate-float items-center justify-center rounded-2xl bg-berkeley text-3xl shadow-lg shadow-berkeley/30">
              🔭
            </div>
            <p className="mt-5 font-semibold">No links match “{query.trim()}”</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Try a shorter word, or search all categories.</p>
            <button
              type="button"
              onClick={() => { setQuery(""); setFilter("all"); }}
              className="mt-5 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-berkeley shadow-lg shadow-gold/30 transition hover:-translate-y-0.5"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function LinkCard({ link, starred, onToggleStar }: { link: Link; starred: boolean; onToggleStar: () => void }) {
  return (
    <li className="group relative">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col rounded-2xl bg-white dark:bg-slate-900 p-5 pr-12 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-berkeley/10 hover:ring-gold/60"
      >
        <span className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
          {link.title}
          <span className="text-gold-dark transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-gold" aria-hidden>↗</span>
        </span>
        <span className="mt-1.5 flex-1 text-sm text-slate-600 dark:text-slate-400">{link.description}</span>
        <span className="mt-4 flex flex-wrap items-center gap-2">
          <span className="truncate font-mono text-xs text-berkeley-light dark:text-blue-300">{hostname(link.url)}</span>
          {link.note && (
            <span className="rounded-full bg-berkeley/10 px-2 py-0.5 text-[11px] font-medium text-berkeley dark:bg-blue-400/15 dark:text-blue-200">
              {link.note}
            </span>
          )}
        </span>
      </a>
      <button
        type="button"
        onClick={onToggleStar}
        aria-pressed={starred}
        aria-label={starred ? `Unstar ${link.title}` : `Star ${link.title}`}
        className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-lg transition hover:scale-110 hover:bg-gold/15 ${
          starred ? "text-gold" : "text-slate-300 dark:text-slate-600"
        }`}
      >
        {starred ? "★" : "☆"}
      </button>
    </li>
  );
}
