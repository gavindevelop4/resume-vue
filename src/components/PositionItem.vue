<template>
  <div>
    <job-title 
      :title="position.title"
      :startDate="position.startDate"
      :endDate="position.endDate"
    />

    <skills :skills="position.skills" />

    <responsibilites-list
      :list="position.description"
    />
  </div>
</template>

<script>
import JobTitle from '@/components/JobTitle.vue'
import Skills from '@/components/Skills.vue'
import ResponsibilitesList from '@/components/ResponsibilitesList.vue'

export default {
  name: "positionItem",
  components: {
    Skills,
    ResponsibilitesList,
    JobTitle,
  },
  props: {
    position: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>