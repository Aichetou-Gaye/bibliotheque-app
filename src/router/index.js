import { createRouter, createWebHistory } from "vue-router";

import Home from "@components/Home.vue";

import AddL from "@components/livres/AjoutLivre.vue";
import ListeL from "@components/livres/ListeLivre.vue";
import EditL from "@components/livres/ModifierLivre.vue";

import AddM from "@components/membres/AjouterMembre.vue";
import EditM from "@components/membres/ModifierMembre.vue";
import ListeM from "@components/membres/ListeMembre.vue";

import AddP from "@components/prets/AjouterPret.vue";
import EditP from "@components/prets/ModifierPret.vue";
import ListeP from "@components/prets/ListePret.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/livre",
    name: "livre",
    component: ListeL,
  },{
    path: "/livre/edit/:id",
    name: "livre-edit",
    component: EditL,
  },
  {
    path: "/livre/new",
    name: "livre-neuf",
    component: AddL,
  },
  {
    path: "/membre",
    name: "membre",
    component: ListeM,
  },{
    path: "/membre/edit/:id",
    name: "membre-edit",
    component: EditM,
  },
  {
    path: "/membre/new",
    name: "membre-neuf",
    component: AddM,
  },
  {
    path: "/pret",
    name: "pret",
    component: ListeP,
  },{
    path: "/pret/edit/:id",
    name: "pret-edit",
    component: EditP,
  },
  {
    path: "/pret/new",
    name: "pret-neuf",
    component: AddP,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
