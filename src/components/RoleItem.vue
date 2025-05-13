<template>
  <div class="role-item">
    <role-title :title="role.title" :company="role.company" :link="role.website" :startDate="role.startDate"
      :endDate="role.endDate" />
    <role-title 
    v-for="(previousRole, index) in role.previousRole"
    :key="index"
    :title="previousRole.title" :startDate="previousRole.startDate"
    :endDate="previousRole.endDate" />

    <skills :skills="role.skills" />

    <responsibilites-list :list="role.description" />

    <!-- <project-highlights v-if="role.projects" :list="role.projects" /> -->
  </div>
</template>

<script>
import Skills from '@/components/Skills.vue'
import ResponsibilitesList from '@/components/ResponsibilitesList.vue'
import RoleTitle from './RoleTitle.vue';
// import ProjectHighlights from './ProjectHighlights.vue';

export default {
  name: "roleItem",
  components: {
    Skills,
    ResponsibilitesList,
    RoleTitle,
    // ProjectHighlights
  },
  props: {
    role: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style>
.role-item {
  margin-top: 4px;
}
</style>