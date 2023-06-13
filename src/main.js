
import { createApp } from 'vue'
import App from './App.vue'
// 引入路由/状态管理
import router from './router'
import pinia from './stores'
// 引入css文件
import 'normalize.css'
import './assets/css/index.css'


createApp(App).use(router).use(pinia).mount('#app')
