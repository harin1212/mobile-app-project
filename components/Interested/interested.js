// Interested.js

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// 관심 주식 컴포넌트
const StockItem = ({ imageSource, name, price, change }) => (
  <View style={styles.stockItem}>
    <Image source={imageSource} style={styles.stockImage} />
    <View style={styles.stockInfo}>
      <Text style={styles.stockName}>{name}</Text>
      <View style={styles.priceChangeContainer}>
        <Text style={styles.stockPrice}>{price}</Text>
        <Text style={[styles.stockChange, { color: change.includes('+') ? 'red' : 'blue' }]}>{change}</Text>
      </View>
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
        imageSource={require("../../assets/image/samsung.png")}
        name="삼성전자"
        price="70,400원"
        change="   -3.10%"
      />
      <StockItem
        imageSource={require("../../assets/image/apple.png")}
        name="애플"
        price="244,353원"
        change="+2.44%"
      />
      <StockItem
        imageSource={require("../../assets/image/tesla.png")}
        name="테슬라"
        price="283,222원"
        change="-4.40%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    marginLeft: 5,
  },
  analysisText: {
    color: "gray",
    marginVertical: 10,
    marginLeft: 5,
  },
  stockItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  stockImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // 반지름이 이미지의 절반 크기
    marginRight: 10,
  },
  stockInfo: {
    flex: 1,
  },
  stockName: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
  },
  priceChangeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stockPrice: {
    fontSize: 15,
    marginTop: 5
  },
  stockChange: {
    fontSize: 13,
    marginLeft: 150,
  },
});

export default Interested;
