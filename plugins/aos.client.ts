import AOS from 'aos'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        once: false,
        delay: 650,
        duration: 1100,
        easing: 'ease-out-cubic',
        offset: 80,
      })

      setTimeout(() => {
        AOS.refresh()
      }, 100)
    })

    nuxtApp.hook('page:finish', () => {
      setTimeout(() => {
        AOS.refresh()
      }, 100)
    })
  }
})
