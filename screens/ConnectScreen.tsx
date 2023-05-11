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

type ConnectScreenProps = {
  navigation: any;
};

const ConnectScreen = ({ navigation }: ConnectScreenProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (): Promise<void> => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);

      // Récupérer le prénom de l'utilisateur à partir de Firestore
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        const firstName: string = userDocSnap.get("firstName");

        // Naviguer vers l'écran HomeScreen avec le prénom de l'utilisateur
        navigation.navigate("HomeScreen", { firstName });
      }
      // Si l'utilisateur est null, vous pouvez gérer ce cas ici (par exemple, afficher une erreur)
      else {
        Alert.alert("Erreur", "L'utilisateur n'est pas connecté.");
      }
    } catch (error: any) {
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
        onChangeText={(text: string) => setEmail(text)}
      />
      <TextInput
        style={AppStyle.textInput}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={(text: string) => setPassword(text)}
      />
      <TouchableOpacity style={AppStyle.button} onPress={handleLogin}>
        <Text style={AppStyle.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConnectScreen;
