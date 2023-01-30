<template>
  <div class="projectHighlights">
    <div class="title">Project Highlights:</div>
    <div v-for="(item, index) in list" :key="index">
      <span class="projectName">{{ item.name }}: </span>
      <span class="projectLink">{{ item.url }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectHightlights",
  props: {
    list: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style lang="scss" scoped>
.projectHighlights {
  font-size: 8px;

  .title {
    text-decoration: bold;
  }
  
  .projectName {
    color: grey;
  }
  .projectLink {
    color: blue;
  }
}
</style>