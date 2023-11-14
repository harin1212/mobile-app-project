// styled.js

import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#3498db", // 헤더 배경색
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", // 헤더 타이틀 색상
  },
  index: {
    fontSize: 16,
    color: "#fff", // 지수 텍스트 색상
  },
});

export default HeaderStyles;
