<template>
  <div class="oneLineBlock">
    <div class="title">{{ title }}</div>
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
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

.oneLineBlock {
  font-size: 16px;
  color: #00238e;
  font-weight: 700;

  // margin-bottom: 8px;
  margin-top: 2px;
  margin-bottom: 2px;
  // font-weight: 700;
  
  .skills {
    font-size: 12px;
    color: #717171;
    font-family: "Source Code Pro";
    margin-left: 5px;
  }
}
</style>