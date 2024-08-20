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
            <button class="btn btn-xs btn-success "><ion-icon name="eye"></ion-icon></button>
          </td>
        </tr>
      </tbody>
    </table>
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
