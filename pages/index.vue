<script setup lang="ts">
import AOS from 'aos'

const isVideoModalOpen = ref(false)
const isDemoModalOpen = ref(false)
const demoEmail = ref('')
const demoSubmitted = ref(false)
const showBackToTop = ref(false)

const toast = ref({
  show: false,
  title: '',
  message: '',
})

const showToast = (title: string, message: string) => {
  toast.value = {
    show: true,
    title,
    message,
  }
}

const handleScroll = () => {
  if (import.meta.client) {
    showBackToTop.value = window.scrollY > 450
  }
}

const scrollToTop = () => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const handleOpenVideo = () => {
  isVideoModalOpen.value = true
}

const handleOpenDemo = () => {
  demoSubmitted.value = false
  demoEmail.value = ''
  isDemoModalOpen.value = true
}

const handleDemoSubmit = () => {
  if (!demoEmail.value || !demoEmail.value.includes('@')) {
    return
  }
  demoSubmitted.value = true
  setTimeout(() => {
    isDemoModalOpen.value = false
    showToast(
      'Demo Request Received!',
      `We've added ${demoEmail.value} to our priority VIP demo schedule. Keep an eye on your inbox!`
    )
  }, 500)
}

const handleSubscribed = (email: string) => {
  showToast(
    'Early Access Confirmed!',
    `Thank you for subscribing! We will notify ${email} as soon as new features launch.`
  )
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  nextTick(() => {
    AOS.refresh()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

useSeoMeta({
  title: 'NexTidy — Modern Digital Web Experiences',
  description: 'NexTidy is a modern, high-performance landing page experience built for ambitious teams.',
  ogTitle: 'NexTidy — Modern Digital Web Experiences',
  ogDescription: 'NexTidy is a modern, high-performance landing page experience built for ambitious teams.',
  themeColor: '#020617',
})
</script>

<template>
  <div class="relative min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-blue-600 selection:text-white">
    <TheNavbar @open-demo="handleOpenDemo" />

    <main class="grow">
      <HeroSection
        @open-demo="handleOpenDemo"
        @open-video="handleOpenVideo"
      />

      <FeaturesGrid />

      <FeaturesTabs />

      <FeatureShowcase />

      <StatsSection />

      <ArticlesSection />

      <CtaSection @subscribed="handleSubscribed" />
    </main>

    <TheFooter @open-demo="handleOpenDemo" />

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-5 left-5 z-40 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/90 text-slate-400 shadow-xl backdrop-blur-xs transition hover:bg-slate-800 hover:text-white hover:border-slate-700 cursor-pointer"
        aria-label="Back to top"
      >
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </Transition>

    <ModalDialog
      :is-open="isVideoModalOpen"
      title="Video Walkthrough"
      @close="isVideoModalOpen = false"
    >
      <div class="text-center sm:text-left">
        <div class="mx-auto sm:mx-0 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900/60 border border-blue-700/50 text-blue-400">
          <svg class="h-7 w-7 fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        <h3 class="font-serif text-2xl font-bold text-white mb-2">
          Video Walkthrough Coming Soon!
        </h3>

        <p class="text-sm leading-relaxed text-slate-300 mb-6">
          We are currently recording an in-depth architectural breakdown and developer walkthrough. In the meantime, you can test all live components on this page or request a private interactive demo.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            @click="() => { isVideoModalOpen = false; handleOpenDemo(); }"
            class="flex-1 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition cursor-pointer"
          >
            Request Private Walkthrough &rarr;
          </button>
          <button
            type="button"
            @click="isVideoModalOpen = false"
            class="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition cursor-pointer"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </ModalDialog>

    <ModalDialog
      :is-open="isDemoModalOpen"
      title="Request Demo"
      @close="isDemoModalOpen = false"
    >
      <div class="text-center sm:text-left">
        <div class="mx-auto sm:mx-0 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-tr from-blue-700 to-sky-400 text-white shadow-lg shadow-blue-500/20">
          <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>

        <h3 class="font-serif text-2xl font-bold text-white mb-2">
          Private Demo Reservation
        </h3>

        <p class="text-sm leading-relaxed text-slate-300 mb-6">
          Our sandbox preview is reserved for early-access engineering partners. Enter your work email below to get invited to the next cohort.
        </p>

        <form @submit.prevent="handleDemoSubmit" class="space-y-4">
          <div>
            <label for="modal-email" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Work Email Address
            </label>
            <input
              id="modal-email"
              v-model="demoEmail"
              type="email"
              required
              placeholder="you@company.com"
              class="w-full rounded-xl border border-slate-700 bg-slate-800/90 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              class="flex-1 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition cursor-pointer"
            >
              Confirm Demo Reservation &rarr;
            </button>
            <button
              type="button"
              @click="isDemoModalOpen = false"
              class="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ModalDialog>

    <ToastAlert
      :show="toast.show"
      :title="toast.title"
      :message="toast.message"
      @close="toast.show = false"
    />
  </div>
</template>
