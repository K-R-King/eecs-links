# UC Berkeley EECS Links

Every important link for UC Berkeley EECS students, in one place: enrollment, degree requirements, course websites, coursework tools, tutoring, careers and research, and campus resources. Part of the [EECS Hub](https://eecs-hub.vercel.app), with the [EECS Planner](https://eecs-planner.vercel.app), [EECS Prereqs](https://eecs-prereqs.vercel.app) and [EECS Electives](https://eecs-electives.vercel.app).

## Features

- **58 links in 7 categories**, each with a short description of what it's for.
- **Search** by name, description, or domain. Press `/` anywhere to jump to it and `Esc` to clear it.
- **Category filters** with link counts.
- **Star favorites:** starred links appear at the top, saved in your browser.
- **Light and dark mode**, keyboard focus rings, and a layout that works on phones.
- The same Berkeley Blue & California Gold look as the EECS Planner, EECS Prereqs and EECS Electives, with a switcher linking all four tools and a 🏠 button back to the EECS Hub.

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:3001`. It uses port 3001 so it can run next to the planner (port 3000). In development, the switcher points to the planner (`localhost:3000`), prereqs (`3002`), electives (`3003`) and hub (`3004`) sites.

GitHub Actions typechecks, lints and builds the site on every push (`.github/workflows/ci.yml`). An accessibility check (axe, in Playwright) runs on the directory and search results in light and dark mode; run it locally with `npx playwright test` (it starts the dev server, or set `PORT` if 3001 is taken).

On the 1st of every month, `.github/workflows/check-links.yml` visits every link in `lib/links.ts` and opens an issue listing any that are broken. Run it any time from the Actions tab.

## Editing the links

All links live in [`lib/links.ts`](lib/links.ts). Add an entry to a category's `links` array (or a new category) and it shows up in search, filters, and counts automatically.

## Deploying (free)

1. Push this folder to its own GitHub repo.
2. At [vercel.com](https://vercel.com), **Add New → Project** and pick the repo.
3. Deploy. Links to the sister sites default to their `*.vercel.app` addresses; override them with `NEXT_PUBLIC_PLANNER_URL`, `NEXT_PUBLIC_PREREQS_URL`, `NEXT_PUBLIC_ELECTIVES_URL` and `NEXT_PUBLIC_HUB_URL`. `NEXT_PUBLIC_FEEDBACK_URL` (optional) is a Google Form link; when it's set, the footer shows a "💬 Send feedback" button.
4. Visits are counted with [Vercel Web Analytics](https://vercel.com/docs/analytics) (no cookies); turn it on under the project's **Analytics** tab.

This is an unofficial student resource, not affiliated with UC Berkeley.

## Across the EECS sites

Courses marked as taken travel with the links between the EECS sites (`?taken=CS61A.CS61B`), so students enter them once. `lib/handoff.ts` and `components/SuiteLinks.tsx` do this and are the same in all five sites; change them in all five. Each site also has a link preview image (`app/opengraph-image.tsx`), a sitemap and a robots file.
