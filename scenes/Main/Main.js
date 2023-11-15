import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header/Header.js";
import Bar from "../../components/Bar/Bar.js";
import RealTimeChart from "../../components/RealTimeChart/RealTimeChart.js";
import TopMenu from "../../components/TopMenu/TopMenu.js";
import StockIndex from "../../components/StockIndex/StockIndex.js";
import Interested from "../../components/Interested/interested.js";
function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <TopMenu />
      <StockIndex />
      <Interested />
      <RealTimeChart />
      <Bar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 10, // 여기에 원하는 간격을 설정 (10vw에 해당하는 값)
    alignItems: "center",
  },
});

export default Main;
