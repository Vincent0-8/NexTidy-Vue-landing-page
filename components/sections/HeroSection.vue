<script setup lang="ts">
const emit = defineEmits<{
  (e: 'open-demo'): void
  (e: 'open-video'): void
}>()
</script>

<template>
  <section class="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-36 bg-slate-950">
    <div
      class="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]"
      aria-hidden="true"
    ></div>

    <div class="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div
          class="text-center lg:col-span-6 lg:text-left"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1300"
        >
          <div
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-400"
          >
            <span class="inline-block h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Next-Generation Platform Experience
          </div>

          <h1
            class="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]"
          >
            Create stunning <br class="hidden sm:inline" />
            <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-sky-300 to-blue-200">
              web experiences
            </span>
          </h1>

          <p class="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl max-w-xl mx-auto lg:mx-0">
            Our landing page architecture works seamlessly on all devices. Set it up once, customize your design system, and unlock lightning-fast results.
          </p>

          <div
            class="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              type="button"
              @click="emit('open-demo')"
              class="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Request Demo</span>
              <span class="transition-transform duration-150 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>

            <a
              href="#features"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600 cursor-pointer"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div
          class="lg:col-span-6 flex justify-center"
          data-aos="fade-left"
          data-aos-delay="650"
          data-aos-duration="1300"
        >
          <div class="relative w-full max-w-lg">
            <div
              class="pointer-events-none absolute inset-0 mt-3 ml-3 translate-x-3 translate-y-3 rounded-2xl border-2 border-slate-800"
              aria-hidden="true"
            ></div>

            <div
              class="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl transition duration-300 group"
            >
              <div class="relative aspect-4/3 w-full overflow-hidden bg-linear-to-br from-slate-900 via-slate-850 to-slate-800 p-6 flex flex-col justify-between">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span class="text-xs font-semibold text-slate-300">Live Preview</span>
                  <span class="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-md">
                    interactive.app
                  </span>
                </div>

                <div class="grid grid-cols-3 gap-3 my-auto py-2">
                  <div class="col-span-2 space-y-2.5">
                    <div class="h-4 w-3/4 rounded bg-slate-700/70"></div>
                    <div class="h-3 w-full rounded bg-slate-800"></div>
                    <div class="h-3 w-5/6 rounded bg-slate-800/80"></div>
                    <div class="grid grid-cols-2 gap-2 pt-2">
                      <div class="h-16 rounded-lg bg-blue-950/50 border border-blue-800/40 p-2.5">
                        <div class="h-2 w-10 bg-blue-400 rounded mb-1.5"></div>
                        <div class="h-4 w-14 bg-white/90 rounded"></div>
                      </div>
                      <div class="h-16 rounded-lg bg-slate-800/60 border border-slate-700/50 p-2.5">
                        <div class="h-2 w-10 bg-slate-400 rounded mb-1.5"></div>
                        <div class="h-4 w-14 bg-white/90 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col justify-center items-center rounded-lg bg-slate-800/70 border border-slate-700/60 p-3">
                    <div class="h-14 w-14 rounded-full border-4 border-blue-500 border-t-transparent animate-spin mb-2" style="animation-duration: 8s;"></div>
                    <span class="text-[10px] font-mono text-blue-300 font-semibold">99.9% SYNC</span>
                  </div>
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-3">
                  <span>Product Walkthrough</span>
                  <span class="text-blue-400 font-medium">Click to Play &bull; 2:45</span>
                </div>

                <button
                  type="button"
                  @click="emit('open-video')"
                  class="absolute inset-0 flex items-center justify-center bg-slate-950/40 transition group-hover:bg-slate-950/25 cursor-pointer"
                  aria-label="Play video walkthrough"
                >
                  <div class="relative flex items-center justify-center">
                    <span
                      class="absolute -inset-2 rounded-full bg-blue-500/30 animate-ping"
                      style="animation-duration: 2.5s;"
                    ></span>
                    <div
                      class="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110"
                    >
                      <svg class="ml-1 h-7 w-7 sm:h-8 sm:w-8 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
