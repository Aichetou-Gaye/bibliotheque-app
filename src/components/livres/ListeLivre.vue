<template>
    <div class="container">
        <h1 class="text-center border-bottom mb-2">Gestion des livres:</h1>
        <div class="btn-right-action mt-4 mb-4 d-flex justify-content-end">
            <router-link to="/livre/new" class="btn btn-primary">Nouveau Livre</router-link>
        </div>
        <div class="list-table">
            <table class="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">ISBN</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Auteur</th>
                        <th scope="col">Année Publication</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="livre in store.livres" :key="livre.id">
                        <td>{{ livre.id }}</td>
                        <td>{{ livre.isbn }}</td>
                        <td>{{ livre.title }}</td>
                        <td>{{ livre.author }}</td>
                        <td>{{ livre.year }}</td>
                        <td>{{ livre.genre }}</td>
                        <td class="col-md-2">
                            <button class="btn btn-xs btn-danger me-2" @click="destroy(livre.id)"><ion-icon
                                    name="trash"></ion-icon></button>
                            <router-link :to="{name: 'livre-edit', params:{id: livre.id}}" class="btn btn-xs btn-primary me-2"><ion-icon
                                    name="eyedrop"></ion-icon></router-link>
                            <button class="btn btn-xs btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"
                               ><ion-icon name="eye"></ion-icon></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-danger" id="exampleModalLabel">Informations du livre</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">    
                        <p>ISBN : {{ livreShow?.isbn }}</p>
                        <p>Titre: {{ livreShow?.title }}</p>
                        <p>Auteur : {{ livreShow?.author }}</p>
                        <p>Année de publication : {{ livreShow?.year }}</p>
                        <p>Genre : {{ livreShow?.genre }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>

</template>

<script setup>
import { useLivrestore } from '@store/';
const store = useLivrestore()

const destroy = (id) => {
    store.remove(id)
}
</script>


<style scoped></style>
