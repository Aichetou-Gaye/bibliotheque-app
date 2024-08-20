<template>
  <div v-if="isVisible">
    <h3>Modifier Membre</h3>
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-3">
        <label for="prenom">Prénom</label>
        <input
          type="text"
          class="form-control"
          id="prenom"
          v-model="prenom"
        />
      </div>
      <div class="col-sm-3">
        <label for="nom">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          v-model="nom"
        />
      </div>
      <div class="col-sm-2">
        <label for="date">Date d'inscription</label>
        <input
          type="date"
          class="form-control"
          id="date"
          v-model="dateInscription"
        />
      </div>
      <div class="col-sm-2">
        <label for="tel">Téléphone</label>
        <input
          type="tel"
          class="form-control"
          id="tel"
          v-model="telephone"
        />
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
import { ref, watch, defineEmits, defineProps } from 'vue';

const emit = defineEmits(['onUpdate', 'onCancel']);
const props = defineProps({
  membre: {
    type: Object,
    required: false,
    default: () => ({})
  }
});

const isVisible = ref(false);
const prenom = ref('');
const nom = ref('');
const dateInscription = ref('');
const telephone = ref('');

watch(() => props.membre, (newMembre) => {
  if (newMembre) {
    prenom.value = newMembre.prenom;
    nom.value = newMembre.nom;
    dateInscription.value = newMembre.dateInscription;
    telephone.value = newMembre.telephone;
    isVisible.value = true;
  }
}, { immediate: true });

const onSubmit = () => {
  emit('onUpdate', {
    prenom: prenom.value,
    nom: nom.value,
    dateInscription: dateInscription.value,
    telephone: telephone.value
  });
  clearForm();
};

const cancel = () => {
  clearForm();
  emit('onCancel');
};

const clearForm = () => {
  prenom.value = '';
  nom.value = '';
  dateInscription.value = '';
  telephone.value = '';
  isVisible.value = false;
};
</script>

<style scoped>
/* Ajoutez des styles ici si nécessaire */
</style>
