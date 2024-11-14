import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pageTitle from '@/components/flament/pageTitle'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('pageTitle', pageTitle)
app.mount('#app')


