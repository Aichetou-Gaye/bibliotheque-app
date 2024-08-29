import { defineStore } from "pinia";
import { reactive } from "vue";

export const useMembrestore = defineStore("membrestore", {
  state: () => ({
    membres: [
      {
        id: 1,
        prenom: "Mohamed",
        nom: "Ndiaye",
        dateInscription: "2022-01-01",
        telephone: "48121450",
      },
      {
        id: 2,
        prenom: "Sidi",
        nom: "Fall",
        dateInscription: "2023-02-02",
        telephone: "41121450",
      },
      {
        id: 3,
        prenom: "Oumou",
        nom: "Sy",
        dateInscription: "2015-03-03",
        telephone: "27121124",
      },
      {
        id: 4,
        prenom: "Aichetou",
        nom: "Gaye",
        dateInscription: "2018-04-04",
        telephone: "22121412",
      },
      {
        id: 5,
        prenom: "Issa",
        nom: "Fall",
        dateInscription: "2024-05-05",
        telephone: "37121124",
      },
    ],
    id: 5,
    formulaire: reactive({
      prenom: null,
      nom: null,
      dateInscription: null,
      telephone: null,
    }),
    current: null,
  }),
  actions: {
    getById(id) {
      if (!id) return null;
      return this.membres.find((l) => l.id == id);
    },
    addMembre() {
      this.membres.push({
        id: this.id++,
        ...this.formulaire,
      });

      Object.assign(this.formulaire, {
        prenom: null,
        nom: null,
        dateInscription: null,
        telephone: null,
      });
    },
    editMembre(id, newMembre) {
      const findIndex = this.membres.findIndex((l) => l.id === id);
      if (findIndex !== -1) {
        this.membres[findIndex] = {
          ...id,
          newMembre,
        };
      }
    },
    showMembre(id) {
      const findIndex = this.membres.findIndex((l) => l.id === id);
      if (findIndex !== -1) {
        this.current = this.membres[findIndex];
      }
    },
    removeMembre(id) {
      const findIndex = this.membres.findIndex((l) => l.id === id);
      if (findIndex !== -1) {
        this.membres = this.membres.filter((l) => l.id !== id);
      }
    },
  },
});
