<template>
  <nav class="flex items-center justify-between px-5 py-3 bg-landing-background text-white flex-col md:flex-row">
    <div class="flex items-center">
      <NuxtImg src="/logo2.png" alt="Logo" class="h-12 w-12 mr-3" />
      <nuxt-link to="/"><h1 class="font-medium text-7xl md:text-3xl mb-5 md:mb-0">FunsGiving</h1></nuxt-link>
    </div>

    <div v-if="walletConnected" class="hidden md:flex items-center justify-end text-3xl">
      <nuxt-link to="/play" class="mx-7 hover:underline hover:font-bold">Play</nuxt-link>
      <nuxt-link to="/track" class="mx-7 hover:underline hover:font-bold">Track</nuxt-link>
      <nuxt-link to="/build" class="mx-7 hover:underline hover:font-bold">Build</nuxt-link>
      
      <nuxt-link href="/profile" class="mr-4 ml-24">
        <NuxtImg class="h-12 w-12" src="profile.svg" alt="profile" title="profile" />
      </nuxt-link>
    </div>
    <!-- handles the smaller screen -->
    <div v-if="walletConnected" class="md:hidden flex flex-col text-4xl md:text-base">
      <nuxt-link class="my-2 w-screen text-center hover:underline hover:bg-black hover:font-bold" to="/profile">Profile</nuxt-link>
        <nuxt-link class="my-2 w-screen text-center hover:underline hover:bg-black hover:font-bold" to="/play">Play</nuxt-link>
        <nuxt-link class="my-2 w-screen text-center hover:underline hover:bg-black hover:font-bold" to="/track">Track</nuxt-link>
        <nuxt-link class="my-2 w-screen text-center hover:underline hover:bg-black hover:font-bold" to="/build">Build</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      walletConnected: true,
      showProfile: true
    }
  },
  methods: {
    showProfileText() {
      this.showProfile = true
    },
    hideProfileText() {
      this.showProfile = false
    }
  }
}
</script>
