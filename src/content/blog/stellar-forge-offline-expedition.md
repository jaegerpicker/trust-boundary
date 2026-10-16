---
audience: product
title: "Stellar Forge: Making a Space Strategy Prototype Understandable"
description: "Draft project notes on a local expedition loop, readable decisions, save integrity, and the limits of automated game verification."
draft: true
format: system-deep-dive
tags: [game-development, godot, product-engineering, ai-assisted-development]
---

> **Review draft.** This describes a local prototype and recorded development checks, not a released game. No screenshots or assets are approved for publication here.

Stellar Forge starts with a large ambition: space exploration and empire building. The useful engineering question is smaller: can a player understand a destination, commit a probe, and see how that decision changes the expedition?

The current local slice centers on surveying stars, launching colony probes, managing resources and power, researching gates, and connecting colonies. The goal is to make those choices legible before adding more systems. The broader architecture documents contain plans for much more; those plans are not evidence of implemented multiplayer, fleet combat, or a production service.

## A local loop before a distributed game

The playable expedition runs in Godot with C#. It does not require the unfinished Python/cloud backend. That boundary makes a complete local loop easier to inspect: the player makes a decision, the simulation advances, and the result can be saved and reconstructed without a network dependency.

Seeded worlds make failures reproducible. They also make it possible to compare simple strategies under the same conditions. Those comparisons can establish that a route is viable in the tested scenarios; they cannot establish that every seed is solvable or that a human will find the game engaging.

The local system view introduces another product problem: clicking to move a probe and clicking to focus the camera must not look like the same action. The recorded repair separates those interaction modes. An order preview shows the destination, cost, and arrival estimate; confirmation commits the order. The important distinction is between looking at the world and spending resources inside it.

## Saves are part of the experience

A strategy prototype asks players to invest attention across sessions. Save integrity therefore belongs in the core loop. The verification record covers malformed or contradictory state, unavailable resources, terminal outcomes, transit consistency, backup recovery, and preserving files when recovery fails.

A successful process exit alone is insufficient for the game harness. Its wrapper checks expected success markers and rejects unexpected engine or scene errors. That decision makes the automation less likely to report success when the game never reached its assertions.

## Where AI fits

Coding agents assist development and iteration. That is separate from AI running inside the game. The documented local slice uses simulation and explicit game rules; this article makes no claim of an in-product language-model opponent. A test policy is also not evidence of a sophisticated player-facing AI system.

## What the record establishes

The local verification documents record successful builds, bounded seeded campaign evaluations, save/recovery regressions, UI signal checks, and inspected viewport renders. Later records describe native system-view interaction and graphics checks. These are prior checkpoint results reviewed for this draft; the game was not rebuilt or retested while writing it.

The current playtest board still lists an unresolved reported gameplay crash and pending real Windows acceptance. Packaging checks and a ZIP are not proof that another player can launch and complete the game on that platform. Human usability, accessibility, audio, balance, and broader platform behavior remain separate work.

## Questions for the next review

Can a new player explain the first colony decision without guidance? Are camera focus and movement orders unmistakable? Does a failed save leave a clear recovery path? Which expansion decisions create interesting tradeoffs rather than busywork?

Those questions keep the project grounded in an experience someone can understand, rather than the size of its roadmap.

**Image placeholder:** a game-only expedition/order-preview capture, selected and approved for public use before publication. No image is embedded in this draft.
