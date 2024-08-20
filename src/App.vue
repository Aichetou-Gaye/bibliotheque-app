<script setup>
import Membre from './components/Membre.vue'
import Pret from './components/Pret.vue'
import Livres from './components/Livre.vue'
</script>

<template>
  <div class="container">
    <!-- Barre de navigation -->
    <nav class="navbar navbar-expand bg-success text-white text-center">
      <a class="navbar-brand" href="#">Bibliothèque</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Membres</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pret">Prêts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/livre">Livres</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Affiche le composant correspondant à la route -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
