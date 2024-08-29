<template>
  <div class="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center py-5" style="height: 100vh; background-color: #007bff;">
    <h1 class="display-3">Bienvenue à la Bibliothèque</h1>
    <p class="lead mt-3">Gérez vos livres, vos prêts, et vos membres facilement.</p>
    <router-link to="/livre" class="btn btn-light btn-lg mt-4">Commencer</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  background-image: url('/assets/library-background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
}
</style>
