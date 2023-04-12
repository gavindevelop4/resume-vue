<template>
  <div class="companyName">
    <span class="title"><a :href="link">{{ title }}</a></span>
  </div>
</template>

<script>
export default {
  name: "CompanyName",
  props: {
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.companyName {
  font-size: 20px;
  .title {
    color: #007BFF;
    // font-weight: 700;

    a {
      color: #007BFF;
      text-decoration: none;
      // font-style: italic;
    }
  }

  .location {
    color: #717171;
    margin-left: 5px;
    font-size: 16px;
  }
}
</style>