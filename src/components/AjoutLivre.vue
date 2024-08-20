<template>
    <div class="container mt-2">
        <h4>Ajoutez un livre : </h4>
        <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
            <div class="col-md-4">
                <label for="isbn" class="form-label">ISBN</label>
                <input type="text" class="form-control form-control-sm" name="isbn" id="isbn" v-model="isbn" required>
            </div>
            <div class="col-md-4">
                <label for="title" class="form-label">Titre</label>
                <input type="text" class="form-control form-control-sm" name="titre" id="title" v-model="title" required>
            </div>
            <div class="col-md-4">
                <label for="author" class="form-label">Auteur</label>
                <input type="text" class="form-control form-control-sm" name="auteur" id="author" v-model="author" required>
            </div>
            <div class="col-md-4">
                <label for="year" class="form-label">Année Publication</label>
                <input type="date" class="form-control form-control-sm" name="annee" id="year" v-model="year" required>
            </div>
            <div class="col-md-4">
                <label for="genre" class="form-label">Genre</label>
                <input type="text" class="form-control form-control-sm" name="genre" id="genre" v-model="genre" required>
            </div>
            <button type="submit" class="btn mt-6 btn-primary col-md-4">Valider</button>
        </form>
    </div>

</template>

<script setup>
import { ref, defineExpose } from 'vue'
const emit = defineEmits(["onAdd"]);

const isbn = ref("")
const title = ref("")
const author = ref("")
const year = ref("")
const genre = ref("")

function onSubmit() {
    emit("onAdd", isbn.value, title.value, author.value, year.value, genre.value);

    isbn.value = ""
    title.value = ""
    author.value = ""
    year.value = ""
    genre.value = ""
}

function edit(livre) {
    isbn.value = livre.isbn
    title.value = livre.title
    author.value = livre.author
    year.value = livre.year
    genre.value = livre.genre
}

defineExpose({
    edit,
})
</script>


<style scoped></style>
