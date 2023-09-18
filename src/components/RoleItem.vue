<template>
  <div>
    <role-title
      :title="role.title"
      :company="role.company"
      :link="role.website"
      :startDate="role.startDate"
      :endDate="role.endDate"
    />

    <skills :skills="role.skills" />

    <responsibilites-list
      :list="role.description"
    />

    <project-highlights
      v-if="role.projects"
      :list="role.projects"
    />
  </div>
</template>

<script>
import Skills from '@/components/Skills.vue'
import ResponsibilitesList from '@/components/ResponsibilitesList.vue'
import RoleTitle from './RoleTitle.vue';
import ProjectHighlights from './ProjectHighlights.vue';

export default {
  name: "roleItem",
  components: {
    Skills,
    ResponsibilitesList,
    RoleTitle,
    ProjectHighlights
},
  props: {
    role: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
</style>