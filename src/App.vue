<template>
  <div class="page">
    <div class="subpage">
      <resumeHeader />
      <resumeMain />
    </div>
  </div>
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
html {
  width: 210mm;
  height: 297mm;  
  margin: 0 auto;
}
body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        /* background-color: #FAFAFA; */
        /* font: 12pt "Tahoma"; */
        font-family: "Lato";
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
