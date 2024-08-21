import { createRouter, createWebHistory } from 'vue-router';
import Membre from '../components/Membre.vue';
import Pret from '../components/Pret.vue';
import Livre from '../components/Livre.vue'; 

const routes = [
  { path: '/', component: Membre },
  { path: '/pret', component: Pret },
  { path: '/livre', component: Livre }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
