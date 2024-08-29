<template>
  <div class="container  mt-5">
    <h1 class="text-center border-bottom mb-2">Gestion des livres:</h1>

    <AjoutLivre class="border-bottom pb-4"/>
    <ListeLivre class="mt-4" />
    
    <ModifierLivre />
  </div>
</template>

<script setup>
import ListeLivre from './ListeLivre.vue';
import AjoutLivre from './AjoutLivre.vue';
import ModifierLivre from './ModifierLivre.vue';
// import { ref } from 'vue';

// const livres = ref([
//   {isbn: "456TG56", title: "Le Petit Prince", author: "Antoine de Saint-Exupéry",
//     year: 1943, genre: "Littérature jeunesse, conte philosophique"
//   },
//   {isbn: "3338UH4", title: "1984", author: "George Orwell", year: 1949, genre: "Dystopie, science-fiction" },
//   {isbn: "38IRHE34", title: "Les Misérables", author: "Victor Hugo", year: 1862, genre: "Roman historique, roman social" },
//   {isbn: "7UI9YGY", title: "Le Seigneur des Anneaux", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy épique" }
// ])

// const formLivre = ref()
// const selectedLivre = ref(null);

// function add(isbn, title, author, year, genre) {
//   livres.value.push({ isbn, title, author, year, genre })
// }

// function remove(index) {
//   livres.value.splice(index, 1)
// }

// function edit(index) {
//   selectedLivre.value = livres.value[index]
// }

// function update(updateLivre) {
//   const index = livres.value.findIndex(l => l.isbn === selectedLivre.value.isbn);
//   if (index !== -1) {
//     livres.value[index] = updateLivre;
//   }
//   cancel();
// }

// function cancel() {
//   selectedLivre.value= null
// }
</script>

<style scoped></style>
