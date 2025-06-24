# WorkZen

**WorkZen** est une application web développée en React pour trouver et gérer des espaces de travail (coworking, bibliothèques, cafés).

---

## 🎯 Objectif

- Transformer les maquettes Figma en une application fonctionnelle
- Appliquer les bases de React : composants, JSX, routing, state
- Gérer le responsive design et l’accessibilité

---

## 🚀 Installation

1. Cloner le dépôt :

   ```bash
   git clone <URL_DU_REPOSITORY>
   cd mon-projet-react
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Lancer le serveur de développement :

   ```bash
   npm run dev
   ```

4. Ouvrir `http://localhost:5173` dans votre navigateur

---

## 📁 Structure du projet

```text
mon-projet-react/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/           # Images et fonds
│  ├─ components/       # Composants réutilisables
│  │  ├─ Header.jsx
│  │  ├─ Footer.jsx
│  │  ├─ LoginModal.jsx
│  │  └─ styles...
│  ├─ pages/            # Pages de l’application
│  │  ├─ Home.jsx
│  │  ├─ Search.jsx
│  │  ├─ Favorites.jsx
│  │  ├─ Profile.jsx
│  │  └─ styles...
│  ├─ router.jsx        # Configuration des routes
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css         # Styles globaux
├─ package.json
└─ README.md
```

---

## 📦 Fonctionnalités

### Accueil (Home)

- Présentation de l’application
- Bouton **Découvrir les espaces** redirige vers la page Recherche

### Recherche (Search)

- Barre de filtres : type d’espace, équipements, tri
- Résultats dans un conteneur scrollable
- Cartes horizontales avec image, nom, distance, prix, équipements

### Favoris (Favorites)

- Liste des lieux favoris
- Badges colorés pour chaque équipement
- Bouton **Supprimer** pour retirer un favori

### Profil (Profile)

- Formulaire pour éditer nom, email
- Section pour changer de mot de passe
- Boutons **Sauvegarder** et **Supprimer le compte**

### Modale de connexion

- Formulaire email / mot de passe
- Liens **S’inscrire** et **Mot de passe oublié ?**

---

## 🎨 Technologies

- React 19 + Vite 6
- React Router Dom 7
- CSS Modules / fichiers `.css` classiques
- Google Fonts (Montserrat, Poppins)

---

## 📐 Responsive & Accessibilité

- Layouts fluides (flexbox, media queries)
- Fond fixe via `background-attachment: fixed`
- Police lisible, contrastes respectés
- Balises sémantiques et attributs ARIA si nécessaire

---

## 📝 Licence

Ce projet est sous licence MIT.

© 2025 WorkZen Team
