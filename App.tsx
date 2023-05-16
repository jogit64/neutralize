// ----------------------------------------------
// Imports
// ----------------------------------------------

// Imports de React
import React, { useState, useContext } from "react"; // Ajoutez useContext ici

// Imports du contexte
import UserContext from "./UserContext";

// Imports pour la navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Imports pour Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// import { StatusBar } from "expo-status-bar";

// Imports pour l'affichage
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from "react-native";

// Import pour le style de l'application
import AppStyle from "./styles/AppStyle.js";

// Import des composants d'écran de l'application
import RegisterScreen from "./screens/authentification/RegisterScreen";
import HomeScreen from "./screens/emotion/EmotionScreen";

import HomeTabs from "./navigation/HomeTabs";

// Import du fichier de configuration Firebase
import "./firebaseConfig";

// ----------------------------------------------
// Composant principal de l'application
// ----------------------------------------------

// Import de la fonction createStackNavigator depuis la bibliothèque de navigation
const Stack = createStackNavigator();

function AppConnect({ navigation }) {
  // ----------------------------------------------
  // Écran d'accueil de l'application
  // ----------------------------------------------

  // Définition des états pour l'adresse email et le mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Importer le setter pour le prénom depuis le contexte
  const { setFirstName } = useContext(UserContext);

  // Fonction qui gère le processus de connexion de l'utilisateur
  const handleLogin = async () => {
    try {
      // Récupérer l'instance d'authentification de Firebase
      const auth = getAuth();

      // Connexion de l'utilisateur avec son email et son mot de passe
      await signInWithEmailAndPassword(auth, email, password);

      // Récupérer le prénom de l'utilisateur à partir de Firestore
      const user = auth.currentUser;
      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      const firstName = userDocSnap.get("firstName");

      // Mettre à jour le prénom de l'utilisateur dans le contexte
      setFirstName(firstName);

      // Naviguer vers l'écran HomeTabs
      navigation.navigate("HomeTabs");
    } catch (error) {
      Alert.alert("Erreur", error.message);
    }
  };

  const backgroundImage = require("./assets/profil.png");
  return (
    <ImageBackground source={backgroundImage} style={AppStyle.container}>
      <View style={AppStyle.contentContainer}>
        {/* Titre de l'application */}
        <Text style={AppStyle.title}>N·E·U·T·R·A·L·I·Z·E</Text>

        {/* Logo de profil */}
        {/* <Image source={require("./assets/profil.png")} style={AppStyle.logo} /> */}

        {/* Formulaire de connexion de l'utilisateur */}
        <TextInput
          style={AppStyle.textInput}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={AppStyle.textInput}
          placeholder="Mot de passe"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={AppStyle.button} onPress={handleLogin}>
          <Text style={AppStyle.buttonText}>Se connecter</Text>
        </TouchableOpacity>

        {/* Conteneur pour le bouton d'inscription */}
        <View style={AppStyle.buttonLinkContainer}>
          <TouchableOpacity
            style={AppStyle.buttonLink}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={AppStyle.textLink}>Créer un compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default function App() {
  const [firstName, setFirstName] = useState("");

  // Définir le style de la barre de statut
  // StatusBar.setBackgroundColor("black");

  return (
    // Conteneur principal de l'application
    <UserContext.Provider value={{ firstName, setFirstName }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AppConnect" component={AppConnect} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

// ----------------------
// Fonction du fichier :
// ----------------------
// - Met en place un écran de connexion et d'accueil.
// - Gère la navigation entre différents écrans (connexion, inscription, onglets d'accueil).
// - Utilise un contexte utilisateur pour stocker le prénom de l'utilisateur.

// ----------------------
// Détails :
// ----------------------
// Écran de connexion et d'accueil (composant AppConnect):
// - Gère le processus de connexion de l'utilisateur avec Firebase.
// - Affiche un fond d'écran d'image et un formulaire de connexion.
// - Utilise des composants React Native tels que View, Text, TextInput, TouchableOpacity pour l'interface utilisateur.

// Configuration de la navigation (composant App):
// - Configure la navigation en utilisant la bibliothèque de navigation.
// - Utilise le composant NavigationContainer comme conteneur principal.
// - Utilise le composant createStackNavigator pour créer une pile de navigation.
// - Définit les écrans : AppConnect, RegisterScreen et HomeTabs.

// Contexte utilisateur (fichier UserContext.js):
// - Définit un contexte appelé UserContext.
// - Fournit une valeur firstName et une fonction setFirstName pour stocker et mettre à jour le prénom de l'utilisateur.
