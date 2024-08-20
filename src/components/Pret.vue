<template>
  <div class="container mt-4">
    <h1 class="text-center">Gestion des Prêts</h1>
    <AjouterPret class="border-bottom pb-4" @onAdd="add" ref="formComponent"/>
    <ListePret :prets="prets" class="mt-4" @onRemove="remove" @onEdit="edit" />
    <ModifierPret ref="modifierComponent" @onUpdate="update" @onCancel="cancel" />
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

const formComponent = ref(null);
const modifierComponent = ref(null);

const add = (idPret, datePret, dateRetourPrevue, livreId, membreId) => {
  prets.value.push({
    id_pret: idPret,
    date_pret: datePret,
    date_retour_prevue: dateRetourPrevue,
    livre_id: livreId,
    membre_id: membreId
  });
};

const remove = (index) => {
  prets.value.splice(index, 1);
};

const edit = (index) => {
  const pret = prets.value[index];
  modifierComponent.value.edit(pret);
};

const update = (updatedPret) => {
  const index = prets.value.findIndex(p => p.id_pret === updatedPret.id_pret);
  if (index !== -1) {
    prets.value[index] = updatedPret;
  }
};

const cancel = () => {
  // Logic for handling cancellation if needed
};
</script>
