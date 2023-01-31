import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faGraduationCap, faSquarePhone, faSquareEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faGraduationCap, faLinkedin, faGithub, faSquareEnvelope, faSquarePhone, faLocationDot)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
