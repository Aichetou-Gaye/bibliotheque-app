<template>
    <div>
        <h3 class="text-center mt-2 mb-2">Modifiez les données du livre : </h3>
        <form class="w-50 m-auto" @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="isbn" class="form-label">ISBN</label>
                <input type="text" class="form-control form-control-sm" name="isbn" id="isbn" v-model="form.isbn" required>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Titre</label>
                <input type="text" class="form-control form-control-sm" name="titre" id="title" v-model="form.title" required>
            </div>
            <div class="mb-3">
                <label for="author" class="form-label">Auteur</label>
                <input type="text" class="form-control form-control-sm" name="auteur" id="author" v-model="form.author" required>
            </div>
            <div class="mb-3">
                <label for="year" class="form-label">Année Publication</label>
                <input type="date" class="form-control form-control-sm" name="annee" id="year" v-model="form.year" required>
            </div>
            <div class="mb-3">
                <label for="genre" class="form-label">Genre</label>
                <input type="text" class="form-control form-control-sm" name="genre" id="genre" v-model="form.genre" required>
            </div>
            <div class="mt-3 d-flex justify-content-end">
                <router-link to="/livre" class="btn btn-outline-secondary me-3">Retourner</router-link>
                <button class="btn btn-primary">Enregistrer</button>
            </div>
            
        </form>
    </div>
</template>

<script setup>

import { useLivrestore } from '@store';
import { useRoute } from 'vue-router';

const store = useLivrestore()
const route = useRoute()
const form = store.formulaire
const myId = store.getById(route.params.id)

const onSubmit = () => {
    if(form.isbn && form.title && form.author && form.year && form.genre) {
        store.editLivre(myId, form)
    }

}
</script>

<style scoped></style>
