import { StyleSheet, Text, View } from "react-native";
import Main from "../shinhan-mobile-project/scenes/Main/Main.js";
import Bar from "./components/Bar/Bar.js";
import RealTimeChart from "./components/RealTimeChart/RealTimeChart.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#E1E0FF",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});
