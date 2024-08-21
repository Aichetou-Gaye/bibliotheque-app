<template>
  <div v-if="isVisible" class="container mt-4">
    <h3>Modifier Prêt</h3>
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-2">
        <label for="id_pret" class="form-label">ID Prêt</label>
        <input
          type="number"
          class="form-control"
          id="id_pret"
          v-model.number="idPret"
          disabled
  required      />
      </div>
      <div class="col-sm-2">
        <label for="date_pret" class="form-label">Date du prêt</label>
        <input
          type="date"
          class="form-control"
          id="date_pret"
          v-model="datePret"
  required      />
      </div>
      <div class="col-sm-2">
        <label for="date_retour_prevue" class="form-label">Date de retour prévue</label>
        <input
          type="date"
          class="form-control"
          id="date_retour_prevue"
          v-model="dateRetourPrevue"
   required     />
      </div>
      <div class="col-sm-2">
        <label for="livre_id" class="form-label">ID Livre</label>
        <input
          type="number"
          class="form-control"
          id="livre_id"
          v-model.number="livreId"
   required     />
      </div>
      <div class="col-sm-2">
        <label for="membre_id" class="form-label">ID Membre</label>
        <input
          type="number"
          class="form-control"
          id="membre_id"
          v-model.number="membreId"
  required      />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mt-4">
          Modifier
        </button>
        <button type="button" class="btn btn-secondary mt-4" @click="cancel">
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from 'vue';

const emit = defineEmits(['onUpdate', 'onCancel']);
const props = defineProps({
  pret: {
    type: Object,
    required: false,
    default: () => ({})
  }
});

const isVisible = ref(false);
const idPret = ref(null);
const datePret = ref('');
const dateRetourPrevue = ref('');
const livreId = ref(null);
const membreId = ref(null);

watch(() => props.pret, (newPret) => {
  if (newPret) {
    idPret.value = newPret.id_pret;
    datePret.value = newPret.date_pret;
    dateRetourPrevue.value = newPret.date_retour_prevue;
    livreId.value = newPret.livre_id;
    membreId.value = newPret.membre_id;
    isVisible.value = true;
  }
}, { immediate: true });

const onSubmit = () => {
  emit('onUpdate', {
    id_pret: idPret.value,
    date_pret: datePret.value,
    date_retour_prevue: dateRetourPrevue.value,
    livre_id: livreId.value,
    membre_id: membreId.value
  });
  clearForm();
};

const cancel = () => {
  clearForm();
  emit('onCancel');
};

const clearForm = () => {
  idPret.value = null;
  datePret.value = '';
  dateRetourPrevue.value = '';
  livreId.value = null;
  membreId.value = null;
  isVisible.value = false;
};
</script>
