<template>
    <div class="container mt-2">
        <h4>Ajoutez un livre : </h4>
        <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
            <div class="col-md-2">
                <label for="isbn" class="form-label">ISBN</label>
                <input type="text" class="form-control form-control-sm" name="isbn" id="isbn" v-model="form.isbn" required>
            </div>
            <div class="col-md-2">
                <label for="title" class="form-label">Titre</label>
                <input type="text" class="form-control form-control-sm" name="titre" id="title" v-model="form.title" required>
            </div>
            <div class="col-md-3">
                <label for="author" class="form-label">Auteur</label>
                <input type="text" class="form-control form-control-sm" name="auteur" id="author" v-model="form.author" required>
            </div>
            <div class="col-md-3">
                <label for="year" class="form-label">Année Publication</label>
                <input type="date" class="form-control form-control-sm" name="annee" id="year" v-model="form.year" required>
            </div>
            <div class="col-md-2">
                <label for="genre" class="form-label">Genre</label>
                <input type="text" class="form-control form-control-sm" name="genre" id="genre" v-model="form.genre" required>
            </div>
            <div class="col-md-3">
                <button type="submit" class="btn btn-sm btn-primary">Valider</button>
            </div>
            
        </form>
    </div>

</template>

<script setup>

import { ref, defineExpose } from 'vue'
import { useLivrestore } from '@store';

const store = useLivrestore()
const form = store.formulaire


function onSubmit() {
    if(form.isbn && form.title && form.author && form.year && form.genre) {
        store.addLivre()
    }
}

</script>


<style scoped>  
</style>
