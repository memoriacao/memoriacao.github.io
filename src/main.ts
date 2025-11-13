import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Home  from './pages/Home.vue'
import router from './router'

const home = createApp(Home)

home.use(createPinia())
home.use(router)
home.mount('#app')