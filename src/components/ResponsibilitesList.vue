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

<style>
.responsibilitesList {
  color: grey;
  font-size: 9px;
}
</style>