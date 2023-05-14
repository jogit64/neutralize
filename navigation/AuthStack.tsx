// ----------------------------------------------
// AuthStack.tsx
// ----------------------------------------------

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from "./HomeTabs";
import ConnectScreen from "../screens/authentification/ConnectScreen";
import RegisterScreen from "../screens/authentification/RegisterScreen";

// Création du Stack Navigator
const Stack = createStackNavigator();

export default function AuthStack() {
  // ----------------------------------------------
  // Stack Navigator pour l'authentification
  // ----------------------------------------------

  return (
    <Stack.Navigator>
      {/* Écran de connexion */}
      <Stack.Screen name="Connexion" component={ConnectScreen} />

      {/* Écran d'inscription */}
      <Stack.Screen name="Inscription" component={RegisterScreen} />

      {/* Écran principal après l'authentification */}
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
}
