import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styled";
import stock1 from "../../assets/image/stock1.png";
import stock2 from "../../assets/image/stock2.png";
import stock3 from "../../assets/image/stock3.png";
import stock4 from "../../assets/image/stock4.png";
import stock5 from "../../assets/image/stock5.png";
import stock6 from "../../assets/image/stock6.png";
import stock7 from "../../assets/image/stock7.png";
import stock8 from "../../assets/image/stock8.png";
import StockChart from "../StockChart/StockChart";

// 실시간 차트 컴포넌트 
const RealTimeChart = () => {
  const [selectedCategory, setSelectedCategory] = useState("거래량");
  const [selectedStock, setSelectedStock] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false);

  // 예시 데이터
  const stockData = [
    { rank: 1, name: "신성델타테크", price: "38,050원", change: "    +0.1%", img: stock1 },
    { rank: 2, name: "애플", price: "244,353원", change: "+0.3%", img: stock2 },
    { rank: 3, name: "테슬라", price: "283,222원", change: "-0.4%", img: stock3 },
    { rank: 4, name: "아마존", price: "186,446원", change: "+0.6%", img: stock4 },
    { rank: 5, name: "SKC", price: "94,200원", change: "  -0.7%", img: stock5 },
    { rank: 6, name: "GS건설", price: "15,200원", change: "   +2.4%", img: stock6 },
    { rank: 7, name: "현대차우", price: "107,000원", change: " -0.8%", img: stock7 },
    { rank: 8, name: "애니플러스", price: "3,825원", change: "    -5.4%", img: stock8 },
  ];

  const [heartFilled, setHeartFilled] = useState({
    1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false,
  });

  const ChartData = [
    { price: 380000 },
    { price: 480000 },
    { price: 500000 },
    { price: 270000 },
    { price: 80000 },
    { price: 48000 },
    { price: 150000 },
    { price: 380000 },
    { price: 300000 },
    { price: 200000 },
    { price: 420000 },
    { price: 550000 },
  ];

  // 실시간 차트 카테고리 탭
  const handleCategoryPress = (category) => setSelectedCategory(category);

  // 하트 클릭 시에
  const handleHeartClick = (rank) => {
    setHeartFilled((prevHeartFilled) => ({
      ...prevHeartFilled,
      [rank]: !prevHeartFilled[rank],
    }));
  };

  // 주식 목록 클릭 시에
  const handleStockItemClick = (item) => {
    setSelectedStock(item);
    setModalVisible(true);
  };

  // 모달창 닫기
  const closeModal = () => {
    setModalVisible(false);
  };

  // 실시간 차트 카테고리 탭
  const renderCategory = (category) => (
    <TouchableOpacity key={category} onPress={() => handleCategoryPress(category)}>
      <Text style={[styles.chartText, selectedCategory === category && styles.chartSelectedText]}>
        {category}
      </Text>
    </TouchableOpacity>
  );

  // 주식 목록 렌더링
  const renderStockItems = () =>
    stockData.map((item) => (
      <TouchableOpacity key={item.rank} onPress={() => handleStockItemClick(item)}>
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
            <TouchableOpacity onPress={() => handleHeartClick(item.rank)}>
              <Icon
                name={heartFilled[item.rank] ? "heart" : "heart-o"}
                size={20}
                color={heartFilled[item.rank] ? "red" : "grey"}
                style={styles.heartIcon}
              />
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
    ));

    // 모달 렌더링
    const renderModal = () => (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("모달창 닫기");
          closeModal();
        }}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.close}>닫기</Text>
            </TouchableOpacity>
            
            {/* 주식 목록 렌더링 */}
            {selectedStock && (
              <View>
                <Text style={styles.topText}>{selectedStock.name}</Text>
                <Text style={styles.topText}>{selectedStock.price}</Text>
                <StockChart data={ChartData} />
              </View>
            )}
            
          </View>
        </SafeAreaView>
      </Modal>
    )

  useEffect(() => {
    handleCategoryPress("거래량");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topText}>실시간 차트</Text>
      <View style={styles.chartBar}>{["거래량", "인기", "급상승", "급하락"].map(renderCategory)}</View>
      {renderStockItems()}
      {renderModal()}
    </SafeAreaView>
  );
};

export default RealTimeChart;
