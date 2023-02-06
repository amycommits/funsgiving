<template>
  <div class="flex flex-col sm:flex-row">
    <SideNav :options="sideNavOptions" class="w-screen sm:w-1/4 px-10">
      <template #intro-section>Build Station</template>
    </SideNav>
    <ComingSoon class="w-3/4"/>
  </div>
  
</template>
<script lang="ts">
import { defineComponent } from 'vue'
const navInfo = useSideNav
export default defineComponent({
  data() {
    return {
      sideNavOptions: [
        {name: 'Self-serve', slug: '/build/ready-made'},
        {name: 'Events', slug: '/build/events'},
        {name: 'New', slug: '/build/new'}
      ]
    }
  }
})
</script>