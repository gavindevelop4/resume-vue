<template>
  <div class="jobTitle">
    <span>{{ title }}</span>
    <span class="date"> {{ startDate }} - {{ endDate }}</span>
  </div>
</template>

<script>
export default {
  name: "JobTitle",
  props: {
    title: {
      type: String,
      default: '',
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss">
.jobTitle {
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 5px;

  .date {
    color: #717171;
    margin-left: 5px;
    font-size: 12px;
  }
}
</style>