<template>
  <div class="top-container">
    <div class="left">
      <div class="name">Gavin Chan</div>
      <div class="description">Eligible holder of Open Work Permit</div>
      <div class="description">Available in April</div>
      <div class="education">
        <!-- <img class="icon" src="./images/Picture 1.png">  -->
        <div>B.Sc., Statistics, The Chinese University of Hong Kong, 2015-2019</div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resumeHeader",
}
</script>

<style lang="scss">
  .top-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 16px;
  }

  .name {
    font-size: 50.5px;
    margin-bottom: 16px;
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  .description {
    line-height: 1.5;
  }

  .education {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 10.5px;
    margin-top: 16px;
  }
</style>