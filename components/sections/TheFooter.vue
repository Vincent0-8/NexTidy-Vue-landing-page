<script setup lang="ts">

const emit = defineEmits<{
  (e: 'open-demo'): void
}>()

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-950 border-t border-slate-900 text-slate-400">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="grid gap-8 py-12 sm:grid-cols-12 md:py-16">
        <div class="sm:col-span-12 lg:col-span-4 lg:max-w-xs space-y-3">
          <AppLogo size="md" />
          <p class="text-sm text-slate-400 leading-relaxed">
            The smarter, modular foundation to deliver modern high-performance web experiences.
          </p>
        </div>

        <div class="sm:col-span-4 md:col-span-3 lg:col-span-2 sm:col-start-7 lg:col-start-6">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul class="space-y-2.5 text-sm font-medium text-slate-400">
            <li>
              <a href="#features" class="transition hover:text-white">Features</a>
            </li>
            <li>
              <a href="#workflow" class="transition hover:text-white">Workflow</a>
            </li>
            <li>
              <a href="#showcase" class="transition hover:text-white">Showcase</a>
            </li>
            <li>
              <a href="#stats" class="transition hover:text-white">Impact</a>
            </li>
          </ul>
        </div>

        <div class="sm:col-span-4 md:col-span-3 lg:col-span-2">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-4">
            Resources
          </h4>
          <ul class="space-y-2.5 text-sm font-medium text-slate-400">
            <li>
              <a href="#articles" class="transition hover:text-white">Platform Specs</a>
            </li>
            <li>
              <a href="#subscribe" class="transition hover:text-white">Early Access</a>
            </li>
            <li>
              <button
                type="button"
                @click="emit('open-demo')"
                class="text-left transition hover:text-white cursor-pointer"
              >
                Request Walkthrough
              </button>
            </li>
          </ul>
        </div>

        <div class="sm:col-span-4 md:col-span-3 lg:col-span-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-4">
            Quick Action
          </h4>
          <p class="text-xs text-slate-400 mb-3 leading-relaxed">
            Interested in deploying this architecture for your product team?
          </p>
          <button
            type="button"
            @click="emit('open-demo')"
            class="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 shadow-sm transition hover:bg-slate-800 hover:text-white hover:border-slate-600 cursor-pointer"
          >
            <span>Book a Product Demo</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>

      <div class="border-t border-slate-900 py-6 md:flex md:items-center md:justify-between">
        <ul class="flex items-center gap-3 md:order-2 mb-4 md:mb-0">
          <li>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
              aria-label="Follow us on X"
            >
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Vincent0-8/NexTidy-Vue-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
              aria-label="View on GitHub"
            >
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </li>
        </ul>

        <p class="text-xs text-slate-500">
          &copy; {{ currentYear }} NexTidy. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
