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
  font-size: 16px;
  
  .skills {
    font-size: 12px;
    color: #717171;
    font-family: "Source Code Pro";
    margin-left: 5px;
  }
}
</style>