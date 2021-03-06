import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// 引入全局样式文件
import './assets/less/index.less'


const app = createApp(App)
app.use(router);
app.mount('#app')
