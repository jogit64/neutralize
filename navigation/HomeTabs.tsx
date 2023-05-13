import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import AjouterScreen from "../screens/ajouter/AjouterScreen";
import SoiScreen from "../screens/soi/SoiScreen";

// Création du Tab Navigator
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ajouter" component={AjouterScreen} />
      <Tab.Screen name="Le Soi" component={SoiScreen} />
    </Tab.Navigator>
  );
}
