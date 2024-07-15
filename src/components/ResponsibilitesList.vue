<template>
  <div class="responsibilitesList">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "responsibilitiesList",
  props: {
    list: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style lang="scss">
.responsibilitesList {
  color: #717171;
  font-size: 12px;
  line-height: 1.5;

  ul {
    margin-block-start: 2px;
    margin-block-end: 2px;
  }
}
</style>