// GraphComponent.js

import React from "react";
import { View, StyleSheet } from "react-native";

const GraphComponent = ({ dataPoints }) => {
  if (!dataPoints || dataPoints.length === 0) {
    return <Text>No data points</Text>;
  }

  const maxValue = Math.max(...dataPoints);

  const graphBars = dataPoints.map((value, index) => (
    <View
      key={index}
      style={{
        height: (value / maxValue) * 100 + "%",
        backgroundColor: "#00BFFF", // Example color (blue)
        width: 15,
        marginRight: 5,
      }}
    />
  ));

  return <View style={styles.graphContainer}>{graphBars}</View>;
};

const styles = StyleSheet.create({
  graphContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
  },
});

export default GraphComponent;
