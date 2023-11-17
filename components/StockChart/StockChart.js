import React from "react";
import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

const StockChart = ({ data }) => {
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    decimalPlaces: 0,
    formatYLabel: (value) => value.toFixed(0),
    fillShadowGradient: "#FFBE00", 
  };

  const chartData = [
    {
      data: data.map((item) => parseInt(item.price)),
    },
  ];

  return (
    <View>
      <Text style={{ 
        textAlign: "center", 
        marginTop: 20, 
        padding: 10, 
        color: '#74736C', 
        fontWeight: 'bold',}}>차트</Text>
      <LineChart
        data={{ datasets: chartData }}
        width={310}
        height={280}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

export default StockChart;
