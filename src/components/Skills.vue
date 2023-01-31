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
  font-size: 12px;
  font-family: "Source Code Pro";
  color: #717171;
  font-weight: 500;
}
</style>