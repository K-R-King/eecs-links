// starred links are kept in the browser, keyed by URL
const STORAGE_KEY = "eecs-links:starred";

export function loadStarred(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((u) => typeof u === "string") : [];
  } catch {
    return [];
  }
}

export function saveStarred(urls: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
  } catch {
    // storage full or blocked (e.g. private browsing); stars just won't persist
  }
}
