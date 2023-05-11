import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import AppStyle from "../AppStyle";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({ navigation }) => {
  //const [firstName, setFirstName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      // Enregistrer le prénom de l'utilisateur dans Firestore
      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { firstName });

      navigation.navigate("HomeScreen", { firstName });
    } catch (error) {
      Alert.alert("Erreur", error.message);
    }
  };

  return (
    <View style={AppStyle.container}>
      <Image source={require("../assets/profil.png")} style={AppStyle.logo} />
      <Text style={AppStyle.title}>Inscrivez-vous</Text>

      <TextInput
        style={AppStyle.textInput}
        placeholder="Prénom"
        placeholderTextColor="#aaa"
        autoCapitalize="words"
        onChangeText={(text) => setFirstName(text)}
      />

      <TextInput
        style={AppStyle.textInput}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={AppStyle.textInput}
        placeholder="Mot de passe"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={AppStyle.button} onPress={handleRegister}>
        <Text style={AppStyle.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
