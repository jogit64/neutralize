// ----------------------------------------------
// AppStyle.js
// ----------------------------------------------

const sharedStyles = {
  borderRadius: 5,
  paddingHorizontal: 15,
  width: 250,
};
import { StyleSheet } from "react-native";

const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  content: {
    backgroundColor: "#192f35",
    alignItems: "center",
    justifyContent: "center",
  },

  // Titre principal de l'application
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 42,
    marginBottom: 40,
    backgroundColor: "#192f35",
    fontFamily: "LuckiestGuy",
    fontSize: 24,
  },
  // Bouton de connexion et de déconnexion
  button: {
    backgroundColor: "#4d4dff",
    paddingVertical: 10,
    marginBottom: 20,
    ...sharedStyles,
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

  // Bouton pour le lien de création de compte
  buttonLinkContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },

  // Bouton pour le lien de création de compte
  buttonLink: {
    paddingVertical: 10,
    backgroundColor: "white",
    marginBottom: 45,
    ...sharedStyles,
  },

  // Texte pour le lien de création de compte
  textLink: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },

  // Logo de l'utilisateur
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 30,
  },
});

export default AppStyle;
