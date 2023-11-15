import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import stock1 from "../../assets/image/stock1.png";
import stock2 from "../../assets/image/stock2.png";
import stock3 from "../../assets/image/stock3.png";
import heart from "../../assets/image/heart.png";

const RealTimeChart = () => {
  const [selectedCategory, setSelectedCategory] = useState("거래량");
  const stockData = [
    { rank: 1, name: "삼성전자", price: "38,050원", change: "   +0.1%", img: stock1 },
    { rank: 2, name: "애플", price: "244,353원", change: "+0.3%", img: stock2 },
    { rank: 3, name: "테슬라", price: "283,222원", change: "-0.4%", img: stock3 },
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  // 실시간 차트 탭
  const renderCategory = (category) => (
    <TouchableOpacity key={category} onPress={() => handleCategoryPress(category)}>
      <Text style={[styles.chartText, selectedCategory === category && styles.chartSelectedText]}>
        {category}
      </Text>
    </TouchableOpacity>
  );

  // 주식 목록
  const renderStockItems = () => {
    return stockData.map((item) => (
      <View key={item.rank} style={styles.stockItem}>
        <Text style={styles.rank}>{item.rank}</Text>
        <Image source={item.img} style={styles.stockImg} />
        <View style={styles.textContainer}>
          <Text style={styles.stockName}>{item.name}</Text>
          <View style={styles.priceChangeContainer}>
            <Text style={styles.stockPrice}>{item.price}</Text>
            <Text style={[styles.stockChange, { color: item.change.includes('+') ? 'red' : 'blue' }]}>
              {item.change}
            </Text>
          </View>
        </View>
        <Image source={heart} style={styles.heartImg} />
      </View>
    ));
  };

  useEffect(() => {
    handleCategoryPress("거래량");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topText}>실시간 차트</Text>
      <View style={styles.chartBar}>
        {["거래량", "인기", "급상승", "급하락"].map(renderCategory)}
      </View>
      {renderStockItems()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5
  },
  // 실시간 차트 탭
  chartBar: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  chartText: {
    fontSize: 15,
    color: "grey",
    padding: 20,
  },
  chartSelectedText: {
    fontWeight: "bold", 
    color: "black", 
  },
  // 주식 목록
  stockItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  rank: {
    fontSize: 16,
    marginRight: 10,
  },
  stockImg: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  heartImg: {
    width: 20,
    height: 20,
  },
  textContainer: {
    flex: 1,
  },
  stockName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceChangeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stockPrice: {
    fontSize: 12,
    marginRight: 5,
    marginTop: 5,
  },
  stockChange: {
    fontSize: 10,
    marginLeft: 70,
  },
});

export default RealTimeChart;
