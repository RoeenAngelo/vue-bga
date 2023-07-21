import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')


/*
  Intl API formatting
*/
app.config.globalProperties.filters = {
  formatScore(value) {
    return value.toFixed(0)
    }
  }
