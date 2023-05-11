//ConnectScreen

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AppStyle from "../AppStyle.js";

import { getFirestore, doc, getDoc } from "firebase/firestore";

const ConnectScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    git;
    try {
      const auth = getAuth();
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
    <View style={AppStyle.container}>
      <Image source={require("../assets/profil.png")} style={AppStyle.logo} />
      <Text style={AppStyle.title}>Connectez-vous</Text>
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
    </View>
  );
};

export default ConnectScreen;
