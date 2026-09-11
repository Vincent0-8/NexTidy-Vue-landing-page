<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'subscribed', email: string): void
}>()

const email = ref('')
const isSubmitting = ref(false)
const errorMessage = ref('')

const handleSubmit = () => {
  errorMessage.value = ''
  const trimmed = email.value.trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!trimmed || !emailRegex.test(trimmed)) {
    errorMessage.value = 'Please enter a valid email address.'
    return
  }

  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    emit('subscribed', trimmed)
    email.value = ''
  }, 400)
}
</script>

<template>
  <section id="subscribe" class="relative py-20 md:py-28 bg-slate-950 border-t border-slate-800 overflow-hidden">
    <div class="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div class="relative mx-auto max-w-3xl text-center" data-aos="fade-up">
        <div
          class="absolute right-0 -top-8 -mr-1 hidden fill-slate-700 lg:block pointer-events-none"
          aria-hidden="true"
        >
          <svg class="fill-slate-700" width="56" height="43">
            <path
              d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688"
            ></path>
          </svg>
        </div>

        <div class="relative">
          <h2 class="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Say goodbye to long queues, slow cycles, and
            <span class="text-blue-500">confusion</span>.
          </h2>

          <p class="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Get early access to our modular landing page toolkit. Drop your email below to receive release updates and instant notifications.
          </p>

          <form
            @submit.prevent="handleSubmit"
            class="mt-8 mx-auto max-w-md flex flex-col sm:flex-row items-center gap-3"
            novalidate
          >
            <div class="w-full relative">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your work email..."
                required
                aria-label="Email address for early access"
                class="w-full rounded-xl border bg-slate-900 px-4 py-3.5 text-sm text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                :class="errorMessage ? 'border-red-500' : 'border-slate-800'"
              />
              <span v-if="errorMessage" class="absolute -bottom-5 left-1 text-xs text-red-400 font-medium">
                {{ errorMessage }}
              </span>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 active:translate-y-px disabled:opacity-50 cursor-pointer"
            >
              <span v-if="!isSubmitting">Get Notified</span>
              <span v-else>Subscribing...</span>
              <span v-if="!isSubmitting">&rarr;</span>
            </button>
          </form>

          <p class="mt-4 text-xs text-slate-500">
            No spam guaranteed. You will only receive release updates and early access invites.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
