<script setup>
import Membre from './components/Membre.vue'
import Pret from './components/Pret.vue'
import Livres from './components/Livre.vue'
</script>
<template>
  <div class="container-fluid p-0">
    <!-- Barre de navigation -->
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary text-white">
      <a class="navbar-brand text-white ms-3" href="#">Bibliothèque</a>
      <div class="collapse navbar-collapse d-flex justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Membres</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/pret">Prêts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/livre">Livres</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Affiche le composant correspondant à la route -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: #007bff; /* Bleu */
}

.navbar .nav-link {
  color: white !important;
}

.navbar .navbar-brand {
  color: white !important;
  padding-left: 15px; /* Ajouter un padding à gauche */
  /* margin-left: 15px; Si vous préférez utiliser margin au lieu de padding */
}
</style>


