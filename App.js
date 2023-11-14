import { StyleSheet, Text, View } from "react-native";
import Main from "../shinhan-mobile-project/scenes/Main/Main.js";
import Bar from "./components/Bar/Bar.js";
import RealTimeChart from "./components/RealTimeChart/RealTimeChart.js";

export default function App() {
  return (
    <View style={styles.container}>
      <RealTimeChart />
      <Bar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE9FF",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});
