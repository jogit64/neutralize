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
    backgroundColor: "#fff",
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
});

export default HomeStyle;
