// ----------------------------------------------
// AjouterScreen.tsx
// ----------------------------------------------

import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AjouterScreen = () => {
  // ----------------------------------------------
  // Écran d'ajout de contenu
  // ----------------------------------------------

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inputText, setInputText] = useState(""); // Nouveau state pour le texte de l'input

  // ----------------------------------------------
  // Effet pour la sélection de catégorie
  // ----------------------------------------------

  useEffect(() => {
    console.log(selectedCategory); // Ajouter ceci pour voir la valeur de selectedCategory dans la console
  }, [selectedCategory]);

  // ----------------------------------------------
  // Fonction pour traiter l'envoi du texte
  // ----------------------------------------------

  const handleSubmit = () => {
    // Votre logique pour enregistrer l'inputText dans la selectedCategory
    console.log("Texte à enregistrer : ", inputText);
    console.log("Dans la catégorie : ", selectedCategory);
    // Réinitialiser l'inputText
    setInputText("");
  };

  return (
    <View>
      {/* ----------------------------------------------
      Titre
      ---------------------------------------------- */}
      <Text>Ajouter Screen</Text>

      {/* ----------------------------------------------
      Picker pour sélectionner la catégorie
      ---------------------------------------------- */}
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="Catégorie 1" value="cat1" />
        <Picker.Item label="Catégorie 2" value="cat2" />
        {/* Ajouter d'autres catégories ici... */}
      </Picker>

      {/* ----------------------------------------------
      TextInput pour entrer le texte
      ---------------------------------------------- */}
      <TextInput
        value={inputText}
        onChangeText={setInputText}
        maxLength={140} // Limiter à 140 caractères
        multiline={true} // Permettre plusieurs lignes de texte
        numberOfLines={4} // Limiter l'affichage à 4 lignes
        style={{ height: 100, borderColor: "gray", borderWidth: 1 }} // Ajouter un style basique
        placeholder="Tapez votre texte ici..." // Texte d'indication pour l'utilisateur
      />

      {/* ----------------------------------------------
      Bouton pour enregistrer
      ---------------------------------------------- */}
      <Button
        title="Enregistrer"
        onPress={handleSubmit} // Appeler la fonction handleSubmit quand on appuie sur le bouton
      />
    </View>
  );
};

export default AjouterScreen;
