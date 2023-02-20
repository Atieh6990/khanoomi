import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'
import VueCookies from 'vue-cookies'

const emitter = mitt()
const cookiesOpt = {
  expireTimes: '365d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None'
}

const app = createApp(App).use(store).use(router).use(VueCookies, cookiesOpt)
app.config.globalProperties.emitter = emitter
app.mount('#app')
