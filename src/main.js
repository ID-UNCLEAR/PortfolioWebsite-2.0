import App from './App.vue'
import router from './router'
import { createSSRApp } from 'vue'

import './assets/main.css'

const app = createSSRApp(App)

app.use(router)

app.mount('#app')