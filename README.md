# Trust Boundary

Shawn Campbell's publication and portfolio for mobile, web, and interactive product engineering, hands-on leadership, platform architecture, applied AI, and application security. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live site: <https://sandkcampbell.com/>

## Local development

```bash
npm install
npm run dev       # http://localhost:4321/
npm run build
npm run preview
```

Drafts (`draft: true` in frontmatter) are visible in dev, hidden in production.

## Writing a post

Drop a `.md` or `.mdx` file in `src/content/blog/`:

```yaml
---
title: "..."
description: "..."
pubDate: 2026-05-13
draft: true            # optional; defaults to false
tags: ["..."]          # optional
format: "flight-log"   # optional
---
```

Supported formats:

- `system-deep-dive` — long-form architecture and implementation analysis
- `flight-log` — short experiments and progress reports
- `postmortem` — decisions, failures, measurements, and corrections
- `cross-system-test` — one feature or mechanic across frameworks or engines

Existing posts without `format` remain valid and render as general field notes.

## Site copy

All positioning copy lives in `src/data/site-content.ts`: the homepage, Projects,
About, resume, blog intro, and feed descriptions. The design, routes, posts,
experience history, and Ops/Direct views live with their own pages and
components.

## Editorial direction

Product engineering leads the positioning: mobile, web, and interactive experiences, supported by platform architecture, hands-on leadership, applied AI, and application security. Existing security writing stays available as part of that broader practice.

Side projects can support selected work and build logs when evidence is ready. Label prototypes and outstanding human/device validation honestly. Distinguish Codex/Claude assisting development from AI running inside a product. Do not imply shipped status, on-device integration, metrics, or a posting schedule without evidence and approval.

## Presentation package

The OWASP LLM Top 10 lab presentation package lives in
`talks/summit-owasp-llm-top-10/`.

- Repo-native slide source: `talks/summit-owasp-llm-top-10/slides.md`
- Speaker notes: `talks/summit-owasp-llm-top-10/speaker-notes.md`
- Demo runbook: `talks/summit-owasp-llm-top-10/demo-runbook.md`
- Public web version after deploy:
  <https://sandkcampbell.com/talks/summit-owasp-llm-top-10/>

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys on every
push to `main`. To enable:

1. Repo → Settings → Pages → Source: **GitHub Actions**.
2. First push to `main` runs the workflow.

## Comments (Giscus)

Giscus is configured in `src/components/Giscus.astro`.

To maintain it:

1. Keep GitHub Discussions enabled on the repo.
2. Keep the giscus app installed: <https://github.com/apps/giscus>.
3. Update `data-repo`, `data-repo-id`, or `data-category-id` only if the
   repository or discussion category changes.
4. Keep the dynamic theme listener so comments follow Ops (`dark`) and Direct
   (`light`) presentation changes.

## Planning docs (not published)

- `lab_build_plan.md` — AI red-team lab build plan
- `career_roadmap.md` — personal study/transition plan
- `blog_post_drafts.md` — post outlines (the draft posts in `src/content/blog/`
  are stubs derived from these)

These stay at the repo root and are not built into the site.
