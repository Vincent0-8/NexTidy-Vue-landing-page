<script setup lang="ts">
const articles = [
  {
    id: 1,
    title: 'Automated Canary Deployments',
    description:
      'Safely rollout breaking schema adjustments and template updates with instantaneous rollbacks if anomalies occur.',
    category: 'Infrastructure',
    icon: 'deploy',
  },
  {
    id: 2,
    title: 'Adaptive Asset Compression',
    description:
      'Serve optimal modern WebP and AVIF assets with dynamic edge resizing tuned to client screen pixel densities.',
    category: 'Performance',
    icon: 'asset',
  },
  {
    id: 3,
    title: 'Unified Audit Logging',
    description:
      'Track every administrative deployment, environment variable modification, and DNS update in a cryptographically signed log.',
    category: 'Compliance',
    icon: 'audit',
  },
]
</script>

<template>
  <section id="articles" class="relative py-24 bg-slate-900 border-t border-slate-800 text-white overflow-hidden">
    <div class="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div class="mx-auto max-w-3xl text-center pb-16" data-aos="fade-up">
        <h2 class="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Simplify operating and manage with total transparency
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          Built from the ground up for modern engineering workflows with zero unnecessary friction.
        </p>
      </div>

      <div class="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-1 lg:grid-cols-3">
        <article
          v-for="(item, index) in articles"
          :key="item.id"
          class="group relative flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="index * 120"
        >
          <div class="relative flex flex-1 flex-col rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-xl transition-all duration-300 hover:border-slate-700 hover:shadow-2xl">
            <div class="mb-5 flex items-center justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 border border-blue-800/60 text-blue-400 transition-transform duration-300 group-hover:scale-105">
                <svg v-if="item.icon === 'deploy'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <svg v-else-if="item.icon === 'asset'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <span class="text-xs font-mono text-blue-400 uppercase tracking-wider bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-900/50">
                {{ item.category }}
              </span>
            </div>

            <div class="flex flex-1 flex-col">
              <h3 class="font-serif text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-sm leading-relaxed text-slate-400">
                {{ item.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
