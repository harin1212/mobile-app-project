import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import styles from "./styled.js";
import stock1 from "../../assets/image/stock1.png";
import stock2 from "../../assets/image/stock2.png";
import stock3 from "../../assets/image/stock3.png";
import stock4 from "../../assets/image/stock4.png";
import stock5 from "../../assets/image/stock5.png";
import stock6 from "../../assets/image/stock6.png";
import stock7 from "../../assets/image/stock7.png";
import stock8 from "../../assets/image/stock8.png";
import heart from "../../assets/image/heart.png";

const RealTimeChart = () => {
  const [selectedCategory, setSelectedCategory] = useState("거래량");
  const stockData = [
    { rank: 1, name: "신성델타테크", price: "38,050원", change: "    +0.1%", img: stock1 },
    { rank: 2, name: "애플", price: "244,353원", change: "+0.3%", img: stock2 },
    { rank: 3, name: "테슬라", price: "283,222원", change: "-0.4%", img: stock3 },
    { rank: 4, name: "아마존", price: "186,446원", change: " +0.6%", img: stock4 },
    { rank: 5, name: "SKC", price: "94,200원", change: "   -0.7%", img: stock5 },
    { rank: 6, name: "GS건설", price: "15,200원", change: "   +2.4%", img: stock6 },
    { rank: 7, name: "현대차우", price: "107,000원", change: " -0.8%", img: stock7 },
    { rank: 8, name: "애니플러스", price: "3,825원", change: "    -5.4%", img: stock8 },
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const renderCategory = (category) => (
    <TouchableOpacity key={category} onPress={() => handleCategoryPress(category)}>
      <Text style={[styles.chartText, selectedCategory === category && styles.chartSelectedText]}>
        {category}
      </Text>
    </TouchableOpacity>
  );

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
      <View style={styles.chartBar}>{["거래량", "인기", "급상승", "급하락"].map(renderCategory)}</View>
      {renderStockItems()}
    </SafeAreaView>
  );
};



export default RealTimeChart;
