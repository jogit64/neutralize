import { StyleSheet } from "react-native";

const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  sstitle: {
    color: "black",
    fontSize: 18,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4d4dff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    width: "60%",
    marginBottom: 20,
  },

  buttonDeconnect: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    width: "60%",
    marginUp: 100,
  },

  textInput: {
    height: 40,
    backgroundColor: "#3a3a3a",
    paddingHorizontal: 15,
    borderRadius: 5,
    width: "60%",
    marginBottom: 20,
    color: "#f5f5f5",
    fontSize: 16,
    fontWeight: "400",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonDeconnectText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 30,
  },
});

export default AppStyle;
