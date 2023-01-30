<template>
  <div class="employmentHistoryTitle">
    <span class="title">{{ title }}</span>,
    <span class="company">{{ company }}</span><span v-if="company !== ''">, </span>
    <span class="location">{{ location }}</span>
    <span class="date"> {{ startDate }} - {{ endDate }}</span>
  </div>
</template>

<script>
export default {
  name: "employmentHistoryTitle",
  props: {
    title: {
      type: String,
      default: '',
    },
    company: {
      type: String,
      default: '',
    },
    companyHref: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: 'Hong Kong'
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: 'current'
    }
  }
}
</script>

<style lang="scss" scoped>
.employmentHistoryTitle {
  font-size: 12px;

  .company {
    color: blue;
  }

  .date {
    color: grey;
    margin-left: 5px;
  }
}
</style>