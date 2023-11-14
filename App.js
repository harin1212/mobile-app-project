import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "../shinhan-mobile-project/scenes/Main/Main.js";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
