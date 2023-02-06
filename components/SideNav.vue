<template>
  <nav class="bg-logo-purple-dark">
    <div class="text-white text-6xl font-bold intro-section p-4">
      <slot name="intro-section">Station</slot>
    </div>
    <div class="options p-4">
      <button
        ref="side-nav-buttons"
        class="text-white text-4xl py-2 px-4 rounded-lg hover:bg-logo-pink-dark"
        v-for="(option, index) in options"
        :key="`option-${index}`"
        :class="{ 'bg-logo-pink': index === selected }"
        @click="selected = index"
      >
        {{ option.name }}
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<{ name: string; slug: string }[]>,
      required: true,
    },
  },
  data() {
    return {
      selected: 0,
      hover: -1,
    }
  },
})
</script>
