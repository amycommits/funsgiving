<template>
  <div class="bg-landing-background w-full h-screen">
    <section label="top-section" class="flex flex-col md:flex-row w-full h-screen">
      <div class="text-white w-screen md:w-1/2 justify-center my-auto">
        <h1 class="mx-auto text-center font-extrabold text-7xl">Gamifying Giving</h1>
        <ConnectWallet v-if="shouldConnectWallet" />
        <nuxt-link
          v-else
          data-cy="play-game"
          to="/play"
          class="bg-gradient-to-r from-logo-purple to-logo-pink hover:from-logo-pink hover:to-logo-purple py-4 px-2 rounded-md mx-auto text-4xl flex items-center justify-center mt-12 w-1/2"
          
        >
          play game
        </nuxt-link>
      </div>
      <NuxtImg class="justify-center px-auto" src="/landing/with_fuzz_girls.png" alt="Funsgiving VR girls"/>
    </section>
    <section label="tagline" class="bg-landing-background h-1/2 pt-48">
      <h2 class="text-center text-5xl mx-auto pt-5">
        <div>
          <span class="text-logo-pink">Funsgiving </span>
          <span class="text-logo-purple">makes giving to charity </span>
        </div>
        <div>
          <span class="text-white text-6xl">fun</span>
          <span class="text-logo-purple"> and </span>
          <span class="text-white text-6xl">transparent</span>
        </div>   
      </h2>
    </section>
    <section label="play-section" class="flex flex-col-reverse md:flex-row w-full bg-landing-background pt-24">
      <div class="w-screen md:w-1/2 flex">
        <NuxtImg class="justify-center items-center mx-auto w-1/2 h-1/2 rounded-lg" src="/landing/play.png" alt="Play games"/>
      </div>
      <div class="w-full md:w-1/2 mt-10 md:mt-0">
        <h3 class="my-auto items-center  ml-10 md:ml-80">
          <span class="text-logo-pink text-5xl text-semibold">Play </span>
          <span class="text-logo-purple text-5xl">games to benefit charity.</span>
        </h3>
        <div class="text-white text-3xl mt-12 w-full md:w-1/2 ml-10 md:ml-80 mr-10 md:mr-80">
          From Metaverses to memory games: play games that you enjoy! We're revolutionizing the landscape of charitable giving.
        </div>
      </div>
    </section>
    <section label="track-section" class="flex flex-col md:flex-row w-full bg-landing-background pt-24">
      <div class="w-3/4 md:w-1/2 ml-10 md:ml-80">
        <div>
          <span class="text-logo-pink text-5xl">Track </span>
          <span class="text-logo-purple text-5xl">your</span>
        </div>
        <div class="text-logo-purple text-5xl">
          contributions
        </div>
        <div class="text-white text-3xl w-full md:w-1/2 my-12">Easy access to your records for tax deductions, and you can see how your money was put to work.</div>
      </div>
      <div class="w-full md:w-1/2 flex">
        <NuxtImg class="justify-left items-left mx-auto w-screen md:w-1/2 h-full rounded-lg" src="/landing/track.png" alt="track your contributions" />
      </div>
    </section>
    <section label="build-section" class="flex flex-col md:flex-row w-full bg-landing-background pt-24 pb-16">
      <div class="w-full md:w-1/2 flex">
        <NuxtImg class="justify-left items-left mx-auto w-screen md:w-1/2 h-full rounded-lg" src="/landing/build.png" alt="track your contributions" />
      </div>
      <div class="w-full md:w-1/2">
        <div class="w-3/4 md:w-1/2 ml-10 md:ml-80">
          <span class="text-logo-pink text-5xl">Build </span>
          <span class="text-logo-purple text-5xl">your own</span>
        </div>
        <div class="text-white text-3xl w-1/2 ml-10 md:ml-80 mt-12">
          Use our interface to bring your own artwork into our games to enhance the experience with your friends and audience, and fundraise for charity.
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
const walletInfo = useWalletConnectedStore()
declare const window: any

export default defineComponent({
  computed: {
    shouldConnectWallet() {
      return !walletInfo.userWallet
    }
  }
})
</script>