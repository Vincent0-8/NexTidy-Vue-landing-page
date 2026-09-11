<script setup lang="ts">
import { ref, computed } from 'vue'

interface Tab {
  id: number
  name: string
  headline: string
  description: string
  metricLabel: string
  metricValue: string
  tag: string
}

const activeTab = ref(0)

const tabs: Tab[] = [
  {
    id: 0,
    name: 'Internal Feedback',
    headline: 'Continuous feedback loops that keep teams focused',
    description:
      'Capture asynchronous user recordings, annotate directly onto DOM elements, and sync issues straight to your engineering sprint board in seconds.',
    metricLabel: 'Resolution Speed',
    metricValue: '3.8x Faster',
    tag: 'Collaboration Hub',
  },
  {
    id: 1,
    name: 'Performance Track',
    headline: 'Real-time telemetry and Core Web Vitals diagnostics',
    description:
      'Monitor LCP, INP, and CLS performance directly in production with microsecond tracing and instant regression alerts before customers notice.',
    metricLabel: 'Average Performance Score',
    metricValue: '99 / 100',
    tag: 'Telemetry Engine',
  },
  {
    id: 2,
    name: 'Real-time Sync',
    headline: 'Instant state distribution across modern edge clusters',
    description:
      'Distribute reactive states with conflict-free replicated data types. Built for buttery-smooth multiplayer experiences and collaborative canvases.',
    metricLabel: 'Global Latency',
    metricValue: '< 24ms',
    tag: 'CRDT Network',
  },
  {
    id: 3,
    name: 'Team Controls',
    headline: 'Fine-grained enterprise governance and environment safeguards',
    description:
      'Enforce compliance, role-based branch gates, and single-sign-on access control across staging and production deployments seamlessly.',
    metricLabel: 'Audit Readiness',
    metricValue: '100% Certified',
    tag: 'Governance',
  },
]

const currentTab = computed<Tab>(() => tabs[activeTab.value] ?? tabs[0]!)
</script>

<template>
  <section id="workflow" class="relative py-20 bg-slate-950 border-t border-slate-800">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="mx-auto max-w-3xl text-center pb-12" data-aos="fade-up">
        <h2 class="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Built exclusively for ambitious product teams
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          Supercharge team velocity with modular primitives designed to replace fragmented tooling.
        </p>
      </div>

      <div class="mx-auto max-w-3xl pb-10">
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <button
            v-for="(tab, index) in tabs"
            :key="tab.id"
            type="button"
            @click="activeTab = index"
            class="flex flex-col items-center rounded-2xl p-4 text-center transition-all duration-200 cursor-pointer"
            :class="[
              activeTab === index
                ? 'bg-slate-900 shadow-xl border-2 border-blue-500 -translate-y-1'
                : 'bg-slate-900/40 hover:bg-slate-900 border-2 border-slate-800/80 opacity-60 hover:opacity-100',
            ]"
          >
            <div
              class="mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
              :class="activeTab === index ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'"
            >
              <svg v-if="index === 0" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 01-2-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <svg v-else-if="index === 1" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <svg v-else-if="index === 2" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>

            <span class="text-sm font-bold text-slate-200">
              {{ tab.name }}
            </span>
          </button>
        </div>
      </div>

      <div class="mx-auto max-w-4xl" data-aos="fade-up">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-3"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            :key="activeTab"
            class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-10 shadow-2xl"
          >
            <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div class="lg:col-span-6">
                <span class="inline-block rounded-full bg-blue-950 border border-blue-800/60 px-3 py-1 text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                  {{ currentTab.tag }}
                </span>

                <h3 class="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug mb-4">
                  {{ currentTab.headline }}
                </h3>

                <p class="text-slate-300 leading-relaxed text-base mb-6">
                  {{ currentTab.description }}
                </p>

                <div class="flex items-center gap-4 rounded-xl bg-slate-950 border border-slate-800 p-4">
                  <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {{ currentTab.metricLabel }}
                    </div>
                    <div class="text-xl font-extrabold text-blue-400">
                      {{ currentTab.metricValue }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-6">
                <div class="relative rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl">
                  <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <span class="text-xs font-mono text-slate-400">Component Monitor</span>
                    <span class="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">ONLINE</span>
                  </div>

                  <div class="space-y-3">
                    <div class="flex items-center justify-between rounded-lg bg-slate-900 p-3 border border-slate-800">
                      <span class="text-xs text-slate-300">DOM Reconciliation</span>
                      <span class="text-xs font-mono text-blue-400">0.4ms</span>
                    </div>
                    <div class="flex items-center justify-between rounded-lg bg-slate-900 p-3 border border-slate-800">
                      <span class="text-xs text-slate-300">Hydration Footprint</span>
                      <span class="text-xs font-mono text-blue-400">12.1 KB</span>
                    </div>
                    <div class="flex items-center justify-between rounded-lg bg-slate-900 p-3 border border-slate-800">
                      <span class="text-xs text-slate-300">Client Frame Rate</span>
                      <span class="text-xs font-mono text-emerald-400">120 FPS</span>
                    </div>

                    <div class="pt-2">
                      <div class="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Pipeline Throughput</span>
                        <span class="text-blue-400 font-semibold">99.4% Optimal</span>
                      </div>
                      <div class="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                        <div class="h-full rounded-full bg-linear-to-r from-blue-500 to-sky-400 w-[94%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
