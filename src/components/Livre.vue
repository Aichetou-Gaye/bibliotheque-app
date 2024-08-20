<script setup>
import ListeLivre from './ListeLivre.vue';
import AjoutLivre from './AjoutLivre.vue';
import ModifierLivre from './ModifierLivre.vue';
import { ref } from 'vue';

const livres = ref([
  {title: "Le Petit Prince",author: "Antoine de Saint-Exupéry",
  year: 1943,genre: "Littérature jeunesse, conte philosophique"},
  {title: "1984", author: "George Orwell", year: 1949, genre: "Dystopie, science-fiction"},
  {title: "Les Misérables", author: "Victor Hugo", year: 1862, genre: "Roman historique, roman social"},
  {title: "Le Seigneur des Anneaux", author: "J.R.R. Tolkien",year: 1954,genre: "Fantasy épique"}
])

const formLivre = ref()

function add(title, author, year, genre) {
  livres.value.push({title,author,year,genre})
}

function remove(index) {
  livres.value.splice(index, 1)
}

function edit(index) {
  const livre = livres.value[index]
  formLivre.value.edit(livre)
}

</script>

<template>
  <div class="container">
    <h1 class="text-center border-bottom mb-4">Gestion d'une bibliothèque</h1>
    <AjoutLivre class="border-bottom pb-4" @on-add="add"/>

    <ModifierLivre @on-add="add" ref="formLivre" />

    <ListeLivre :livres = "livres"  class="mt-4" @on-remove="remove" @on-edit="edit"/>
  </div>
</template>

<style scoped></style>
