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

Drafts (`draft: true` in frontmatter) are excluded from routes and discovery in both dev and production. Review their Markdown source locally. Changing content mode never publishes a draft.

## Content mode and reversible commits

`site-mode.json` is the only build-time content switch. Its committed default is
`{ "mode": "product" }`, preserving the current live positioning. To prepare a
security version, change it to `{ "mode": "security" }`. Invalid values fail the
build. There is no environment, query-string, or browser-storage override; the
Ops/Direct toggle changes presentation only.

From your issue branch, make each mode change as a small independent commit:

```bash
# Set site-mode.json to { "mode": "security" }, then:
npm run test:modes
git add site-mode.json
git commit -m "Switch site content to security"

# Later set site-mode.json to { "mode": "product" }, then:
npm run test:modes
git add site-mode.json
git commit -m "Switch site content to product engineering"
```

No content deletion, divergent branch, or draft flag change is needed. These
commands create local commits; review separately before pushing or deploying.
`npm run test:modes` builds both modes with synthetic shared/product/security
articles and drafts, restores the original setting and removes fixtures, then
builds the clean original mode. Do not edit the config concurrently with this test.

| Surface | Product mode | Security mode |
| --- | --- | --- |
| Homepage, navigation, Projects, About, resume introduction/capabilities, metadata | Product positioning | Security positioning |
| Homepage writing | Published featured items | Published security/shared items |
| Blog, RSS, resume article links | All published items, preserving the existing security archive | Published security/shared items |
| Direct article routes and sitemap | All published items | All published items, preserving inbound links |
| Drafts, including featured or dated drafts | Excluded everywhere, including dev | Excluded everywhere, including dev |

`audience` controls discovery, not access. Missing audience means shared. Existing
public security posts are tagged security; the welcome post is shared; project
drafts are tagged product. All five existing drafts remain drafts. Only an
explicitly approved publication should change `draft` and supply `pubDate`.
Published off-topic URLs remain accessible and indexed in either mode; this is a
positioning switch, not a privacy control. Article-specific metadata stays with
its article. The talk, factual employment history, contact links, static branded
share image, and existing product-oriented PDF resume are shared and unchanged;
the PDF download remains the existing general career record.

## Writing a post

Drop a `.md` or `.mdx` file in `src/content/blog/`:

```yaml
---
title: "..."
description: "..."
pubDate: 2026-05-13
draft: true            # optional; defaults to false
audience: shared      # product, security, or shared (default)
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
