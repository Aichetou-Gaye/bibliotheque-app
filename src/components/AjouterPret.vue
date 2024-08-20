<template>
  <div class="container mt-4">
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-2">
        <label for="id_pret" class="form-label">ID Prêt</label>
        <input
          type="number"
          class="form-control"
          id="id_pret"
          v-model.number="idPret"
        required/>
      </div>
      <div class="col-sm-2">
        <label for="date_pret" class="form-label">Date du prêt</label>
        <input
          type="date"
          class="form-control"
          id="date_pret"
          v-model="datePret"
      required  />
      </div>
      <div class="col-sm-2">
        <label for="date_retour_prevue" class="form-label">Date de retour prévue</label>
        <input
          type="date"
          class="form-control"
          id="date_retour_prevue"
          v-model="dateRetourPrevue"
     required   />
      </div>
      <div class="col-sm-2">
        <label for="livre_id" class="form-label">ID Livre</label>
        <input
          type="number"
          class="form-control"
          id="livre_id"
          v-model.number="livreId"
     required   />
      </div>
      <div class="col-sm-2">
        <label for="membre_id" class="form-label">ID Membre</label>
        <input
          type="number"
          class="form-control"
          id="membre_id"
          v-model.number="membreId"
     required   />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mt-4">
          Ajouter
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const emit = defineEmits(["onAdd"]);

const idPret = ref("");
const datePret = ref("");
const dateRetourPrevue = ref("");
const livreId = ref("");
const membreId = ref("");

const onSubmit = () => {
  emit("onAdd", idPret.value, datePret.value, dateRetourPrevue.value, livreId.value, membreId.value);
  
  idPret.value = "";
  datePret.value = "";
  dateRetourPrevue.value = "";
  livreId.value = "";
  membreId.value = "";
};

const edit = (pret) => {
  idPret.value = pret.id_pret;
  datePret.value = pret.date_pret;
  dateRetourPrevue.value = pret.date_retour_prevue;
  livreId.value = pret.livre_id;
  membreId.value = pret.membre_id;
};

defineExpose({
  edit,
});
</script>

<style scoped>
/* Ajoutez des styles ici si nécessaire */
</style>
