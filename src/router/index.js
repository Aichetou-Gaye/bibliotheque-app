import { createRouter, createWebHistory } from 'vue-router';
import Home from "../components/Home.vue";
import Membre from '../components/membres/Membre.vue';
import Pret from '../components/prets/Pret.vue';
import Livre from '../components/livres/Livre.vue'; 

const routes = [
  { path: "/", component: Home },
  { path: '/membre', component: Membre },
  { path: '/pret', component: Pret },
  { path: '/livre', component: Livre }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
