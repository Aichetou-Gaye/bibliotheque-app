import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import App from './App.vue'
import { routerKey } from "vue-router"

createApp(App).use(routerKey).mount('#app')
