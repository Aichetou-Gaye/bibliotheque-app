<script setup>
import Membre from './components/membres/Membre.vue'
import Pret from './components/prets/Pret.vue'
import Livres from './components/livres/Livre.vue'
</script>
<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary text-white mb-4">
      <a class="navbar-brand text-white ms-3" href="#"><img src="./assets/logo.png" alt="Logo"></a>
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


    <router-view />
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: #007bff;
  padding: 0px 30px;
}

.navbar .nav-link {
  color: white;
  padding: 15px 30px;
}

.navbar .navbar-brand {
  color: white;
}
img{
  width: 150px;
}
</style>


