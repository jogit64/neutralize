// ----------------------------------------------
// EmotionScreen.tsx
// ----------------------------------------------

import React, { useContext } from "react"; // Importer useContext
import { View, Text, TouchableOpacity, Image } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import HomeStyle from "../../styles/HomeStyle";
import UserContext from "../../UserContext"; // Importer UserContext
import { SafeAreaView } from "react-native-safe-area-context";

const EmotionScreen = ({ navigation }) => {
  // ----------------------------------------------
  // Écran d'émotion de l'application
  // ----------------------------------------------

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
        {/* ----------------------------------------------
        Logo de profil
        ---------------------------------------------- */}
        {/* <Image
          source={require("../../assets/profil.png")}
          style={HomeStyle.logo}
        /> */}

        {/* ----------------------------------------------
        Titre
        ---------------------------------------------- */}
        <Text style={HomeStyle.title}>Bonjour, {firstName} !</Text>

        {/* ----------------------------------------------
        Sous-titre
        ---------------------------------------------- */}
        <Text style={HomeStyle.sstitle}>Que souhaitez-vous faire ?</Text>

        {/* ----------------------------------------------
        Bouton pour l'action "Memory"
        ---------------------------------------------- */}
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

// ----------------------------------------------
// EmotionScreen.tsx
// ----------------------------------------------

// Fonction du fichier :
// - Affiche l'écran d'émotion de l'application.
// - Utilise le contexte utilisateur pour afficher le prénom de l'utilisateur.
// - Gère la déconnexion de l'utilisateur.

// Détails :
// - Utilise les composants React Native tels que View, Text, TouchableOpacity, Image pour l'interface utilisateur.
// - Importe le contexte utilisateur depuis UserContext.
// - Utilise le hook useContext pour accéder aux valeurs du contexte.
// - Définit une fonction handleSignOut pour gérer la déconnexion de l'utilisateur.
// - Exporte le composant par défaut pour être utilisé dans d'autres composants.
