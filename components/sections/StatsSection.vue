<script setup lang="ts">
const stats = [
  {
    value: '79%',
    label: 'Accelerated Time-to-Market',
    description:
      'Teams using our modular landing page architecture deploy new features in under a third of the traditional sprint cycle.',
  },
  {
    value: '1M+',
    label: 'Daily Edge Requests Handled',
    description:
      'Battle-tested architecture handling millions of real-time client interactions with sub-millisecond edge consistency.',
  },
  {
    value: '500K',
    label: 'End-User Sessions Optimized',
    description:
      'High-converting landing pages built with zero bloat, yielding top-tier performance scores and maximal user engagement.',
  },
]
</script>

<template>
  <section id="stats" class="relative py-20 bg-slate-950 border-t border-slate-800">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="mx-auto max-w-3xl text-center pb-16" data-aos="fade-up">
        <h2 class="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Proven metrics from teams that scale
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          Trusted by top software engineers and modern product studios worldwide.
        </p>
      </div>

      <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-7 space-y-6" data-aos="fade-right">
          <div
            v-for="(stat, idx) in stats"
            :key="idx"
            class="flex items-start gap-5 rounded-2xl bg-slate-900 p-6 border border-slate-800 transition hover:border-slate-700"
          >
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-950 text-blue-400 border border-blue-800/60 font-bold">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>

            <div>
              <div class="flex items-baseline gap-3">
                <span class="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                  {{ stat.value }}
                </span>
                <span class="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {{ stat.label }}
                </span>
              </div>
              <p class="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">
                {{ stat.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 flex justify-center" data-aos="fade-left">
          <div class="relative flex items-center justify-center p-8">
            <div class="h-72 w-72 sm:h-80 sm:w-80 rounded-full border-2 border-dashed border-blue-500/30 animate-spin" style="animation-duration: 35s;"></div>
            <div class="absolute h-56 w-56 rounded-full border-2 border-blue-500/20"></div>
            <div class="absolute h-40 w-40 rounded-full bg-blue-600/10 backdrop-blur-xs flex items-center justify-center">
              <div class="h-24 w-24 rounded-full bg-linear-to-tr from-blue-700 to-sky-400 p-0.5 shadow-xl shadow-blue-500/30 flex items-center justify-center text-white">
                <svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <div class="absolute top-4 -right-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 shadow-lg text-xs font-semibold text-slate-200 flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              99.99% Edge Uptime
            </div>
            <div class="absolute bottom-4 -left-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 shadow-lg text-xs font-semibold text-slate-200 flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-blue-400"></span>
              Ultra-light Payload
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
