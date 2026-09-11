<script setup lang="ts">
onMounted(() => {
  if (import.meta.client) {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
})
</script>

<template>
  <NuxtPage />
</template>
