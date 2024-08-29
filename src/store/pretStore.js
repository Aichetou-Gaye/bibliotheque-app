import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePretStore = defineStore("pretStore", {
  state: () => ({
    prets: [
      {
        id_pret: 1,
        date_pret: "2024-08-01",
        date_retour_prevue: "2024-09-01",
        livre_id: 101,
        membre_id: 1,
      },
      {
        id_pret: 2,
        date_pret: "2024-08-05",
        date_retour_prevue: "2024-09-05",
        livre_id: 102,
        membre_id: 2,
      },
    ],
    id_pret: 2,
    formulaire: reactive({
      date_pret: null,
      date_retour_prevue: null,
      livre_id: null,
      membre_id: null,
    }),
    current: null,
  }),
  actions: {
    getById(id) {
      if (!id) return null;
      return this.prets.find((p) => p.id_pret == id);
    },
    addPret() {
      this.prets.push({
        id_pret: this.id_pret++,
        ...this.formulaire,
      });
      Object.assign(this.formulaire, {
        date_pret: null,
        date_retour_prevue: null,
        livre_id: null,
        membre_id: null,
      });
    },
    editPret(id, newPret) {
      const findIndex = this.prets.findIndex((p) => p.id_pret === id);
      if (findIndex !== -1) {
        this.prets[findIndex] = {
          ...id,
          newPret,
        };
      }
    },
    show(id) {
      const findIndex = this.prets.findIndex((p) => p.id_pret === id);
      if (findIndex !== -1) {
        this.current = this.prets[findIndex];
      }
    },
    remove(id) {
      const findIndex = this.prets.findIndex((p) => p.id_pret === id);
      if (findIndex !== -1) {
        this.prets = this.prets.filter((p) => p.id_pret !== id);
      }
    },
  },
});
