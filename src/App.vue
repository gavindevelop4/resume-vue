<template>
  <div class="page">
    <div class="subpage">
      <appHeader />
      <appMain />
    </div>
  </div>
</template>

<script>
import appHeader from '@/layouts/AppHeader.vue'
import appMain from '@/layouts/AppMain.vue'


export default {
  name: 'App',
  components: {
    appHeader,
    appMain
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');


html {
  width: 210mm;
  height: 297mm;  
  margin: 0 auto;
  line-height: 1.5;
}
body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        /* background-color: #FAFAFA; */
        /* font: 12pt "Tahoma"; */
        font-family: "Noto Sans";
        print-color-adjust: exact; 
    }
    * {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
  @page {
        size: A4;
        margin: 0;
    }
    @media print {
        html, body {
            width: 210mm;
            height: 297mm;        
        }
        .page {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
        }
    }
    .subpage {
        padding: 1.2cm 1.5cm;
        /* border: 5px red solid; */
        height: 297mm;
        /* outline: 2cm #FFEAEA solid; */
    }
</style>
