---
title: "Job Intel Tracker: Building Fieldnotes Around Evidence and Clear Ownership"
description: "Draft project notes on a web and mobile workspace, authorized agent contributions, privacy boundaries, and the difference between source readiness and an announcement."
draft: true
format: system-deep-dive
tags: [web-development, mobile-development, product-engineering, agent-integration]
---

> **Review draft.** Job Intel Tracker is in source-release preparation. This is not an open-source announcement or invitation to a live service. Examples are conceptual; no person's opportunities, applications, communications, documents, or account details are included.

A tracking board becomes harder to trust when it combines original records, research, opinions, and generated material without showing where each came from. The product motivation behind Job Intel Tracker is to keep those kinds of information together without making them indistinguishable.

Fieldnotes is the product experience: a web board and a native mobile companion for reviewing records, stages, notes, evidence, and preparation. The important question is not how many agents can contribute. It is whether the owner can tell what changed, who changed it, and what still needs review.

## A web product with a mobile companion

The source contains a Python/FastAPI server, a browser interface, and an Expo/React Native TypeScript companion. SQLite is the default storage backend; optional PostgreSQL support is documented separately. The supported deployment model is one application instance.

The browser experience owns the full web workflow. The native companion provides a mobile view of the board and contribution flows, with its own authentication and lifecycle constraints. An in-memory synthetic mobile demo is useful for inspecting the experience without private records. It is not proof that signed mobile login or file transfer works on every installation.

Keeping source revisions, research provenance, and conflicting assessments visible is a product decision. A newer contribution should not silently erase another contributor's work, and an apparently complete request should show when a required deliverable is missing or has changed.

## Agents contribute through an explicit boundary

The current project has an authenticated REST API and a small stdio MCP bridge for authorized clients. Agents use separate revocable, expiring credentials with scopes and optional record restrictions. Version checks, attributed revisions, and idempotent writes help clients reconcile stale changes and retries instead of overwriting blindly.

This is one human owner's private workspace with multiple authorized contributors. It is not a general multi-tenant platform or a shared board for unrelated human accounts. Owner decisions and administration remain distinct from agent contribution rights. A note, imported document, or generated answer cannot grant another permission.

A leased queue records requested research or material preparation and tracks claims and missing deliverables. The durable outbox is a transport seam, not a configured live agent-wake service. The tracker does not automatically start an agent, call a model, or send an application or message.

The existing API and bridge also should not be described as a complete browser-independent CRUD product. That fuller interface and its credential/approval design remain deferred work. A planned capability is not an announced integration.

## AI development is different from product orchestration

Coding-agent assistance is part of development. The application's agent contracts are a separate product feature. The tracker itself requires no model API, scraper, or paid hosted service; an external research worker would need its own explicitly approved connection and authority.

This keeps the product useful without making a claim about autonomous research quality. Attribution and provenance help someone review a contribution; they do not prove its contents are correct.

## Privacy is part of the workflow

Real mode requires an explicitly configured and approved owner identity rather than open registration or first-login ownership. Downloads and records are authenticated, and private file permissions are separate from ordinary contribution scopes. The local synthetic demo uses an isolated directory and cannot issue agent credentials.

These are implementation boundaries, not a claim of security certification. The application audit is not an externally tamper-proof log, the app does not provide encryption at rest by itself, and operators remain responsible for the host, backups, transport configuration, and retention. Native private-file transfer remains gated rather than implied by a successful web workflow.

## What is ready, and what is not

At the recorded source-review checkpoint, the prepared source follow-up was an open, unmerged pull request. A read-only check found its recorded revision unchanged and the returned verification and PostgreSQL checks successful. The release documents also retain earlier backend, mobile, packaging, and synthetic privacy checks. Those historical results have scope; no project tests, live login, private board access, or device checks were run to write this article.

The prepared Hacker News document is working material, not a submitted post. Source/default-SQLite readiness is separate from native binary redistribution, provider configuration, signed-device acceptance, and an announcement. The release record retains mobile-tooling advisories and licensing/notice review for bundled native artifacts. Live provider and mobile acceptance depend on the particular installation.

Before a stronger public claim, the questions are concrete: is the source handoff approved, is the synthetic setup reproducible, are remaining release limits clear, and has the owner chosen the announcement timing? A deployed product and passing scoped checks do not answer those questions automatically.

**Image placeholder:** an owner-approved synthetic web/mobile capture only. No current screenshots, private source links, live records, recruiter communications, or account identifiers are embedded.
