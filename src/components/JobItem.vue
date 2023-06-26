<template>
  <div class="employmentHistory">
    <company-name
      :title="job.company"
      :link="job.website"
    />

    <position-item
      v-for="(position, index) in job.position"
      :key="index"
      :position="position"
    />

    <project-hightlights
      v-if="job.projects"
      :list="job.projects"
    />
  </div>
</template>

<script>
import CompanyName from '@/components/CompanyName.vue'
import PositionItem from '@/components/PositionItem.vue'
import ProjectHightlights from '@/components/ProjectHighlights.vue'

export default {
  name: "jobItem",
  components: {
    CompanyName,
    PositionItem,
    ProjectHightlights,
  },
  props: {
    job: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.employmentHistory {
  margin-bottom: 5px;
}
</style>