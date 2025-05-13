)<template>
  <div class="main">
    <role-item v-for="(role, index) in roleList" :key="index" :role="role" />

    <!-- <job-item 
      v-for="(job, index) in jobList"
      :key="index"
      :job="job"
    /> -->

    <div class="employmentHistory">
      <one-line-block title="Skills" />
      <skills
        :skills="`
        Specializes in TypeScript(React, React Native, Next, Vue, Pinia), JavaScript(Vue, Nuxt, VueX), Kotlin(Jetpack Compose, Hilt), Flutter(GetX),\n
        Java(SpringBoot, Android), SCSS, Jenkins, GitHub Actions, Linux, Docker, Python, Git, WebRTC, NodeJS(ExpressJS), MongoDB, GraphQL`" />
      <skills :skills="`Strong understanding of SAAS platforms, RESTful APIs, and cloud infrastructure`" />
    </div>
    <div class="employmentHistory">
      <one-line-block title="Languages" skills="English(Fluent)/Cantonese(Native)/Mandarin(Fluent)" />
      <skills skills="English(Fluent), Cantonese(Native), Mandarin(Fluent)" />
    </div>

  </div>
</template>

<script>
import skills from '@/components/Skills.vue'
import oneLineBlock from '@/components/OneLineBlock.vue'
import jobs from '@/constants'
import roleList from '@/constants'
// import JobItem from '@/components/JobItem.vue'
import RoleItem from '@/components/RoleItem.vue'

export default {
  name: "appMain",
  components: {
    skills,
    oneLineBlock,
    // JobItem,
    RoleItem
  },
  computed: {
    jobList() {
      return jobs;
    },
    roleList() {
      return roleList;
    }
  }
}
</script>

<style lang="scss" scoped>
.employmentHistory {
  margin-bottom: 5px;
}
</style>