---
title: "ZeroDay: Building the Card Game Before Trusting the Opponent"
description: "Draft notes on deterministic rules, constrained opponent decisions, campaign saves, and separating simulation evidence from human play."
draft: true
format: system-deep-dive
tags: [game-development, swiftui, applied-ai, ai-assisted-development]
---

> **Review draft.** ZeroDay is a card-game prototype. Model behavior, human playability, and device acceptance are distinct validation questions. No release or device-validated local-AI capability is claimed here.

The experience goal is an asymmetric card game with an opponent that feels interesting to play against. An evolving opponent is part of the design ambition. The immediate challenge is more concrete: make the rules, legal choices, hidden information, and consequences understandable before attributing intelligence to a model.

## Keep the rules outside the model

The architecture separates a pure Swift rules kernel from the SwiftUI app and opponent layer. The kernel owns legal moves, state transitions, hidden zones, seeded matches, and replay information. The opponent receives a restricted perspective and candidate moves rather than authority to invent an action.

That separation matters even for a heuristic opponent. If a decision arrives late, is invalid, or fails, the game still needs a legal and explainable next step. A model-generated choice should pass the same rules boundary as any other choice. The architecture includes fallback behavior; that design does not by itself prove the quality or availability of real inference.

## A campaign is more than a single mutable save

The local playable work adds named campaign slots, explicit new/continue/load behavior, manual pause, and recovery guidance. Changing campaigns must not allow a result from an old opponent task to modify the newly loaded game.

Versioned card definitions and save content preserve the rules a campaign started with. Experimental expanded decks are separate from classic starters. That avoids silently changing an existing match when content is adjusted and lets a balance experiment remain explicitly experimental.

The recorded expanded-deck diagnostics did not satisfy the project's strength gate. The draft therefore does not call them balanced or describe simulation results as human approval. A heuristic beating a random policy and a human enjoying a match are different outcomes.

## Two different uses of AI

Codex and Claude assist development. Inside the product, the design explores local model selection among legal candidates, with constrained inputs and a heuristic fallback. Neither usage establishes that the other works.

The prepared Mac owner-review artifact described in the playtest guide uses the heuristic opponent even when its menu presents an on-device choice. That artifact must not be presented as a working local-model demonstration. Integration source and architectural plans exist, but current device/runtime evidence does not support a general on-device AI claim.

## What has actually been checked

The project records passing kernel, content, opponent, and app regression suites, seeded simulation/replay checks, save migration and corruption checks, campaign isolation, and generic iOS SDK compilation. Two real-inference/quality checks were explicitly skipped at the documented checkpoint. Offscreen phone/desktop layouts were rendered and inspected.

Offscreen rendering is not a foreground playthrough. The owner-review guide still distinguishes the packaged artifact from a runtime-tested app and calls out human gameplay, physical phone/iPad interaction, VoiceOver, and model latency as unverified. No project tests or model experiments were rerun to prepare this article.

## Questions before a stronger story

Can a new player understand when to stop an intrusion and why a move costs what it does? Does campaign switching remain predictable during failures? What would a model opponent contribute beyond the existing heuristic? Can that contribution be demonstrated on the intended device with the exact build under review?

The compelling story is the boundary between game design, deterministic rules, and an uncertain opponent—not a claim that a model has already made the game intelligent.

**Image placeholder:** an approved game-only card-library or match capture. Current procedural graphics and wording need human review; no private source, licensed assets, or screenshots are included.
