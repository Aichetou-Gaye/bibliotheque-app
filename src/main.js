import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer la configuration du routeur

createApp(App)
  .use(router) // Utiliser Vue Router
  .mount('#app');
