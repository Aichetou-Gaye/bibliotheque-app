<template>
    <div v-if="isVisible">
        <h3 class="mb-2">Modifiez les données du livre : </h3>
        <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
            <div class="col-md-4 mb-2">
                <label for="isbn" class="form-label">ISBN</label>
                <input type="text" class="form-control form-control-sm" name="isbn" id="isbn" v-model="isbn">
            </div>
            <div class="col-md-4 mb-2">
                <label for="title" class="form-label">Titre</label>
                <input type="text" class="form-control form-control-sm" name="titre" id="title" v-model="title"
                >
            </div>
            <div class="col-md-4 mb-2">
                <label for="author" class="form-label">Auteur</label>
                <input type="text" class="form-control form-control-sm" name="auteur" id="author" v-model="author"
                >
            </div>
            <div class="col-md-4 mb-3">
                <label for="year" class="form-label">Année Publication</label>
                <input type="date" class="form-control form-control-sm" name="annee" id="year" v-model="year">
            </div>
            <div class="col-md-4 mb-3">
                <label for="genre" class="form-label">Genre</label>
                <input type="text" class="form-control form-control-sm" name="genre" id="genre" v-model="genre">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-sm mt-4 btn-primary">
                    Enregistrer
                </button>
                <button type="button" class="btn btn-sm mt-4 btn-secondary" @click="cancel">
                    Annuler
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from 'vue'

const emit = defineEmits(['onUpdate', 'onCancel']);
const props = defineProps({
    livre: {
        type: Object,
        required: false,
        default: () => ({})
    }
});

const isVisible = ref(false);
const isbn = ref('')
const title = ref('')
const author = ref('')
const year = ref('')
const genre = ref('')

watch(() => props.livre, (newLivre) => {
    if (newLivre) {
        isbn.value = newLivre.isbn;
        title.value = newLivre.title;
        author.value = newLivre.author;
        year.value = newLivre.year;
        genre.value = newLivre.genre
        isVisible.value = true;
    }
}, { immediate: true });

const onSubmit = () => {
    emit('onUpdate', {
        isbn: isbn.value,
        title: title.value,
        author: author.value,
        year: year.value,
        genre: genre.value
    });
    clearForm();
};

const cancel = () => {
    clearForm();
    emit('onCancel');
};

const clearForm = () => {
    isbn.value = '';
    title.value = '';
    author.value = '';
    year.value = '';
    genre.value = '';
    isVisible.value = false;
}

</script>

<style scoped></style>
