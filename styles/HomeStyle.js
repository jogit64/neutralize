// ----------------------------------------------
// HomeStyle.js
// ----------------------------------------------

import { StyleSheet } from "react-native";

const sharedStyles = {
  borderRadius: 5,
  paddingHorizontal: 15,
  width: "60%",
};

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#192f35",
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

  // Bouton de connexion et de déconnexion
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 50, // Augmentez le borderRadius pour un aspect plus arrondi
    width: 100, // Définissez la largeur et la hauteur pour un bouton rond
    height: 100,
    justifyContent: "center", // Centrez le texte verticalement et horizontalement
    alignItems: "center",
    elevation: 5, // Ajoutez une ombre sur Android
    shadowColor: "#000", // Ajoutez une ombre sur iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  // Bouton de déconnexion
  buttonDeconnect: {
    paddingVertical: 10,
    marginTop: 25,
    ...sharedStyles,
  },

  // Champ de texte pour l'email et le mot de passe
  textInput: {
    height: 40,
    backgroundColor: "grey",
    borderRadius: 5,
    marginBottom: 20,
    color: "#f5f5f5",
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 15,
    ...sharedStyles,
  },

  // Texte du bouton de connexion et de déconnexion
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  // Texte pour le lien de création de compte
  textLink: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
  },

  // Logo de l'utilisateur
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 30,
  },

  // La barre de statut en haut
  statusBar: {
    flexDirection: "row", // Aligner les éléments sur la même ligne
    alignItems: "center", // Aligner les éléments verticalement
    justifyContent: "center", // Aligner les éléments horizontalement
  },

  // le TouchableOpacity qui englobe la barre de statut
  userContainer: {
    flexDirection: "row", // Aligner les éléments sur la même ligne
    alignItems: "center", // Aligner les éléments verticalement
    justifyContent: "center", // Aligner les éléments horizontalement
  },

  // Le texte "Nom de l'utilisateur"
  userName: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    marginRight: 8,
  },

  // la modal
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  modalButtonYes: {
    backgroundColor: "#4CAF50",
  },
  modalButtonNo: {
    backgroundColor: "#F44336",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
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
