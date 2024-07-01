<template>
  <div class="skills">
    {{ skills }}
  </div>
</template>

<script>
export default {
  name: "skillsSet",
  props: {
    skills: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

.skills {
  font-size: 12px;
  font-family: "Source Code Pro";
  color: #717171;
  font-weight: 500;
  line-height: 1.6;
}
</style>