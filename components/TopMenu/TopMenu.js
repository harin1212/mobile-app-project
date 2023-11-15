import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CategoriesContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("주식");

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  // useEffect를 사용하여 초기에 "주식"이 선택되도록 설정
  useEffect(() => {
    handleCategoryPress("주식");
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.item,
          selectedCategory === "주식" && styles.selectedItem,
        ]}
        onPress={() => handleCategoryPress("주식")}
      >
        <Text
          style={[
            styles.text,
            selectedCategory === "주식" && styles.selectedText,
          ]}
        >
          주식
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.item,
          selectedCategory === "자산" && styles.selectedItem,
        ]}
        onPress={() => handleCategoryPress("자산")}
      >
        <Text
          style={[
            styles.text,
            selectedCategory === "자산" && styles.selectedText,
          ]}
        >
          자산
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.item,
          selectedCategory === "펀드" && styles.selectedItem,
        ]}
        onPress={() => handleCategoryPress("펀드")}
      >
        <Text
          style={[
            styles.text,
            selectedCategory === "펀드" && styles.selectedText,
          ]}
        >
          펀드
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  item: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: "grey", // 기본 글자색
  },
  selectedText: {
    fontWeight: "bold", // 선택된 항목의 글자를 진하게 만듭니다.
    color: "black", // 선택된 항목의 글자색
  },
  selectedItem: {
    // 선택된 항목의 추가적인 스타일
  },
});

export default CategoriesContainer;
