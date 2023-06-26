<template> 
  <div class="main">
    <job-item 
      v-for="(job, index) in jobList"
      :key="index"
      :job="job"
    />
    
    <div class="employmentHistory">
      <one-line-block
        title="Other Skills"
        skills="TypeScript(React, React Native, Next)/NodeJS(ExpressJS)/MongoDB/Java(SpringBoot)"
      />
      <skills skills="TypeScript(React, React Native, Next)/NodeJS(ExpressJS)/MongoDB/Java(SpringBoot)/Linux/GraphQL" />

    </div>
    
    <div class="employmentHistory">
      <one-line-block
        title="Language"
        skills="English(Fluent)/Cantonese(Native)/Mandarin(Fluent)"
      />
      <skills skills="English(Fluent)/Cantonese(Native)/Mandarin(Fluent)"/>
    </div>

  </div>
</template>

<script>
import skills from '@/components/Skills.vue'
import oneLineBlock from '@/components/OneLineBlock.vue'
import jobs from '@/constants'
import JobItem from '@/components/JobItem.vue'

export default {
  name: "appMain",
  components: {
    skills,
    oneLineBlock,
    JobItem
  },
  computed: {
    jobList() {
      return jobs;
    },
  }
}
</script>

<style lang="scss" scoped>
.employmentHistory {
  margin-bottom: 5px;
}
</style>