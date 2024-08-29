import { defineStore } from "pinia";
import { reactive } from "vue";

export const useLivrestore = defineStore("livrestore", {
  state: () => ({
    livres: [
      {
        id: 1,
        isbn: "456TG56",
        title: "Le Petit Prince",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        genre: "Littérature jeunesse, conte philosophique",
      },
      {
        id: 2,
        isbn: "3338UH4",
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopie, science-fiction",
      },
      {
        id: 3,
        isbn: "38IRHE34",
        title: "Les Misérables",
        author: "Victor Hugo",
        year: 1862,
        genre: "Roman historique, roman social",
      },
      {
        id: 4,
        isbn: "7UI9YGY",
        title: "Le Seigneur des Anneaux",
        author: "J.R.R. Tolkien",
        year: 1954,
        genre: "Fantasy épique",
      },
    ],
    id: 5,
    formulaire: reactive({
      isbn: null,
      title: null,
      author: null,
      year: null,
      genre: null,
    }),
    current: null,
  }),
  actions: {
    getById(id) {
      if (!id) return null;
      return this.livres.find((l) => l.id == id);
    },
    addLivre() {
      this.livres.push({
        id: this.id++,
        ...this.formulaire,
      });
      Object.assign(this.formulaire, {
        isbn: null,
        title: null,
        author: null,
        year: null,
        genre: null,
      });
    },
    editLivre(id, newLivre) {
      const findMe = this.livres.findIndex((l) => l.id === id);
      if (findMe !== -1) {
        this.livres[findMe] = {
          ...id,
          newLivre,
        };
      }
    },
    showLivre(id) {
      const findMe = this.livres.findIndex((l) => l.id === id);
      if (findMe !== -1) {
        this.current = this.livres[findMe];
      }
    },
    removeLivre(id) {
      const findMe = this.livres.findIndex((l) => l.id === id);
      if (findMe !== -1) {
        this.livres = this.livres.filter((l) => l.id !== id);
      }
    },
  },
});
