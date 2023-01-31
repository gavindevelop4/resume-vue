<template> 
  <div class="main">
    <!-- EVERWAY -->
    <div class="employmentHistory">
      <employmentHistoryTitle
        title='Senior Frontend Developer (Team Lead)'
        company="Everway Technology Limited"
        companyHref="https://universeaction.com/"
        location="Hong Kong"
        startDate="June 2022"
        endDate="Febuary 2023"
        :noMarginBottom="true"
      />

      <employmentHistoryTitle
        title='Frontend Developer'
        startDate="May 2021"
        endDate="May 2022"
      />

      <skills skills="TypeScript(Vue, Pinia)/JavaScript(Vue, Nuxt, VueX)/Flutter(GetX)/SCSS/Jenkins" />

      <responsibilites-list
        :list="everwayResList"
      />

      <project-hightlights
        :list="everwayProjects"
      />
    </div>

    <!-- OSW -->
    <div class="employmentHistory">
      <employmentHistoryTitle
        title='Web Programmer'
        company="OSW Group Limited"
        companyHref="https://www.osw.com.hk/"
        location="Hong Kong"
        startDate="Aug 2020"
        endDate="Apr 2021"
      />

      <skills skills="PHP/JavaScript(jQuery)/SCSS/AWS/Photoshop/AI" />

      <responsibilites-list
        :list="oswResList"
      />

      <project-hightlights
        :list="oswProjects"
      />
    </div>

    <!-- SF -->
    <div class="employmentHistory">
      <employmentHistoryTitle
        title='Marketing Assistant (Data Analyst)'
        company="S.F. Express"
        companyHref="https://htm.sf-express.com/hk/en/"
        location="Hong Kong"
        startDate="Jul 2019"
        endDate="Apr 2020"
      />

      <skills skills="Excel/MySQL" />
    </div>

    <div class="employmentHistory">
      <one-line-block
        title="Other Skills"
        skills="TypeScript(React, React Native, Next)/NodeJS(ExpressJS)/MongoDB"
      />
    </div>
    
    <div class="employmentHistory">
      <one-line-block
        title="Language"
        skills="English(Fluent)/Cantonese(Native)/Mandarin(Fluent)"
      />
    </div>

  </div>
</template>

<script>
import employmentHistoryTitle from '@/components/EmploymentHistoryTitle.vue'
import skills from '@/components/Skills.vue'
import ResponsibilitesList from './ResponsibilitesList.vue'
import projectHightlights from '@/components/ProjectHighlights.vue'
import oneLineBlock from '@/components/OneLineBlock.vue'

export default {
  name: "resumeMain",
  components: {
    employmentHistoryTitle,
    skills,
    ResponsibilitesList,
    projectHightlights,
    oneLineBlock
  },
  computed: {
    // everway
    everwayResList() {
      return [
      "Managed teams of 5 developers and monitored projects to ensure process with Jira",
      "Deployed release activities for 5+ projects",
      `Communicated with Product Managers, UI/UX designers to adjust design in order to enhance development process and user
        experience`,
"Developed a crypto exchange application for iOS and Android with live chat, notifications, QR code scanner features",
"Published apps to Google Play Store and App Store",
"Built 2+ official websites for the company with SSG",
"Developed 2+ admin panels web app for international SMS platform and smart voice system of the company",
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
  margin-bottom: 16px;
}
</style>