<template>
  <div class="jobTitle">
    <!-- <div class="title">{{ title }}</div>
    <div>
      <span class="company"><a :href="link">{{ company }}</a>,</span>
      <span class="date"> {{ startDate }} - {{ endDate }}</span>
    </div> -->

    <span class="title">{{ title }}</span>
    <span v-if="company != ''">．</span>
    <span class="company"><a :href="link">{{ company }}</a></span>
    <span class="date"> {{ startDate }} - {{ endDate }}</span>

  </div>
</template>

<script>
export default {
  name: "companyAndDate",
  props: {
    title: {
      type: String,
      default: '',
    },
    company: {
      type: String,
      default: '',
    },
    link: {
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
  // margin-bottom: 2px;
  // margin-top: 2px;
  line-height: 1.3;

  span {
    margin-bottom: 0;
  }

  .title {
    // font-size: 20px;
    color: black;
    // margin-bottom: 2px;
    // font-weight: 700;
  }

  .company {
    color: #007BFF;
    // margin-left: 5px;
    // font-weight: 700;

    a {
      color: #007BFF;
      text-decoration: none;
      // font-style: italic;
    }
  }

  .date {
    color: #a8aabc;
    margin-left: 5px;
    font-size: 12px;
  }
}
</style>