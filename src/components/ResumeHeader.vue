<template>
  <div class="top-container">
    <div class="left">
      <div class="name">Gavin Chan</div>
      <div>Eligible holder of Open Work Permit</div>
      <div>Available in April</div>
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
  body {
    height: 842px;
    width: 595px;
    /* to centre page on screen*/
    margin-left: auto;
    margin-right: auto;
    font-family: "Lato";
  }

  .top-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .name {
    font-size: 38px;
  }

  .icon {
    width: 15px;
    height: 15px;
  }

  .education {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 8px;
  }
</style>