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
import AppStyle from "./styles/AppStyle.js";

// Import des composants d'écran de l'application
import RegisterScreen from "./screens/authentification/RegisterScreen";
import HomeScreen from "./screens/home/HomeScreen";

import HomeTabs from "./navigation/HomeTabs";

// Import du fichier de configuration Firebase
import "./firebaseConfig";
// Import de la fonction createStackNavigator depuis la bibliothèque de navigation
const Stack = createStackNavigator();

// Composant qui définit le contenu de l'écran d'accueil de l'application
function AppContent({ navigation }) {
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
        style={AppStyle.buttonLink}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={AppStyle.textLink}>Pas encore inscrit(e) ?</Text>
      </TouchableOpacity>
    </View>
  );
}

// Composant principal de l'application
export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <UserContext.Provider value={{ firstName, setFirstName }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={AppContent} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
