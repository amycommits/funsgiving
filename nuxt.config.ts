// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  imports: {
    dirs: ['./stores']
  },
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  serverMiddleware: [
    { path: '/server-api', handler: '~/server-middleware/index.ts' }
  ]  
}

export default config
