// Imports de React
import React, { useState } from "react";

// Imports pour la navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Imports pour Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Imports pour l'affichage
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

// Import pour le style de l'application
import AppStyle from "./AppStyle.js";

// Import des composants d'écran de l'application
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ConnectScreen from "./screens/ConnectScreen"; // Import du composant ConnectScreen

// Import du fichier de configuration Firebase
import "./firebaseConfig";
// Import de la fonction createStackNavigator depuis la bibliothèque de navigation
const Stack = createStackNavigator();

// Composant qui définit le contenu de l'écran d'accueil de l'application
function AppContent({ navigation }) {
  // Définition des états pour l'adresse email et le mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      // Naviguer vers l'écran HomeScreen avec le prénom de l'utilisateur
      navigation.navigate("HomeScreen", { firstName });
    } catch (error) {
      Alert.alert("Erreur", error.message);
    }
  };

  return (
    // Conteneur principal du contenu de l'application
    <View style={AppStyle.container}>
      {/* Titre de l'application */}
      <Text style={AppStyle.title}>N·E·U·T·R·A·L·I·Z·E</Text>

      {/* Logo de profil */}
      <Image source={require("./assets/profil.png")} style={AppStyle.logo} />

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

      {/* Bouton pour accéder à l'écran d'inscription */}
      <TouchableOpacity
        style={AppStyle.button}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={AppStyle.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

// Composant principal de l'application
export default function App() {
  return (
    // Conteneur principal de la navigation
    <NavigationContainer>
      {/* Définition de la pile de navigation */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Définition de l'écran d'accueil */}
        <Stack.Screen name="Home" component={AppContent} />
        {/* Définition des autres écrans de l'application */}
        {/* <Stack.Screen name="ConnectScreen" component={ConnectScreen} /> */}
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
