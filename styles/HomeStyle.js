// ----------------------------------------------
// HomeStyle.js
// ----------------------------------------------

import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4D8E2",
    alignItems: "center",
    justifyContent: "center",
  },

  // Titre principal de l'application
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  // Sous-titre principal de l'application
  sstitle: {
    color: "black",
    fontSize: 18,
    marginBottom: 20,
  },

  // ----------------------------------------------
  // Barre de statut haut
  // ----------------------------------------------

  // La barre de statut conteneur
  statusBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 5,
  },

  // La barre de statut haut côté gauche
  statusBarG: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start", // Aligner les éléments horizontalement
    padding: 8,
  },

  // La barre de statut haut côté droit
  statusBarD: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    padding: 8,
  },

  // statusBarD > TouchableOpacity
  userContainer: {
    flexDirection: "row", // Aligner les éléments sur la même ligne
    alignItems: "center", // Aligner les éléments verticalement
    justifyContent: "center", // Aligner les éléments horizontalement
  },

  // statusBarD > TouchableOpacity > Text
  userName: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 5,
  },

  // ----------------------------------------------
  // Popup modal de déconnexion
  // ----------------------------------------------
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#F5F5F5",
    padding: 35,
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#E0E0E0",
  },
  modalButtonNo: {
    backgroundColor: "#BDBDBD",
  },
  modalButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalButtonNoText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  // ----------------------------------------------
  // Barre de nav bas
  // ----------------------------------------------

  tabBar: {
    display: "flex",
  },
  tabBarActiveTintColor: {
    color: "black",
  },
  tabBarInactiveTintColor: {
    color: "gray",
  },
  tabBarStyle: [
    {
      display: "flex",
      backgroundColor: "#ffffff",
    },
    null,
  ],
});

export default HomeStyle;

// ----------------------------------------------
// HomeStyle.js
// ----------------------------------------------

// Fonction du fichier :
// - Définit les styles utilisés dans l'écran d'accueil.

// Détails :
// - Utilise le module StyleSheet de React Native pour créer les styles.
// - Définit les styles pour le conteneur principal, le titre, le sous-titre, les boutons, les champs de texte, les liens, le logo, la barre de statut, la modal, etc.
// - Utilise des styles partagés pour certains éléments.
// - Exporte les styles pour être utilisés dans d'autres composants.
