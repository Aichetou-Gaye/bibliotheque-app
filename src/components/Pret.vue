<template>
  <div class="container mt-4">
    <h1 class="text-center">Gestion des Prêts</h1>
    <AjouterPret class="border-bottom pb-4" @onAdd="add" ref="formComponent"/>
    <ListePret :prets="prets" class="mt-4" @onRemove="remove" @onEdit="edit" />
    <ModifierPret :pret = "selectedPret" @onUpdate="update" @onCancel="cancel" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AjouterPret from './AjouterPret.vue';
import ListePret from './ListePret.vue';
import ModifierPret from './ModifierPret.vue';

const prets = ref([
  { id_pret: 1, date_pret: '2024-08-01', date_retour_prevue: '2024-09-01', livre_id: 101, membre_id: 1 },
  { id_pret: 2, date_pret: '2024-08-05', date_retour_prevue: '2024-09-05', livre_id: 102, membre_id: 2 }
]);

const formComponent = ref();
const selectedPret = ref(null);

const add = (id_pret, date_pret, date_retour_prevue, livre_id, membre_id) => {
  prets.value.push({ id_pret, date_pret, date_retour_prevue, livre_id, membre_id });
};

const remove = (index) => {
  prets.value.splice(index, 1);
};

const edit = (index) => {
  selectedPret.value = prets.value[index]
};

const update = (updatedPret) => {
  const index = prets.value.findIndex(p => p.id_pret === selectedPret.value.id_pret);
  if (index !== -1) {
    prets.value[index] = updatedPret;
  }
};

const cancel = () => {
  selectedPret.value = null
};
</script>
