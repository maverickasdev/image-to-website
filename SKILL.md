---
name: image-to-website
description: Build or update a working website or web app from screenshots or visual references. Use when the user wants image analysis, one consolidated requirements questionnaire, autonomous planning, implementation, and testing to match the reference.
---

# Image to Website

Turn the user's visual reference into a working, tested website. Respond in the user's language. Respect the user's explicit scope and the host environment's rules and permissions throughout.

## 1. Inspect before asking

Inspect all supplied images directly. Record layout, proportions, hierarchy, colors, typography, spacing, icons, imagery, visible copy, components, interactive elements and viewport. Separate observations from guesses; an image alone does not establish behavior, hidden pages, data or responsiveness. Inspect the existing project, instructions, dependencies, design system, assets and available tools before proposing changes. Preserve unrelated work. If no project exists, select a suitable minimal stack after the questionnaire; do not assume existing architecture.

## 2. One questionnaire

Send exactly one consolidated list of high-impact questions, tailored to the image and information already provided. Ask only what affects scope, product behavior or implementation. Cover as applicable: target users and goals; required pages and interactions; API, database and real versus mock data; authentication, roles, payments or third-party integrations; stack constraints; expected responsive behavior; priority and scope; assets and copy. Offer sensible recommended defaults and explicitly invite the user to skip any item to accept the default. Do not re-ask already answered questions. Wait for the user's response to this single batch. If all required details are already provided, proceed without a questionnaire. If a required image is unavailable, include a request for it in that single batch.

## 3. Plan and continue automatically

After the response, do not ask further questions or request routine approvals for authorized local implementation. Resolve unanswered noncritical choices with reasonable assumptions and record them. Produce a concise, visible implementation plan and proceed immediately: inventory pages, components and behaviors; acceptance criteria for each feature; dependencies, data contracts, states, responsive behavior, accessibility and tests. Distinguish verified requirements, visual observations and assumptions. Avoid inventing backend contracts or claiming mock behavior is a live integration.

Maintain a task checklist with pending, in-progress, completed and blocked states. Use a native goal or task facility, including /goal, only if it is actually available and appropriate; otherwise keep a durable local checklist in the project. Update it as work progresses. A plan or checklist must not become a substitute for implementation.

## 4. Tools and dependencies

Check existing capabilities first. Use existing project conventions, packages and tools where possible. Identify only genuinely needed skills, packages or testing tools; assess source, compatibility and install instructions before installing from a reputable source. Observe network and permission restrictions. Do not blindly execute remote scripts or install unrelated skills. If a dependency cannot be installed, use a suitable available alternative; otherwise mark affected work blocked and continue independent tasks. Report additions and their purpose.

## 5. Implement

Build all agreed features, not only a visual shell. Match the reference's layout, hierarchy, colors, spacing and type while adapting consistently for mobile and desktop; do not claim pixel-perfect accuracy without evidence. Reuse existing assets and components when appropriate. Implement interactions, forms, navigation, validation and loading, empty, error and success states relevant to scope. Use accessible semantic markup, labels, keyboard interaction, focus states and suitable contrast. Respect existing architecture, avoid unnecessary rewrites, and avoid destructive changes to user data. For unavailable backend, credentials or services, implement a clearly identified mock or adapter only where appropriate; do not present it as production functionality.

## 6. Run, inspect, test, repair

Run the app and relevant existing build, lint, type-check and test commands where available. Add focused tests where needed for meaningful behavior. Exercise key user flows and relevant failure, empty and validation cases. When browser tools are available, inspect the running app, compare a screenshot at a comparable viewport against the reference, fix material visual differences, and check a mobile viewport and keyboard interaction. Repeat relevant checks after changes. If visual or functional verification cannot run, record exactly what was attempted and why; never claim it passed. Continue fixing until acceptance criteria are met or a concrete external blocker prevents further progress. Avoid infinite retries: investigate failures, try reasonable alternatives, then document the blocker and complete independent work.

## Boundaries and final report

Do not circumvent platform permission prompts, security controls or missing credentials. Do not deploy publicly, change production systems, send messages, or perform destructive actions without authorization covering that action; if blocked, continue independent work and report the blocked action at the end rather than asking additional questions. Do not claim to have installed a skill, used /goal, completed an integration, or passed a test unless actually verified.

Report completed features, how to run the app, checks and outcomes, reference comparison, assumptions, installed dependencies, and any incomplete or blocked work with exact reasons. State clearly when credentials, access, or a user action is needed.
