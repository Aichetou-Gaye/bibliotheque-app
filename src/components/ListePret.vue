<template>
  
  <div>
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <!-- <th scope="col">#</th> -->
          <th scope="col">Prénom</th>
          <th scope="col">Nom</th>
          <th scope="col">Email</th>
          <th scope="col">Téléphone</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(membre, index) in membres" :key="index">
          <!-- <td>{{ index + 1 }}</td> -->
          <td>{{ membre.prenom }}</td>
          <td>{{ membre.nom }}</td>
          <td>{{ membre.email }}</td>
          <td>{{ membre.telephone }}</td>
          
          <td>
            <button class="btn btn-xs btn-danger" @click="destroy(index)">
              x
            </button>
            <button class="btn btn-xs btn-secondary" @click="edit(index)">
              -
            </button>
          </td>
        </tr>
      </tbody>
      <!-- <tfoot>
        <tr>
          <td colspan="5" class="text-center">Total</td>
          <td>{{ total }}</td>
        </tr>
      </tfoot> -->
    </table>
  </div>
</template>


<script setup>
import { computed } from "vue";
const emit = defineEmits(["onRemove", "onEdit"]);

const props = defineProps({
  membres: {
    type: Array,
    required: true,
    default: [],
  },
});

// const total = computed(() =>
//   props.products.reduce((acc, item) => acc + item.prix * item.quantite, 0)
// );

const destroy = (index) => {
  emit("onRemove", index);
};
const edit = (index) => {
  emit("onEdit", index);
};
</script>
