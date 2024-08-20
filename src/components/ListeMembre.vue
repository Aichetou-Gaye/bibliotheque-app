<template>
  
  <div class="container">
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Prénom</th>
          <th scope="col">Nom</th>
          <th scope="col">Date d'inscription</th>
          <th scope="col">Téléphone</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(membre, index) in membres" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ membre.prenom }}</td>
          <td>{{ membre.nom }}</td>
          <td>{{ membre.dateInscription }}</td>
          <td>{{ membre.telephone }}</td>
          
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
const emit = defineEmits(["onRemove", "onEdit"]);

const props = defineProps({
  membres: {
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
