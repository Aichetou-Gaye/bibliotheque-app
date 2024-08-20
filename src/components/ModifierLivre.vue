<script setup>
import { ref } from 'vue'
const emit = defineEmits(["onEdit"]);
const title2 = ref("")
const author2 = ref("")
const year2 = ref("")
const genre2 = ref("")

function edit(livre) {
    title2.value = livre.title
    author2.value = livre.author
    year2.value = livre.year
    genre2.value = livre.genre
}

defineExpose({
    edit,
})

</script>

<template>
    <div class="container mt-5">
        <form class="row gx-3 gy-2 align-items-center" @submit.prevent="edit">
            <h1 class="mb-4">Modifiez les données d'un livre: </h1>
            <div class="col-md-6 mb-3">
                <label for="title" class="form-label">Titre</label>
                <input type="text" class="form-control form-control-sm" name="titre" id="title" v-model="title2">
            </div>
            <div class="col-md-6 mb-3">
                <label for="author" class="form-label">Auteur</label>
                <input type="text" class="form-control form-control-sm" name="auteur" id="author" v-model="author2">
            </div>
            <div class="col-md-6 mb-3">
                <label for="year" class="form-label">Année Publication</label>
                <input type="date" class="form-control form-control-sm" name="annee" id="year" v-model="year2">
            </div>
            <div class="col-md-6 mb-3">
                <label for="genre" class="form-label">Genre</label>
                <input type="text" class="form-control form-control-sm" name="genre" id="genre" v-model="genre2">
            </div>
            <button type="submit" class="btn btn-sm btn-primary col-md-6">Enregister</button>
        </form>
    </div>


</template>

<style scoped></style>
