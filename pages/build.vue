<template>
  <div class="flex flex-col sm:flex-row">
    <SideNav :options="sideNavOptions" class="w-screen sm:w-1/4 px-10">
      <template #intro-section>Build Station</template>
    </SideNav>
    <SelfServe v-if="selectedOption === 0" class="w-screen sm:w-3/4 h-screen"/>
    <EventBuild v-if="selectedOption === 1" class="w-screen sm:w-3/4 h-screen"/>
    <NewSection v-if="selectedOption === 2" class="w-screen sm:w-3/4 h-screen"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { SideNavOption } from '../custom-types'
import EventBuild from '@/components/buildSection/EventBuild.vue'
import SelfServe from '@/components/buildSection/SelfServe.vue'
import NewSection from '@/components/buildSection/NewSection.vue'

const navInfo = useSideNav()

// type NavOptions {
//   name: string
//   slug: string
//   component: string
// }
export default defineComponent({
  components: {
    EventBuild,
    SelfServe,
    NewSection
  //   EventBuild: () => import('@/components/buildSection/EventBuild.vue'),
  //   NewSection: () => import('@/components/buildSection/NewSection.vue'),
  },
  data() {
    return {
      sideNavOptions: [
        {name: 'Self-serve', slug: '/build/ready-made', component: 'SelfServe'},
        {name: 'Events', slug: '/build/events', component: 'EventBuild'},
        {name: 'New', slug: '/build/new', component: 'NewSection'}
      ] as SideNavOption[]
    }
  },
  computed: {
    selectedOption() {
      return navInfo.selectedOption || 0
    }
  }
})
</script>