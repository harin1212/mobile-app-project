// ContentSwitcher.js

import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import StockBox from "./StockBox";

const ContentSwitcher = () => {
  const [selectedButton, setSelectedButton] = useState("국내");

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "국내" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("국내")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "국내" && styles.selectedButtonText,
            ]}
          >
            국내
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "해외" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("해외")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "해외" && styles.selectedButtonText,
            ]}
          >
            해외
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {selectedButton === "국내" ? (
          <View style={styles.stockBoxContainer}>
            <StockBox title="코스피" indexValue="2,405.91" />
            <StockBox title="코스닥" indexValue="777.47" />
          </View>
        ) : (
          <Text>해외 컨텐츠를 여기에 표시합니다.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "90%",
    height: "40%",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: "#9370DB",
  },
  buttonText: {
    color: "black",
  },
  selectedButtonText: {
    color: "white",
  },
  contentContainer: {
    height: "80%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center", // 자식 요소를 양쪽 끝으로 정렬
    alignItems: "center",
  },
  stockBoxContainer: {
    flexDirection: "row",
    justifyContent: "center", // 가운데 정렬 추가
    alignItems: "center", // 가운데 정렬 추가
  },
});

export default ContentSwitcher;
