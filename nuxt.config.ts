// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  imports: {
    dirs: ['./stores']
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
}

export default config
