import {createApp} from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import ElementPlus from 'element-plus'
import fa from 'element-plus/es/locale/lang/fa'


import 'element-plus/dist/index.css'
import '@/css/custom.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, {
    locale: fa,
})
app.mount('#app')
