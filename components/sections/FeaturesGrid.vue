<script setup lang="ts">
interface FeatureItem {
  id: number
  title: string
  description: string
  iconName: string
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'Robust Workflow',
    description:
      'Seamlessly streamline your product operations with high-efficiency pipelines designed for rapid iteration.',
    iconName: 'workflow',
  },
  {
    id: 2,
    title: 'Advanced Analytics',
    description:
      'Gain full visibility with deep behavioral metrics, real-time funnel monitoring, and actionable conversion telemetry.',
    iconName: 'analytics',
  },
  {
    id: 3,
    title: 'Instant Sync',
    description:
      'Keep distributed teams aligned with ultra-low-latency real-time collaboration engines and instant status sync.',
    iconName: 'sync',
  },
  {
    id: 4,
    title: 'Hardened Security',
    description:
      'Enterprise-grade protection with automated threat screening, granular role permissions, and zero-trust policies.',
    iconName: 'security',
  },
  {
    id: 5,
    title: 'Automated Delivery',
    description:
      'Deploy updates effortlessly with zero-downtime environments, smart caching, and deterministic builds.',
    iconName: 'delivery',
  },
  {
    id: 6,
    title: 'Global Edge Scale',
    description:
      'Serve high-performing digital experiences globally with ultra-low TTFB across multi-region edge networks.',
    iconName: 'global',
  },
]
</script>

<template>
  <section id="features" class="relative py-20 md:py-28 bg-slate-900 border-t border-slate-800">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="mx-auto max-w-3xl text-center mb-16" data-aos="fade-up">
        <h2 class="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Engineered for peak performance and visual elegance
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          Everything your engineering and growth teams need to deliver standout digital experiences.
        </p>
      </div>

      <div class="relative mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          class="relative flex flex-col group p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 transition-all duration-300 hover:border-slate-700 hover:bg-slate-950"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-tr from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110"
          >
            <svg
              v-if="feature.iconName === 'workflow'"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>

            <svg
              v-else-if="feature.iconName === 'analytics'"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>

            <svg
              v-else-if="feature.iconName === 'sync'"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>

            <svg
              v-else-if="feature.iconName === 'security'"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>

            <svg
              v-else-if="feature.iconName === 'delivery'"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>

            <svg
              v-else
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>

          <h3 class="font-serif text-xl font-bold text-white mb-2">
            {{ feature.title }}
          </h3>

          <p class="text-slate-400 leading-relaxed text-sm sm:text-base">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
