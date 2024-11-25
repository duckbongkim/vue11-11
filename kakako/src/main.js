import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {useKakao} from'vue3-kakao-maps'



useKakao('2e7c26d195b8d6ca88d21eca2e09be85')
createApp(App).use(store).use(router).mount('#app')
