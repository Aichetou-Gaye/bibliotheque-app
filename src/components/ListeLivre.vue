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
function edit(index){
  emit("onEdit", index);
};

</script>

<template>
    <div class="container">
        <table class="table table-bordered table-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
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
                    <td>{{ livre.title }}</td>
                    <td>{{ livre.author }}</td>
                    <td>{{ livre.year }}</td>
                    <td>{{ livre.genre }}</td>
                    <td class="col-md-2">
                        <button class="btn btn-xs btn-danger" @click="destroy(index)"><ion-icon name="trash"></ion-icon></button>
                        <button class="btn btn-xs btn-primary" @click="edit(index)"><ion-icon name="eyedrop"></ion-icon></button>
                        <button class="btn btn-xs btn-success "><ion-icon name="eye"></ion-icon></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<style scoped></style>
