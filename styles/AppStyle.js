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
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "flex-start",
  // },

  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1b73b3",
  },

  // content: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  image: {
    width: 100,
    height: 250,
    marginTop: 30,
    marginBottom: 40,
  },

  // * INPUT : email, mot de pass
  textInput: {
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 15,
    ...sharedStyles,
  },

  // * BOUTON : se connecter
  // Bouton se connecter
  button: {
    backgroundColor: "#fff",

    paddingVertical: 10,
    marginBottom: 20,
    ...sharedStyles,
  },
  // Texte du bouton se connecter
  buttonText: {
    color: "#1b73b3",
    fontSize: 16,
    textAlign: "center",
  },

  // * BOUTON : créer un compte
  // Container View
  buttonLinkContainer: {
    //position: "absolute",
    //bottom: 0,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },

  // Bouton dans le TouchableOpacity
  buttonLink: {
    paddingVertical: 10,
    //    backgroundColor: "white",
    marginBottom: 45,
    ...sharedStyles,
  },

  // Texte du bouton créer un compte
  textLink: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },

  // Logo de l'utilisateur
  // logo: {
  //   width: 100,
  //   height: 100,
  //   resizeMode: "contain",
  //   marginBottom: 30,
  // },

  // spinnerOverlay: {
  //   backgroundColor: "#1b73b3",
  //   color: "black",
  // },
});

export default AppStyle;
