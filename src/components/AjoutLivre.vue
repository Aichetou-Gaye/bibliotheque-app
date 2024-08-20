<script setup>
import { ref } from 'vue'
const emit = defineEmits(["onAdd"]);

const title = ref("")
const author = ref("")
const year = ref("")
const genre = ref("")

function onSubmit() {
    emit("onAdd", title.value, author.value, year.value, genre.value);

    title.value = ""
    author.value = ""
    year.value = ""
    genre.value = ""
}


</script>

<template>
    <div class="container mt-5">
        <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
            <h1 class="mb-4">Ajoutez un livre : </h1>
            <div class="col-md-6 mb-3">
                <label for="title" class="form-label">Titre</label>
                <input type="text" class="form-control form-control-sm" name="titre" id="title" v-model="title">
            </div>
            <div class="col-md-6 mb-3">
                <label for="author" class="form-label">Auteur</label>
                <input type="text" class="form-control form-control-sm" name="auteur" id="author" v-model="author">
            </div>
            <div class="col-md-6 mb-3">
                <label for="year" class="form-label">Année Publication</label>
                <input type="date" class="form-control form-control-sm" name="annee" id="year" v-model="year">
            </div>
            <div class="col-md-6 mb-3">
                <label for="genre" class="form-label">Genre</label>
                <input type="text" class="form-control form-control-sm" name="genre" id="genre" v-model="genre">
            </div>
            <button type="submit" class="btn btn-sm btn-primary col-md-6">Valider</button>
        </form>
    </div>

</template>

<style scoped></style>
