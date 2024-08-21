<template>
  <div class="container mt-4">
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>ID Prêt</th>
          <th>Date du prêt</th>
          <th>Date de retour prévue</th>
          <th>ID Livre</th>
          <th>ID Membre</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pret, index) in prets" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ pret.id_pret }}</td>
          <td>{{ pret.date_pret }}</td>
          <td>{{ pret.date_retour_prevue }}</td>
          <td>{{ pret.livre_id }}</td>
          <td>{{ pret.membre_id }}</td>
          <td>
            <button class="btn btn-xs btn-danger" @click="destroy(index)"><ion-icon name="trash"></ion-icon></button>
            <button class="btn btn-xs btn-primary" @click="edit(index)"><ion-icon name="eyedrop"></ion-icon></button>
            <button class="btn btn-xs btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"><ion-icon
                name="eye"></ion-icon></button>
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
          <div class="modal-body" v-for="(pret, index) in prets" :key="index">
            <p>N° identifiant : {{ index + 1 }}</p>
            <p>Date du prêt : {{ pret.date_pret }}</p>
            <p>Date du retour : {{ pret.date_retour_prevue }}</p>
            <p>Livre emprunté :{{ pret.livre_id }}</p>
            <p>Id membre : {{ pret.membre_id }}</p>
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
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(["onRemove", "onEdit"]);

const props = defineProps({
  prets: {
    type: Array,
    required: true,
    default: [],
  },
});

const destroy = (index) => {
  emit("onRemove", index);
};

const edit = (index) => {
  emit("onEdit", index);
};
</script>
