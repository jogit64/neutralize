// ----------------------
// todo APP.tsx
// ----------------------

// * Importations de bibliothèques React et React Native
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

// * Importations des bibliothèques de navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// * Importations des bibliothèques Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./firebaseConfig";

// * Importations des composants et contextes personnalisés
import UserContext from "./UserContext";
import AppStyle from "./styles/AppStyle.js";
import RegisterScreen from "./screens/authentification/RegisterScreen";
import HomeTabs from "./navigation/HomeTabs";
//import HomeScreen from "./screens/emotion/EmotionScreen";

// * Importations liées à Expo
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// * Importations pour l'indicateur de chargement
import Spinner from "react-native-loading-spinner-overlay";
import { Ionicons } from "@expo/vector-icons";

//
// *                                                ***************************************
//
//
// ----------------------
// ! DEFINITIONS ET INITIALISATIONS
// ----------------------

// Initialisation du stack de navigation
const Stack = createStackNavigator();

//
// *                                                ***************************************
//
// ----------------------
// ! COMPOSANT écran de connexion de l'utilisateur
// ----------------------

function AppConnect({ navigation }) {
  // État local pour les informations de connexion
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Utilisation du contexte pour récupérer la fonction de mise à jour du prénom
  const { setFirstName } = useContext(UserContext);

  // Gestion de la connexion de l'utilisateur
  const handleLogin = async () => {
    try {
      setIsLoggingIn(true); // Enable the loading indicator
      const auth = getAuth();

      // Insert a delay here
      // await new Promise((resolve) => setTimeout(resolve, 15000));
      // console.log("start delay");
      // await new Promise((resolve) => setTimeout(resolve, 15000));
      // console.log("end delay");

      await signInWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;
      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      const firstName = userDocSnap.get("firstName");

      setFirstName(firstName);

      navigation.navigate("HomeTabs");
      setIsLoggingIn(false); // Désactivation de l'indicateur de chargement après la connexion
    } catch (error) {
      setIsLoggingIn(false); // Désactivation de l'indicateur de chargement en cas d'erreur
      Alert.alert("Erreur", error.message);
    }
  };

  // Images
  const backgroundImage = require("./assets/profil.png");
  const image2men = require("./assets/l2men.png");

  // Affichage du composant
  return (
    //  <ImageBackground source={backgroundImage} style={AppStyle.container}>
    <View style={AppStyle.contentContainer}>
      <Image source={image2men} style={AppStyle.image} />

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

      {isLoggingIn && (
        <Spinner
          visible={true}
          textContent={"Connexion en cours..."}
          textStyle={{ color: "#000" }}
          overlayColor="rgba(0,0,0,0.5)"
        />
      )}
    </View>
    //</ImageBackground>
  );
}

//
//
// *                                                ***************************************
//
// ----------------------
// ! COMPOSANT principal de l'application
// ----------------------

export default function App() {
  // * État local pour le prénom et l'état de préparation de l'application
  const [firstName, setFirstName] = useState("");
  const [isAppReady, setIsAppReady] = useState(false);

  const [fontsLoaded] = useFonts({
    LuckiestGuy: require("./assets/fonts/LuckiestGuy.ttf"),
    LemonLove: require("./assets/fonts/LemonLove.otf"),
  });

  // * Préparation de l'application au lancement
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

  if (!isAppReady || !fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  // * Affichage du composant
  return (
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
