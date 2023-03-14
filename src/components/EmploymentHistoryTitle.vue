<template>
  <div :class="['employmentHistoryTitle', noMarginBottom && 'noMargin']">
    <span class="title">{{ title }}</span><span v-if="!noLocation">, </span>
    <span class="company"><a :href="companyHref">{{ company }}</a></span><span v-if="company !== ''">, </span>
    <span class="location" v-if="!noLocation">{{ location }}</span>
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
    },
    noMarginBottom: {
      type: Boolean,
      default: false
    },
    noLocation: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.employmentHistoryTitle {
  font-size: 16px;
  margin-bottom: 5px;

  &.noMargin {
    margin-bottom: 0;
  }

  .company {
    color: #007BFF;

    a {
      color: #007BFF;
      text-decoration: none;
    }
  }

  .date {
    color: #717171;
    margin-left: 5px;
    font-size: 12px;
  }
}
</style>