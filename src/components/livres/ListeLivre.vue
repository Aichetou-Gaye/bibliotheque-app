<template>
    <div class="container">
        <table class="table table-bordered table-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Auteur</th>
                    <th scope="col">Année Publication</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(livre, index) in livres" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ livre.isbn }}</td>
                    <td>{{ livre.title }}</td>
                    <td>{{ livre.author }}</td>
                    <td>{{ livre.year }}</td>
                    <td>{{ livre.genre }}</td>
                    <td class="col-md-2">
                        <button class="btn btn-xs btn-danger" @click="destroy(index)"><ion-icon
                                name="trash"></ion-icon></button>
                        <button class="btn btn-xs btn-primary" @click="edit(index)"><ion-icon
                                name="eyedrop"></ion-icon></button>
                        <button class="btn btn-xs btn-success" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"><ion-icon name="eye"></ion-icon></button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-danger" id="exampleModalLabel">Informations du livre</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" v-for="(livre, index) in livres" :key="index">
                        <p>N° identifiant : {{ index + 1 }}</p>
                        <p>ISBN : {{ livre.isbn }}</p>
                        <p>Titre: {{ livre.title }}</p>
                        <p>Auteur : {{ livre.author }}</p>
                        <p>Année de publication : {{ livre.year }}</p>
                        <p>Genre : {{ livre.genre }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
const emit = defineEmits(["onRemove", "onEdit"]);

const props = defineProps({
    livres: {
        type: Array,
        required: true,
        default: [],
    },
})
function destroy(index) {
    emit("onRemove", index);
};

function edit(index) {
    emit("onEdit", index);
};
</script>


<style scoped></style>
