<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps<{
  show: boolean
  title: string
  message: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

let timer: number | null = null

watch(
  () => props.show,
  (val) => {
    if (val) {
      if (timer) clearTimeout(timer)
      timer = window.setTimeout(() => {
        emit('close')
      }, 4500)
    }
  }
)
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed bottom-5 right-5 z-50 flex max-w-md items-start gap-3 rounded-xl border border-blue-500/40 bg-slate-900/95 p-4 text-white shadow-2xl backdrop-blur-md"
        role="alert"
        aria-live="assertive"
      >
        <div class="mt-0.5 shrink-0 text-blue-400">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div class="flex-1">
          <h4 class="text-sm font-semibold text-white">{{ title }}</h4>
          <p class="mt-1 text-xs leading-relaxed text-slate-300">{{ message }}</p>
        </div>

        <button
          @click="emit('close')"
          class="shrink-0 rounded p-1 text-slate-400 hover:text-white"
          aria-label="Close notification"
        >
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>
