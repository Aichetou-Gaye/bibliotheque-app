import { createRouter, createWebHistory } from 'vue-router';
import Membre from '../components/Membre.vue';
import Pret from '../components/Pret.vue';
// Importez le composant Livre si vous l'avez défini
// import Livre from '../components/Livre.vue'; 

const routes = [
  { path: '/', component: Membre },
  { path: '/pret', component: Pret },
  // Ajoutez une route pour le composant Livre si nécessaire
  // { path: '/livre', component: Livre }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
