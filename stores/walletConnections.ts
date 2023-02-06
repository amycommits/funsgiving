import { defineStore, PiniaCustomStateProperties, StoreDefinition } from 'pinia'

export const useWalletConnectedStore = defineStore({
  id: 'wallet-connections-store',
  state: () => {
    return {
      hasWalletConnected: false,
      userAddress: ''
    }
  },
  actions: {
    setWalletConnected(connected: boolean) {
      this.hasWalletConnected = connected
    },
    setUserWallet(address: string) {
      this.userAddress = address
    }
  },
  getters: {
    isWalletConnected: (state) => state.hasWalletConnected,
    userWallet: (state) => state.userAddress
  }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useWalletConnectedStore, import.meta.hot))
// }

// function acceptHMRUpdate(useWalletConnectedStore: StoreDefinition<"wallet-connections-store", { isWalletConnected: boolean }, { isWalletConnected: (state: { isWalletConnected: boolean } & PiniaCustomStateProperties<{ isWalletConnected: boolean }>) => boolean }, {}>, hot: ViteHot): (mod: any) => void {
//   throw new Error('Function not implemented.')
// }
