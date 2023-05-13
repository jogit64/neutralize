//HomeTabs

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import OtherHomeScreen from "../screens/home/OtherHomeScreen";
import AjouterScreen from "../screens/ajouter/AjouterScreen";
import OtherAjouterScreen from "../screens/ajouter/OtherAjouterScreen";
import SoiScreen from "../screens/soi/SoiScreen";
import OtherSoiScreen from "../screens/soi/OtherSoiScreen";

// Importation des icônes
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

// Création du Tab Navigator
const Tab = createBottomTabNavigator();

// Création des Stacks Navigator
const HomeStack = createStackNavigator();
const AjouterStack = createStackNavigator();
const SoiStack = createStackNavigator();

// Écrans de la pile Home
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <HomeStack.Screen name="OtherHomeScreen" component={OtherHomeScreen} /> */}
    </HomeStack.Navigator>
  );
}

// Écrans de la pile Ajouter
function AjouterStackScreen() {
  return (
    <AjouterStack.Navigator>
      <AjouterStack.Screen name="AjouterScreen" component={AjouterScreen} />
      {/* <AjouterStack.Screen
        name="OtherAjouterScreen"
        component={OtherAjouterScreen}
      /> */}
    </AjouterStack.Navigator>
  );
}

// Écrans de la pile Soi
function SoiStackScreen() {
  return (
    <SoiStack.Navigator>
      <SoiStack.Screen name="SoiScreen" component={SoiScreen} />
      {/* <SoiStack.Screen name="OtherSoiScreen" component={OtherSoiScreen} /> */}
    </SoiStack.Navigator>
  );
}

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === "Ajouter") {
            return <Entypo name="add-to-list" size={size} color={color} />;
          } else if (route.name === "Le Soi") {
            return (
              <MaterialCommunityIcons
                name="meditation"
                size={size}
                color={color}
              />
            );
          }
          // Vous pouvez retourner un autre composant d'icône par défaut ici si vous en avez un
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Ajouter" component={AjouterStackScreen} />
      <Tab.Screen name="Le Soi" component={SoiStackScreen} />
    </Tab.Navigator>
  );
}
