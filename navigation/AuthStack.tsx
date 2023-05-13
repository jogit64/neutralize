import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from "./HomeTabs";
import ConnectScreen from "../screens/authentification/ConnectScreen";
import RegisterScreen from "../screens/authentification/RegisterScreen";

// Création du Stack Navigator
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Connexion" component={ConnectScreen} />
      <Stack.Screen name="Inscription" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
}
