// ----------------------
// IMPORTATIONS
// ----------------------

// Importations de bibliothèques React et React Native
import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from "react-native";

// Importations des bibliothèques de navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importations des bibliothèques Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Importations des composants et contextes personnalisés
import UserContext from "./UserContext";
import AppStyle from "./styles/AppStyle.js";
import RegisterScreen from "./screens/authentification/RegisterScreen";
import HomeScreen from "./screens/emotion/EmotionScreen";
import HomeTabs from "./navigation/HomeTabs";

// Importations liées à Expo
import * as SplashScreen from "expo-splash-screen";

// Importations des hooks et configurations personnalisées
// import loadFonts from "./hooks/loadFonts.js";
import { useFonts } from "expo-font";

import "./firebaseConfig";

// ----------------------
// DEFINITIONS ET INITIALISATIONS
// ----------------------

// Initialisation du stack de navigation
const Stack = createStackNavigator();

// ----------------------
// COMPOSANTS
// ----------------------

// Composant pour la connexion de l'utilisateur
function AppConnect({ navigation }) {
  // État local pour les informations de connexion
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Utilisation du contexte pour récupérer la fonction de mise à jour du prénom
  const { setFirstName } = useContext(UserContext);

  // Gestion de la connexion de l'utilisateur
  const handleLogin = async () => {
    try {
      const auth = getAuth();

      await signInWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;
      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      const firstName = userDocSnap.get("firstName");

      setFirstName(firstName);

      navigation.navigate("HomeTabs");
    } catch (error) {
      Alert.alert("Erreur", error.message);
    }
  };

  // Image en arrière-plan
  const backgroundImage = require("./assets/profil.png");

  // Affichage du composant
  return (
    <ImageBackground source={backgroundImage} style={AppStyle.container}>
      <View style={AppStyle.contentContainer}>
        <Text style={AppStyle.title}>THE·GOOD·PLACE</Text>
        <Text> ✨ * . * . * ✨ . ✨ * * ✨ .</Text>
        <Text> ✨ * . * . * ✨ . ✨ * * ✨ .</Text>
        <Text> ✨ * . * . * ✨ . ✨ * * ✨ .</Text>

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

// Composant principal de l'application
export default function App() {
  // État local pour le prénom et l'état de préparation de l'application
  const [firstName, setFirstName] = useState("");
  const [isAppReady, setIsAppReady] = useState(false);
  const [fontsLoaded] = useFonts({
    LuckiestGuy: require("./assets/fonts/LuckiestGuy.ttf"),
    LemonLove: require("./assets/fonts/LemonLove.otf"),
  });

  // Préparation de l'application au lancement
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);

        // SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  // Si l'application n'est pas prête, ne rien afficher
  // if (!isAppReady || !fontsLoaded) {
  //   return undefined;
  // } else {
  //   SplashScreen.hideAsync();
  // }
  if (!isAppReady) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  // Affichage du composant
  return (
    // <View style={AppStyle.container}>
    //   <Text style={{ fontFamily: "LemonLove", fontSize: 30 }}>
    //     LemonLove font
    //   </Text>
    //   <Text>Defautl font</Text>
    //   {/* <statusbar style="auto" /> */}
    // </View>

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
