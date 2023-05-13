// RegistrerScreen.tsx
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

      navigation.navigate("HomeScreen", { firstName });
    } catch (error: any) {
      Alert.alert("Erreur", error.message);
    }
  };

  return (
    <View style={AppStyle.container}>
      <Image
        source={require("../../assets/profil.png")}
        style={AppStyle.logo}
      />
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
