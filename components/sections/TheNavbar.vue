<script setup lang="ts">

const emit = defineEmits<{
  (e: 'open-demo'): void
}>()

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const isLoaded = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(() => {
    isLoaded.value = true
  }, 60)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 z-40 w-full transition-all duration-500 ease-out"
    :class="[
      !isLoaded ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
      isScrolled
        ? 'bg-slate-950/90 py-3 shadow-lg shadow-black/30 backdrop-blur-md border-b border-slate-900'
        : 'bg-transparent py-5',
    ]"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="flex items-center justify-between">
        <AppLogo size="md" />

        <nav class="hidden md:flex md:items-center md:gap-8" aria-label="Main Navigation">
          <ul class="flex items-center gap-7 text-sm font-medium text-slate-300">
            <li>
              <a href="#features" class="transition-colors hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#workflow" class="transition-colors hover:text-white">
                Workflow
              </a>
            </li>
            <li>
              <a href="#showcase" class="transition-colors hover:text-white">
                Showcase
              </a>
            </li>
            <li>
              <a href="#stats" class="transition-colors hover:text-white">
                Impact
              </a>
            </li>
            <li>
              <a href="#articles" class="transition-colors hover:text-white">
                Platform
              </a>
            </li>
          </ul>

          <div class="flex items-center gap-3">
            <button
              type="button"
              @click="emit('open-demo')"
              class="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/40 active:translate-y-px cursor-pointer"
            >
              <span>Request Demo</span>
              <span class="transition-transform duration-150 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </button>
          </div>
        </nav>

        <div class="flex md:hidden">
          <button
            type="button"
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition hover:text-white focus:outline-none"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation menu"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="border-b border-slate-800 bg-slate-950 px-6 py-6 shadow-2xl backdrop-blur-lg md:hidden"
      >
        <ul class="space-y-4 text-base font-medium text-slate-300">
          <li>
            <a href="#features" @click="closeMobileMenu" class="block py-1 hover:text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#workflow" @click="closeMobileMenu" class="block py-1 hover:text-white">
              Workflow
            </a>
          </li>
          <li>
            <a href="#showcase" @click="closeMobileMenu" class="block py-1 hover:text-white">
              Showcase
            </a>
          </li>
          <li>
            <a href="#stats" @click="closeMobileMenu" class="block py-1 hover:text-white">
              Impact
            </a>
          </li>
          <li>
            <a href="#articles" @click="closeMobileMenu" class="block py-1 hover:text-white">
              Platform
            </a>
          </li>
        </ul>

        <div class="mt-6 border-t border-slate-800 pt-5">
          <button
            type="button"
            @click="() => { closeMobileMenu(); emit('open-demo') }"
            class="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-blue-500"
          >
            <span>Request Demo</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>
