// GraphComponent.js

import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const GraphComponent = ({ dataPoints }) => {
  if (!dataPoints || dataPoints.length === 0) {
    return <Text>No data points</Text>;
  }

  const maxValue = Math.max(...dataPoints);

  const graphPath = dataPoints
    .map((value, index) => ({
      x: (index / (dataPoints.length - 1)) * 100,
      y: (1 - value / maxValue) * 100,
    }))
    .reduce((acc, point, index) => {
      if (index === 0) {
        return `M${point.x} ${point.y}`;
      }
      return `${acc} L${point.x} ${point.y}`;
    }, "");

  return (
    <View style={styles.graphContainer}>
      <Svg style={StyleSheet.absoluteFill}>
        <Path
          d={`M0 100 ${graphPath} L100 100`}
          fill="none"
          stroke="#9370DB"
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  graphContainer: {
    marginTop: 10,
    height: "40%",
  },
});

export default GraphComponent;
