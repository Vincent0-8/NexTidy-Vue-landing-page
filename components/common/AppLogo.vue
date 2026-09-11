<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    size: 'md',
  }
)
</script>

<template>
  <a
    href="#"
    class="inline-flex items-center gap-2.5 font-bold tracking-tight transition-opacity hover:opacity-90"
    aria-label="NexTidy Home"
  >
    <div
      class="relative flex items-center justify-center rounded-xl bg-linear-to-tr from-blue-700 via-blue-600 to-sky-400 p-2 shadow-md shadow-blue-500/20"
      :class="{
        'h-8 w-8': size === 'sm',
        'h-9 w-9': size === 'md',
        'h-11 w-11': size === 'lg',
      }"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-full w-full text-white"
      >
        <path
          d="M4 7.5L12 3L20 7.5V16.5L12 21L4 16.5V7.5Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M12 12L20 7.5M12 12V21M12 12L4 7.5"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="12" r="2" fill="#93C5FD" />
      </svg>
    </div>

    <span class="text-xl font-extrabold tracking-tight text-white">
      Nex<span class="text-blue-500">Tidy</span>
    </span>
  </a>
</template>
