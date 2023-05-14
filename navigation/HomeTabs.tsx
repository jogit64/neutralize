//HomeTabs

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
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

// Création du Tab Navigator
const Tab = createBottomTabNavigator();

// Création des Stacks Navigator
const EmotionStack = createStackNavigator();
const AjouterStack = createStackNavigator();
const SoiStack = createStackNavigator();

// Écrans de la pile Emotion
// Écrans de la pile Emotion
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
              <Text>Bonjour, {firstName} </Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <AntDesign name="user" size={24} color="black" />
              </TouchableOpacity>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      padding: 35,
                      alignItems: "center",
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 4,
                      elevation: 5,
                    }}
                  >
                    <Text>Se déconnecter ?</Text>
                    <Button title="Oui" onPress={handleSignOut} />
                    <Button
                      title="Non"
                      onPress={() => setModalVisible(!modalVisible)}
                    />
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
          if (route.name === "Emotion") {
            return <AntDesign name="heart" size={size} color={color} />;
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
        headerShown: false,
      })}
    >
      <Tab.Screen name="Emotion" component={EmotionStackScreen} />
      <Tab.Screen name="Ajouter" component={AjouterStackScreen} />
      <Tab.Screen name="Le Soi" component={SoiStackScreen} />
    </Tab.Navigator>
  );
}
