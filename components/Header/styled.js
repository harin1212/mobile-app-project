// styled.js

import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
  container: {
    height: "11%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    width: "30%",
    fontWeight: "900",
    color: "black", // 헤더 타이틀 색상
  },
  index: {
    fontSize: 15,
    marginTop: 5,
    width: "70%",
    color: "purple", // 코스닥, 코스피 글자색
  },
  word: {
    color: "black", // '코스닥', '코스피' 글자색
  },
  number: {
    color: "#AFC048", // 숫자 글자색
  },
});

export default HeaderStyles;
