import * as Font from "expo-font";

async function loadFonts() {
  await Font.loadAsync({
    LuckiestGuy: require("../assets/fonts/LuckiestGuy.ttf"),
    // Ajoutez d'autres polices si nécessaire
  });
}

export default loadFonts;
