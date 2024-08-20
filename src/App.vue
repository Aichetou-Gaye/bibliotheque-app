<script setup>
import { createMemoryHistory, createRouter } from 'vue-router';

import Livres from './components/Livre.vue'

const routes = [
  { path: '/Livres', component: Livres },
]

const router = createRouter({
  history: createMemoryHistory(), routes
})
</script>

<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Bibliothèque</a>
      <div id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/Livres" >Livres</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
  
</template>

<style scoped></style>
