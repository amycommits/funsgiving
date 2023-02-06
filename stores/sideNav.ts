import { defineStore, PiniaCustomStateProperties, StoreDefinition } from 'pinia'

export const useSideNav = defineStore({
  id: 'wallet-connections-store',
  state: () => {
    return {
      selected: 0,
    }
  },
  actions: {
    setSelectedOption(index: number) {
      this.selected = index
    },
  },
  getters: {
    selectedOption: (state) => state.selected
  }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useWalletConnectedStore, import.meta.hot))
// }

// function acceptHMRUpdate(useWalletConnectedStore: StoreDefinition<"wallet-connections-store", { isWalletConnected: boolean }, { isWalletConnected: (state: { isWalletConnected: boolean } & PiniaCustomStateProperties<{ isWalletConnected: boolean }>) => boolean }, {}>, hot: ViteHot): (mod: any) => void {
//   throw new Error('Function not implemented.')
// }
