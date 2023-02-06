<template>
  <a v-if="metamaskExists" target="_" href="https://metamask.io/" class="bg-gradient-to-r from-logo-purple to-logo-pink  text-white w-full h-20 rounded-md text-2xl">
            Download Metamask to Play
  </a>
  <button
    v-else
    data-cy="connect-wallet"
    @click="connectMetamask"
    class="bg-gradient-to-r from-logo-purple to-logo-pink hover:from-logo-pink hover:to-logo-purple py-4 px-2 rounded-md mx-auto text-4xl flex items-center justify-center mt-12"
    
  >
    Connect Wallet
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useWalletConnectedStore } from '@/stores/walletConnections'

declare const window: any
const store = useWalletConnectedStore()

export default defineComponent({
  data() {
    return {
      metamaskExists: false
    }
  },
  computed: {
    isWalletConnnected() {
      return store.isWalletConnected
    }
  },
  methods: {
    async connectMetamask() {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      console.log({account})
      console.log('clicked on connectMetamask')
      store.setWalletConnected(!!account)
      store.setUserWallet(account)
      // this.$store.dispatch('setUserWallet', account)
    },
    hasMetamask(): boolean {
      if (process.browser && typeof window !== 'undefined') {
        this.metamaskExists = window.ethereum !== 'undefined'
        return this.metamaskExists
      } else {
        return false
      }
    },
  },
  mounted() {
    this.hasMetamask()
  }
})
</script>

function useWalletConnectedStore() {
  throw new Error('Function not implemented.')
}
