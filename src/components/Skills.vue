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
.skills {
  font-size: 9px;
  font-family: "Source Code Pro";
  color: grey;
}
</style>