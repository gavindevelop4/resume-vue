<template>
  <div class="jobTitle">
    <div class="title">{{ title }}</div>
    <div>
      <span class="company"><a :href="link">{{ company }}</a>,</span>
      <span class="date"> {{ startDate }} - {{ endDate }}</span>
    </div>
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
  margin-bottom: 5px;
  margin-top: 5px;

  .title {
    font-size: 20px;
    color: black;
    margin-bottom: 5px;
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
    color: #717171;
    margin-left: 5px;
    // font-size: 12px;
  }
}
</style>