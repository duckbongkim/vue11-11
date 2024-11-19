import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from '@/mixIns'
import plugin from '@/plugins/i18n'
import pageTitle from '@/components/flament/pageTitle'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('pageTitle', pageTitle)
app.mount('#app')
app.mixin(mixin)
app.use(plugin)


