# NexTidy Landing Page

A modern, high-performance landing page built with Vue 3, Vite, and Tailwind CSS. Featuring a modular section architecture, dark theme design, smooth scroll animations, and interactive modal dialogs.

## Tech Stack

- **Framework:** Vue 3 (Composition API `<script setup>`)
- **Language:** TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** AOS (Animate on Scroll)
- **Routing:** Vue Router (Single-page anchors + 404 auto-redirect to `/`)

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── AppLogo.vue        # Brand vector logo
│   │   ├── ModalDialog.vue    # Accessible dialog modal
│   │   └── ToastAlert.vue     # Feedback notification toast
│   └── sections/
│       ├── TheNavbar.vue      # Header with mobile drawer
│       ├── HeroSection.vue    # Hero with video walkthrough modal trigger
│       ├── FeaturesGrid.vue   # 6-card feature matrix
│       ├── FeaturesTabs.vue   # Interactive 4-tab switcher
│       ├── FeatureShowcase.vue# Split interactive channel showcase
│       ├── StatsSection.vue   # Business metrics & rotating ring graphic
│       ├── ArticlesSection.vue# Platform infrastructure cards
│       ├── CtaSection.vue     # Early access email subscription
│       └── TheFooter.vue      # Responsive footer navigation
├── views/
│   └── HomeView.vue           # Landing page orchestrator
├── router/
│   └── index.ts               # Routing & 404 redirection
└── style.css                  # Tailwind CSS configuration
```

