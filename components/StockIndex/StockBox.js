// StockBox.js

import React from "react";
import { View, Text, Image } from "react-native";
import GraphComponent from "./GraphComponent"; // 예시로 그래프를 그려주는 컴포넌트

const StockBox = ({ title, indexValue, imgSrc, chart }) => {


  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 8,
        borderRadius: 10,
        width: "45%",
        margin: "3%",
        borderColor: "white",
        borderWidth: 2,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
          {title}
        </Text>
        <Image
          source={imgSrc}
          style={{ width: 20, height: 20, marginLeft: 5 }}
        />
      </View>
      <Text style={{ color: "black", fontWeight: "bold", fontSize: 12 }}>
        {indexValue}
      </Text>
      <GraphComponent dataPoints={chart} />
    </View>
  );
};

export default StockBox;
