// Interested.js

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// 관심 주식 컴포넌트
const StockItem = ({ imageSource, name, price, change }) => (
  <View style={styles.stockItem}>
    <Image source={imageSource} style={styles.stockImage} />
    <View style={styles.stockInfo}>
      <Text style={styles.stockName}>{name}</Text>
      <Text style={styles.stockPrice}>{price}</Text>
      <Text style={styles.stockChange}>{change}</Text>
    </View>
  </View>
);

const Interested = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>이알파님이 관심있어할</Text>
      <Text style={styles.subtitle}>우량주</Text>
      <Text style={styles.analysisText}>최근 찾아 본 주식을 분석했어요</Text>

      {/* 주식 목록 */}
      <StockItem
        imageSource={require("../../assets/image/apple.png")}
        name="종목1"
        price="$100"
        change="+5%"
      />
      <StockItem
        imageSource={require("../../assets/image/tesla.jpg")}
        name="종목2"
        price="$150"
        change="-3%"
      />
      <StockItem
        imageSource={require("../../assets/image/samsung.png")}
        name="종목3"
        price="$80"
        change="+2%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "90%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  analysisText: {
    color: "gray",
    marginVertical: 10,
  },
  stockItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  stockImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  stockInfo: {
    flex: 1,
  },
  stockName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stockPrice: {
    fontSize: 14,
  },
  stockChange: {
    fontSize: 14,
    color: "green", // 또는 'red' 등으로 동적으로 변경 가능
  },
});

export default Interested;
