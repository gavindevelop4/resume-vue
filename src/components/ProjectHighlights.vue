<template>
  <div class="projectHighlights">
    <div class="title">Project Highlights:</div>
    <div v-for="(item, index) in list" :key="index">
      <span class="projectName">{{ item.name }}: </span>
      <a class="projectLink" :href="'https://' + item.url">{{ item.url }}</a>
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
  font-size: 12px;
  line-height: 1.6;

  .title {
    text-decoration: bold;
  }

  .projectName {
    color: #717171;
  }

  .projectLink {
    color: #007BFF;
    text-decoration: none;
  }
}
</style>