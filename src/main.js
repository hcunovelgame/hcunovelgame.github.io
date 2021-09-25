import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import installElementPlus from './plugins/element'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(router).mount('#app')
// app.use(installElementPlus)
app.use(ElementPlus)
