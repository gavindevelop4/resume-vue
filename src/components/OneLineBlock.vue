<template>
  <div class="oneLineBlock">
    <span class="title">{{ title }}</span>
    <span class="skills">{{ skills }}</span>
  </div>
</template>

<script>
export default {
  name: "oneLineBlock",
  props: {
    title: {
      type: String,
      default: ''
    },
    skills: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.oneLineBlock {
  font-size: 12px;
  
  .skills {
    font-size: 9px;
    color: grey;
    font-family: "Source Code Pro";
  }
}
</style>