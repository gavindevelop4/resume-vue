<template> 
  <div class="main">
    <!-- EVERWAY -->
    <div class="employmentHistory">
      <company-name
        title="Everway Technology Limited"
        link="https://universeaction.com/"
      />

      <job-title
        title='Senior Frontend Developer (Team Lead)'
        startDate="June 2022"
        endDate="Feb 2023"
      />

      <skills skills="TypeScript(Vue, Pinia)/JavaScript(Vue, Nuxt, VueX)/SCSS/Jenkins/Git" />

      <responsibilites-list
        :list="everwayResList"
      />

      <job-title
        title='Frontend Developer'
        startDate="May 2021"
        endDate="May 2022"
      />

      <skills skills="TypeScript(Vue, Pinia)/JavaScript(Vue, Nuxt, VueX)/Flutter(GetX)/SCSS/Git" />

      <responsibilites-list
        :list="everwayResList2"
      />

      <project-hightlights
        :list="everwayProjects"
      />
    </div>

    <!-- OSW -->
    <div class="employmentHistory">
      <company-name
        title="OSW Group Limited"
        link="https://www.osw.com.hk/"
      />

      <job-title
        title='Web Programmer'
        startDate="Aug 2020"
        endDate="Apr 2021"
      />

      <skills skills="PHP/JavaScript(jQuery)/SCSS/AWS/Photoshop/AI/Git" />

      <responsibilites-list
        :list="oswResList"
      />

      <project-hightlights
        :list="oswProjects"
      />
    </div>

    <!-- SF -->
    <div class="employmentHistory">
      <company-name
        title="S.F. Express"
        link="https://htm.sf-express.com/hk/en/"
      />

      <job-title
        title='Marketing Assistant (Data Analyst)'
        startDate="Jul 2019"
        endDate="Apr 2020"
      />
      

      <skills skills="Excel/MySQL" />
    </div>

    <div class="employmentHistory">
      <one-line-block
        title="Other Skills"
        skills="TypeScript(React, React Native, Next)/NodeJS(ExpressJS)/MongoDB/Java(SpringBoot)"
      />
      <skills skills="TypeScript(React, React Native, Next)/NodeJS(ExpressJS)/MongoDB/Java(SpringBoot)" />

    </div>
    
    <div class="employmentHistory">
      <one-line-block
        title="Language"
        skills="English(Fluent)/Cantonese(Native)/Mandarin(Fluent)"
      />
      <skills skills="English(Fluent)/Cantonese(Native)/Mandarin(Fluent)"/>
    </div>

  </div>
</template>

<script>
// import employmentHistoryTitle from '@/components/EmploymentHistoryTitle.vue'
import skills from '@/components/Skills.vue'
import ResponsibilitesList from './ResponsibilitesList.vue'
import projectHightlights from '@/components/ProjectHighlights.vue'
import oneLineBlock from '@/components/OneLineBlock.vue'
import companyName from '@/components/CompanyName.vue'
import jobTitle from '@/components/JobTitle.vue'

export default {
  name: "resumeMain",
  components: {
    // employmentHistoryTitle,
    skills,
    ResponsibilitesList,
    projectHightlights,
    oneLineBlock,
    companyName,
    jobTitle
  },
  computed: {
    // everway
    everwayResList() {
      return [
        "Managed teams of 5 developers and monitored projects with Jira",
        "Performed code reviews that guarantee code quality",
        "Deployed release activities for 5+ projects",
        "Communicated with Product Managers, UI/UX designers to optimize platforms",
        "Developed realtime voice call feature with WebRTC"
      ]
    },
    everwayResList2() {
      return [
        "Developed 2+ admin panels style web app for international SMS platform and smart voice system of the company",
        "Built 2+ official websites for the company with SSG",
        "Developed a crypto exchange application for iOS and Android with live chat, notifications, QR code scanner features",
        "Published apps to Google Play Store and App Store",
      ]
    },
    everwayProjects() {
      return [
        {
          name: "E-Coins (Crypto Exchange Application)",
          url: "apps.apple.com/us/app/e-coins-by-unal/id1577119952",
        },
        {
          name: "AboSend (SMS Platform Web Application)",
          url: "www.abosend.com",
        },{
          name: "AboTalk (Smart Voice System Web Application): ",
          url: "www.abotalk.com",
        },
      ]
    },

    // osw
    oswResList() {
      return [
        "Built PHP websites including CMS with HTML, CSS and jQuery",
        "Configured servers with cPanel, WHM and also SSH",
        "Installed SSL certificates for websites",
        "Used git for version control of websites",
        "Communicated with UI/UX designers to optimize design with CSS",
        "Developed 3D animations with Three.js"
      ]
    },
    oswProjects() {
      return [
        {
          name: "Mount Anderson",
          url: "mountanderson.com.hk"
        },
        {
          name: "10 LaSalle",
          url: "10lasalle.com.hk",
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.employmentHistory {
  margin-bottom: 5px;
}
</style>