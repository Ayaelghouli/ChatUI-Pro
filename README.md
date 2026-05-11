# 🏥 ChatUI-Pro — ARIA Medical Assistant

> Projet de Synthèse | Module : Développer un chatbot avec React  
> **Étudiante :** Aya El Ghouli

---

## 📖 Description du projet

**ChatUI-Pro** est une interface conversationnelle médicale développée dans le cadre du module React. Elle simule le tableau de bord interne de la clinique fictive **NeoCare Medical Hub**, située en 2031.

L'assistant **ARIA** (Automated Response Intelligence Assistant) permet aux agents médicaux d'envoyer des messages et de recevoir des réponses simulées intelligentes, sans aucun appel à une API externe.

---

## 🚀 Installation et lancement

### Prérequis
- Node.js v18+
- npm

### Étapes

```bash
# 1. Cloner ou extraire le projet
cd chatui-pro

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur : **http://localhost:5173**

---

## 🗂️ Structure du projet

```
src/
├── components/
│   └── Navbar.jsx          # Barre de navigation réutilisable
├── pages/
│   ├── Dashboard.jsx       # Page d'accueil avec statistiques
│   ├── Chat.jsx            # Interface de conversation ARIA
│   ├── Settings.jsx        # Paramètres utilisateur
│   └── NotFound.jsx        # Page 404
├── store/
│   ├── store.js            # Configuration Redux store
│   └── slices/
│       ├── messagesSlice.js  # Historique des messages
│       ├── userSlice.js      # Profil agent (nom, avatar)
│       └── settingsSlice.js  # Préférences (thème)
├── data/
│   └── responses.json      # Réponses simulées d'ARIA
├── App.jsx                 # Router principal
└── main.jsx                # Point d'entrée
```

---

## ⚙️ Choix techniques

### Stack utilisée
| Technologie | Version | Rôle |
|---|---|---|
| React | 18+ | UI - composants fonctionnels uniquement |
| Vite | 5+ | Bundler rapide pour le dev |
| Redux Toolkit | 2+ | Gestion d'état global |
| React Router v7 | 7+ | Navigation entre les vues |

### Redux — 3 slices

- **messagesSlice** : stocke la liste complète des messages (agent + ARIA), avec actions `addMessage` et `clearMessages`
- **userSlice** : profil de l'agent connecté (nom affiché, avatar emoji), modifiable depuis les paramètres
- **settingsSlice** : préférences utilisateur (mode sombre/clair) avec `toggleDarkMode`

### Réponses intelligentes

Le fichier `responses.json` contient 22 réponses organisées par catégories (greeting, symptoms, appointment, emergency...) avec un système de **triggers** : ARIA analyse le message de l'agent et retourne la réponse la plus adaptée. Si aucun trigger ne correspond, une réponse par défaut est sélectionnée aléatoirement.

### Mode sombre

Géré via des **CSS variables** (`--bg`, `--card`, `--primary`...) et une classe `.dark` appliquée dynamiquement sur le `body` via `useEffect` dans `App.jsx`.

---

## 🎯 Fonctionnalités

- ✅ Chat avec bulles différenciées (agent vs ARIA)
- ✅ Indicateur de frappe animé *"ARIA est en train d'écrire..."*
- ✅ Délai simulé entre 1000ms et 2500ms
- ✅ Horodatage de chaque message
- ✅ Historique persistant entre les vues (Redux)
- ✅ Bouton reset conversation
- ✅ Modification du nom et avatar depuis les paramètres
- ✅ Mode sombre / clair
- ✅ Design responsive (mobile & desktop)
- ✅ Page 404 personnalisée
- ✅ Scroll automatique vers le dernier message

---

## 👩‍💻 Auteure

**Aya El Ghouli**  
Module : Développer un chatbot avec React