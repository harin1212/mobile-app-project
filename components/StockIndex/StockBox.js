// StockBox.js

import React from "react";
import { View, Text, Image } from "react-native";
import GraphComponent from "./GraphComponent"; // 예시로 그래프를 그려주는 컴포넌트

const StockBox = ({ title, indexValue }) => {
  const dataPoints = [20, 40, 25, 35, 50, 30, 45];

  return (
    <View
      style={{
        backgroundColor: "#E1E0FF",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        width: "45%",
        margin: "3%",
        flexDirection: "column", // 세로 정렬
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>
          {title}
        </Text>
        {/* 이미지 추가 */}
        <Image
          source={require("../../assets/image/korea.png")}
          style={{ width: 20, height: 20, marginLeft: 5 }}
        />
      </View>
      <Text style={{ color: "black", fontWeight: "bold", fontSize: 12 }}>
        {indexValue}
      </Text>
      <GraphComponent dataPoints={dataPoints} />
    </View>
  );
};

export default StockBox;
