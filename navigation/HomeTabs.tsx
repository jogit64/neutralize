// ----------------------------------------------
// HomeTabs
// ----------------------------------------------

import React, { useContext, useState } from "react"; // Ajout du useState ici

// Imports du contexte
import UserContext from "../UserContext";

import { View, Text, Button, TouchableOpacity, Modal } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import EmotionScreen from "../screens/emotion/EmotionScreen";
import OtherEmotionScreen from "../screens/emotion/OtherEmotionScreen";
import AjouterScreen from "../screens/ajouter/AjouterScreen";
import OtherAjouterScreen from "../screens/ajouter/OtherAjouterScreen";
import SoiScreen from "../screens/soi/SoiScreen";
import OtherSoiScreen from "../screens/soi/OtherSoiScreen";
import RegisterScreen from "../screens/authentification/RegisterScreen";

// Importation des icônes
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

// Création du Tab Navigator
const Tab = createBottomTabNavigator();

// Création des Stacks Navigator
const EmotionStack = createStackNavigator();
const AjouterStack = createStackNavigator();
const SoiStack = createStackNavigator();

// Import pour le style de l'application
import HomeStyle from "../styles/HomeStyle.js";

// ----------------------------------------------
// Écran de la pile Emotion
// ----------------------------------------------
function EmotionStackScreen() {
  const { firstName, handleSignOut } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <EmotionStack.Navigator initialRouteName="EmotionScreen">
      <EmotionStack.Screen
        name="EmotionScreen"
        component={EmotionScreen}
        options={{
          headerShown: true,
          header: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <View style={HomeStyle.statusBar}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={HomeStyle.userContainer}
                >
                  <Text style={HomeStyle.userName}>{firstName}</Text>
                  <AntDesign name="logout" size={24} color="black" />
                  <AntDesign name="user" size={26} color="black" />
                </TouchableOpacity>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
              >
                <View style={HomeStyle.modalContainer}>
                  <View style={HomeStyle.modalContent}>
                    <Text style={HomeStyle.modalTitle}>Se déconnecter ?</Text>
                    <View style={HomeStyle.modalButtonsContainer}>
                      <TouchableOpacity
                        style={[
                          HomeStyle.modalButton,
                          HomeStyle.modalButtonYes,
                        ]}
                        onPress={handleSignOut}
                      >
                        <Text style={HomeStyle.modalButtonText}>Oui</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[HomeStyle.modalButton, HomeStyle.modalButtonNo]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={HomeStyle.modalButtonText}>Non</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          ),
        }}
      />
    </EmotionStack.Navigator>
  );
}

// ----------------------------------------------
// Écran de la pile Ajouter
// ----------------------------------------------
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

// ----------------------------------------------
// Écran de la pile Soi
// ----------------------------------------------
function SoiStackScreen() {
  return (
    <SoiStack.Navigator>
      <SoiStack.Screen name="SoiScreen" component={SoiScreen} />
      {/* <SoiStack.Screen name="OtherSoiScreen" component={OtherSoiScreen} /> */}
    </SoiStack.Navigator>
  );
}

// ----------------------------------------------
// Tab Navigator : fonctionnalité react navigation
// ----------------------------------------------
export default function MyTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Urgence") {
            return (
              <MaterialCommunityIcons
                name="car-emergency"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Projets inspirants") {
            return <MaterialIcons name="wb-sunny" size={size} color={color} />;
          } else if (route.name === "Sortir de la bulle") {
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
        headerShown: false,
      })}
    >
      {/* Écrans du Tab Navigator */}
      <Tab.Screen name="Urgence" component={EmotionStackScreen} />
      <Tab.Screen name="Projets inspirants" component={AjouterStackScreen} />
      <Tab.Screen name="Sortir de la bulle" component={SoiStackScreen} />
    </Tab.Navigator>
  );
}
