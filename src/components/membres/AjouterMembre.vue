<template>
  <div class="container">
    <h4>Ajoutez un membre : </h4>
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-3">
        <label for="prenom">Prénom</label>
        <input type="text" class="form-control" id="prenom" v-model="prenom" required />
      </div>
      <div class="col-sm-3">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom" v-model="nom" required />
      </div>
      <div class="col-sm-2">
        <label for="date">Date d'inscription</label>
        <input type="date" class="form-control" id="date" v-model="dateInscription" required />
      </div>

      <div class="col-sm-2">
        <label for="tel">Téléphone</label>
        <input type="tel" class="form-control" id="tel" v-model="telephone" required />
      </div>

      <div class="col-auto">
        <button type="submit" class="btn mt-4 btn-primary">
          Valider
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";
const emit = defineEmits(["onAdd"]);

const prenom = ref("");
const nom = ref("");
const dateInscription = ref("");
const telephone = ref("");

const onSubmit = () => {
  emit("onAdd", prenom.value, nom.value, dateInscription.value, telephone.value);

  prenom.value = "";
  nom.value = "";
  dateInscription.value = "";
  telephone.value = "";
};

const edit = (membre) => {
  prenom.value = membre.prenom;
  nom.value = membre.nom;
  dateInscription.value = membre.dateInscription;
  telephone.value = membre.telephone;
};

defineExpose({
  edit,
});

</script>

<style scoped></style>