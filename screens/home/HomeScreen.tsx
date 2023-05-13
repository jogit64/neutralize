//HomeScreen.tsx

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import HomeStyle from "../../styles/HomeStyle";

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
    <View style={HomeStyle.container}>
      <Image
        source={require("../../assets/profil.png")}
        style={HomeStyle.logo}
      />
      <Text style={HomeStyle.title}>Bonjour, {firstName} !</Text>
      <Text style={HomeStyle.sstitle}>Que souhaitez-vous faire ?</Text>

      <TouchableOpacity
        style={HomeStyle.button}
        onPress={() => console.log("Tirer au sort des souvenirs")}
      >
        <Text style={HomeStyle.buttonText}>Memory</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={HomeStyle.buttonDeconnect}
        onPress={handleSignOut}
      >
        <Text style={HomeStyle.textLink}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
