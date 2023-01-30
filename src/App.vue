<template>
  <resumeHeader />
  <resumeMain />
</template>

<script>
import resumeHeader from './components/ResumeHeader.vue'
import resumeMain from './components/ResumeMain.vue'


export default {
  name: 'App',
  components: {
    resumeHeader,
    resumeMain
  }
}
</script>

<style>
</style>
