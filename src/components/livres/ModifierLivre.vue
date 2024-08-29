<template>
    <div>
        <h3 class="mb-2">Modifiez les données du livre : </h3>
        <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
            <div class="col-md-4 mb-2">
                <label for="isbn" class="form-label">ISBN</label>
                <input type="text" class="form-control form-control-sm" name="isbn" id="isbn" v-model="form.isbn">
            </div>
            <div class="col-md-4 mb-2">
                <label for="title" class="form-label">Titre</label>
                <input type="text" class="form-control form-control-sm" name="titre" id="title" v-model="form.title"
                >
            </div>
            <div class="col-md-4 mb-2">
                <label for="author" class="form-label">Auteur</label>
                <input type="text" class="form-control form-control-sm" name="auteur" id="author" v-model="form.author"
                >
            </div>
            <div class="col-md-4 mb-3">
                <label for="year" class="form-label">Année Publication</label>
                <input type="date" class="form-control form-control-sm" name="annee" id="year" v-model="form.year">
            </div>
            <div class="col-md-4 mb-3">
                <label for="genre" class="form-label">Genre</label>
                <input type="text" class="form-control form-control-sm" name="genre" id="genre" v-model="form.genre">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-sm mt-4 btn-primary">
                    Enregistrer
                </button>
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
