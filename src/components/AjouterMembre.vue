<template>
<div class="container">
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
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
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
          Ajouter
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineExpose  } from "vue";
const emit = defineEmits(["onAdd"]);

const prenom = ref("");
const nom = ref("");
const email = ref("");
const telephone = ref("");
const onSubmit = () => {
  emit("onAdd", prenom.value, nom.value, email.value, telephone.value);

  prenom.value = "";
  nom.value = "";
  email.value = "";
  telephone.value = "";
};
const edit = (membre) => {
  prenom.value = membre.prenom;
  nom.value = membre.nom;
  email.value = membre.email;
  telephone.value = membre.telephone;
};

defineExpose({
  edit,
});

</script>

<style scoped>

</style>