<template>
  <div>
    <h1 class="text-center">Gestion des Membres</h1>
    <AjouterMembre class="border-bottom pb-4" @on-add="add" ref="formComponent"/>
    <ListeMembre :membres="membres" class="mt-4" @on-remove="remove"  @on-edit="edit" />
    <ModifierMembre  />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AjouterMembre from './AjouterMembre.vue';
import ListeMembre from './ListeMembre.vue';
import ModifierMembre from './ModifierMembre.vue';

const membres = ref([
        { prenom: 'Jean', nom: 'Dupont', email: 'jean.dupont@example.com', telephone: '0601020304' },
        { prenom: 'Marie', nom: 'Durand', email: 'marie.durand@example.com', telephone: '0602030405' },
        { prenom: 'Pierre', nom: 'Moreau', email: 'pierre.moreau@example.com', telephone: '0603040506' },
        { prenom: 'Lucie', nom: 'Lefevre', email: 'lucie.lefevre@example.com', telephone: '0604050607' },
        { prenom: 'Sophie', nom: 'Martin', email: 'sophie.martin@example.com', telephone: '0605060708' },
      ]);

const formComponent = ref();

const add = (prenom, nom, email, telephone) => {
  membres.value.push({
    prenom,
    nom,
    email,
    telephone
  });
  console.log("reception evenement");
  
} 

const remove = (index) => {
  membres.value.splice(index, 1);
}

const edit = (index) => {
  const membre = membres.value[index];
  formComponent.value.edit(membre);
}
</script>
