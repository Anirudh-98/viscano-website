# Building Fast: Vite, React, and Shipping on Day 1

**URL:** https://viscano.com/blog/building-fast-vite-react-and-shipping-on-day-1  
**Published:** March 9, 2026  
**Author:** Anirudh  
**Category:** Engineering  
**Read time:** 6 min

---

How the Viscano engineering team uses Vite, React, and a set of hard opinions to ship production-ready web applications from day one — and why "moving fast" isn't the same as "cutting corners."

## The Problem With Slow Starts

Most web projects are slow to start not because the engineering is complex, but because the tooling, architecture, and conventions haven't been decided yet. The first two weeks are spent arguing about folder structure, choosing between three CSS solutions, and setting up CI/CD that should have been templated from day one.

At Viscano, we've removed that friction. We ship to a live staging URL on day one of every project. Here's how.

## The Stack

**Vite** — HMR so fast it disappears. Build times under 500ms. Zero-config for most projects.

**React** — The right choice for most projects that need component composability and a large ecosystem of tooling.

**TypeScript** — Non-negotiable. Type errors at write time, not runtime.

**Tailwind CSS** — Utility-first CSS eliminates the naming problem and keeps styles co-located with components.

**React Router** — File-based or config-based routing, depending on project complexity.

## The Architecture Opinions

**Components are dumb by default.** Business logic lives in hooks and services, not components. Components render; hooks think.

**One directory per feature.** Components, hooks, types, and tests for a feature live together. Not `/components/Button` and `/hooks/useButton` in separate trees.

**No premature abstraction.** We extract a shared component when we've written it three times, not one.

**Performance is a constraint, not a phase.** Route-based code splitting is set up from day one. Images are optimised at build time. Core Web Vitals are measured in the CI pipeline.

## Day 1 Checklist

By end of day 1, every Viscano project has:

- [ ] Vite + React + TypeScript scaffolded
- [ ] Tailwind CSS configured with custom design tokens
- [ ] ESLint + Prettier configured and committed
- [ ] Vercel (or equivalent) deployment with preview URLs on every PR
- [ ] Core routes created with route-based code splitting
- [ ] SEO component with dynamic meta tags
- [ ] Sitemap generation configured
- [ ] Google Analytics / GTM stubbed

## Why Vercel

Preview deployments on every pull request mean clients can test the actual URL before anything merges. No "screenshots only" approvals. The staging environment is the review environment.

## On Shipping "Fast"

Fast doesn't mean sloppy. It means having enough strong opinions — codified into templates and tooling — that decisions don't have to be made twice.

The Viscano engineering team maintains internal starter templates for every common project type: marketing site, SaaS app, e-commerce. These templates encode 18 months of lessons so new projects start at the state that old projects took 2 weeks to reach.

[Read about our Web Development service →](https://viscano.com/services/web-development)

---

*Viscano is a full-service creative studio in Hyderabad, India. [viscano.com](https://viscano.com)*
