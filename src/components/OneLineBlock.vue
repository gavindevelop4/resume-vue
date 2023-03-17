<template>
  <div class="oneLineBlock">
    <div class="title">{{ title }}</div>
    <!-- <div class="skills">{{ skills }}</div> -->
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
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

.oneLineBlock {
  font-size: 20px;
  margin-bottom: 8px;
  
  .skills {
    font-size: 12px;
    color: #717171;
    font-family: "Source Code Pro";
    margin-left: 5px;
  }
}
</style>