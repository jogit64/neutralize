// ----------------------------------------------
// RegisterScreen.tsx
// ----------------------------------------------

import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import AppStyle from "../../styles/AppStyle";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import UserContext from "../../UserContext";

interface RegisterScreenProps {
  navigation: any;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  // ----------------------------------------------
  // Écran d'inscription de l'application
  // ----------------------------------------------

  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setFirstName: setFirstNameInContext } = useContext(UserContext);

  const handleRegister = async (): Promise<void> => {
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

      // Mettre à jour le prénom dans le contexte
      setFirstNameInContext(firstName);

      // Navigation vers 'HomeTabs'
      navigation.navigate("HomeTabs");
    } catch (error: any) {
      Alert.alert("Erreur", error.message);
    }
  };

  return (
    <View style={AppStyle.container}>
      {/* Logo de profil */}
      <Image
        source={require("../../assets/profil.png")}
        style={AppStyle.logo}
      />
      {/* Titre */}
      <Text style={AppStyle.title}>Inscrivez-vous</Text>

      {/* Champ de saisie du prénom */}
      <TextInput
        style={AppStyle.textInput}
        placeholder="Prénom"
        placeholderTextColor="#aaa"
        autoCapitalize="words"
        onChangeText={(text) => setFirstName(text)}
      />

      {/* Champ de saisie de l'email */}
      <TextInput
        style={AppStyle.textInput}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      {/* Champ de saisie du mot de passe */}
      <TextInput
        style={AppStyle.textInput}
        placeholder="Mot de passe"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      {/* Bouton d'inscription */}
      <TouchableOpacity style={AppStyle.button} onPress={handleRegister}>
        <Text style={AppStyle.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
