# UC Berkeley EECS Links

Every important link for UC Berkeley EECS students, in one place: enrollment, degree requirements, course websites, coursework tools, tutoring, careers and research, and campus resources. A companion to the [EECS Planner](https://github.com/K-R-King/eecs-planner).

## Features

- **58 links in 7 categories**, each with a short description of what it's for.
- **Search** by name, description, or domain. Press `/` anywhere to jump to it and `Esc` to clear it.
- **Category filters** with link counts.
- **Star favorites:** starred links appear at the top, saved in your browser.
- **Light and dark mode**, keyboard focus rings, and a layout that works on phones.
- The same Berkeley Blue & California Gold look as the EECS Planner, EECS Prereqs and EECS Electives, with a switcher linking all four.

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:3001`. It uses port 3001 so it can run next to the planner (port 3000). In development, the switcher points to the planner (`localhost:3000`), prereqs (`3002`) and electives (`3003`) sites.

## Editing the links

All links live in [`lib/links.ts`](lib/links.ts). Add an entry to a category's `links` array (or a new category) and it shows up in search, filters, and counts automatically.

## Deploying (free)

1. Push this folder to its own GitHub repo.
2. At [vercel.com](https://vercel.com), **Add New → Project** and pick the repo.
3. Deploy. Links to the sister sites default to their `*.vercel.app` addresses; override them with `NEXT_PUBLIC_PLANNER_URL`, `NEXT_PUBLIC_PREREQS_URL` and `NEXT_PUBLIC_ELECTIVES_URL`.

This is an unofficial student resource, not affiliated with UC Berkeley.
