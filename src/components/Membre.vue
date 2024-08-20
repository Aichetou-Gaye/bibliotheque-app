<template>
  <div>
    <h1 class="text-center">Gestion des Membres :</h1>
    <AjouterMembre class="border-bottom pb-4" @on-add="add" ref="formComponent" />
    <ListeMembre :membres="membres" class="mt-4" @on-remove="remove" @on-edit="edit" />
    <ModifierMembre :membre="selectedMembre" @on-update="update" @on-cancel="cancel" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AjouterMembre from './AjouterMembre.vue';
import ListeMembre from './ListeMembre.vue';
import ModifierMembre from './ModifierMembre.vue';

const membres = ref([
  { prenom: 'Mohamed', nom: 'Ndiaye', dateInscription: '2022-01-01', telephone: '48121450' },
  { prenom: 'Sidi', nom: 'Fall', dateInscription: '2023-02-02', telephone: '41121450' },
  { prenom: 'Oumou', nom: 'Sy', dateInscription: '2015-03-03', telephone: '27121124' },
  { prenom: 'Aichetou', nom: 'Gaye', dateInscription: '2018-04-04', telephone: '22121412' },
  { prenom: 'Issa', nom: 'Fall', dateInscription: '2024-05-05', telephone: '37121124' },
]);

const formComponent = ref();
const selectedMembre = ref(null);

const add = (prenom, nom, dateInscription, telephone) => {
  membres.value.push({ prenom, nom, dateInscription, telephone });
  console.log("Membre ajouté");
};

const remove = (index) => {
  membres.value.splice(index, 1);
};

const edit = (index) => {
  selectedMembre.value = membres.value[index];
};

const update = (updatedMembre) => {
  const index = membres.value.findIndex(m => m.telephone === selectedMembre.value.telephone);
  if (index !== -1) {
    membres.value[index] = updatedMembre;
  }
  cancel();
};

const cancel = () => {
  selectedMembre.value = null;
};
</script>
