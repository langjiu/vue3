import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './rotuer'
// .vue文件: 单文件组件
const app = createApp(App)
app.use(router);
app.mount('#app')