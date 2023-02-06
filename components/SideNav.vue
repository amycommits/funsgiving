<template>
  <nav class="bg-logo-purple-dark">
    <div class="text-white text-6xl font-bold intro-section p-4">
      <slot name="intro-section">Station</slot>
    </div>
    <div class="options flex flex-col">
      <button
        class="text-white text-4xl py-2 px-4 rounded-lg hover:bg-logo-pink-dark"
        v-for="(option, index) in options"
        :key="`option-${index}`"
        :class="{ 'bg-logo-pink': index === selected }"
        @click="setSelected(index)"
      >
        {{ option.name }}
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
const navInfo = useSideNav()

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<{ name: string; slug: string, component: string }[]>,
      required: true,
    },
  },
  data() {
    return {
      selected: 0,
      hover: -1,
    }
  },
  methods: {
    setSelected(index: number = 0) {
      this.selected = index
      navInfo.setOption(index)
    }
  }
})
</script>
