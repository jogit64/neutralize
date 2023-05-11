import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import AppStyle from "../AppStyle";

const HomeScreen = ({ navigation, route }) => {
  const { firstName } = route.params;

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return (
    <View style={AppStyle.container}>
      <Image source={require("../assets/profil.png")} style={AppStyle.logo} />
      <Text style={AppStyle.title}>Bonjour, {firstName} !</Text>
      <Text style={AppStyle.sstitle}>Que souhaitez-vous faire ?</Text>

      <TouchableOpacity
        style={AppStyle.button}
        onPress={() => console.log("Enregistrer des souvenirs")}
      >
        <Text style={AppStyle.buttonText}>Enregistrer des souvenirs</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={AppStyle.button}
        onPress={() => console.log("Tirer au sort des souvenirs")}
      >
        <Text style={AppStyle.buttonText}>Tirer au sort des souvenirs</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={AppStyle.buttonDeconnect}
        onPress={handleSignOut}
      >
        <Text style={AppStyle.buttonDeconnectText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
