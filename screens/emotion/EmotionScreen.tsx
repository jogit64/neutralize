//EmotionScreen.tsx

import React, { useContext } from "react"; // Importer useContext
import { View, Text, TouchableOpacity, Image } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import HomeStyle from "../../styles/HomeStyle";
import UserContext from "../../UserContext"; // Importer UserContext
import { SafeAreaView } from "react-native-safe-area-context";

const EmotionScreen = ({ navigation }) => {
  // Supprimer route des props
  const { firstName } = useContext(UserContext); // Utiliser le contexte pour obtenir firstName

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
      </View>
    </SafeAreaView>
  );
};

export default EmotionScreen;
