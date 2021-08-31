import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../public/assets/css/theme.css";
import "../public/assets/vendor/fontawesome/css/all.min.css";


createApp(App).use(router).mount('#app')
