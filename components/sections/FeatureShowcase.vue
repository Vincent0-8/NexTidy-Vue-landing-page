<script setup lang="ts">
import { ref, computed } from 'vue'

interface ShowcaseItem {
  id: number
  title: string
  description: string
}

const activeItem = ref(0)

const items: ShowcaseItem[] = [
  {
    id: 0,
    title: 'Contextual In-App Comments',
    description:
      'Pin discussions directly on dynamic user interface elements so designers, PMs, and developers speak the exact same visual language.',
  },
  {
    id: 1,
    title: 'Precision Trace Logging',
    description:
      'Record full network payloads, console warnings, and component lifecycle changes right alongside user action timelines.',
  },
  {
    id: 2,
    title: 'One-Click Issue Synchronization',
    description:
      'Turn actionable visual comments into fully formed engineering pull requests and issue cards with zero context switching.',
  },
]

const currentItem = computed<ShowcaseItem>(() => items[activeItem.value] ?? items[0]!)
</script>

<template>
  <section id="showcase" class="relative py-20 bg-slate-900 border-t border-slate-800">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="mx-auto max-w-3xl text-center pb-14" data-aos="fade-up">
        <h2 class="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ship with absolute clarity and unmatched momentum
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          Eliminate ambiguity between design mockups and production implementations.
        </p>
      </div>

      <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div class="lg:col-span-6 order-2 lg:order-1" data-aos="fade-right">
          <div class="relative mx-auto max-w-md rounded-2xl border border-slate-800 bg-linear-to-b from-slate-900 to-slate-950 p-6 text-white shadow-2xl">
            <div class="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl"></div>

            <div class="relative space-y-4">
              <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <span class="text-xs font-semibold text-slate-300">Live Workspace Channel</span>
                <span class="text-xs font-mono text-slate-400">workspace.active</span>
              </div>

              <div class="rounded-xl bg-slate-950 p-5 border border-slate-800">
                <div class="flex items-center gap-3 mb-3">
                  <div class="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                    {{ activeItem + 1 }}
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-white">
                      {{ currentItem.title }}
                    </div>
                    <div class="text-xs text-blue-400">Selected Module</div>
                  </div>
                </div>

                <p class="text-xs leading-relaxed text-slate-300">
                  {{ currentItem.description }}
                </p>

                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Status: <strong class="text-emerald-400">Synchronized</strong></span>
                  <span>Branch: <code class="font-mono text-blue-300">main-v2</code></span>
                </div>
              </div>

              <div class="space-y-2 pt-1">
                <div class="h-3 w-full rounded bg-slate-800/80"></div>
                <div class="h-3 w-4/5 rounded bg-slate-800/60"></div>
                <div class="h-3 w-2/3 rounded bg-slate-800/40"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 order-1 lg:order-2 space-y-4" data-aos="fade-left">
          <div
            v-for="(item, index) in items"
            :key="item.id"
            @click="activeItem = index"
            class="flex items-start gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-200 cursor-pointer"
            :class="[
              activeItem === index
                ? 'border-blue-500 bg-slate-950 shadow-xl shadow-blue-500/10 scale-[1.02]'
                : 'border-slate-800/80 bg-slate-950/40 hover:bg-slate-950 hover:border-slate-700 opacity-75 hover:opacity-100',
            ]"
          >
            <div
              class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors"
              :class="activeItem === index ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' : 'bg-slate-800 text-slate-400'"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div>
              <h3 class="text-base sm:text-lg font-bold text-white mb-1">
                {{ item.title }}
              </h3>
              <p class="text-sm leading-relaxed text-slate-400">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
