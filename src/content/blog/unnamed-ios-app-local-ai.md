---
audience: product
title: "An Unnamed iOS App: Making Local AI Work Reviewable"
description: "Draft product notes on saved intent, explicit local generation, source preservation, and checkpoint-specific iPhone validation."
draft: true
format: system-deep-dive
tags: [ios, product-engineering, local-ai, ai-assisted-development]
---

> **Review draft.** This is an unnamed iOS prototype. Earlier real-model results apply only to their recorded source checkpoint; newer UI and persistence work has outstanding runtime acceptance. No public release is implied.

The product goal is a small, useful local workspace: save a question, supplied text, or planning request; decide when to run it; and retain a result that can be reviewed later. The interface should explain what has been saved, what has actually run, and what a checklist means.

That sounds modest, but it avoids a common ambiguity in AI products. Saving intent is not the same action as starting generation. A generated plan is not a record that its steps have been executed.

## Explicit actions and durable history

The iPhone-first design separates Save from Run. Supplied source text stays distinct from generated interpretation, and revisions preserve their source rather than quietly replacing it. Checking a plan step records manual progress; it does not make the app an autonomous executor.

Source-analysis work checks generated excerpts against the exact captured text. That can show that an excerpt belongs to a capture. It cannot prove that the captured source is true or that the interpretation is correct.

Local routines prepare a review when the app is active and the review is due. Preparation does not begin inference. The app does not promise an exact background wake time or continuous execution. Generation is foreground work with interruption handling and explicit retry.

## AI inside the product versus AI used to build it

The product includes an Apple-model local generation path. The phone's local workspace is distinct from a paired Mac task workflow. Local generation unavailability should be visible; the local path does not silently substitute a remote model.

Codex and Claude assisting development are a different part of the story. Coding assistance does not validate the product's own inference, native dialogs, storage recovery, or device behavior. Those need tests tied to the relevant build and environment.

## Local storage needs understandable recovery

The documented implementation keeps local history encrypted and treats a portable backup and its separate recovery key as distinct items. Restore is a reviewed replacement, not an invisible merge. Changing the selected file, key, or current workspace can invalidate a pending confirmation.

Those decisions are about user control as much as storage correctness. A stale confirmation should not replace newer work, and a retry should not silently replay an earlier destructive decision. The draft describes the intended and tested boundaries without claiming an independent security audit or guaranteed recovery under every failure.

## What the checkpoints actually say

An earlier physical-iPhone record documents a real Apple-model plan/manual-check/reopen pass and separate fixture UI passes. Source capture/revision acceptance at that same checkpoint was blocked by a footer-covered Run control. Later layout changes compiled, but that does not turn the earlier failure into a runtime pass for the repair.

The newer validation record documents passing core/persistence/controller tests and native Simulator core tests using synthetic inputs. Its selected UI case failed while establishing the automation session, before capture/revision assertions ran. The remaining native cases and current-build model behavior are not established by those core passes.

These are reviewed historical records, not fresh results from writing this article. Physical-device work was not resumed. No claim is made that the current complete app has passed device acceptance.

## Questions for product review

Can someone distinguish saved intent, a prepared review, and a completed answer at a glance? Are controls reachable with short content and larger text? What survives interruption, and when is another explicit decision required? Can recovery explain uncertainty without losing the person's understanding of their work?

**Image placeholder:** an approved synthetic-data iPhone capture showing Save and Run clearly. No internal branding, personal requests, device identifiers, screenshots, or private repository links are included.
