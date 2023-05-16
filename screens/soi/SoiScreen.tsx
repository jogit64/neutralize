// SoiScreen.tsx

import React from "react";
import { ScrollView, View, FlatList, Text } from "react-native";
import HomeStyle from "../../styles/HomeStyle";

const SoiScreen = () => {
  const horizontalData = [
    { id: 1, title: "Lopem 1" },
    { id: 2, title: "Lopem 2" },
    { id: 3, title: "Lopem 3" },
  ];

  return (
    <View style={HomeStyle.container}>
      <ScrollView>
        <View>
          <Text>Content of vertical scroll...</Text>
        </View>
        <FlatList
          data={horizontalData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={({ item }) => (
            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: "gray",
                margin: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 80,
                }}
              >
                {item.title}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default SoiScreen;
