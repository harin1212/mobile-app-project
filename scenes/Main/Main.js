import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header/index.js";
import Bar from "../../components/Bar/Bar.js";

function Main() {
  return (
    <View style={styles.container}>
      <Header />
      {/* 다른 컴포넌트들 */}
      <Bar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "90%",
    width: "100%",
    paddingTop: 10, // 여기에 원하는 간격을 설정 (10vw에 해당하는 값)
    backgroundColor: "#white",
    alignItems: "center",
  },
});

export default Main;
