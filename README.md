# Bibliothèque App

## Description
L'application **Bibliothèque** est un outil de gestion de livres, de membres, et de prêts dans une bibliothèque. Elle permet d'ajouter, de modifier, de supprimer et de consulter les livres disponibles, ainsi que de gérer les prêts de ces livres aux membres.

## Fonctionnalités
- **Gestion des Livres** : Ajouter, modifier, supprimer et consulter les détails des livres.
- **Gestion des Membres** : Ajouter, modifier, supprimer et consulter les informations des membres.
- **Gestion des Prêts** : Gérer les prêts et les retours de livres aux membres.

## Installation

### Prérequis
- Node.js (version 14.x ou supérieure)
- Vue.js 3
- Bootstrap 5.x (inclus dans le projet)

### Étapes d'installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/Aichetou-Gaye/bibliotheque-app.git
    ```

2. Accédez au répertoire du projet :

    ```bash
    cd bibliotheque-app
    ```

3. Installez les dépendances :

    Avec NPM :

    ```bash
    npm install
    ```

4. Lancez l'application en mode développement :

    Avec NPM :

    ```bash
    npm run dev
    ```
5. Ouvrez votre navigateur et accédez à `http://localhost:5173/` pour voir l'application, ou saisir l'adresse `192.168.56.1:5173`.

## Utilisation

### Navigation dans l'application
- Utilisez la barre de navigation pour accéder aux différentes sections de l'application (Livres, Membres, Prêts).
- Cliquez sur les boutons pour ajouter, modifier ou supprimer des éléments.
- Pour voir les détails d'un livre, cliquez sur l'icône verte dans la liste des livres.

### Configuration Vue Router
L'application utilise Vue Router pour gérer la navigation entre les différentes sections. Les routes sont définies dans le fichier `router/index.js` et incluent :
- `/`: Vue d'accueil affichant les membres.
- `/pret`: Vue affichant la gestion des prêts.
- `/livre`: vue affichant la gestion des livres.

## Composants

`Membre.vue`

 Ce composant gère la section des membres de la bibliothèque. Il permet d'ajouter, modifier, supprimer et lister les membres.
- Props : Aucun.
- Événements émis :
`onAdd` : Émis lors de l'ajout d'un membre.

`onUpdate` : Émis lors de la mise à jour d'un membre.

`onRemove` : Émis lors de la suppression d'un membre.
- Méthodes :
`addMembre` : Pour ajouter un nouveau membre.

`editMembre` : Pour modifier un membre existant.

`deleteMembre` : Pour supprimer un membre.

## Mis à jour

- Mis à jour de l'accueil, en ajoutant un bouton d'appel en action, un backgroud et un lien de retour à la page principale;
- Intégration approfondie de vue-router, facilitant ainsi la navigation entre les pages et aussi le développement du code
- Integration de pinia dans le code pour la gestion des etats;
- Un bouton au dessus des liste pour permettre d'ajouter un nouveau element à la liste

##  Authors

[Mohamed Bankolé](https://github.com/medbankole97/)

[Aichetou Gaye](https://github.com/Aichetou-Gaye/)

